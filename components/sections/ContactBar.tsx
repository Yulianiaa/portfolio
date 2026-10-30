"use client";

import Link from "next/link";
import { reachGoal } from "@/lib/metrika";
import type { profile as ProfileType } from "@/content/profile";

const buttonClass =
  "inline-flex h-11 items-center justify-center rounded-2xl px-3.5 text-base font-medium text-white transition-colors hover:bg-neutral-700";

/**
 * Dark pill with the contact actions. Sticky: it sits at the end of the page as in Figma,
 * and stays pinned 32px (40px from tablet up) above the viewport bottom while the page scrolls under it.
 */
export function ContactBar({ profile }: { profile: typeof ProfileType }) {
  return (
    <nav aria-label="Контакты" className="sticky bottom-8 z-30 flex tablet:bottom-10 rounded-2xl bg-neutral-800 px-2.5">
      <Link href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        Резюме
      </Link>
      <Link href={profile.contactUrl} onClick={() => reachGoal("contact_click")} className={buttonClass}>
        Телеграм
      </Link>
    </nav>
  );
}
