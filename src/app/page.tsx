"use client"; // Ajoute cette ligne en haut du fichier

import ParticlesContainer from "@/components/animations/particles";
import { motion } from "framer-motion";
import { Github, Linkedin, FileUser } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 bg-opacity-90 text-gray-100 relative">
      {/* AppBar avec fond transparent et les onglets */}
      <div className="absolute top-0 left-0 right-0 flex justify-end p-4 bg-transparent z-10">
        <nav>
          <ul className="flex space-x-8 text-gray-300">
            <motion.li
              whileHover={{ scale: 1.1, color: "green" }}
              transition={{ duration: 0.2 }}
            >
              <a href="#projects" className="hover:text-green-500">
                Projects
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "green" }}
              transition={{ duration: 0.2 }}
            >
              <a href="#skills" className="hover:text-green-500">
                Skills
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "green" }}
              transition={{ duration: 0.2 }}
            >
              <a href="#blog" className="hover:text-green-500">
                Blog
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "green" }}
              transition={{ duration: 0.2 }}
            >
              <a href="#contact" className="hover:text-green-500">
                Contact
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>

      {/* Section principale contenant le contenu et l'image */}
      <div className="flex flex-grow">
        {/* Section gauche avec le contenu */}
        <div className="w-1/2 flex flex-col justify-center items-start p-10 space-y-8">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold text-white"
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
              building cross-platform mobile applications. I also have
              experience with back-end development using Node.js, Express, and
              other tools.
            </p>
            <p className="text-lg sm:text-xl text-gray-300">
              My goal is to create efficient, scalable, and user-friendly
              applications that solve real-world problems. Let's build something
              great together!
            </p>
          </motion.div>

          {/* Icônes des réseaux sociaux */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href="https://github.com/ton-utilisateur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-green-500 transition-colors duration-300"
            >
              <Github
                size={40}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ton-utilisateur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-green-500 transition-colors duration-300"
            >
              <Linkedin
                size={40}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/11DdiGojGpYaCfvF72nTt0LfOJOMGIMST/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-green-500 transition-colors duration-300"
            >
              <FileUser
                size={40}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </div>

        {/* Section droite avec l'image */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="relative w-[80%] h-[80%] bg-no-repeat bg-right bg-contain">
            <Image
              src="/images/mask-OFF.png"
              layout="fill"
              objectFit="contain"
              alt="background home page"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-transparent py-6 text-center w-full">
        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © 2024 Fayssal Ben Hammou. All rights reserved.
        </motion.p>
      </footer>

      <ParticlesContainer />
    </div>
  );
}
