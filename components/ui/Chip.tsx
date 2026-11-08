import { buttonClassName } from "@/components/ui/Button";

export function Chip({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <span className={`${buttonClassName(active ? "primary" : "secondary")} !h-11 !px-4`}>
      <span className="text-base leading-6">{label}</span>
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
