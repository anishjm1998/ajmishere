/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/new-portfolio",
  assetPrefix: "/new-portfolio/",
};

module.exports = nextConfig;
