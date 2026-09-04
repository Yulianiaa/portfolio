import type { IconType } from "react-icons";

export function IconButton({
  icon: Icon,
  label,
  onClick,
  href,
}: {
  icon: IconType;
  label: string;
  onClick?: () => void;
  href?: string;
}) {
  const className =
    "inline-flex size-12 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-neutral-800 hover:bg-neutral-100 transition-colors";

  if (href) {
    return (
      <a href={href} aria-label={label} className={className}>
        <Icon className="size-[28px]" aria-hidden />
      </a>
    );
  }

  return (
    <button type="button" aria-label={label} onClick={onClick} className={className}>
      <Icon className="size-[28px]" aria-hidden />
    </button>
  );
}
