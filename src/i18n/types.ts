export const LANGUAGES = ["en", "fr", "sv"] as const;
export type Lang = (typeof LANGUAGES)[number];

export const DEFAULT_LANG: Lang = "en";

/**
 * Pages and which languages they support.
 * Used by getStaticPaths() to generate only valid routes.
 */
export const PAGE_LANGUAGES = {
  "home-2026": ["en", "fr", "sv"],
  "get-started-diy-2026": ["en", "fr", "sv"],
  manifesto: ["en", "fr"],
  partners: ["en", "fr"],
  "support-2026": ["en", "fr"],
  "2026-partners-v2": ["en", "fr"],
} as const satisfies Record<string, readonly Lang[]>;

export type PageId = keyof typeof PAGE_LANGUAGES;
