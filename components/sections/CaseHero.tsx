import type { ReactNode } from "react";
import { CaseImage } from "@/components/ui/CaseImage";
import { nbsp } from "@/lib/typography";
import type { CaseStudy } from "@/lib/content";

export function CaseHero({
  item,
  children,
}: {
  item: CaseStudy;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-8 tablet:gap-8 lg:gap-8">
      <div className="flex w-full max-w-[800px] flex-col items-start gap-2">
        <div className="flex w-full flex-col items-start gap-2">
          <p className="text-base text-neutral-500">
            {item.tags.join("\u00A0\u00A0•\u00A0\u00A0")}
          </p>
          <h1 className="text-h25 leading-10 font-semibold text-neutral-800">{nbsp(item.title)}</h1>
        </div>
        <p className="text-base leading-6 text-neutral-800">{nbsp(item.description)}</p>
      </div>
      <div
        className={`grid w-full grid-cols-2 gap-x-3 gap-y-3 pb-2 text-center ${
          item.keyFacts.length === 5 ? "tablet:grid-cols-5" : "tablet:grid-cols-4"
        }`}
      >
        {item.keyFacts.map((fact) => (
          <div key={`${fact.value}-${fact.label}`} className="flex flex-col items-center gap-1">
            <p className="text-2xl leading-8 font-semibold text-neutral-800">{fact.value}</p>
            <p className="whitespace-pre-line text-base leading-6 text-neutral-500">{fact.label}</p>
          </div>
        ))}
      </div>
      <div data-no-trail data-no-trail-below className="flex w-full flex-col gap-10">
        {item.coverMobile ? (
          <>
            <div className="w-full tablet:hidden">
              <CaseImage image={item.coverMobile} />
            </div>
            <div className="hidden w-full tablet:block">
              <CaseImage image={item.cover} />
            </div>
          </>
        ) : (
          <CaseImage image={item.cover} />
        )}
        {children}
      </div>
    </div>
  );
}
