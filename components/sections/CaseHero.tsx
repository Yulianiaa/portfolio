import Image from "@/components/ui/AppImage";
import { CaseImage } from "@/components/ui/CaseImage";
import { CaseNavActions } from "@/components/sections/CaseNavActions";
import { nbsp } from "@/lib/typography";
import type { CaseStudy } from "@/lib/content";

export function CaseHero({
  item,
  backHref,
  contactHref,
}: {
  item: CaseStudy;
  backHref: string;
  contactHref: string;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-8 tablet:gap-9 lg:gap-10">
      <CaseNavActions backHref={backHref} contactHref={contactHref} />
      <div className="flex w-full max-w-[936px] flex-col items-start gap-4">
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex flex-wrap items-center gap-4 text-base text-neutral-500 lg:text-lg">
            {item.tags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="flex items-center py-1.5 lg:py-2" aria-hidden>
                    <Image src="/assets/icons/bullet.svg" alt="" width={12} height={12} />
                  </span>
                )}
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-h2 font-bold text-neutral-800 lg:text-h1">{nbsp(item.title)}</h1>
        </div>
        <p className="text-base text-neutral-800 lg:text-lg">{nbsp(item.description)}</p>
      </div>
      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-4 text-center tablet:grid-cols-5">
        {item.keyFacts.map((fact) => (
          <div key={fact.label} className="flex flex-col items-center gap-2">
            <p className="text-h25 font-bold text-neutral-800 lg:text-h2">{fact.value}</p>
            <p className="whitespace-pre-line text-base text-neutral-500 lg:text-lg">{fact.label}</p>
          </div>
        ))}
      </div>
      <CaseImage image={item.cover} />
    </div>
  );
}
