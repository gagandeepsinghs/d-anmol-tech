/**
 * D - Anmol Tech Enterprises — Shared Design Tokens
 * Single source of truth for all recurring class patterns.
 * Import from this file instead of repeating strings across components.
 */

/** Section pill/badge above headings */
export const PILL =
  "inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-6 border";

export const PILL_ORANGE =
  `${PILL} bg-[var(--color-orange)]/10 text-[var(--color-orange)] border-[var(--color-orange)]/20`;

export const PILL_NAVY =
  `${PILL} bg-[var(--color-navy)]/5 text-[var(--color-navy)] border-[var(--color-navy)]/10`;

/** Section headings */
export const SECTION_HEADING =
  "text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] tracking-tight leading-[1.1] mb-8";

/** Section subheadings (h3, not h2) */
export const SECTION_SUBHEADING =
  "text-3xl md:text-4xl font-extrabold text-[var(--color-navy)] tracking-tight leading-[1.1]";

/** Section body paragraph below heading */
export const SECTION_LEAD =
  "text-lg md:text-xl text-gray-600 font-medium leading-relaxed";

/** Gradient accent on heading spans */
export const GRADIENT_TEXT =
  "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange)] to-orange-400";

/** Standard card */
export const CARD =
  "bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.12)] hover:-translate-y-1.5 transition-all duration-300";

/** Primary CTA button */
export const BTN_PRIMARY =
  "inline-flex items-center gap-3 bg-[var(--color-navy)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-orange)] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[var(--color-navy)]/20 hover:shadow-[var(--color-orange)]/20";

/** Secondary/outlined button */
export const BTN_SECONDARY =
  "inline-flex items-center gap-3 bg-white text-[var(--color-navy)] border-2 border-gray-100 px-8 py-4 rounded-xl font-bold hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300";

/** Orange CTA button */
export const BTN_ORANGE =
  "inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-orange)] to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-500 hover:to-orange-400 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[var(--color-orange)]/20";

/** Ambient background decorator */
export const BG_BLOB_ORANGE =
  "absolute pointer-events-none rounded-full blur-3xl bg-[var(--color-orange)]/5";

export const BG_BLOB_NAVY =
  "absolute pointer-events-none rounded-full blur-3xl bg-[var(--color-navy)]/5";

/** Standard section vertical padding */
export const SECTION_PY = "py-24";

/** Standard section container */
export const SECTION_CONTAINER = "container mx-auto px-6 md:px-12";

/** Standard whileInView viewport config */
export const VIEWPORT = { once: true, margin: "-80px" } as const;

/** Standard entrance animation */
export const FADE_UP = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
} as const;

/** Stagger container variants */
export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

/** Stagger child variants */
export const STAGGER_CHILD = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};
