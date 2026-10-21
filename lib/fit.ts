import type { Fit } from "@/lib/content";

export function fitClassName(fit: Fit | undefined, base = "") {
  const prefix = base ? `${base} ` : "";
  if (fit === "always") return `${prefix}object-contain`;
  if (fit === "tabletUp") return `${prefix}object-cover tablet:object-contain`;
  if (fit) return `${prefix}object-contain tablet:object-cover`;
  return `${prefix}object-cover`;
}
