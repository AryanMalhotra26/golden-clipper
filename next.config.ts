import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // IMPORTANT: no basePath/assetPrefix for custom domain
};

export default nextConfig;