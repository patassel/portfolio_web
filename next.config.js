/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Optionnel, mais recommandé pour une meilleure vérification des erreurs
  images: {
    // Cette section est pour les images distantes (en ligne)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "eu-central-1-shared-euc1-02.graphassets.com",
      },
    ],
  },
};

module.exports = nextConfig;
