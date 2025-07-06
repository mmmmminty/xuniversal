import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { fetchAllContent } from "../../content/api";

export function Sidebar() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [photoCollections, setPhotoCollections] = useState<string[]>([]);
  const [filmCollections, setFilmCollections] = useState<string[]>([]);
  const [astroCollections, setAstroCollections] = useState<string[]>([]);

  const [photoEntries, setPhotoEntries] = useState<string[]>([]);
  const [filmEntries, setFilmEntries] = useState<string[]>([]);
  const [astroEntries, setAstroEntries] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const content = await fetchAllContent();
      setPhotoCollections(content.photoCollections.map((c) => new String(c.title) as string));
      setFilmCollections(content.filmCollections.map((c) => new String(c.title) as string));
      setAstroCollections(content.astroCollections.map((c) => new String(c.title) as string));

      setPhotoEntries(content.photoEntries.map((e) => new String(e.title) as string));
      setFilmEntries(content.filmEntries.map((e) => new String(e.title) as string));
      setAstroEntries(content.astroEntries.map((e) => new String(e.title) as string));
    };
    load();
  }, []);

  const toggleSection = (section: string) => {
    setExpanded(expanded === section ? null : section);
  };

  const navigate = useNavigate();
  const expandedList = (collection: string[], entries: string[], type: string) => {
    return (
      <div className="ml-4 my-3 flex flex-col space-y-1 text-xs text-platinum">
        <a className="text-1xl -ml-2 italic"> collections </a>
        <div className="h-px w-[100px] bg-platinum opacity-30 -ml-3"></div>
        <div className="mb-3"/>
        {collection.map((title) => (
          <button
            key={title}
            onClick={() => {
              setExpanded(null);
              navigate(`${type}/collection/${encodeURIComponent(title.toLowerCase().replace(new RegExp(" ", "g"), "-"))}`)
            }}
            className="text-left"
          >
            {title.toLowerCase()}
          </button>
        ))}
        <a className="text-1xl -ml-2 pt-3 italic"> photographs </a>
        <div className="h-px w-[100px] bg-platinum opacity-30 -ml-3"></div>
        <div className="mb-3"/>
        {entries.map((title) => (
          <button
            key={title}
            onClick={() => {
              setExpanded(null);
              navigate(`${type}/photo/${encodeURIComponent(title.toLowerCase().replace(new RegExp(" ", "g"), "-"))}`)
            }}
            className="text-left"
          >
            {title.toLowerCase()}
          </button>
        ))}
      </div>
    )
  };

  return (
    <div className="flex flex-col justify-center mx-[15vw] w-64 h-[100vh] min-h-[800px] border-platinum bg-eerie overflow-hidden z-40 fixed">
      <div className="flex flex-col m-4 border-platinum md:max-h-[90vh] lg:max-h-[50vh] scrollbar-thin scrollbar-thumb-platinum scrollbar-track-transparent">
        {/* Title */}
        <button className="mb-6 flex" onClick={() => {
          navigate('/');
          setExpanded(null);
        }}>
          <span className="text-6xl font-serif text-platinum self-end">X</span>
          <span className="text-1xl font-serif text-platinum italic self-end ml-1 mb-[2px]"> universal</span>
        </button>

        {/* About and Projects */}
        <div className="space-y-2">
          <button className="text-xs uppercase text-platinum">ABOUT</button>
          <div className="h-px w-full bg-platinum opacity-30"></div>
          <button className="flex my-4 mb-8 text-xs text-platinum">RESUME</button>
          <div className="h-px w-full bg-platinum opacity-30"></div>
          <div className="pb-4"/>

          <div className="flex flex-col">
            {/* DSLR */}
            <button
              className="flex text-1xl text-platinum italic"
              onClick={() => toggleSection("dslr")}
            >
              dslr
            </button>
            <AnimatePresence initial={false}>
              {expanded === "dslr" && (
                <motion.div
                  key="dslr"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="overflow-y-auto max-h-[15vh] scrollbar-thin scrollbar-thumb-platinum scrollbar-track-transparent">
                    {expandedList(photoCollections, photoEntries, 'dslr')}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Film */}
            <button
              className="flex text-1xl text-platinum italic"
              onClick={() => toggleSection("film")}
            >
              film
            </button>
            <AnimatePresence initial={false}>
              {expanded === "film" && (
                <motion.div
                  key="film"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="overflow-y-auto max-h-[15vh] scrollbar-thin scrollbar-thumb-platinum scrollbar-track-transparent">
                    {expandedList(filmCollections, filmEntries, 'film')}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Astro */}
            <button
              className="flex text-1xl text-platinum italic"
              onClick={() => toggleSection("astro")}
            >
              astro
            </button>
            <AnimatePresence initial={false}>
              {expanded === "astro" && (
                <motion.div
                  key="astro"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="overflow-y-auto max-h-[15vh] scrollbar-thin scrollbar-thumb-platinum scrollbar-track-transparent">
                    {expandedList(astroCollections, astroEntries, 'astro')}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8">
          <div className="h-px w-full bg-platinum opacity-30"></div>
          <button className="text-xs my-4 uppercase text-platinum">Contact</button>
          <p className="text-xs text-platinum mt-1 italic">
            Copyright © All rights reserved.
          </p>
        </div>
      
        {/* Share */}
        <div className="mt-6">
          <button className="bg-black text-platinum text-xs py-1 rounded-full">
            SHARE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
