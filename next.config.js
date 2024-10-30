/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio_web",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // L'hôte de votre image
      },
    ],
  },
};

module.exports = nextConfig;
