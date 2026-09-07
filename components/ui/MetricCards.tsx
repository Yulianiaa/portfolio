import { nbsp } from "@/lib/typography";
import type { Card } from "@/lib/content";

export function MetricCards({ cards, layout = "row" }: { cards: Card[]; layout?: "row" | "grid2" }) {
  return (
    <div
      className={
        layout === "grid2"
          ? "grid w-full grid-cols-1 gap-4 lg:grid-cols-2"
          : "flex w-full flex-col items-start gap-4 lg:flex-row"
      }
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="flex flex-1 flex-col items-start gap-2 rounded-3xl border border-neutral-100 bg-neutral-50 p-7"
        >
          <p className="text-lg font-medium text-neutral-800 lg:text-xl">{nbsp(card.title)}</p>
          <p className="text-base text-neutral-500 lg:text-lg">{nbsp(card.description)}</p>
        </div>
      ))}
    </div>
  );
}
