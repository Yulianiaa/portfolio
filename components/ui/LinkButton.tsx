import Link from "next/link";
import Image from "@/components/ui/AppImage";

export function LinkButton({
  label,
  href,
  icon = true,
}: {
  label: string;
  href: string;
  icon?: boolean;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1 text-lg font-medium text-brand-500 hover:underline"
    >
      {label}
      {icon && <Image src="/assets/icons/link-external.svg" alt="" width={28} height={28} aria-hidden />}
    </Link>
  );
}

export function LinkRow({
  links,
  icon = true,
  large = false,
}: {
  links: { label: string; href: string }[];
  icon?: boolean;
  large?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
      {links.map((link, i) => (
        <span key={link.label} className="flex items-center gap-3">
          {i > 0 && (
            <span className={`font-medium text-neutral-700 ${large ? "text-xl" : "text-lg"}`} aria-hidden>
              •
            </span>
          )}
          <LinkButton label={link.label} href={link.href} icon={icon} />
        </span>
      ))}
    </div>
  );
}
