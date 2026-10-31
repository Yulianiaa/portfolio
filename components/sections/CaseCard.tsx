import Image from "@/components/ui/AppImage";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { CursorCaseButton } from "@/components/ui/CursorCaseButton";
import { nbsp } from "@/lib/typography";
import type { CaseSummary } from "@/lib/content";

const coverClass = "relative h-[250px] w-full overflow-hidden bg-neutral-50 tablet:h-[416px] tablet:rounded-2xl";

function CardText({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex w-full flex-col items-start px-3 text-left text-base tablet:px-0">
      <h3 className="font-medium text-neutral-800">{nbsp(title)}</h3>
      <p className="text-neutral-500">{nbsp(description)}</p>
    </div>
  );
}

export function CaseCard({ item, noTrailBelow = false }: { item: CaseSummary; noTrailBelow?: boolean }) {
  if (item.status !== "ready") {
    return (
      <div
        data-no-trail={noTrailBelow || undefined}
        data-no-trail-below={noTrailBelow || undefined}
        className="relative flex w-full flex-col items-start gap-3"
      >
        <div className={`${coverClass} flex flex-col items-center justify-center gap-3`}>
          <BiTime className="size-8 text-neutral-800" aria-hidden />
          <p className="text-base font-medium text-neutral-800">Кейс в процессе</p>
        </div>
        <CardText title={item.title} description={item.description} />
      </div>
    );
  }

  return (
    <Link
      href={`/cases/${item.slug}`}
      data-no-trail
      data-no-trail-below={noTrailBelow || undefined}
      className="relative flex w-full cursor-pointer flex-col items-start gap-3"
    >
      <div className={coverClass}>
        <Image
          src={item.cover.src}
          alt={item.cover.alt}
          fill
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-contain"
        />
      </div>
      <CardText
        title={item.card?.title ?? item.title}
        description={item.card?.description ?? item.description}
      />
      <CursorCaseButton label="Смотреть кейс" />
    </Link>
  );
}
