"use client";

import { useEffect, useState } from "react";
import Image from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";
import { smoothScrollToElement } from "@/lib/smoothScroll";

const linkClass =
  "flex h-10 shrink-0 items-center rounded-xl px-2.5 text-base font-medium text-neutral-800 hover:bg-neutral-50 transition-colors";

export function MobileMenu({ contactHref }: { contactHref: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [open]);

  function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    setOpen(false);
    smoothScrollToElement(el);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Открыть меню"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-xl p-2 tablet:hidden"
      >
        <Image src="/assets/icons/menu.svg" alt="" width={24} height={24} className="size-6" aria-hidden />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white tablet:hidden">
          <div className="flex h-20 w-full shrink-0 items-center justify-between px-6">
            <Image src="/assets/icons/logo-icon.svg" alt="Ульяна Прощенко" width={24} height={24} className="size-6" />
            <button
              type="button"
              aria-label="Закрыть меню"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-xl p-2"
            >
              <Image src="/assets/icons/close.svg" alt="" width={24} height={24} className="size-6" aria-hidden />
            </button>
          </div>
          <nav className="flex flex-col items-start gap-3 px-6 pt-2">
            <a href="#cases" className={linkClass} onClick={(e) => scrollToSection(e, "cases")}>
              Кейсы
            </a>
            <a href="#experience" className={linkClass} onClick={(e) => scrollToSection(e, "experience")}>
              Опыт
            </a>
          </nav>
          <div className="fixed inset-x-0 bottom-6 flex justify-center">
            <Button href={contactHref} label="Написать" iconSrc="/assets/icons/telegram.svg" variant="primary" />
          </div>
        </div>
      )}
    </>
  );
}
