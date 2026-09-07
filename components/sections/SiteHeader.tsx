import Link from "next/link";
import Image from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";
import { FixedWriteButton } from "@/components/ui/FixedWriteButton";
import { HeaderNav } from "@/components/sections/HeaderNav";
import { MobileMenu } from "@/components/sections/MobileMenu";
import type { profile as ProfileType } from "@/content/profile";

export function SiteHeader({ profile }: { profile: typeof ProfileType }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="relative mx-auto flex h-20 w-full max-w-[1024px] items-center justify-between px-6 lg:px-0">
        <Link
          href="/"
          aria-label="На главную"
          className="inline-flex items-center justify-center rounded-xl p-2 lg:rounded-none lg:p-0"
        >
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="Ульяна Прощенко"
            width={24}
            height={24}
            className="size-6 lg:hidden"
          />
          <Image
            src="/assets/icons/logo-mark.svg"
            alt="Ульяна Прощенко"
            width={28}
            height={28}
            className="hidden lg:block"
          />
        </Link>
        <HeaderNav />
        <MobileMenu contactHref={profile.contactUrl} />
        <div className="hidden tablet:block">
          <Button
            href={profile.contactUrl}
            label="Написать"
            iconSrc="/assets/icons/telegram.svg"
            variant="primary"
          />
        </div>
      </div>
      <FixedWriteButton href={profile.contactUrl} />
    </header>
  );
}
