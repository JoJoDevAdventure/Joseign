// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elements-resized.envatousercontent.com",
      },
    ],
  },

  // If you use the App Router, no extra flags needed here.
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // 👇 Point this to your shim file (create it if you haven't)
      "next/image": path.resolve(__dirname, "/src/lib/NextImage.jsx"),
    };
    return config;
  },
};

module.exports = nextConfig;