import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    output: 'export', // Enable static export
    basePath: 'https://github.com/eaxle/profile.git', // Replace with your GitHub repo name
    trailingSlash: true, // Optional for correct URL paths
  
};

export default nextConfig;
