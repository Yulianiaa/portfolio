"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "@/components/ui/AppImage";
import { BiArrowBack } from "react-icons/bi";
import { reachGoal } from "@/lib/metrika";
import type { profile as ProfileType } from "@/content/profile";

const iconButtonClass =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-50 text-neutral-700 transition-colors hover:bg-neutral-100";

export function HomeHeader({ profile, backHref }: { profile: typeof ProfileType; backHref?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        document.body.scrollTop,
      );
      setScrolled(scrollTop > 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true, capture: true });
    window.addEventListener("pageshow", update);
    return () => {
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update, true);
      window.removeEventListener("pageshow", update);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 h-[68px] w-full transition-colors duration-200 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-none items-center justify-between px-3 py-3 tablet:px-6 lg:max-w-[800px] lg:px-0">
        <Link
          href={backHref ?? "#top"}
          onClick={(event) => {
            if (backHref) return;
            event.preventDefault();
            const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "auto"
              : "smooth";
            window.scrollTo({ top: 0, behavior });
          }}
          aria-label="На главную"
          className={iconButtonClass}
        >
          <BiArrowBack className="size-5" aria-hidden />
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Резюме"
            className={`${iconButtonClass} font-medium`}
          >
            CV
          </Link>
          <Link
            href={profile.contactUrl}
            onClick={() => reachGoal("contact_click")}
            aria-label="Телеграм"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-800 transition-colors hover:bg-neutral-700"
          >
            <Image src="/assets/icons/telegram.svg" alt="" width={28} height={28} aria-hidden />
          </Link>
        </div>
      </div>
    </header>
  );
}
