import React from "react";

interface AlertDialogProps {
  title: string; // Définir le type de title comme string
  message: string; // Définir le type de message comme string
  onClose: () => void; // Définir le type de onClose comme une fonction qui ne prend pas de paramètres et ne retourne rien
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  message,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="bg-gray-950 p-5 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4 ">{title}</h2>
        <p>{message}</p>
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2  rounded bg-gray-800" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
