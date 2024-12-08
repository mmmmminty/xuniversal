import { createClient } from "contentful";
import { TypeAstroEntryFields } from "./auto";

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

  console.log(response);

  const entries = response.items.map((item) => {
    const fields = item.fields as TypeAstroEntryFields;
    return {
      id: item.sys.id,
      ...fields,
    };
  });

  console.log(entries);

  return entries;
}