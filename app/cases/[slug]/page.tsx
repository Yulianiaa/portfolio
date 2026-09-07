import { notFound } from "next/navigation";
import { getCaseBySlug, getReadyCases, getProfile } from "@/lib/content";
import { CaseHero } from "@/components/sections/CaseHero";
import { CaseChapter } from "@/components/sections/CaseChapter";
import { CaseFooter } from "@/components/sections/CaseFooter";
import { FixedWriteButton } from "@/components/ui/FixedWriteButton";

export function generateStaticParams() {
  return getReadyCases().map((item) => ({ slug: item.slug }));
}

export default async function CasePage({ params }: PageProps<"/cases/[slug]">) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  const profile = getProfile();

  return (
    <div className="flex flex-1 justify-center">
      <main className="flex w-full max-w-[1024px] flex-col items-start gap-12 px-4 pt-10 pb-24 tablet:gap-14 tablet:px-6 tablet:pt-12 tablet:pb-12 lg:gap-16 lg:px-0">
        <CaseHero item={item} backHref="/" contactHref={profile.contactUrl} />
        {item.chapters.map((chapter) => (
          <CaseChapter key={chapter.heading} chapter={chapter} />
        ))}
        <CaseFooter author={item.author} links={profile.socialLinks} />
      </main>
      <FixedWriteButton href={profile.contactUrl} />
    </div>
  );
}
