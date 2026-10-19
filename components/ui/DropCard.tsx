"use client";

import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { RichText } from "@/components/ui/RichText";
import { BulletList } from "@/components/ui/BulletList";
import { MetricCards } from "@/components/ui/MetricCards";
import { CaseImage } from "@/components/ui/CaseImage";
import { LinkRow } from "@/components/ui/LinkButton";
import { buttonClassName } from "@/components/ui/Button";
import { nbsp } from "@/lib/typography";
import type { DropCard as DropCardType } from "@/lib/content";

export function DropCard({ card }: { card: DropCardType }) {
  const [open, setOpen] = useState(false);
  const expanded = card.expanded;

  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-3xl border border-neutral-150 p-6 lg:p-7">
      <div className="flex w-full flex-col items-start gap-2">
        <h4 className="text-xl font-medium text-neutral-800 lg:text-2xl">{nbsp(card.title)}</h4>
        {open && expanded ? (
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full flex-col items-start gap-2">
              <RichText paragraphs={expanded.body} />
              {expanded.links && <LinkRow links={expanded.links} large />}
            </div>
            {expanded.image && <CaseImage image={expanded.image} />}
            {expanded.keyFacts && (
              <div className="grid w-full grid-cols-2 gap-x-4 gap-y-4 py-2 text-center tablet:grid-cols-4">
                {expanded.keyFacts.map((fact) => (
                  <div key={fact.label} className="flex flex-col items-center gap-2">
                    <p className="text-h25 font-bold text-neutral-800 lg:text-h2">{fact.value}</p>
                    <p className="text-base text-neutral-500 lg:text-lg">{fact.label}</p>
                  </div>
                ))}
              </div>
            )}
            {expanded.afterFacts && (
              <div className="flex w-full flex-col items-start gap-2">
                <RichText paragraphs={expanded.afterFacts} />
                {expanded.list && <BulletList items={expanded.list} />}
              </div>
            )}
            {expanded.cards && <MetricCards cards={expanded.cards} layout="grid2" />}
            {expanded.closing && <RichText paragraphs={expanded.closing} />}
          </div>
        ) : (
          <>
            <RichText paragraphs={card.body} />
            {card.list && <BulletList items={card.list} />}
          </>
        )}
      </div>
      {expanded && (
        <button type="button" className={buttonClassName("primary")} onClick={() => setOpen((v) => !v)}>
          {open ? "Свернуть" : "Читать"}
          {open ? (
            <BiChevronUp className="size-6 lg:size-[28px]" aria-hidden />
          ) : (
            <BiChevronDown className="size-6 lg:size-[28px]" aria-hidden />
          )}
        </button>
      )}
      {!expanded && (
        <button type="button" className={buttonClassName("primary")}>
          Читать
          <BiChevronDown className="size-6 lg:size-[28px]" aria-hidden />
        </button>
      )}
    </div>
  );
}
