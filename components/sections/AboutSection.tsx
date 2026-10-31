import Image from "@/components/ui/AppImage";
import { nbsp } from "@/lib/typography";
import type { profile as ProfileType } from "@/content/profile";

export function AboutSection({ about }: { about: typeof ProfileType.about }) {
  return (
    <div className="flex w-full flex-col gap-10 px-3 tablet:px-0">
      <div className="grid w-full grid-cols-2 gap-3 tablet:grid-cols-4">
        {about.photos.map((photo) => {
          const cropClass =
            photo.crop === "portrait"
              ? "absolute top-[-24.51%] left-[-0.07%] h-[150.06%] w-full max-w-none"
              : photo.crop === "poster"
                ? "absolute top-[-7.91%] left-[0.1%] h-[133.33%] w-full max-w-none"
                : "rounded-2xl object-cover";

          return (
            <div
              key={photo.src}
              className={[
                "relative aspect-square overflow-hidden rounded-2xl bg-neutral-50",
                photo.monochrome ? "mix-blend-luminosity" : "",
              ].join(" ")}
            >
              {photo.crop === "cover" ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 743px) 45vw, (max-width: 1023px) 23vw, 191px"
                  className={cropClass}
                />
              ) : (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 743px) 45vw, (max-width: 1023px) 23vw, 191px"
                  className={cropClass}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex w-full flex-col gap-5 text-base leading-6 text-neutral-800">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{nbsp(paragraph)}</p>
        ))}
      </div>

      <section id="experience" className="flex w-full flex-col gap-3 scroll-mt-24">
        <h2 className="w-full text-sm font-medium uppercase leading-5 text-neutral-250">
          Опыт работы
        </h2>
        <div className="flex w-full flex-col gap-3">
          {about.experience.map((item) => (
            <div key={item.company} data-no-trail className="flex w-full flex-col">
              <div className="flex w-full items-center gap-2">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-base font-medium leading-6 text-brand-500 hover:underline"
                >
                  {item.company}
                </a>
                <p className="min-w-0 flex-1 text-sm leading-5 text-neutral-250">
                  {item.position}
                </p>
              </div>
              <p className="text-sm leading-5 text-neutral-500">{nbsp(item.description)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col gap-3">
        <h2 className="w-full text-sm font-medium uppercase leading-5 text-neutral-250">
          Образование
        </h2>
        <div className="flex w-full flex-col gap-3">
          {about.education.map((item) => (
            <div key={item.name} className="flex w-full flex-col">
              <p className="text-base font-medium leading-6 text-neutral-800">
                {nbsp(item.name)}
              </p>
              <p className="text-sm leading-5 text-neutral-500">{nbsp(item.detail)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
