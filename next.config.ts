import type { NextConfig } from "next";

// Deploying to GitHub Pages. The build sets NEXT_PUBLIC_BASE_PATH=/portfolio
// (see .github/workflows/deploy.yml) so the site works at
// yulianiaa.github.io/portfolio; a plain local `npm run build` has no
// basePath, so it can be previewed at "/". Once a custom domain is attached
// (serving from "/"), remove NEXT_PUBLIC_BASE_PATH from the workflow.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
