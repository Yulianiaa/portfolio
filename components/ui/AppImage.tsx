import NextImage, { type ImageProps } from "next/image";
import { basePath } from "@/lib/basePath";

/**
 * Thin wrapper around next/image that prefixes local ("/...") sources with
 * basePath. With `images.unoptimized: true` (required for static export),
 * next/image does NOT do this automatically the way it does for CSS/JS
 * assets, so every local image would 404 once deployed under a basePath.
 */
export default function AppImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" && src.startsWith("/") ? `${basePath}${src}` : src;
  return <NextImage src={resolvedSrc} {...props} />;
}
