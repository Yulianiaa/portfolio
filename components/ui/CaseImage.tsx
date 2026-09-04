import Image from "@/components/ui/AppImage";
import { basePath } from "@/lib/basePath";
import type { SectionImage } from "@/lib/content";

export function CaseImage({ image }: { image: SectionImage }) {
  if (image === "placeholder") {
    return (
      <div className="aspect-[1024/630] w-full rounded-3xl border border-neutral-100 bg-neutral-50" />
    );
  }

  if ("video" in image) {
    return (
      <div className="relative aspect-[1024/630] w-full overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50">
        <video
          src={`${basePath}${image.video}`}
          poster={image.poster ? `${basePath}${image.poster}` : undefined}
          controls
          playsInline
          preload="metadata"
          className="size-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[1024/630] w-full overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="object-cover"
      />
    </div>
  );
}
