import { createClient } from "contentful";
import { TypeAstroEntryFields, TypeFilmEntryFields, TypePhotoEntryFields } from "./auto";

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export const fetchAstroEntries = async (): Promise<TypeAstroEntryFields[]> => {
  const response = await client.getEntries({
    content_type: "astroEntry",
  });

  const entries = response.items.map((item) => {
    const fields = item.fields as unknown as TypeAstroEntryFields;
    return {
      id: item.sys.id,
      ...fields,
    };
  });

  return entries;
}

export const fetchFilmEntries = async (): Promise<TypeFilmEntryFields[]> => {
  const response = await client.getEntries({
    content_type: "filmEntry",
  });

  const entries = response.items.map((item) => {
    const fields = item.fields as unknown as TypeFilmEntryFields;
    return {
      id: item.sys.id,
      ...fields,
    };
  });

  return entries;
}

export const fetchPhotoEntries = async (): Promise<TypePhotoEntryFields[]> => {
  const response = await client.getEntries({
    content_type: "photoEntry",
  });

  const entries = response.items.map((item) => {
    const fields = item.fields as unknown as TypePhotoEntryFields;
    return {
      id: item.sys.id,
      ...fields,
    };
  });

  return entries;
}

export const fetchContentById = async (id: string): Promise<any> => {
  const response = await client.getEntry(id);
  return response;
}

export const fetchAllEntries = async (): Promise<any[]> => {
  const astro = await fetchAstroEntries();
  const dslr = await fetchPhotoEntries();
  const film = await fetchFilmEntries();

  const entries = [...astro, ...dslr, ...film];
  return entries;
}

export const fetchAllImages = async (tags?: string[], quality?: number): Promise<string[]> => {
  let entries = await fetchAllEntries();

  // Filter by tags if provided
  if (tags) {
    entries = entries.filter((entry) => entry.tags ? tags.some((tag) => entry.tags.includes(tag)) : false);
  }

  // Extract image URLs
  const images = entries.map((entry) => `${entry.photo.fields.file.url}?fm=webp&q=${quality || 100}` );

  return images;
}