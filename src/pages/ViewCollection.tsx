import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchContentByTitle } from "../content/api";
import {
  TypeAstroCollectionFields,
  TypeFilmCollectionFields,
  TypePhotoCollectionFields
} from "../content/auto";

type Props = {
  type: string;
  title: string;
};

export default function ViewCollection({ type, title }: Props) {
  const [collection, setCollection] = useState<TypeAstroCollectionFields | TypeFilmCollectionFields | TypePhotoCollectionFields | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      switch (type) {
        case 'astro':
          const astro = await fetchContentByTitle<TypeAstroCollectionFields>(title, "astroCollection");
          setCollection(astro);
          break;
        case 'film':
          const film = await fetchContentByTitle<TypeFilmCollectionFields>(title, "filmCollection");
          setCollection(film);
          break;
        case 'dslr':
          const dslr = await fetchContentByTitle<TypePhotoCollectionFields>(title, "photoCollection");
          setCollection(dslr);
          break;
        default:
          navigate('/');
      }
    };
    load();
  }, [type, title, navigate]);

  if (!collection) {
    navigate('/');
    return;
  }

  console.log(`Loaded collection ${collection}.`);
  console.log(collection);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{collection.title.values}</h1>
  
      <div className="flex flex-row gap-4">
        {(collection.photos as unknown as any[]).map((photo, idx) => (
          <img
            key={idx}
            src={`${photo.fields.file.url}?fm=webp&q=40`}
            alt={collection.title.values}
            className="h-48 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
