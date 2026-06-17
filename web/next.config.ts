import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export so it can be hosted on GitHub Pages
  output: "export",
  // /resume -> /resume/ and emit /resume/index.html (clean URLs on Pages)
  trailingSlash: true,
  // The default image optimizer needs a server; disable it for static export
  images: { unoptimized: true },
};

export default nextConfig;
