import { RichParagraph } from "@/components/ui/RichText";
import type { Paragraph } from "@/lib/content";
import { nbsp } from "@/lib/typography";

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex w-full flex-col items-start gap-1 text-base leading-6 text-neutral-800">
      {items.map((item) => (
        <li key={item} className="flex w-full items-start">
          <span className="shrink-0" aria-hidden>•&nbsp;&nbsp;</span>
          <span>{nbsp(item)}</span>
        </li>
      ))}
    </ul>
  );
}

export function RichBulletList({ items }: { items: Paragraph[] }) {
  return (
    <ul className="flex w-full flex-col items-start gap-1 text-base leading-6 text-neutral-800">
      {items.map((item, index) => (
        <li key={index} className="flex w-full items-start">
          <span className="shrink-0" aria-hidden>•&nbsp;&nbsp;</span>
          <RichParagraph segments={item} className="flex-1" />
        </li>
      ))}
    </ul>
  );
}
