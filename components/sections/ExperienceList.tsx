import Image from "@/components/ui/AppImage";
import type { ExperienceItem } from "@/content/profile";

export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <section id="experience" className="flex w-full max-w-[936px] scroll-mt-24 flex-col items-start gap-5 tablet:gap-6">
      <h2 className="text-xl font-medium text-neutral-800 lg:text-2xl">Опыт работы</h2>
      <div className="flex w-full flex-col items-start gap-4">
        {items.map((item) => (
          <div key={item.company} className="flex w-full max-w-[800px] items-start gap-3 tablet:items-center lg:gap-4">
            <div
              className="relative size-10 shrink-0 overflow-hidden rounded-[10px] tablet:size-11 tablet:rounded-xl lg:size-12 lg:rounded-2xl"
              style={{ backgroundColor: item.logoBg }}
            >
              <div className="absolute inset-2">
                <Image src={item.logo} alt="" fill sizes="48px" className="object-contain" />
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <p className="text-base font-medium text-neutral-800 tablet:text-lg lg:text-xl">{item.company}</p>
              <p className="text-sm text-neutral-500 tablet:text-base lg:text-lg">
                {item.position} • {item.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
