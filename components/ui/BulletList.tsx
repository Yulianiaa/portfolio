import Image from "@/components/ui/AppImage";
import { nbsp } from "@/lib/typography";

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex w-full flex-col items-start gap-1">
      {items.map((item) => (
        <li key={item} className="flex w-full items-start gap-2 text-lg text-neutral-800">
          <span className="flex shrink-0 items-center py-2">
            <Image src="/assets/icons/bullet-dark.svg" alt="" width={12} height={12} aria-hidden />
          </span>
          <span>{nbsp(item)}</span>
        </li>
      ))}
    </ul>
  );
}
