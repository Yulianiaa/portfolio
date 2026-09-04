import type { Paragraph, Segment } from "@/lib/content";
import { nbsp } from "@/lib/typography";

function renderSegment(segment: Segment, i: number) {
  if (typeof segment === "string") return nbsp(segment);
  const className = [
    segment.strong ? "font-medium" : "",
    segment.tone === "success" ? "text-[#01b437]" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <span key={i} className={className || undefined}>
      {nbsp(segment.text)}
    </span>
  );
}

export function RichParagraph({ segments, className = "" }: { segments: Paragraph; className?: string }) {
  return (
    <p className={`text-lg leading-7 text-neutral-800 ${className}`}>
      {segments.map((segment, i) => (
        <span key={i}>{renderSegment(segment, i)}</span>
      ))}
    </p>
  );
}

export function RichText({ paragraphs, className = "" }: { paragraphs: Paragraph[]; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {paragraphs.map((p, i) => (
        <RichParagraph key={i} segments={p} />
      ))}
    </div>
  );
}
