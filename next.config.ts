import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-first-project',
  assetPrefix: '/my-first-project/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
