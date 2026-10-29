"use client";

import Link from "next/link";
import Image from "@/components/ui/AppImage";
import { reachGoal } from "@/lib/metrika";
import type { profile as ProfileType } from "@/content/profile";

const iconButtonClass =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-50 text-base font-medium text-neutral-800 transition-colors hover:bg-neutral-100";

export function HomeHeader({ profile }: { profile: typeof ProfileType }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="mx-auto flex w-full max-w-[800px] items-center justify-between px-3 py-3 tablet:px-6 lg:px-0">
        <Link href="/" aria-label="На главную" className={iconButtonClass}>
          <Image src="/assets/icons/logo-sign.svg" alt="Ульяна Прощенко" width={24} height={24} className="size-6" />
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Резюме"
            className={iconButtonClass}
          >
            CV
          </Link>
          <Link
            href={profile.contactUrl}
            onClick={() => reachGoal("contact_click")}
            aria-label="Написать"
            className="inline-flex size-11 items-center justify-center rounded-2xl bg-neutral-800 text-base font-medium text-white transition-colors hover:bg-neutral-700 tablet:w-auto tablet:px-3"
          >
            <Image src="/assets/icons/telegram.svg" alt="" width={28} height={28} className="size-[28px]" aria-hidden />
            <span className="hidden px-1 tablet:inline">Написать</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
