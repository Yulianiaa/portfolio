"use client";

import { BiUpArrowAlt } from "react-icons/bi";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function ScrollTopButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => smoothScrollTo(0)}
      className="inline-flex size-12 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-neutral-800 transition-colors hover:bg-neutral-100"
    >
      <BiUpArrowAlt className="size-[28px]" aria-hidden />
    </button>
  );
}
