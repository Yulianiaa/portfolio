"use client";

import { smoothScrollToElement } from "@/lib/smoothScroll";

const tabClass =
  "flex h-12 shrink-0 items-center justify-center rounded-xl px-3 text-lg font-medium text-neutral-800 hover:bg-neutral-50 transition-colors";

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
