"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    if (!cursorRef.current) return;

    function onMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const cursor = cursorRef.current;
      if (!cursor) return;

      const hovered = document.elementFromPoint(event.clientX, event.clientY);
      const shouldHide = hovered instanceof Element && hovered.closest("[data-cursor-hidden]");
      cursor.style.transform = `translate3d(${event.clientX - 5}px, ${event.clientY - 5}px, 0)`;
      cursor.style.opacity = shouldHide ? "0" : "1";
      document.body.dataset.customCursor = "ready";
    }

    function hide() {
      const cursor = cursorRef.current;
      if (!cursor) return;

      cursor.style.opacity = "0";
      delete document.body.dataset.customCursor;
    }

    window.addEventListener("pointermove", onMove, { passive: true, capture: true });
    window.addEventListener("blur", hide);
    window.addEventListener("pointerleave", hide);
    return () => {
      window.removeEventListener("pointermove", onMove, true);
      window.removeEventListener("blur", hide);
      window.removeEventListener("pointerleave", hide);
      delete document.body.dataset.customCursor;
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] size-[10px] rounded-full"
      style={{
        backgroundColor: "#25282d",
        forcedColorAdjust: "none",
        opacity: 0,
        transform: "translate3d(-20px, -20px, 0)",
      }}
    />
  );
}
