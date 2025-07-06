import { fetchContent } from "./api";
import {
  TypeAstroEntryFields,
  TypeFilmEntryFields,
  TypePhotoEntryFields
} from "./auto";

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
