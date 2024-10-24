// HeroSection.jsx ou HeroSection.tsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../../../../public/maskOff.png";

export const HeroSection = () => {
  const [imageSize, setImageSize] = useState({ width: 402, height: 300 });

  useEffect(() => {
    const updateImageSize = () => {
      if (window.innerWidth >= 1600) {
        setImageSize({ width: 522, height: 300 });
      } else if (window.innerWidth <= 1000) {
        setImageSize({ width: 552, height: 300 });
      } else {
        setImageSize({ width: 402, height: 300 });
      }
    };

    // Initial check
    updateImageSize();

    // Add event listener
    window.addEventListener("resize", updateImageSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  return (
    <div className="relative w-[80%] h-[60%]">
      {/* Container pour gérer l'image */}
      <motion.div
        className="w-full h-full" // S'assurer que le conteneur de l'image prend tout l'espace
        initial={{ opacity: 0, y: 50 }} // Animation d'entrée
        animate={{ opacity: 1, y: 0 }} // Animation vers le haut
        transition={{ delay: 0.6, duration: 0.7 }} // Délai et durée
      >
        <Image
          src={hero}
          alt="Hero"
          width={imageSize.width}
          height={imageSize.height}
        />
      </motion.div>
    </div>
  );
};
