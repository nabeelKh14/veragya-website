import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Disable cssnano-simple minification — it crashes on modern CSS (color-mix, oklch)
    // used by Tailwind v4
    config.optimization.minimize = false;
    return config;
  },
};

export default nextConfig;