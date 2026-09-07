import Link from "next/link";
import Image from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";
import { HeaderNav } from "@/components/sections/HeaderNav";
import type { profile as ProfileType } from "@/content/profile";

export function SiteHeader({ profile }: { profile: typeof ProfileType }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="relative mx-auto flex w-full max-w-[1024px] flex-col gap-2 px-6 py-3 sm:h-20 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:py-0 lg:px-0">
        <div className="flex items-center justify-between sm:contents">
          <Link
            href="/"
            aria-label="На главную"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 p-2 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0"
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
          <Button
            href={profile.contactUrl}
            label="Написать"
            iconSrc="/assets/icons/telegram.svg"
            variant="primary"
          />
        </div>
        <HeaderNav />
      </div>
    </header>
  );
}
