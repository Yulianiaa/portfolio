import { BiTime } from "react-icons/bi";
import { getCases, getProfile } from "@/lib/content";
import { HomeHeader } from "@/components/sections/HomeHeader";
import { Hero } from "@/components/sections/Hero";
import { HomeTabs } from "@/components/sections/HomeTabs";
import { CaseCard } from "@/components/sections/CaseCard";
import { ExperienceList } from "@/components/sections/ExperienceList";

export default function Home() {
  const profile = getProfile();
  const cases = getCases();

  return (
    <div id="top" className="flex flex-1 flex-col items-center">
      <HomeHeader profile={profile} />
      <main className="flex w-full max-w-[800px] flex-col items-center gap-8 pt-[52px] pb-10 tablet:px-6 tablet:pt-14 lg:px-0 lg:pt-[52px]">
        <Hero profile={profile} />
        <HomeTabs
          tabs={[
            {
              id: "cases",
              label: "Кейсы",
              content: (
                <section className="flex w-full flex-col items-start gap-10">
                  {cases.map((item) => (
                    <CaseCard key={item.slug} item={item} />
                  ))}
                </section>
              ),
            },
            {
              id: "concepts",
              label: "Концепты",
              content: (
                <div className="flex h-[250px] w-full flex-col items-center justify-center gap-3 bg-neutral-50 tablet:h-[416px] tablet:rounded-2xl">
                  <BiTime className="size-8 text-neutral-800" aria-hidden />
                  <p className="text-base font-medium text-neutral-800">Концепты скоро появятся</p>
                </div>
              ),
            },
            {
              id: "about",
              label: "Обо мне",
              content: (
                <div className="px-3 tablet:px-0">
                  <ExperienceList items={profile.experience} />
                </div>
              ),
            },
          ]}
        />
      </main>
    </div>
  );
}
