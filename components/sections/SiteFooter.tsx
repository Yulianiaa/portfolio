import { LinkRow } from "@/components/ui/LinkButton";
import { ScrollTopButton } from "@/components/ui/ScrollTopButton";
import type { SocialLink } from "@/content/profile";

export function SiteFooter({ links }: { links: SocialLink[] }) {
  return (
    <footer className="flex w-full items-center justify-between">
      <LinkRow icon={false} links={links} />
      <ScrollTopButton label="Наверх" />
    </footer>
  );
}
