/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive complètement l’UI Dev Tools / dev indicator
  devIndicators: false,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
