"use client";

import ParticlesContainer from "@/components/animations/particles";
import SocialIcons from "@/components/links";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import { HeroSection } from "@/components/hero/mask";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* AppBar */}
      <div className={styles.header}>
        <nav>
          <ul className="flex space-x-8 text-gray-300">
            {["Projects", "Skills", "Blog", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "green" }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-green-500"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-grow">
        {/* Section gauche */}
        <div className="w-1/2 flex flex-col justify-center items-start p-10 space-y-8">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-white"
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
              <span className="font-semibold text-white">Tailwind CSS</span> for
              designing responsive, modern interfaces, and{" "}
              <span className="font-semibold text-white">Flutter</span> for
              building cross-platform mobile applications.
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

      {/* Footer */}
      <footer className="bg-transparent py-6 text-center w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300"
        >
          © 2024 Portfolio. Designed By Fayssal Ben Hammou.
        </motion.p>
      </footer>

      <ParticlesContainer />
    </div>
  );
}
