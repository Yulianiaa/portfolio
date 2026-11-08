import type { Paragraph, Segment } from "@/lib/content";
import Link from "next/link";
import { nbsp } from "@/lib/typography";

function renderSegment(segment: Segment, i: number) {
  if (typeof segment === "string") return nbsp(segment);
  const className = [
    segment.strong ? "font-medium" : "",
    segment.tone === "success" ? "text-[#01b437]" : "",
    segment.href ? "text-brand-500 hover:underline" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    segment.href ? (
      <Link key={i} href={segment.href} target="_blank" rel="noopener noreferrer" className={className || undefined}>
        {nbsp(segment.text)}
      </Link>
    ) : (
      <span key={i} className={className || undefined}>
        {nbsp(segment.text)}
      </span>
    )
  );
}

export function RichParagraph({ segments, className = "" }: { segments: Paragraph; className?: string }) {
  return (
    <p className={`text-base leading-6 text-neutral-800 ${className}`}>
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
