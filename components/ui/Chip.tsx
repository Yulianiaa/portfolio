import { buttonClassName } from "@/components/ui/Button";

export function Chip({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <span className={buttonClassName(active ? "primary" : "secondary")}>
      <span className="px-1">{label}</span>
    </span>
  );
}

export function ChipRow({ chips }: { chips: { label: string; active?: boolean }[] }) {
  return (
    <div className="flex flex-wrap items-start gap-4">
      {chips.map((chip) => (
        <Chip key={chip.label} label={chip.label} active={chip.active} />
      ))}
    </div>
  );
}
