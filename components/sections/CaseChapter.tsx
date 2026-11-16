import type { ReactNode } from "react";
import { RichText } from "@/components/ui/RichText";
import { LinkRow } from "@/components/ui/LinkButton";
import { BulletList, RichBulletList } from "@/components/ui/BulletList";
import { ChipRow } from "@/components/ui/Chip";
import { MetricCards } from "@/components/ui/MetricCards";
import { CaseImage } from "@/components/ui/CaseImage";
import { ToggleBlock } from "@/components/ui/ToggleBlock";
import { DropCard } from "@/components/ui/DropCard";
import { nbsp } from "@/lib/typography";
import type { Chapter, Gap, Subsection } from "@/lib/content";

function DesktopResearch({ chapter }: { chapter: Chapter }) {
  const research = chapter.desktopResearch;
  if (!research) return null;
  return (
    <div className="hidden w-full flex-col items-start gap-8 tablet:flex">
      <h2 className="w-full text-2xl leading-8 font-semibold text-neutral-800">{nbsp(chapter.heading)}</h2>
      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <h3 className="text-lg leading-7 font-semibold text-neutral-800">Опрос</h3>
            <RichText paragraphs={research.survey.body} />
            <RichText paragraphs={research.survey.followup} />
          </div>
          <div className="grid w-full grid-cols-4 gap-3 text-center">
            {research.survey.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col items-center gap-1">
                <p className="text-2xl leading-8 font-semibold text-neutral-800">{fact.value}</p>
                <p className="text-base leading-6 text-neutral-500">{fact.label}</p>
              </div>
            ))}
          </div>
          <RichText paragraphs={research.survey.insightsIntro} />
          <div className="grid w-full grid-cols-2 gap-3">
            {research.survey.insights.map((card, index) => (
              <div key={card.title} className="flex flex-col items-start gap-1 rounded-2xl bg-neutral-50 p-6">
                <p className="text-base leading-6 font-medium text-neutral-800">{String(index + 1).padStart(2, "0")}</p>
                <p className="text-sm leading-5 text-neutral-500">{nbsp(card.description)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <h3 className="text-lg leading-7 font-semibold text-neutral-800">Анализ конкурентов</h3>
            <RichText paragraphs={research.competitors.body} />
          </div>
          <CaseImage image={research.competitors.image} />
          <div className="flex w-full flex-col items-start gap-2">
            <RichText paragraphs={research.competitors.intro} />
            <BulletList items={research.competitors.findings} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileResearch({ chapter }: { chapter: Chapter }) {
  const research = chapter.desktopResearch;
  if (!research) return null;

  return (
    <div className="flex w-full flex-col items-start gap-8 tablet:hidden">
      <h2 className="w-full text-2xl leading-8 font-semibold text-neutral-800">{nbsp(chapter.heading)}</h2>
      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <h3 className="text-lg leading-7 font-semibold text-neutral-800">Опрос</h3>
            <RichText paragraphs={research.survey.body} />
            <RichText paragraphs={research.survey.followup} />
          </div>
          <div className="grid w-full grid-cols-2 gap-3 text-center">
            {research.survey.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col items-center gap-1">
                <p className="text-2xl leading-8 font-semibold text-neutral-800">{fact.value}</p>
                <p className="text-base leading-6 text-neutral-500">{fact.label}</p>
              </div>
            ))}
          </div>
          <RichText paragraphs={research.survey.insightsIntro} />
          <div className="flex w-full flex-col items-start gap-3">
            {research.survey.insights.map((card, index) => (
              <div key={card.title} className="flex w-full flex-col items-start gap-1 rounded-2xl bg-neutral-50 p-6">
                <p className="text-base leading-6 font-medium text-neutral-800">{String(index + 1).padStart(2, "0")}</p>
                <p className="text-sm leading-5 text-neutral-500">{nbsp(card.description)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-2">
            <h3 className="text-lg leading-7 font-semibold text-neutral-800">Анализ конкурентов</h3>
            <RichText paragraphs={research.competitors.body} />
          </div>
          <CaseImage image={research.competitors.mobileImage ?? research.competitors.image} />
          <div className="flex w-full flex-col items-start gap-2">
            <RichText paragraphs={research.competitors.intro} />
            <BulletList items={research.competitors.findings} />
          </div>
        </div>
      </div>
    </div>
  );
}

function marginClass(gap: Gap = "normal", tabletGap?: Gap) {
  if (tabletGap !== undefined) {
    const mobileClasses: Record<Gap, string> = {
      xtight: "mt-4",
      tight: "mt-6",
      normal: "mt-6",
      loose: "mt-8",
    };
    const tabletClasses: Record<Gap, string> = {
      xtight: "tablet:mt-4",
      tight: "tablet:mt-6",
      normal: "tablet:mt-8",
      loose: "tablet:mt-10",
    };
    const desktop = gap === "normal" ? "lg:mt-8" : gap === "loose" ? "lg:mt-10" : "";
    return [mobileClasses[gap], tabletClasses[tabletGap], desktop].filter(Boolean).join(" ");
  }
  if (gap === "xtight") return "mt-4"; // 16px at every breakpoint
  if (gap === "tight") return "mt-6"; // 24px at every breakpoint
  if (gap === "loose") return "mt-8 tablet:mt-9 lg:mt-10"; // 32px mobile / 36px tablet / 40px desktop
  return "mt-6 tablet:mt-7 lg:mt-8"; // 24px mobile / 28px tablet / 32px desktop, default
}

function SubsectionText({ sub }: { sub: Subsection }) {
  return (
    <>
      {sub.subtitle && <h3 className="text-lg leading-7 font-semibold text-neutral-800">{nbsp(sub.subtitle)}</h3>}
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
      {sub.richList && <RichBulletList items={sub.richList} />}
      {sub.afterList && !sub.afterListCard && <RichText paragraphs={sub.afterList} />}
    </>
  );
}

function SubsectionContent({ sub }: { sub: Subsection }) {
  return (
    <>
      {sub.afterList && sub.afterListCard && (
        <div className="w-full rounded-2xl bg-neutral-50 p-6">
          <RichText paragraphs={sub.afterList} className="font-medium" />
        </div>
      )}
      {sub.quote && (
        <div className="w-full rounded-2xl bg-neutral-50 p-6">
          <p className="text-base leading-6 font-medium text-neutral-800">{nbsp(sub.quote)}</p>
        </div>
      )}
      {sub.toggle && <ToggleBlock options={sub.toggle} />}
      {!sub.toggle && sub.chips && <ChipRow chips={sub.chips} />}
      {!sub.toggle && sub.cards && <MetricCards cards={sub.cards} layout={sub.cardsLayout} />}
      {!sub.toggle &&
        sub.dropCards &&
        sub.dropCards.map((card) => <DropCard key={card.title} card={card} />)}
      {!sub.toggle && sub.image && sub.mobileImage ? (
        <>
          <div className="w-full tablet:hidden">
            <CaseImage image={sub.mobileImage} />
          </div>
          <div className="hidden w-full tablet:block">
            <CaseImage image={sub.image} />
          </div>
        </>
      ) : (
        !sub.toggle && sub.image && <CaseImage image={sub.image} />
      )}
    </>
  );
}

type Block = { gap: Gap; tabletGap?: Gap; node: ReactNode };

export function CaseChapter({ chapter }: { chapter: Chapter }) {
  if (chapter.desktopResearch) {
    return (
      <section className="flex w-full flex-col items-start">
        <MobileResearch chapter={chapter} />
        <DesktopResearch chapter={chapter} />
      </section>
    );
  }
  return <CaseChapterContent chapter={chapter} />;
}

function CaseChapterContent({ chapter }: { chapter: Chapter }) {
  const [first, ...rest] = chapter.subsections;
  const firstHasText = !!(first && (first.subtitle || first.body || first.links || first.list || first.richList));
  const firstHasContent = !!(
    first &&
    (first.quote || first.toggle || first.chips || first.cards || first.dropCards || first.image || (first.afterList && first.afterListCard))
  );
  // The chapter heading sits directly above its intro paragraph with a tight
  // 16px gap - unless that first subsection already has its own subtitle
  // (e.g. "Погружение" -> "Компания"), in which case it's a full 32px gap,
  // matching the regular rhythm between subsections.
  const headingGap = first?.subtitle ? "gap-6 tablet:gap-8" : "gap-4";

  const blocks: Block[] = [
    {
      gap: "normal",
      node: (
        <div className={`flex w-full max-w-[800px] flex-col items-start ${headingGap}`}>
          <h2 className="w-full text-2xl leading-8 font-semibold text-neutral-800">{nbsp(chapter.heading)}</h2>
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
        <div className={`flex w-full flex-col items-start ${first.afterListCard ? "gap-8" : "gap-7 lg:gap-8"}`}>
          <SubsectionContent sub={first} />
        </div>
      ),
    });
  }

  rest.forEach((sub, i) => {
    const hasText = sub.subtitle || sub.body || sub.links || sub.list || sub.richList;
    const hasContent = sub.quote || sub.toggle || sub.chips || sub.cards || sub.dropCards || sub.image || (sub.afterList && sub.afterListCard);
    if (hasText) {
      blocks.push({
        gap: sub.gapBefore ?? "normal",
        tabletGap: sub.tabletGapBefore,
        node: (
          <div key={`text-${i}`} className="flex w-full max-w-[800px] flex-col items-start gap-2">
            <SubsectionText sub={sub} />
          </div>
        ),
      });
    }
    if (hasContent) {
      blocks.push({
        gap: hasText ? (sub.contentGap ?? "normal") : (sub.gapBefore ?? "normal"),
        tabletGap: hasText ? undefined : sub.tabletGapBefore,
        node: (
          <div key={`content-${i}`} className={`flex w-full flex-col items-start ${sub.afterListCard ? "gap-8" : "gap-7 lg:gap-8"}`}>
            <SubsectionContent sub={sub} />
          </div>
        ),
      });
    }
  });

  return (
    <section className="flex w-full flex-col items-start">
      {blocks.map((block, i) => (
        <div key={i} className={`w-full ${i === 0 ? "" : marginClass(block.gap, block.tabletGap)}`}>
          {block.node}
        </div>
      ))}
    </section>
  );
}
