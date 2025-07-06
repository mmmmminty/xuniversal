import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchContentByTitle } from "../content/api";
import {
  TypeAstroEntryFields,
  TypeFilmEntryFields,
  TypePhotoEntryFields
} from "../content/auto";
import { motion } from "framer-motion";
import AstroDescription from "../components/entries/AstroDescription";
import FilmDescription from "../components/entries/FilmDescription";
import { PhotoDescription } from "../components/entries/PhotoDescription";

type Props = {
  type: string;
  title: string;
};

export default function ViewEntry({ type, title }: Props) {
  const [entry, setEntry] = useState<TypeAstroEntryFields | TypeFilmEntryFields | TypePhotoEntryFields | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      switch (type) {
        case 'astro':
          const astro = await fetchContentByTitle<TypeAstroEntryFields>(title, "astroEntry");
          setEntry(astro);
          break;
        case 'film':
          const film = await fetchContentByTitle<TypeFilmEntryFields>(title, "filmEntry");
          setEntry(film);
          break;
        case 'dslr':
          const dslr = await fetchContentByTitle<TypePhotoEntryFields>(title, "photoEntry");
          setEntry(dslr);
          break;
        default:
          navigate('/');
      }
    };
    load();
  }, [type, title, navigate]);

  if (!entry) {
    navigate('/');
    return;
  }

  let contentDescription = null;
  if (entry.description) {
    if (type === 'astro') {
      contentDescription = <AstroDescription entry={entry as TypeAstroEntryFields} />;
    } else if (type === 'film') {
      contentDescription = <FilmDescription entry={entry as TypeFilmEntryFields} />;
    } else if (type === 'dslr') {
      contentDescription = <PhotoDescription entry={entry as TypePhotoEntryFields} />;
    }
  }

  // For single image
  const image = (entry.photo as any)?.fields?.file?.url;

  return (
    <div className="border-platinum relative m-6 h-[50vh] min-h-[400px] overflow-hidden">
      {/* <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-10"
        style={{
          background: 'linear-gradient(to right, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 10%, rgba(17,17,17,0) 90%, rgba(17,17,17,1) 100%)'
        }}
      /> */}

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

        {image && (
          <motion.div
            className="relative mx-1 flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            key={title}
          >
            <img
              src={`${image}?fm=webp&q=50`}
              className="h-[44vh] w-auto flex-shrink-0 object-contain"
              loading="lazy"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
