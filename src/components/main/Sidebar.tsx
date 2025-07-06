import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export function Sidebar() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [photoCollections, setPhotoCollections] = useState<string[]>([]);
  const [filmCollections, setFilmCollections] = useState<string[]>([]);
  const [astroCollections, setAstroCollections] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      // const data = await getCollections();
      // setCollections(data);
    };
    load();
  }, []);

  const toggleSection = (section: string) => {
    setExpanded(expanded === section ? null : section);
  };

  const navigate = useNavigate();
  const photoList = (
    <div className="ml-4 my-3 flex flex-col space-y-1 text-xs text-platinum">
      {photoCollections.map((title) => (
        <button
          key={title}
          onClick={() => navigate(`/collection/${encodeURIComponent(title)}`)}
          className="hover:underline text-left"
        >
          {title}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col justify-center mx-[15vw] w-64 h-[100vh] min-h-[800px] border-platinum bg-eerie overflow-hidden z-40 fixed">
      <div className="flex flex-col m-4 border-platinum md:max-h-[90vh] lg:max-h-[50vh] scrollbar-thin scrollbar-thumb-platinum scrollbar-track-transparent">
        {/* Title */}
        <div className="mb-6">
          <span className="text-6xl font-serif text-platinum">X</span>
          <span className="text-1xl font-serif text-platinum italic"> universal</span>
        </div>

        {/* About and Projects */}
        <div className="space-y-2">
          <button className="text-xs uppercase text-platinum">ABOUT</button>
          <div className="flex flex-col">
            <button className="flex my-4 mb-8 text-xs text-platinum">RESUME</button>

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
                    {placeholderList}
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
                    {placeholderList}
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
                    {placeholderList}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8">
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
