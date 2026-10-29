"use client";

import { useState, type ReactNode } from "react";

type Tab = { id: string; label: string; content: ReactNode };

export function HomeTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div role="tablist" className="flex h-11 items-start rounded-2xl bg-neutral-50 p-0.5">
        {tabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`flex h-full w-[104px] items-center justify-center p-2 text-base font-medium transition-colors ${
                selected
                  ? "rounded-[14px] bg-white text-neutral-800 drop-shadow-[0_0_9px_rgba(37,40,45,0.08)]"
                  : "rounded-xl text-neutral-500 hover:text-neutral-800"
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
