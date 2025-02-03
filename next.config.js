/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // L'hôte de votre image
      },
    ],
  },
};

module.exports = nextConfig;
