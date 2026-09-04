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
    <div className="flex w-full flex-col items-start gap-10">
      <CaseNavActions backHref={backHref} contactHref={contactHref} />
      <div className="flex w-full max-w-[936px] flex-col items-start gap-4">
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex flex-wrap items-center gap-4 text-lg text-neutral-500">
            {item.tags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="flex items-center py-2" aria-hidden>
                    <Image src="/assets/icons/bullet.svg" alt="" width={12} height={12} />
                  </span>
                )}
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-h1 font-bold text-neutral-800">{nbsp(item.title)}</h1>
        </div>
        <p className="text-lg text-neutral-800">{nbsp(item.description)}</p>
      </div>
      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-6 text-center sm:grid-cols-3 lg:grid-cols-5">
        {item.keyFacts.map((fact) => (
          <div key={fact.label} className="flex flex-col items-center gap-2">
            <p className="text-h2 font-bold text-neutral-800">{fact.value}</p>
            <p className="whitespace-pre-line text-lg text-neutral-500">{fact.label}</p>
          </div>
        ))}
      </div>
      <CaseImage image={item.cover} />
    </div>
  );
}
