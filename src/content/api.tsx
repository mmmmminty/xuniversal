import { createClient } from "contentful";
import { TypeAstroCollectionFields, TypeAstroEntryFields, TypeFilmCollectionFields, TypeFilmEntryFields, TypePhotoCollectionFields, TypePhotoEntryFields } from "./auto";

const MAX_CACHE_AGE = 60 * 60 * 1000; 
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

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

export const fetchAllContent = async (): Promise<[]> => {
  await fetchContent<TypeAstroCollectionFields>("astroCollection");
  await fetchContent<TypeFilmCollectionFields>("filmCollection");
  await fetchContent<TypePhotoCollectionFields>("photoCollection");
  await fetchContent<TypeAstroEntryFields>("astroEntry");
  await fetchContent<TypeFilmEntryFields>("filmEntry");
  await fetchContent<TypePhotoEntryFields>("photoEntry");

  return [];
}