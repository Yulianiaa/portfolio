"use client";

import { useState } from "react";
import { buttonClassName } from "@/components/ui/Button";

export function CursorCaseButton({ label, disabled = false }: { label: string; disabled?: boolean }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      className="absolute inset-0 z-10"
      style={{ cursor: pos ? "none" : undefined }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setPos(null)}
    >
      <span
        className={`${buttonClassName("primary", disabled)} pointer-events-none absolute whitespace-nowrap transition-[opacity,transform] duration-150 ease-out`}
        style={{
          left: pos?.x ?? 0,
          top: pos?.y ?? 0,
          transform: `translate(-50%, -50%) scale(${pos ? 1 : 0.6})`,
          opacity: pos ? 1 : 0,
        }}
      >
        <span className="px-1">{label}</span>
      </span>
    </div>
  );
}
