export type Segment = string | { text: string; strong?: boolean; tone?: "success" };
export type Paragraph = Segment[];

export type Link = { label: string; href: string };
export type Chip = { label: string; active?: boolean };
export type Card = { title: string; description: string };
export type SectionImage = { src: string; alt: string } | { video: string; poster?: string } | "placeholder";

export type ToggleOption = {
  label: string;
  image?: SectionImage;
  cards?: Card[];
};

export type Gap = "tight" | "normal" | "loose";

export type Subsection = {
  subtitle?: string;
  body?: Paragraph[];
  links?: Link[];
  /** Renders `links` right after this paragraph (0-based index) instead of after all of `body`. */
  linksAfterParagraph?: number;
  list?: string[];
  chips?: Chip[];
  cards?: Card[];
  cardsLayout?: "row" | "grid2";
  image?: SectionImage;
  quote?: string;
  toggle?: ToggleOption[];
  /** Gap between the previous block and this subsection's own start. Default "normal" (32px). */
  gapBefore?: Gap;
  /** Gap between this subsection's own text part and its own content part (image/cards/toggle/quote). Default "normal" (32px). */
  contentGap?: Gap;
};

export type Chapter = {
  heading: string;
  intro?: Paragraph[];
  subsections: Subsection[];
};

export type KeyFact = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  status: "ready";
  tags: string[];
  title: string;
  description: string;
  keyFacts: KeyFact[];
  cover: { src: string; alt: string };
  chapters: Chapter[];
  author: { name: string; role: string; avatar: string };
};

export type CasePlaceholder = {
  slug: string;
  status: "in-progress";
  title: string;
  description: string;
};

export type CasePreview = {
  slug: string;
  status: "preview";
  title: string;
  description: string;
  cover: { src: string; alt: string };
};

export type CaseSummary = CaseStudy | CasePlaceholder | CasePreview;

import { cases } from "@/content/cases";
import { profile } from "@/content/profile";

export function getProfile() {
  return profile;
}

export function getCases(): CaseSummary[] {
  return cases;
}

export function getReadyCases(): CaseStudy[] {
  return cases.filter((c): c is CaseStudy => c.status === "ready");
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return getReadyCases().find((c) => c.slug === slug);
}
