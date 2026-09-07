import Image from "@/components/ui/AppImage";
import { LinkRow } from "@/components/ui/LinkButton";
import type { CaseStudy } from "@/lib/content";
import type { SocialLink } from "@/content/profile";

export function CaseFooter({ author, links }: { author: CaseStudy["author"]; links: SocialLink[] }) {
  return (
    <footer className="flex w-full items-center justify-center tablet:justify-between">
      <div className="hidden items-center gap-3 tablet:flex">
        <div className="relative size-10 shrink-0 overflow-hidden rounded-xl">
          <Image src={author.avatar} alt={author.name} fill sizes="40px" className="object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-base font-medium text-neutral-800 lg:text-lg">{author.name}</p>
          <p className="text-sm text-neutral-500">{author.role}</p>
        </div>
      </div>
      <LinkRow icon={false} links={links} />
    </footer>
  );
}
