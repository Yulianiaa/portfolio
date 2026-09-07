"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import Image from "@/components/ui/AppImage";

function BackButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      aria-label="Назад"
      className="inline-flex h-10 items-center justify-center gap-1 rounded-xl border border-neutral-100 bg-neutral-50 px-2 py-2 transition-colors hover:bg-neutral-100 lg:h-12 lg:rounded-2xl lg:px-3 lg:py-0"
    >
      <BiArrowBack className="size-6 lg:size-[28px]" aria-hidden />
      <span className="hidden px-1 text-lg font-medium text-neutral-800 lg:inline">Назад</span>
    </Link>
  );
}

function ContactButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden h-10 items-center justify-center gap-1 rounded-xl bg-neutral-800 px-2.5 text-base font-medium text-white transition-colors hover:bg-neutral-700 tablet:inline-flex lg:h-12 lg:rounded-2xl lg:px-3 lg:text-lg"
    >
      <Image src="/assets/icons/telegram.svg" alt="" width={28} height={28} className="size-6 lg:size-[28px]" aria-hidden />
      <span className="px-1 lg:hidden">Контакты</span>
      <span className="hidden px-1 lg:inline">Написать</span>
    </Link>
  );
}

export function CaseNavActions({ backHref, contactHref }: { backHref: string; contactHref: string }) {
  const [stuck, setStuck] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={ref} className="flex w-full items-center justify-between">
        <BackButton href={backHref} />
        <ContactButton href={contactHref} />
      </div>
      <div
        className={`fixed inset-x-0 top-0 z-40 bg-white transition-transform duration-200 ${
          stuck ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1024px] items-center justify-between px-4 tablet:px-6 lg:px-0">
          <BackButton href={backHref} />
          <ContactButton href={contactHref} />
        </div>
      </div>
    </>
  );
}
