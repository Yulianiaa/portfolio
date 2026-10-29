"use client";

import { useState, type ReactNode } from "react";

/** `hidden` keeps a tab in code but out of the page, e.g. until its content is ready. */
type Tab = { id: string; label: string; content: ReactNode; hidden?: boolean };

const TAB_WIDTH = 104;
const INSET = 2;
// Leading edge moves first, trailing edge catches up later: the pill stretches and flows into place.
// Same easing as the ThemeToggle moon/sun morph, 450ms total.
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";
const LEAD = `340ms ${EASE}`;
const TRAIL = `375ms ${EASE} 75ms`;

export function HomeTabs({ tabs: allTabs }: { tabs: Tab[] }) {
  const tabs = allTabs.filter((tab) => !tab.hidden);
  const [active, setActive] = useState(tabs[0].id);
  const [movingRight, setMovingRight] = useState(true);
  const activeIndex = tabs.findIndex((tab) => tab.id === active);

  function select(index: number) {
    if (index === activeIndex) return;
    setMovingRight(index > activeIndex);
    setActive(tabs[index].id);
  }

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div
        role="tablist"
        className="relative flex h-11 items-start overflow-hidden rounded-2xl bg-neutral-50 p-0.5 dark:bg-neutral-800"
      >
        {/* Shared fill behind the active tab; its edges are animated separately (see LEAD/TRAIL). */}
        <span
          aria-hidden
          className="absolute top-0.5 bottom-0.5 rounded-[14px] bg-white drop-shadow-[0_0_9px_rgba(37,40,45,0.08)] motion-reduce:!transition-none dark:bg-neutral-900 dark:drop-shadow-[0_0_9px_rgba(245,245,245,0.08)]"
          style={{
            left: INSET + activeIndex * TAB_WIDTH,
            right: INSET + (tabs.length - 1 - activeIndex) * TAB_WIDTH,
            transition: movingRight ? `right ${LEAD}, left ${TRAIL}` : `left ${LEAD}, right ${TRAIL}`,
          }}
        />
        {tabs.map((tab, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => select(index)}
              className={`relative flex h-full w-[104px] items-center justify-center p-2 text-base font-medium transition-colors duration-300 ${
                selected
                  ? "text-neutral-800 dark:text-neutral-50"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== active}
          className="w-full"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
