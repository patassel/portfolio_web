// HeroSection.jsx ou HeroSection.tsx

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Assurez-vous d'importer framer-motion si vous l'utilisez pour les animations

export const HeroSection = () => {
  const HeroImage = "/images/mask-OFF.png"; // Chemin relatif vers votre image

  const [imageSize, setImageSize] = useState({ width: 402, height: 300 }); // Ajustez ici pour la hauteur

  useEffect(() => {
    const updateImageSize = () => {
      if (window.innerWidth >= 1600) {
        setImageSize({ width: 522, height: 300 }); // Hauteur ajustée ici
      } else if (window.innerWidth <= 1000) {
        setImageSize({ width: 552, height: 300 }); // Hauteur ajustée ici
      } else {
        setImageSize({ width: 402, height: 300 }); // Hauteur ajustée ici
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
    <div className="relative w-[60%] h-[80%]">
      {" "}
      {/* Container pour gérer l'image */}
      <motion.div
        className="w-full h-full" // S'assurer que le conteneur de l'image prend tout l'espace
        initial={{ opacity: 0, y: 50 }} // Animation d'entrée
        animate={{ opacity: 1, y: 0 }} // Animation vers le haut
        transition={{ delay: 0.6, duration: 0.7 }} // Délai et durée
      >
        <img
          src={HeroImage} // Chemin vers l'image
          alt="Hero"
          width={imageSize.width}
          height={imageSize.height}
        />
      </motion.div>
    </div>
  );
};
