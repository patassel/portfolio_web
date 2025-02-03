'use client';
import React from 'react';

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Supprimer mon compte</h1>

      <p className="mb-4">
        Si vous souhaitez supprimer votre compte et toutes les données
        associées, veuillez suivre ces étapes :
      </p>

      <ol className="list-decimal list-inside mb-4">
        <li>Connectez-vous à l'application avec vos identifiants.</li>
        <li>
          Accédez aux <strong>Paramètres</strong> (Settings).
        </li>
        <li>
          Faites défiler vers le bas et appuyez sur{' '}
          <strong>Supprimer mon compte</strong>.
        </li>
        <li>Confirmez votre choix pour finaliser la suppression.</li>
      </ol>

      <p className="mb-4">
        Une fois votre compte supprimé, toutes vos données seront effacées de
        manière irréversible. Si vous avez besoin d'aide, contactez-nous à{' '}
        <a
          href="mailto:patasseldev@gmail.com"
          className="text-blue-500 hover:underline"
        >
          patasseldev@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
