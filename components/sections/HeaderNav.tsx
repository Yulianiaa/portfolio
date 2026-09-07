"use client";

import { smoothScrollToElement } from "@/lib/smoothScroll";

const tabClass =
  "flex h-10 shrink-0 items-center justify-center rounded-xl px-2.5 text-base font-medium text-neutral-800 hover:bg-neutral-50 transition-colors lg:h-12 lg:px-3 lg:text-lg";

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  smoothScrollToElement(el);
}

export function HeaderNav() {
  return (
    <nav className="flex items-center gap-1 self-center rounded-2xl px-1 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
      <a href="#cases" className={tabClass} onClick={(e) => scrollToSection(e, "cases")}>
        Кейсы
      </a>
      <a href="#experience" className={tabClass} onClick={(e) => scrollToSection(e, "experience")}>
        Опыт
      </a>
    </nav>
  );
}
