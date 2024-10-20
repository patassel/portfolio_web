/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommandé pour une meilleure vérification des erreurs
  images: {
    domains: ["drive.google.com"], // Ajoutez ici le domaine correct
  },
};

module.exports = nextConfig;
