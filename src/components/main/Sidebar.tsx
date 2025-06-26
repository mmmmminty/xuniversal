import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Sidebar() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpanded(expanded === section ? null : section);
  };

  const projectList = (
    <div className="ml-4 my-3 flex flex-col space-y-1 text-xs text-platinum">
      <span>p1</span>
      <span>p2</span>
      <span>p3</span>
      <span>p1</span>
      <span>p2</span>
      <span>p3</span>
      <span>p3</span>
      <span>p1</span>
      <span>p2</span>
      <span>p3</span>
      <span>p3</span>
      <span>p1</span>
      <span>p2</span>
      <span>p3</span>
      <span>p3</span>
      <span>p1</span>
      <span>p2</span>
      <span>p3</span>
      <span>p3</span>
      <span>p1</span>
      <span>p2</span>
      <span>p3</span>
      
    </div>
  );

  return (
    <div className="flex flex-col justify-between mx-40 w-64 h-[50vh] mt-[25vh] mb-[25vh] p-7 border border-platinum bg-eerie">
      <div>
        {/* Title */}
        <div className="mb-6">
          <span className="text-6xl font-serif text-platinum">X</span>
          <span className="text-1xl font-serif text-platinum">universal</span>
        </div>

        {/* About and Projects */}
        <div className="space-y-2">
          <h2 className="text-xs uppercase text-platinum">ABOUT</h2>
          <div className="flex flex-col">
            <button className="flex my-4 text-xs text-platinum">RESUME</button>

            {/* DSLR */}
            <button
              className="flex ml-2 text-1xl text-platinum italic"
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
                  <div className="overflow-y-auto max-h-[15vh]">
                    {projectList}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Film */}
            <button
              className="flex ml-2 text-1xl text-platinum italic"
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
                  className="overflow-hidden max-h-[15vh]"
                >
                  {projectList}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Astro */}
            <button
              className="flex ml-2 text-1xl text-platinum italic"
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
                  className="overflow-hidden max-h-[15vh]"
                >
                  {projectList}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8">
          <h2 className="text-xs my-4 uppercase text-platinum">Contact</h2>
          <p className="text-xs text-platinum mt-1 italic">
            Copyright © All rights reserved.
          </p>
        </div>
      </div>

      {/* Share */}
      <div className="mt-6">
        <button className="bg-black text-platinum text-xs py-1 rounded-full">
          SHARE
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
