import Image from "@/components/ui/AppImage";

const noiseBg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export function BlurredCover({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[1024/630] w-full overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="scale-110 object-cover blur-lg"
      />
      <div
        className="absolute inset-0 opacity-60 contrast-200 mix-blend-overlay"
        style={{ backgroundImage: `url("${noiseBg}")` }}
        aria-hidden
      />
    </div>
  );
}
