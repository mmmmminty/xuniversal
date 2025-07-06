import { TypeAstroCollectionFields, TypeFilmCollectionFields, TypePhotoCollectionFields } from "./auto";
import { client } from "./api";

export const fetchAstroCollections = async (): Promise<TypeAstroCollectionFields[]> => {
  const response = await client.getEntries({
    content_type: "astroCollection",
  });

  const collections = response.items.map((item) => {
    const fields = item.fields as unknown as TypeAstroCollectionFields;
    return {
      id: item.sys.id,
      ...fields,
    };
  });

  return collections;
}

export const fetchFilmCollections = async (): Promise<TypeFilmCollectionFields[]> => {
  const response = await client.getEntries({
    content_type: "filmCollection",
  });

  const collections = response.items.map((item) => {
    const fields = item.fields as unknown as TypeFilmCollectionFields;
    return {
      id: item.sys.id,
      ...fields,
    };
  });

  return collections;
}

export const fetchPhotoCollections = async (): Promise<TypePhotoCollectionFields[]> => {
  const response = await client.getEntries({
    content_type: "photoCollection",
  });

  const collections = response.items.map((item) => {
    const fields = item.fields as unknown as TypePhotoCollectionFields;
    return {
      id: item.sys.id,
      ...fields,
    };
  });

  return collections;
}

export const fetchAllCollections = async (): Promise<any[]> => {
  const astro = await fetchAstroCollections();
  const dslr = await fetchPhotoCollections();
  const film = await fetchFilmCollections();

  const collections = [...astro, ...dslr, ...film];
  console.log(collections);
  return collections;
}