"use client";

import { useState } from "react";
import { buttonClassName, type ButtonVariant } from "@/components/ui/Button";

// Matches the 10px dot cursor in globals.css, so the button grows out of it.
const DOT_CLIP = "inset(calc(50% - 5px) calc(50% - 5px) round 5px)";
const FULL_CLIP = "inset(0 round 16px)";

export function CursorCaseButton({
  label,
  variant = "primary",
}: {
  label: string;
  variant?: ButtonVariant;
}) {
  // Kept after mouseleave so the button collapses in place instead of jumping to 0,0.
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  return (
    <div
      className="absolute inset-0 z-10"
      style={{ cursor: active ? "none" : undefined }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setActive(true);
      }}
      onMouseLeave={() => setActive(false)}
    >
      <span
        className={`${buttonClassName(variant)} !h-11 !rounded-2xl !px-3 !text-base pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap`}
        style={{
          left: pos.x,
          top: pos.y,
          clipPath: active ? FULL_CLIP : DOT_CLIP,
          opacity: active ? 1 : 0,
          // Expand: dot shows instantly, then unfolds. Collapse: shrink to the dot first, then hide.
          transition: active
            ? "clip-path 300ms cubic-bezier(0.2, 0.9, 0.3, 1.2)"
            : "clip-path 150ms ease-in, opacity 0s linear 150ms",
        }}
      >
        <span
          className="px-1"
          style={{
            opacity: active ? 1 : 0,
            transition: active ? "opacity 150ms ease-out 120ms" : "opacity 80ms ease-in",
          }}
        >
          {label}
        </span>
      </span>
    </div>
  );
}
