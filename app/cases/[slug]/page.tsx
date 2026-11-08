import { notFound } from "next/navigation";
import { getCaseBySlug, getReadyCases, getProfile } from "@/lib/content";
import { CaseHero } from "@/components/sections/CaseHero";
import { CaseChapter } from "@/components/sections/CaseChapter";
import { HomeHeader } from "@/components/sections/HomeHeader";

export function generateStaticParams() {
  return getReadyCases().map((item) => ({ slug: item.slug }));
}

export default async function CasePage({ params }: PageProps<"/cases/[slug]">) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  const profile = getProfile();

  return (
    <div className="flex flex-1 flex-col items-center">
      <HomeHeader profile={profile} />
      <main className="flex w-full max-w-none flex-col items-start gap-10 px-3 pt-7 pb-24 tablet:px-6 tablet:pt-[46px] tablet:pb-12 lg:mx-auto lg:max-w-[800px] lg:px-0">
        <CaseHero item={item}>
          {item.chapters.map((chapter) => (
            <CaseChapter key={chapter.heading} chapter={chapter} />
          ))}
        </CaseHero>
      </main>
    </div>
  );
}
