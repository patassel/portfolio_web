// src/app/page.tsx
"use client"; // Indique que ce composant doit être rendu côté client

import React from "react"; // Importer React
import SocialIcons from "../components/links"; // Assurez-vous que le chemin est correct
import { motion } from "framer-motion";
import { HeroSection } from "../components/hero/mask"; // Assurez-vous que le chemin est correct

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row">
      {/* Section gauche */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-6 sm:p-10 space-y-1">
        <motion.h1
          className="text-3xl sm:text-5xl font-bold bg-gradient-to-t from-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Fayssal Ben Hammou
        </motion.h1>

        <motion.div
          className="max-w-full sm:max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <p className="text-base sm:text-xl text-gray-300 mb-4">
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
        className="sm:w-1/2 flex justify-center items-center h-full" // 'items-center' centre verticalement et 'justify-center' horizontalement
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        <HeroSection />
      </motion.div>
    </div>
  );
}
