// src/app/layout.tsx
"use client";

import React, { ReactNode } from "react";
import NavigationTabs from "@/components/tab-navigation"; // Chemin vers votre composant de navigation
import AlertDialog from "@/components/dialog"; // Chemin vers votre composant de dialog
import { DialogProvider, useDialog } from "@/components/dialog/dialog_context"; // Fournisseur de contexte pour les dialogues
import ParticlesContainer from "@/components/animations/particles"; // Chemin vers votre composant Particles
import localFont from "next/font/local"; // Pour les polices locales
import "./globals.css"; // Importez vos styles globaux
import { motion } from "framer-motion";
import styles from "@/styles/home.module.css"; // Importer vos styles

// Importer les polices locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Composant principal qui encapsule le tout
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <DialogProvider>
      <html lang="en">
        <head>
          <title>{"Fayssal Ben Hammou"}</title> {/* Définir le titre ici */}
          <meta name="description" content={"Portfolio"} />
          {/* <link rel="icon" href={metadata.icons.icon} />{" "} */}
          {/* Lien vers l'icône */}
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClientComponent>{children}</ClientComponent>
        </body>
      </html>
    </DialogProvider>
  );
}

// Composant client
const ClientComponent = ({ children }: { children: ReactNode }) => {
  const { isDialogOpen, dialogTitle, dialogMessage, handleCloseDialog } =
    useDialog(); // Utilisez le hook pour obtenir l'état du dialog

  return (
    <div className={styles.container}>
      {/* AppBar/header*/}
      <NavigationTabs />
      {/* Contenu principal de votre application */}
      <main className="flex-grow">{children}</main>
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
};
