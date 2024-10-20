import React from "react";
import { motion } from "framer-motion";
import { title } from "process";

interface NavigationProps {
  onOpenDialog: (title: string, message: string) => void; // Fonction pour ouvrir le dialog
}

const NavigationTabs: React.FC<NavigationProps> = ({ onOpenDialog }) => {
  return (
    <div className="absolute top-0 left-0 right-0 flex justify-end p-4 bg-transparent z-10">
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
                onClick={(e) => {
                  e.preventDefault(); // Empêche le comportement par défaut
                  let message; // Variable pour le message

                  // Utilisation du switch statement pour définir le message en fonction de l'onglet
                  switch (item) {
                    case "Projects":
                      message = "Projects page is under construction."; // Message pour "Projects"
                      break;
                    case "Skills":
                      message = "Skills page is coming soon."; // Message pour "Skills"
                      break;
                    case "Blog":
                      message = "Blog page is under construction."; // Message pour "Blog"
                      break;
                    case "Contact":
                      message = "Contact page is under construction."; // Message pour "Contact"
                      break;
                    default:
                      message =
                        "Sorry, this action is not available at the moment."; // Message par défaut
                      break;
                  } // Ouvre le dialog

                  onOpenDialog(item, message);
                }}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationTabs;
