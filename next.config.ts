/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/ajmishere" : "",
  assetPrefix: isProd ? "/ajmishere/" : "",
};

export default nextConfig;
