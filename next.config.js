/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  // Ensure video files are served properly
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;