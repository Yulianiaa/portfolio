import type { ReactNode } from "react";
import { RichText } from "@/components/ui/RichText";
import { LinkRow } from "@/components/ui/LinkButton";
import { BulletList } from "@/components/ui/BulletList";
import { ChipRow } from "@/components/ui/Chip";
import { MetricCards } from "@/components/ui/MetricCards";
import { CaseImage } from "@/components/ui/CaseImage";
import { ToggleBlock } from "@/components/ui/ToggleBlock";
import { nbsp } from "@/lib/typography";
import type { Chapter, Gap, Subsection } from "@/lib/content";

function marginClass(gap: Gap = "normal") {
  if (gap === "tight") return "mt-6"; // 24px
  if (gap === "loose") return "mt-10"; // 40px
  return "mt-8"; // 32px, default
}

function SubsectionText({ sub }: { sub: Subsection }) {
  return (
    <>
      {sub.subtitle && <h3 className="text-2xl font-medium text-neutral-800">{nbsp(sub.subtitle)}</h3>}
      {sub.body && sub.links && sub.linksAfterParagraph !== undefined ? (
        <>
          <RichText paragraphs={sub.body.slice(0, sub.linksAfterParagraph + 1)} />
          <LinkRow links={sub.links} large />
          {sub.body.length > sub.linksAfterParagraph + 1 && (
            <RichText paragraphs={sub.body.slice(sub.linksAfterParagraph + 1)} />
          )}
        </>
      ) : (
        <>
          {sub.body && <RichText paragraphs={sub.body} />}
          {sub.links && <LinkRow links={sub.links} large />}
        </>
      )}
      {sub.list && <BulletList items={sub.list} />}
    </>
  );
}

function SubsectionContent({ sub }: { sub: Subsection }) {
  return (
    <>
      {sub.quote && (
        <div className="w-full rounded-3xl bg-neutral-50 p-7">
          <p className="text-xl font-medium text-neutral-800">{nbsp(sub.quote)}</p>
        </div>
      )}
      {sub.toggle && <ToggleBlock options={sub.toggle} />}
      {!sub.toggle && sub.chips && <ChipRow chips={sub.chips} />}
      {!sub.toggle && sub.cards && <MetricCards cards={sub.cards} layout={sub.cardsLayout} />}
      {!sub.toggle && sub.image && <CaseImage image={sub.image} />}
    </>
  );
}

type Block = { gap: Gap; node: ReactNode };

export function CaseChapter({ chapter }: { chapter: Chapter }) {
  const [first, ...rest] = chapter.subsections;
  const firstHasText = !!(first && (first.subtitle || first.body || first.links || first.list));
  const firstHasContent = !!(first && (first.quote || first.toggle || first.chips || first.cards || first.image));
  // The chapter heading sits directly above its intro paragraph with a tight
  // 16px gap - unless that first subsection already has its own subtitle
  // (e.g. "Погружение" -> "Компания"), in which case it's a full 32px gap,
  // matching the regular rhythm between subsections.
  const headingGap = first?.subtitle ? "gap-8" : "gap-4";

  const blocks: Block[] = [
    {
      gap: "normal",
      node: (
        <div className={`flex w-full max-w-[936px] flex-col items-start ${headingGap}`}>
          <h2 className="w-full text-h2 font-bold text-neutral-800">{nbsp(chapter.heading)}</h2>
          {firstHasText && (
            <div className="flex w-full flex-col items-start gap-2">
              <SubsectionText sub={first} />
            </div>
          )}
        </div>
      ),
    },
  ];

  if (firstHasContent) {
    blocks.push({
      gap: first.contentGap ?? "normal",
      node: (
        <div className="flex w-full flex-col items-start gap-8">
          <SubsectionContent sub={first} />
        </div>
      ),
    });
  }

  rest.forEach((sub, i) => {
    const hasText = sub.subtitle || sub.body || sub.links || sub.list;
    const hasContent = sub.quote || sub.toggle || sub.chips || sub.cards || sub.image;
    if (hasText) {
      blocks.push({
        gap: sub.gapBefore ?? "normal",
        node: (
          <div key={`text-${i}`} className="flex w-full max-w-[936px] flex-col items-start gap-2">
            <SubsectionText sub={sub} />
          </div>
        ),
      });
    }
    if (hasContent) {
      blocks.push({
        gap: hasText ? (sub.contentGap ?? "normal") : (sub.gapBefore ?? "normal"),
        node: (
          <div key={`content-${i}`} className="flex w-full flex-col items-start gap-8">
            <SubsectionContent sub={sub} />
          </div>
        ),
      });
    }
  });

  return (
    <section className="flex w-full flex-col items-start">
      {blocks.map((block, i) => (
        <div key={i} className={`w-full ${i === 0 ? "" : marginClass(block.gap)}`}>
          {block.node}
        </div>
      ))}
    </section>
  );
}
