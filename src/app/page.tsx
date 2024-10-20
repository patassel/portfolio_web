"use client"; // Indique que ce composant doit être rendu côté client

import React, { useState } from "react"; // Importer React et useState
import ParticlesContainer from "@/components/animations/particles";
import SocialIcons from "@/components/links";
import { motion } from "framer-motion";
import styles from "@/styles/home.module.css";
import { HeroSection } from "@/components/hero/mask";
import AlertDialog from "@/components/dialog"; // Importation du composant AlertDialog
import NavigationTabs from "@/components/tab-navigation";

export default function Home() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");

  const handleOpenDialog = (title: string, message: string) => {
    setDialogTitle(title);
    setDialogMessage(message);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* AppBar */}
      <div className={styles.header}>
        <NavigationTabs onOpenDialog={handleOpenDialog} />{" "}
        {/* Utilisation du nouveau composant Navigation */}
      </div>

      {/* Contenu principal */}
      <div className="flex flex-grow">
        {/* Section gauche */}
        <div className="w-1/2 flex flex-col justify-center items-start p-10 space-y-8">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-t from-blue-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Fayssal Ben Hammou
          </motion.h1>

          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <p className="text-lg sm:text-xl text-gray-300 mb-4">
              I am a passionate Full Stack Developer with a strong background in
              web and mobile technologies. I specialize in{" "}
              <span className="font-bold bg-gradient-to-t from-blue-500 to-blue-300 bg-clip-text text-transparent">
                Tailwind CSS
              </span>{" "}
              for designing responsive, modern interfaces, and{" "}
              <span className="font-bold bg-gradient-to-t from-blue-500 to-blue-300 bg-clip-text text-transparent">
                Flutter
              </span>{" "}
              for building cross-platform mobile applications.
            </p>
          </motion.div>

          {/* Icônes des réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <SocialIcons />
          </motion.div>
        </div>

        {/* Section droite avec l'image */}
        <motion.div
          className="w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, y: 100 }} // Animation d'entrée
          animate={{ opacity: 1, y: 0 }} // Animation vers le haut
          transition={{ delay: 0.6, duration: 0.3 }} // Délai et durée
        >
          {/* Appel à votre composant HeroSection */}
          <HeroSection />
        </motion.div>
      </div>

      {/* Afficher le dialog si ouvert */}
      {isDialogOpen && (
        <AlertDialog
          title={dialogTitle}
          message={dialogMessage}
          onClose={handleCloseDialog}
        />
      )}

      {/* Footer */}
      <footer className="bg-transparent py-6 text-center w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300"
        >
          © 2024 Portfolio. Designed By{" "}
          <span className="font-bold bg-gradient-to-t from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Fayssal Ben Hammou
          </span>
          .
        </motion.p>
      </footer>

      <ParticlesContainer />
    </div>
  );
}
