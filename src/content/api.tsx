import { createClient } from "contentful";

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