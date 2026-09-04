import { nbsp } from "@/lib/typography";
import type { Card } from "@/lib/content";

export function MetricCards({ cards, layout = "row" }: { cards: Card[]; layout?: "row" | "grid2" }) {
  return (
    <div
      className={
        layout === "grid2"
          ? "grid w-full grid-cols-1 gap-4 sm:grid-cols-2"
          : "flex w-full flex-col items-start gap-4 sm:flex-row"
      }
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="flex flex-1 flex-col items-start gap-2 rounded-3xl border border-neutral-100 bg-neutral-50 p-7"
        >
          <p className="text-xl font-medium text-neutral-800">{nbsp(card.title)}</p>
          <p className="text-lg text-neutral-500">{nbsp(card.description)}</p>
        </div>
      ))}
    </div>
  );
}
