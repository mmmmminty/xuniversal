import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { fetchAllImages } from '../../content/api';
import '../../index.css';

type ImageData = {
  url: string;
  title: string;
};

export function CollectionView() {
  const [images, setImages] = useState<ImageData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const loadImages = async () => {
      const imgs = await fetchAllImages(["Showcase"], 50);
      setImages(imgs);
    };
    loadImages();
  }, []);

  useEffect(() => {
    if (images.length && containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth / 2;
      controls.start({
        x: [-0, -containerWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: "linear",
          }
        }
      });
    }
  }, [images, controls]);

  return (
    <div className="border-platinum relative m-6 h-[50vh] min-h-[400px] overflow-hidden">
      {/* Fade mask on edges */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-10"
           style={{
             background: 'linear-gradient(to right, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 10%, rgba(17,17,17,0) 90%, rgba(17,17,17,1) 100%)'
           }}
      />

      <motion.div
        ref={containerRef}
        className="flex flex-nowrap absolute top-0 left-0"
        animate={controls}
      >
        {[...images, ...images].map((img, idx) => (
          <div key={`${img.url}-${idx}`} className="relative mx-1 flex-shrink-0">
            <img
              src={img.url}
              alt={img.title}
              className="h-[44vh] w-auto flex-shrink-0 object-contain"
              loading="lazy"
            />
            <span className="absolute mt-3 ml-1 text-xs text-platinum bg-black bg-opacity-50 px-1 rounded">
              {img.title || 'Untitled'}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default CollectionView;
