import type { Lang, PageId } from "./types";
import { PAGE_LANGUAGES } from "./types";

/**
 * Generate getStaticPaths entries for a given page.
 * Only generates paths for languages that have translations.
 */
export function makeStaticPaths(pageId: PageId) {
  return () =>
    PAGE_LANGUAGES[pageId].map((lang) => ({
      params: { lang },
      props: { lang },
    }));
}

/**
 * Safely extract the lang param from Astro.params.
 */
export function getLangFromParams(
  params: Record<string, string | undefined>
): Lang {
  return (params.lang as Lang) ?? "en";
}
