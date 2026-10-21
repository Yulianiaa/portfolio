export type Segment = string | { text: string; strong?: boolean; tone?: "success" };
export type Paragraph = Segment[];

export type Link = { label: string; href: string };
export type Chip = { label: string; active?: boolean };
export type Card = { title: string; description: string };
/** true = object-contain on mobile only, object-cover from tablet up. "always" = object-contain at every breakpoint. */
export type ImageSrc = { src: string; alt: string; fit?: boolean | "always"; bgColor?: string };
export type SectionImage = ImageSrc | { video: string; poster?: string } | "placeholder";

/** Revealed when a DropCard's "Читать" button is expanded. */
export type DropCardExpanded = {
  body: Paragraph[];
  links?: Link[];
  image?: SectionImage;
  keyFacts?: KeyFact[];
  afterFacts?: Paragraph[];
  list?: string[];
  cards?: Card[];
  closing?: Paragraph[];
};

/** A bordered, self-contained card with its own heading/body/list and a "Читать"/"Свернуть" toggle. */
export type DropCard = { title: string; body: Paragraph[]; list?: string[]; expanded?: DropCardExpanded };

export type ToggleOption = {
  label: string;
  image?: SectionImage;
  /** Shown instead of `image` below the tablet breakpoint, when the two need to differ. */
  mobileImage?: SectionImage;
  cards?: Card[];
};

/** "xtight" is a fixed 16px at every breakpoint (inner/grouped), unlike the other tiers which scale per breakpoint. */
export type Gap = "xtight" | "tight" | "normal" | "loose";

export type Subsection = {
  subtitle?: string;
  body?: Paragraph[];
  links?: Link[];
  /** Renders `links` right after this paragraph (0-based index) instead of after all of `body`. */
  linksAfterParagraph?: number;
  list?: string[];
  /** Renders after `list` instead of after all of `body`, when both a list and trailing paragraphs are needed. */
  afterList?: Paragraph[];
  chips?: Chip[];
  cards?: Card[];
  cardsLayout?: "row" | "grid2";
  dropCards?: DropCard[];
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
  cover: ImageSrc;
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
  cover: ImageSrc;
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
