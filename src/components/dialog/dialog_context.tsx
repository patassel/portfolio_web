// src/context/DialogContext.tsx

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Définir le type pour le contexte
interface DialogContextType {
  isDialogOpen: boolean;
  dialogTitle: string;
  dialogMessage: string;
  handleOpenDialog: (title: string, message: string) => void;
  handleCloseDialog: () => void;
}

// Créer le contexte
const DialogContext = createContext<DialogContextType | undefined>(undefined);

// Composant provider pour le contexte
export const DialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
    <DialogContext.Provider
      value={{
        isDialogOpen,
        dialogTitle,
        dialogMessage,
        handleOpenDialog,
        handleCloseDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
