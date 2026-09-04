import Image from "@/components/ui/AppImage";
import type { ExperienceItem } from "@/content/profile";

export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <section id="experience" className="flex w-full max-w-[936px] scroll-mt-24 flex-col items-start gap-6">
      <h2 className="text-2xl font-medium text-neutral-800">Опыт работы</h2>
      <div className="flex w-full flex-col items-start gap-4">
        {items.map((item) => (
          <div key={item.company} className="flex w-full max-w-[800px] items-center gap-4">
            <div
              className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl"
              style={{ backgroundColor: item.logoBg }}
            >
              <Image src={item.logo} alt="" width={item.logoWidth} height={item.logoHeight} className="object-contain" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <p className="text-xl font-medium text-neutral-800">{item.company}</p>
              <p className="text-lg text-neutral-500">
                {item.position} • {item.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
