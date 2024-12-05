import { createClient } from "contentful";
import { AstroEntry } from "./astro";

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export const fetchAstroEntries = async (): Promise<AstroEntry[]> => {
  const entries = await client.getEntries({
    content_type: "astroEntry",
  });

  console.log(entries);

  return new Promise(() => {});
}