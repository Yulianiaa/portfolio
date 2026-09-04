import Image from "@/components/ui/AppImage";
import { LinkRow } from "@/components/ui/LinkButton";
import { nbsp } from "@/lib/typography";
import type { profile as ProfileType } from "@/content/profile";

export function Hero({ profile }: { profile: typeof ProfileType }) {
  return (
    <section className="flex w-full flex-col items-center gap-8">
      <div className="relative h-[300px] w-full">
        <div className="absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            sizes="300px"
            priority
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-b from-white/0 via-white/75 to-white" />
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        <h1 className="text-h2 font-bold text-neutral-800">{profile.name}</h1>
        <div className="flex flex-col items-center text-lg text-neutral-500">
          {profile.bioLines.map((line) => (
            <p key={line}>{nbsp(line)}</p>
          ))}
        </div>
        <LinkRow icon={false} links={profile.socialLinks} />
      </div>
    </section>
  );
}
