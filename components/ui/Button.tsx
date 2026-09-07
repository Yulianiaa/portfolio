import Link from "next/link";
import Image from "@/components/ui/AppImage";
import type { IconType } from "react-icons";

export type ButtonVariant = "primary" | "secondary";

export function buttonClassName(variant: ButtonVariant = "secondary", disabled = false) {
  if (disabled) {
    return "inline-flex h-10 lg:h-12 items-center justify-center gap-1 rounded-xl lg:rounded-2xl px-2.5 lg:px-3 text-base lg:text-lg font-medium bg-neutral-50 text-neutral-150";
  }

  const styles =
    variant === "primary"
      ? "bg-neutral-800 hover:bg-neutral-700 text-white"
      : "bg-neutral-50 text-neutral-800 border border-neutral-100 hover:bg-neutral-100";

  return `inline-flex h-10 lg:h-12 items-center justify-center gap-1 rounded-xl lg:rounded-2xl px-2.5 lg:px-3 text-base lg:text-lg font-medium transition-colors ${styles}`;
}

type ButtonProps = {
  href: string;
  label: string;
  icon?: IconType;
  iconSrc?: string;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({ href, label, icon: Icon, iconSrc, variant = "secondary", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${buttonClassName(variant)} ${className}`}>
      {Icon && <Icon className="size-6 lg:size-[28px]" aria-hidden />}
      {iconSrc && <Image src={iconSrc} alt="" width={28} height={28} className="size-6 lg:size-[28px]" aria-hidden />}
      <span className="px-1">{label}</span>
    </Link>
  );
}
