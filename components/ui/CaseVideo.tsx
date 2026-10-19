"use client";

import { useEffect, useRef } from "react";
import { basePath } from "@/lib/basePath";

export function CaseVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Changing `src` updates the same <video> element rather than remounting it
  // (e.g. switching toggle options), so the intersection observer above won't
  // re-fire - explicitly (re)start playback whenever the source changes.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={ref}
      src={`${basePath}${src}`}
      poster={poster ? `${basePath}${poster}` : undefined}
      loop
      muted
      playsInline
      preload="metadata"
      className="size-full object-cover"
    />
  );
}
