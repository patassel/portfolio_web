// src/components/tab-navigation/index.tsx
"use client"; // Indique que ce composant doit être rendu côté client

import React from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useDialog } from "@/components/dialog/dialog_context"; // Importer le hook du contexte

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
    <div className="absolute top-0 left-0 right-0 flex justify-end p-4 bg-transparent z-10">
      <nav>
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
    </div>
  );
};

export default NavigationTabs;
