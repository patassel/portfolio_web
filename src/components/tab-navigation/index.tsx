"use client"; // Indique que ce composant doit être rendu côté client

import React from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useDialog } from "@/components/dialog/dialog_context"; // Importer le hook du contexte
import Image from "next/image"; // Importer le composant Image
import logo from "../../../public/logo.png"; // Assurez-vous que le chemin vers votre logo est correct

const NavigationTabs: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { handleOpenDialog } = useDialog(); // Obtenez la fonction pour ouvrir le dialog

  const handleClick = (item: string) => {
    if (item === "Skills") {
      router.push("/skills"); // Naviguer vers la page Skills
    } else {
      let message;
      switch (item) {
        case "Projects":
          message = "Projects page is under construction.";
          break;
        case "Blog":
          message = "Blog page is under construction.";
          break;
        case "Contact":
          message = "Contact page is under construction.";
          break;
        default:
          message = "Sorry, this action is not available at the moment.";
      }
      handleOpenDialog(item, message); // Ouvrir le dialog en utilisant le contexte
    }
  };

  return (
    <header className="flex items-center bg-transparent w-full">
      {/* Container pour le logo */}
      <div className="flex items-center h-full">
        <a href="/portfolio_web" className="h-full">
          <Image
            src={logo}
            alt="Logo"
            className="h-full w-20 object-contain" // Permet à l'image de prendre toute la hauteur du header
            priority={true} // Pour optimiser le chargement
          />
        </a>
      </div>

      <nav className="flex-grow flex justify-end mr-10">
        <ul className="flex space-x-8 text-gray-300">
          {["Projects", "Skills", "Blog", "Contact"].map((item) => {
            // Vérifie si l'onglet est actif
            const isActive = pathname === `/${item.toLowerCase()}`;

            return (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "green" }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#"
                  className={`hover:text-green-500 ${
                    isActive ? "text-green-500" : "text-gray-300"
                  }`}
                  onClick={(e) => {
                    e.preventDefault(); // Empêche le comportement par défaut du lien
                    handleClick(item); // Gérer le clic
                  }}
                >
                  {item}
                </a>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationTabs;
