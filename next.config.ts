import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/golden-clipper",
  assetPrefix: "/golden-clipper/",
};

export default nextConfig;