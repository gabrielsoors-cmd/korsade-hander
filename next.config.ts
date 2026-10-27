import type { NextConfig } from "next";

// Sajten publiceras som statiska filer på GitHub Pages.
// BASE_PATH sätts av publiceringsflödet: "/korsade-hander" så länge sajten ligger på
// github.io-adressen, och tom när den egna domänen är kopplad.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  poweredByHeader: false,
  images: {
    // Bilderna skalas om i förväg av scripts/bilder.mjs, och lib/bildladdare.ts väljer rätt storlek.
    loader: "custom",
    loaderFile: "./lib/bildladdare.ts",
    deviceSizes: [480, 960, 1600],
    imageSizes: [],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
