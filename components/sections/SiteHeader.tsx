import Link from "next/link";
import Image from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";
import { HeaderNav } from "@/components/sections/HeaderNav";
import type { profile as ProfileType } from "@/content/profile";

export function SiteHeader({ profile }: { profile: typeof ProfileType }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="relative mx-auto flex w-full max-w-[1024px] flex-col gap-2 px-4 py-3 sm:h-20 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-0 sm:py-0">
        <div className="flex items-center justify-between sm:contents">
          <Link href="/" aria-label="На главную" className="flex items-center">
            <Image src="/assets/icons/logo-mark.svg" alt="Ульяна Прощенко" width={28} height={28} />
          </Link>
          <Button
            href={profile.contactUrl}
            label="Написать"
            iconSrc="/assets/icons/telegram.svg"
            variant="primary"
          />
        </div>
        <HeaderNav resumeUrl={profile.resumeUrl} />
      </div>
    </header>
  );
}
