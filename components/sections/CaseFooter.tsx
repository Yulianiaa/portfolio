import Image from "@/components/ui/AppImage";
import { LinkRow } from "@/components/ui/LinkButton";
import type { CaseStudy } from "@/lib/content";
import type { SocialLink } from "@/content/profile";

export function CaseFooter({ author, links }: { author: CaseStudy["author"]; links: SocialLink[] }) {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
      <div className="flex items-center gap-3">
        <div className="relative size-10 shrink-0 overflow-hidden rounded-xl">
          <Image src={author.avatar} alt={author.name} fill sizes="40px" className="object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-medium text-neutral-800">{author.name}</p>
          <p className="text-sm text-neutral-500">{author.role}</p>
        </div>
      </div>
      <LinkRow icon={false} links={links} />
    </footer>
  );
}
