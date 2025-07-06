import { createClient, EntryFieldTypes } from "contentful";
import { TypeAstroCollectionFields, TypeAstroEntryFields, TypeFilmCollectionFields, TypeFilmEntryFields, TypePhotoCollectionFields, TypePhotoEntryFields } from "./auto";

const MAX_CACHE_AGE = 60 * 60 * 1000; 
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

export type SessionContent = {
  astroCollections: TypeAstroCollectionFields[],
  astroEntries: TypeAstroEntryFields[],
  filmCollections: TypeFilmCollectionFields[],
  filmEntries: TypeFilmEntryFields[],
  photoCollections: TypePhotoCollectionFields[],
  photoEntries: TypePhotoEntryFields[]
}

export const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export const fetchContentById = async (id: string): Promise<any> => {
  const response = await client.getEntry(id);
  return response;
}

export const fetchContent = async <T,>(contentType: string): Promise<T[]> => {
  const cached = sessionStorage.getItem(contentType);
  if (cached) {
    const parsed = JSON.parse(cached);
    const cachedTime = new Date(parsed.timestamp).getTime();
    const now = Date.now();

    if (now - cachedTime < MAX_CACHE_AGE) {
      console.log(`Loaded ${contentType} from session cache.`);
      console.log(parsed.content);
      return parsed.content as T[];

    } else {
      console.log(`Cache expired for ${contentType}. Re-fetching from API.`);
    }
  }

  const response = await client.getEntries({
    content_type: contentType,
  });

  const content = response.items.map((item) => {
    const fields = item.fields as unknown as T;
    return {
      id: item.sys.id,
      ...fields,
    };
  });

  sessionStorage.setItem(contentType, JSON.stringify({
    content,
    timestamp: new Date().toISOString()
  }));
  console.log(`Stored ${contentType} to session cache.`);
  console.log(content);

  return content;
};

export const fetchAllContent = async (): Promise<SessionContent> => {
  const astroCollections = await fetchContent<TypeAstroCollectionFields>("astroCollection");
  const filmCollections = await fetchContent<TypeFilmCollectionFields>("filmCollection");
  const photoCollections = await fetchContent<TypePhotoCollectionFields>("photoCollection");
  const astroEntries = await fetchContent<TypeAstroEntryFields>("astroEntry");
  const filmEntries = await fetchContent<TypeFilmEntryFields>("filmEntry");
  const photoEntries = await fetchContent<TypePhotoEntryFields>("photoEntry");

  return {
    astroCollections,
    astroEntries,
    filmCollections,
    filmEntries,
    photoCollections,
    photoEntries,
  } as SessionContent;
}

export const fetchContentByTitle = async <T extends { title: EntryFieldTypes.Symbol }>(title: string, contentType: string): Promise<T| null> => {
  const content = await fetchContent<T>(contentType);
  const found = content.find((c) =>{
    const converted = encodeURIComponent((new String(c.title) as string).toLowerCase().replace(new RegExp(" ", "g"), "-"));
    return converted == title;
  });
  return found ?? null;
};

export const fetchAllImagesByTag = async (
  tags?: string[],
  quality?: number
): Promise<{ url: string; title: string }[]> => {
  // Fetch all three entry types
  const astroEntries = await fetchContent<TypeAstroEntryFields>("astroEntry");
  const filmEntries  = await fetchContent<TypeFilmEntryFields>("filmEntry");
  const photoEntries = await fetchContent<TypePhotoEntryFields>("photoEntry");

  // Combine into single list
  let entries = [...astroEntries, ...filmEntries, ...photoEntries];

  if (tags) {
    entries = entries.filter((entry) =>
      entry.tags ? tags.some(tag => tags.includes(tag)) : false
    );
  }

  // Extract images - Must use any as TS doesn't know the AssetLink is fully resolved.
  const images = entries.map((entry) => ({
    url: `https:${(entry.photo as any).fields.file.url}?fm=webp&q=${quality ?? 50}`,
    title: new String(entry.title) as string
  }));


  // Shuffle
  images.sort(() => Math.random() - 0.5);

  return images;
};