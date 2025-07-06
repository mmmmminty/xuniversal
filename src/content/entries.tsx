import { TypeAstroEntryFields, TypeFilmEntryFields, TypePhotoEntryFields } from "./auto";
import { client } from "./api";

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

export const fetchAllEntries = async (): Promise<any[]> => {
  const astro = await fetchAstroEntries();
  const dslr = await fetchPhotoEntries();
  const film = await fetchFilmEntries();

  const entries = [...astro, ...dslr, ...film];
  return entries;
}