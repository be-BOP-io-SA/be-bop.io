export const LANGUAGES = ["en", "fr", "sv", "de"] as const;
export type Lang = (typeof LANGUAGES)[number];

export const DEFAULT_LANG: Lang = "en";

/**
 * Pages and which languages they support.
 * Used by getStaticPaths() to generate only valid routes.
 */
export const PAGE_LANGUAGES = {
  "home-2026": ["en", "fr", "sv", "de"],
  "get-started-diy-2026": ["en", "fr", "sv"],
  manifesto: ["en", "fr", "de"],
  partners: ["en", "fr"],
  "support-2026": ["en", "fr"],
  "2026-partners-v2": ["en", "fr"],
  announcement: ["en", "fr", "sv"],
  "peerfunding-palier1": ["en", "fr"],
  "peerfunding-palier1-closed": ["en", "fr"],
  "peerfunding-palier1-products": ["fr"],
  cloud: ["fr", "de"],
  "ch-tenant": ["fr", "de"],
  "eu-tenant": ["fr"],
  "pf-tenant": ["fr"],
  "psp-paypal": ["en", "fr", "de"],
  "psp-sumup": ["en", "fr", "de"],
  "psp-stripe": ["en", "fr", "de"],
  "psp-osb": ["en", "fr", "de"],
  "psp-btcpay": ["en", "fr", "de"],
  "tuto-hub": ["en", "fr", "de"],
  "report-tenant": ["fr", "en", "de"],
} as const satisfies Record<string, readonly Lang[]>;

export type PageId = keyof typeof PAGE_LANGUAGES;
