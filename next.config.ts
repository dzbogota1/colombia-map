import type { NextConfig } from "next";

const nextConfig: NextConfig = {
      output: 'export',
  distDir: 'docs',
  basePath: '/colombia-map',
  assetPrefix: '/colombia-map/',
};

export default nextConfig;
