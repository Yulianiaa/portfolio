import { nbsp } from "@/lib/typography";
import type { Card } from "@/lib/content";

export function MetricCards({ cards, layout = "row" }: { cards: Card[]; layout?: "row" | "grid2" }) {
  return (
    <div
      className={
        layout === "grid2"
          ? "grid w-full grid-cols-1 gap-3 tablet:grid-cols-2"
          : "flex w-full flex-col items-start gap-3 lg:flex-row"
      }
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="flex flex-1 flex-col items-start gap-1 rounded-2xl bg-neutral-50 p-6"
        >
          <p className="text-base leading-6 font-medium text-neutral-800">{nbsp(card.title)}</p>
          <p className="text-base leading-6 text-neutral-500">{nbsp(card.description)}</p>
        </div>
      ))}
    </div>
  );
}
