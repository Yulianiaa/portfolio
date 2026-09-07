import Image from "@/components/ui/AppImage";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { BlurredCover } from "@/components/ui/BlurredCover";
import { CursorCaseButton } from "@/components/ui/CursorCaseButton";
import { nbsp } from "@/lib/typography";
import type { CaseSummary } from "@/lib/content";

export function CaseCard({ item }: { item: CaseSummary }) {
  if (item.status === "in-progress") {
    return (
      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex h-[300px] w-full flex-col items-center justify-center gap-3 rounded-3xl border border-neutral-100 bg-neutral-50 sm:h-[400px] md:h-[630px]">
          <BiTime className="size-8 text-neutral-800" aria-hidden />
          <p className="text-xl font-medium text-neutral-800 lg:text-2xl">Кейс в процессе</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-xl font-medium text-neutral-800 lg:text-2xl">{nbsp(item.title)}</h3>
          <p className="text-base text-neutral-800 lg:text-lg">{nbsp(item.description)}</p>
        </div>
      </div>
    );
  }

  const text = (
    <div className="flex max-w-[936px] flex-col items-start gap-2 text-left">
      <h3 className="text-xl font-medium text-neutral-800 lg:text-2xl">{item.title}</h3>
      <p className="text-base text-neutral-800 lg:text-lg">{item.description}</p>
    </div>
  );

  if (item.status === "preview") {
    return (
      <div className="relative flex w-full flex-col items-start gap-6">
        <BlurredCover src={item.cover.src} alt={item.cover.alt} />
        {text}
        <CursorCaseButton label="Кейс в процессе" variant="secondary" />
      </div>
    );
  }

  return (
    <Link href={`/cases/${item.slug}`} className="relative flex w-full cursor-pointer flex-col items-start gap-6">
      <div className="relative aspect-[1024/630] w-full overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50">
        <Image
          src={item.cover.src}
          alt={item.cover.alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="flex h-10 items-center justify-center rounded-xl border border-neutral-100 bg-white px-2.5 text-base font-medium text-neutral-800 lg:h-12 lg:rounded-2xl lg:px-3 lg:text-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {text}
      <CursorCaseButton label="Смотреть кейс" />
    </Link>
  );
}
