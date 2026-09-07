import Image from "@/components/ui/AppImage";
import { CaseVideo } from "@/components/ui/CaseVideo";
import type { SectionImage } from "@/lib/content";

export function CaseImage({ image }: { image: SectionImage }) {
  if (image === "placeholder") {
    return (
      <div className="aspect-square w-full tablet:aspect-[1024/630] rounded-3xl border border-neutral-100 bg-neutral-50" />
    );
  }

  if ("video" in image) {
    return (
      <div className="relative aspect-square w-full tablet:aspect-[1024/630] overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50">
        <CaseVideo src={image.video} poster={image.poster} />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-square w-full tablet:aspect-[1024/630] overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50"
      style={image.bgColor ? { backgroundColor: image.bgColor } : undefined}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 1024px, 100vw"
        className={image.fit ? "object-contain tablet:object-cover" : "object-cover"}
      />
    </div>
  );
}
