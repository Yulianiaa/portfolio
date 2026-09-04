// Kept in sync with next.config.ts, which reads the same env var to set
// `basePath`/`assetPrefix`. Only plain `<a href="/...">` tags need this -
// next/link and next/image apply basePath automatically.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
