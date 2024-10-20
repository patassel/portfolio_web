/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Optionnel, mais recommandé pour une meilleure vérification des erreurs
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com", // L'hôte de votre image
      },
    ],
  },
};

module.exports = nextConfig;
