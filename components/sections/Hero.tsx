import Image from "@/components/ui/AppImage";
import { nbsp } from "@/lib/typography";
import type { profile as ProfileType } from "@/content/profile";

export function Hero({ profile }: { profile: typeof ProfileType }) {
  return (
    <section className="flex w-full flex-col items-center gap-6 px-3 tablet:px-0">
      <div className="relative size-[104px] shrink-0 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
        {/* Crop matches the Figma frame: photo is offset so the face sits centered in the circle. */}
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={400}
          height={600}
          priority
          className="absolute top-[-17.71%] left-[-0.47%] h-[142.7%] w-[95.14%] max-w-none"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-1 text-center">
        <h1 className="text-h25 font-semibold text-neutral-800 dark:text-neutral-50">{profile.name}</h1>
        <div className="flex flex-col items-center text-base text-neutral-500 dark:text-neutral-300">
          {profile.bioLines.map((line) => (
            <p key={line}>{nbsp(line)}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
