import { BiChevronDown } from "react-icons/bi";
import { RichText } from "@/components/ui/RichText";
import { BulletList } from "@/components/ui/BulletList";
import { nbsp } from "@/lib/typography";
import type { DropCard as DropCardType } from "@/lib/content";

export function DropCard({ card }: { card: DropCardType }) {
  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-3xl border border-neutral-150 p-6 lg:p-7">
      <div className="flex w-full flex-col items-start gap-2">
        <h4 className="text-xl font-medium text-neutral-800 lg:text-2xl">{nbsp(card.title)}</h4>
        <RichText paragraphs={card.body} />
        {card.list && <BulletList items={card.list} />}
      </div>
      <span className="inline-flex h-10 items-center justify-center gap-1 rounded-xl bg-neutral-800 px-2.5 text-base font-medium text-white lg:h-12 lg:rounded-2xl lg:px-3 lg:text-lg">
        Читать
        <BiChevronDown className="size-6 lg:size-[28px]" aria-hidden />
      </span>
    </div>
  );
}
