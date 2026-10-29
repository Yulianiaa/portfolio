"use client";

import { useEffect, useId, useRef, useState } from "react";

const STORAGE_KEY = "theme";
const MORPH_MS = 600;

// Paths from public/assets/icons/moon.svg and sun.svg, inlined so they can morph into each other.
const MOON_PATH =
  "M12 3.5C10.3538 3.49993 8.743 3.97789 7.36326 4.87582C5.98352 5.77375 4.8942 7.05302 4.22763 8.55822C3.56106 10.0634 3.34592 11.7298 3.60834 13.355C3.87075 14.9801 4.59944 16.4941 5.70588 17.713C6.81232 18.9319 8.24891 19.8033 9.84114 20.2214C11.4334 20.6394 13.1127 20.5861 14.6753 20.0679C16.2378 19.5497 17.6162 18.589 18.6431 17.3023C19.67 16.0157 20.3012 14.4585 20.46 12.82C20.469 12.7221 20.449 12.6238 20.4025 12.5372C20.3559 12.4506 20.2849 12.3797 20.1982 12.3333C20.1116 12.2869 20.0132 12.267 19.9153 12.2762C19.8175 12.2854 19.7245 12.3232 19.648 12.385C19.1312 12.8032 18.5362 13.1141 17.8978 13.2996C17.2594 13.4851 16.5905 13.5414 15.9301 13.4652C15.2697 13.3891 14.6311 13.182 14.0516 12.8561C13.4722 12.5302 12.9636 12.0921 12.5555 11.5672C12.1475 11.0424 11.8482 10.4415 11.6751 9.79962C11.5021 9.15775 11.4588 8.48782 11.5478 7.82901C11.6367 7.1702 11.8562 6.53575 12.1933 5.96277C12.5304 5.38978 12.9784 4.88978 13.511 4.492C13.59 4.43295 13.6498 4.35183 13.6829 4.25886C13.7159 4.1659 13.7207 4.06523 13.6966 3.96955C13.6726 3.87386 13.6208 3.78743 13.5477 3.72114C13.4746 3.65485 13.3836 3.61166 13.286 3.597C12.8604 3.53253 12.4305 3.5001 12 3.5Z";
const SUN_PATH =
  "M12.8438 19.1719V22.125C12.8438 22.3321 12.6759 22.5 12.4688 22.5H11.5312C11.3241 22.5 11.1562 22.3321 11.1562 22.125V19.1719C11.5276 19.2104 11.8089 19.2296 12 19.2296C12.1911 19.2296 12.4724 19.2104 12.8438 19.1719ZM17.6543 16.4611L19.7425 18.5493C19.8889 18.6957 19.8889 18.9332 19.7425 19.0796L19.0796 19.7425C18.9331 19.8889 18.6957 19.8889 18.5493 19.7425L16.4611 17.6543C16.7509 17.4189 16.9634 17.2337 17.0985 17.0985C17.2337 16.9634 17.4189 16.7509 17.6543 16.4611M6.34568 16.4611C6.58105 16.7509 6.76631 16.9634 6.90145 17.0985C7.03661 17.2337 7.24909 17.4189 7.53891 17.6543L5.45074 19.7425C5.3043 19.8889 5.06684 19.8889 4.92042 19.7425L4.25749 19.0796C4.11105 18.9331 4.11105 18.6957 4.25749 18.5492L6.34568 16.4611ZM12 6.51562C15.0289 6.51562 17.4844 8.97105 17.4844 12C17.4844 15.0289 15.0289 17.4844 12 17.4844C8.97105 17.4844 6.51562 15.0289 6.51562 12C6.51562 8.97105 8.97105 6.51562 12 6.51562ZM4.82812 11.1562C4.78962 11.5276 4.77037 11.8089 4.77037 12C4.77037 12.1911 4.78962 12.4724 4.82812 12.8438H1.875C1.66788 12.8438 1.5 12.6759 1.5 12.4688V11.5312C1.5 11.3241 1.66788 11.1562 1.875 11.1562H4.82812ZM22.125 11.1562C22.3321 11.1562 22.5 11.3241 22.5 11.5312V12.4688C22.5 12.6759 22.3321 12.8438 22.125 12.8438H19.1719C19.2104 12.4724 19.2296 12.1911 19.2296 12C19.2296 11.8089 19.2104 11.5276 19.1719 11.1562H22.125ZM19.0796 4.23405L19.7425 4.89698C19.8889 5.04342 19.8889 5.28087 19.7425 5.4273L17.6543 7.51547C17.4189 7.22566 17.2337 7.01317 17.0985 6.87802C16.9634 6.74288 16.7509 6.55762 16.4611 6.32224L18.5492 4.23405C18.6957 4.08762 18.9331 4.08762 19.0796 4.23405M5.45072 4.23405L7.53888 6.32224C7.24907 6.55762 7.03659 6.74288 6.90143 6.87802C6.76629 7.01317 6.58103 7.22566 6.34566 7.51547L4.25747 5.4273C4.11103 5.28087 4.11103 5.0434 4.25747 4.89698L4.9204 4.23405C5.06684 4.08762 5.30428 4.08762 5.45072 4.23405ZM12.4688 1.5C12.6759 1.5 12.8438 1.66788 12.8438 1.875V4.82812C12.4724 4.78962 12.1911 4.77037 12 4.77037C11.8089 4.77037 11.5276 4.78962 11.1562 4.82812V1.875C11.1562 1.66788 11.3241 1.5 11.5312 1.5H12.4688Z";

const shapeClass =
  "origin-center [transform-box:fill-box] transition-[scale,rotate,opacity] duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none";

/**
 * Inline script for the page <head>/<body> start: applies the saved (or system) theme
 * before first paint, so a dark-theme visitor never sees a white flash.
 */
export const themeInitScript = `try{var t=localStorage.getItem("${STORAGE_KEY}");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.dataset.theme="dark"}catch(e){}`;

function readTheme(): "light" | "dark" {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: "light" | "dark") {
  if (theme === "dark") document.documentElement.dataset.theme = "dark";
  else delete document.documentElement.dataset.theme;
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const filterId = `goo-${useId().replace(/:/g, "")}`;
  const blurAnim = useRef<SVGAnimateElement>(null);
  const [morphing, setMorphing] = useState(false);
  const morphTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Re-apply on client-side navigation back to this page (the init script only runs on full load),
  // and drop the theme on the way out: only pages with a toggle support dark mode.
  useEffect(() => {
    applyTheme(readTheme());
    return () => applyTheme("light");
  }, []);

  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setMorphing(true);
    blurAnim.current?.beginElement();
    clearTimeout(morphTimer.current);
    morphTimer.current = setTimeout(() => setMorphing(false), MORPH_MS);
  }

  return (
    <button type="button" onClick={toggle} aria-label="Переключить тему" className={className}>
      {/* Both shapes are always rendered and swapped by the dark: variant, so server and client markup match. */}
      <svg
        viewBox="0 0 24 24"
        width={24}
        height={24}
        className="size-6 overflow-visible text-neutral-700 dark:text-neutral-100"
        aria-hidden
      >
        <defs>
          {/* "Gooey" filter: blur then a sharp alpha threshold, so overlapping shapes melt together like liquid. */}
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0">
              <animate
                ref={blurAnim}
                attributeName="stdDeviation"
                values="0;1.6;0"
                keyTimes="0;0.5;1"
                dur={`${MORPH_MS}ms`}
                begin="indefinite"
                fill="freeze"
              />
            </feGaussianBlur>
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" />
          </filter>
        </defs>
        {/* Color switches instantly with the button background; the shapes carry the motion.
            Filter only while morphing: at rest the threshold would roughen the thin sun rays. */}
        <g fill="currentColor" filter={morphing ? `url(#${filterId})` : undefined}>
          <path d={MOON_PATH} className={`${shapeClass} dark:-rotate-90 dark:scale-[0.3] dark:opacity-0`} />
          <path d={SUN_PATH} className={`${shapeClass} rotate-90 scale-[0.3] opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100`} />
        </g>
      </svg>
    </button>
  );
}
