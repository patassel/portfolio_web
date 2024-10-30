"use client";

import ModelViewer from "@/components/3D/model-viewer";
import { fadeIn } from "@/components/animations/fadeIn";
import ProjectSection from "@/components/project/project-section";
import { motion } from "framer-motion";
import React from "react";
import order1 from "../../../public/Order-Pro-Dashboard-Admin.png";
import order2 from "../../../public/Order-Pro-Menu.png";
import eden1 from "../../../public/eden-garden-library.png";
import eden2 from "../../../public/eden-garden-sunflower.png";
import travelTrip from "../../../public/travel-trip.png";

export default function Page() {
  const scrollToProjects = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* En-tête avec animation de gauche à droite */}
      <motion.div
        key="header"
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ once: false }}
        className="w-full h-screen flex flex-col items-center justify-center text-blue-50"
      >
        <h1 className="text-4xl font-bold text-center mb-6">
          Welcome to my projects page
        </h1>
        <p className="text-lg text-start mb-20 max-w-md px-4 text-gray-300">
          Here, you'll discover various projects, including mobile applications
          and web applications. Click on the arrow or scroll down to explore the
          first project.
        </p>
        {/* Flèche animée */}
        <motion.div
          onClick={scrollToProjects}
          className="cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-16 h-16 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Sections de projet avec animation de gauche à droite */}
      <div id="projects" className="w-full">
        <motion.div
          key={"Eden Garden App"}
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: false }}
          className="h-screen flex items-center justify-center"
        >
          <ProjectSection
            title="Eden Garden App"
            description="Eden Garden App (first project at school) is available on Web, Android, Windows and coming soon to iOS. This app helps you manage your garden with features like plant statistics, maintenance instructions, and theme color customization."
            details={[
              "View plant library with images and updated information.",
              "Store your data securely with cloud storage.",
              "Share your garden with the community and explore different plant varieties.",
            ]}
            images={[eden1, eden2]}
            apkLink="https://github.com/patassel/eden_garden_app"
          />
        </motion.div>

        <motion.div
          key={"Order Pro"}
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: false }}
          className="h-screen flex items-center justify-center"
        >
          <ProjectSection
            title="Order Pro"
            description="Order Pro is built for the hospitality industry. It streamlines operations for restaurants, food trucks, and coffee houses by managing roles for Administrator, Cook/Order Taker, and Customer."
            details={[
              "Administrator: Manage staff, track inventory, set delivery options, and more.",
              "Cook/Order Taker: Real-time order tracking, communicate with staff, track progress.",
              "Customer: Locate establishments, view menus, order via QR code, and choose delivery.",
            ]}
            images={[order1, order2]}
            apkLink="https://github.com/patassel/Order-Pro-Overview"
          />
        </motion.div>

        <motion.div
          key={"Travel Trip"}
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: false }}
          className="h-screen flex items-center justify-center"
        >
          <ProjectSection
            title="Travel Trip"
            description="Template Website for travel agency."
            details={[
              "Allows you to visit a travel agency's website, show a template and get an idea of the design you can bring to it.",
            ]}
            images={[travelTrip]}
            apkLink="https://patassel.github.io/OfficialTravelTrip.github.io/"
          />
        </motion.div>

        <motion.div
          key={"3D Model"}
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: false }}
          className="h-screen flex flex-col md:flex-row items-center justify-center w-full px-4"
        >
          {/* Text Content */}
          <div className="w-full max-w-md p-6 text-center space-y-6 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-4">
              3D Model Showcase
            </h1>
            <p className="text-lg text-gray-300">
              Here you can animate, zoom, and move the camera anywhere.
            </p>
          </div>

          {/* 3D Model */}
          <div className="w-full md:w-[50%] h-full flex justify-center items-center">
            <ModelViewer />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
