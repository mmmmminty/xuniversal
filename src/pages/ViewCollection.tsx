import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchContentByTitle } from "../content/api";
import {
  TypeAstroCollectionFields,
  TypeFilmCollectionFields,
  TypePhotoCollectionFields
} from "../content/auto";
import AstroDescription from "../components/collections/AstroDescription";
import FilmDescription from "../components/collections/FilmDescription";
import PhotoDescription from "../components/collections/PhotoDescription";
import { motion } from "framer-motion";

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

  const photos = collection.photos as unknown as any[];

  let contentDescription = null;
  if (collection.description) {
    if (type === 'astro') {
      contentDescription = <AstroDescription collection={collection as TypeAstroCollectionFields} />;
    } else if (type === 'film') {
      contentDescription = <FilmDescription collection={collection as TypeFilmCollectionFields} />;
    } else if (type === 'dslr') {
      contentDescription = <PhotoDescription collection={collection as TypePhotoCollectionFields} />;
    }
  }

  return (
    <div className="border-platinum relative m-6 h-[50vh] min-h-[400px] overflow-hidden">
      {/* Fade mask on edges */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-10"
        style={{
          background: 'linear-gradient(to right, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 10%, rgba(17,17,17,0) 90%, rgba(17,17,17,1) 100%)'
        }}
      />

      <div className="flex flex-nowrap absolute top-0 left-0 overflow-x-scroll no-scrollbar"
        onWheel={(e) => {
          if (e.deltaY === 0) return;
          const el = e.currentTarget;
          if (!(el.scrollLeft === 0 && e.deltaY < 0) &&
              !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 && e.deltaY > 0)) {
            e.preventDefault();
          }
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "auto",
          });
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-1 ml-[30vh] min-w-[30vw] max-w-[40vw]"
          style={{ width: `${(44 / 4000) * 6000}vh` }}
        >
          {contentDescription}
        </motion.div>

        {photos.map((img, idx) => (
          <motion.div
            key={`${img.url}-${idx}`}
            className="relative mx-1 flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 * idx }}
          >
            <img
              src={`${img.fields.file.url}?fm=webp&q=50`}
              className="h-[44vh] w-auto flex-shrink-0 object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
