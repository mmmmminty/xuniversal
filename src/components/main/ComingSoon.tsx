import React from 'react';
import { motion } from 'framer-motion';
import { fetchAllImages } from '../../content/api';
import '../../index.css';

const ComingSoon: React.FC = () => {
    const [images, setImages] = React.useState<string[]>([]);
    const [currentImage, setCurrentImage] = React.useState<string | null>(null);

    React.useEffect(() => {
        const loadImages = async () => {
            const imgs = await fetchAllImages(["Showcase"], 50);
            setImages(imgs);
            setCurrentImage(imgs[Math.floor(Math.random() * imgs.length)]);
        };
        loadImages();
    }, []);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (images.length > 0) {
                setCurrentImage(images[Math.floor(Math.random() * images.length)]);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="flex justify-center items-center h-[80vh] below-nav relative">
            {currentImage && (
                <>
                    <motion.img
                        key={currentImage} // Add key to trigger re-animation
                        src={currentImage}
                        alt="Random"
                        className="max-h-[75vh] object-cover max-w-[85vw] z-0 absolute"
                        initial={{ y: 100, opacity: 0, filter: 'blur(10px)' }}
                        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1 }}
                        loading="eager"
                        exit={{ opacity: 0, filter: 'blur(10px)' }}
                    />
                </>
                
            )}
            <motion.h1
                className="text-[15vw] border p-4 pl-8 text-platinum font-bold absolute"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
               
            >
                Soon™
            </motion.h1>
        </div>
    );
    
};

export default ComingSoon;