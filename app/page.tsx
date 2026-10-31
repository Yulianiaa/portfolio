import { BiTime } from "react-icons/bi";
import { getCases, getProfile } from "@/lib/content";
import { HomeHeader } from "@/components/sections/HomeHeader";
import { Hero } from "@/components/sections/Hero";
import { DotTrail } from "@/components/ui/DotTrail";
import { HomeTabs } from "@/components/sections/HomeTabs";
import { CaseCard } from "@/components/sections/CaseCard";
import { AboutSection } from "@/components/sections/AboutSection";

export default function Home() {
  const profile = getProfile();
  const cases = getCases();

  return (
    <div id="top" className="flex flex-1 flex-col items-center">
      <DotTrail />
      <HomeHeader profile={profile} />
      <main className="flex w-full max-w-[800px] flex-col items-center gap-8 px-px pt-[52px] pb-10 tablet:px-6 tablet:pt-14 tablet:pb-10 lg:px-0 lg:pt-[52px] lg:pb-[60px]">
        <Hero profile={profile} />
        <HomeTabs
          tabs={[
            {
              id: "cases",
              label: "Кейсы",
              content: (
                <section className="flex w-full flex-col items-start gap-10">
                  {cases.map((item, index) => (
                    <CaseCard key={item.slug} item={item} noTrailBelow={index === 0} />
                  ))}
                </section>
              ),
            },
            {
              id: "concepts",
              label: "Концепты",
              hidden: true,
              content: (
                <div className="flex aspect-[7/4] w-full flex-col items-center justify-center gap-3 bg-neutral-50 tablet:rounded-2xl">
                  <BiTime className="size-8 text-neutral-800" aria-hidden />
                  <p className="text-base font-medium text-neutral-800">Концепты скоро появятся</p>
                </div>
              ),
            },
            {
              id: "about",
              label: "Обо мне",
              content: (
                <AboutSection about={profile.about} />
              ),
            },
          ]}
        />
      </main>
    </div>
  );
}
