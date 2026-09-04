import { notFound } from "next/navigation";
import { getCaseBySlug, getReadyCases, getProfile } from "@/lib/content";
import { CaseHero } from "@/components/sections/CaseHero";
import { CaseChapter } from "@/components/sections/CaseChapter";
import { CaseFooter } from "@/components/sections/CaseFooter";

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
      <main className="flex w-full max-w-[1024px] flex-col items-start gap-16 px-4 py-12 sm:px-0">
        <CaseHero item={item} backHref="/" contactHref={profile.contactUrl} />
        {item.chapters.map((chapter) => (
          <CaseChapter key={chapter.heading} chapter={chapter} />
        ))}
        <CaseFooter author={item.author} links={profile.socialLinks} />
      </main>
    </div>
  );
}
