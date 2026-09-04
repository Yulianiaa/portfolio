"use client";

import { useState } from "react";
import { Chip } from "@/components/ui/Chip";
import { MetricCards } from "@/components/ui/MetricCards";
import { CaseImage } from "@/components/ui/CaseImage";
import type { ToggleOption } from "@/lib/content";

export function ToggleBlock({ options }: { options: ToggleOption[] }) {
  const [active, setActive] = useState(0);
  const current = options[active];

  return (
    <div className="flex w-full flex-col items-start gap-6">
      <div className="flex flex-wrap items-start gap-4">
        {options.map((option, i) => (
          <button key={option.label} type="button" onClick={() => setActive(i)}>
            <Chip label={option.label} active={i === active} />
          </button>
        ))}
      </div>
      {current.image && <CaseImage image={current.image} />}
      {current.cards && <MetricCards cards={current.cards} />}
    </div>
  );
}
