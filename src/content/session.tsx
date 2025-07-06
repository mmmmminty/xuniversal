import { fetchAllCollections } from "./collections";
import { fetchAllEntries } from "./entries";

export interface SessionData {
  entries: any[],
  collections: any[]
}

export const fetchAllandStore = async (): Promise<SessionData> => {
  const cached = sessionStorage.getItem('sessionData');
  if (cached) {
    const parsed = JSON.parse(cached);
    console.log("Found data in session storage.");
    console.log(parsed);
    return parsed;
  }

  const entries = await fetchAllEntries();
  const collections = await fetchAllCollections();
  const sessionData: SessionData = {
    entries,
    collections
  }

  sessionStorage.setItem('sessionData', JSON.stringify(sessionData));
  console.log("Fetched and stored data.");
  console.log(sessionData);
  return sessionData;
}

export const fetchAllImagesByTag = async (
  tags?: string[],
  quality?: number
): Promise<{ url: string; title: string }[]> => {
  let entries = (await fetchAllandStore()).entries;

  // Filter by tags if provided
  if (tags) {
    entries = entries.filter((entry) =>
      entry.tags ? tags.some((tag) => entry.tags.includes(tag)) : false
    );
  }

  // Extract image URLs and titles
  const images = entries.map((entry) => ({
    url: `${entry.photo.fields.file.url}?fm=webp&q=${quality || 50}`,
    title: entry.title,
  }));

  images.sort(() => Math.random() - 0.5);

  return images;
};