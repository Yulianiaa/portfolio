"use client";

import Link from "next/link";
import Image from "@/components/ui/AppImage";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { reachGoal } from "@/lib/metrika";
import type { profile as ProfileType } from "@/content/profile";

const iconButtonClass =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-50 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700";

export function HomeHeader({ profile }: { profile: typeof ProfileType }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-neutral-900">
      <div className="mx-auto flex w-full max-w-[800px] items-center justify-between px-3 py-3 tablet:px-6 lg:px-0">
        <ThemeToggle className={iconButtonClass} />
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
            className="inline-flex size-11 items-center justify-center rounded-2xl bg-neutral-800 text-base font-medium text-white transition-colors hover:bg-neutral-700 tablet:w-auto tablet:px-3 dark:bg-neutral-50 dark:text-neutral-800 dark:hover:bg-neutral-100"
          >
            <Image src="/assets/icons/telegram.svg" alt="" width={28} height={28} className="size-[28px] dark:hidden" aria-hidden />
            <Image
              src="/assets/icons/telegram-dark.svg"
              alt=""
              width={28}
              height={28}
              className="hidden size-[28px] dark:block"
              aria-hidden
            />
            <span className="hidden px-1 tablet:inline">Написать</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
