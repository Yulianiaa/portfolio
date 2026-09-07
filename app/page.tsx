import { getCases, getProfile } from "@/lib/content";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { CaseCard } from "@/components/sections/CaseCard";
import { ExperienceList } from "@/components/sections/ExperienceList";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  const profile = getProfile();
  const cases = getCases();

  return (
    <div id="top" className="flex flex-1 flex-col items-center">
      <SiteHeader profile={profile} />
      <main className="flex w-full max-w-[1024px] flex-col items-start gap-12 px-6 pt-9 pb-24 tablet:gap-14 tablet:pt-10 tablet:pb-10 lg:gap-16 lg:px-0 lg:pt-12 lg:pb-12">
        <Hero profile={profile} />
        <section id="cases" className="flex w-full scroll-mt-24 flex-col items-start gap-8 tablet:gap-9 lg:gap-10">
          {cases.map((item) => (
            <CaseCard key={item.slug} item={item} />
          ))}
        </section>
        <ExperienceList items={profile.experience} />
        <SiteFooter links={profile.socialLinks} />
      </main>
    </div>
  );
}
