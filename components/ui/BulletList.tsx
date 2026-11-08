import { nbsp } from "@/lib/typography";

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex w-full flex-col items-start gap-1 text-base leading-6 text-neutral-800">
      {items.map((item) => (
        <li key={item} className="flex w-full items-start">
          <span className="shrink-0" aria-hidden>•&nbsp;&nbsp;</span>
          <span>{nbsp(item)}</span>
        </li>
      ))}
    </ul>
  );
}
