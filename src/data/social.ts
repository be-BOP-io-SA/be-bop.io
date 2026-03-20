import type { Lang } from "../i18n/types";

export interface SocialLink {
  label: string;
  icon: string;
  url: string | Record<Lang, string>;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Nostr",
    icon: "https://be-bop.io/digital-file/raw/nostr-icon-3Z372V?key=5dc55178-e8a3-4841-b812-f95e52e0a8e7",
    url: "https://njump.me/npub16l9pnrkhhagkucjhxvvztz2czv9ex8s5u7yg80ghw9ccjp4j25pqaku4ha",
  },
  {
    label: "Mastodon",
    icon: "https://be-bop.io/digital-file/raw/mastodon-icon-IPBOiZ?key=32c2d4f2-be51-44af-b6bf-c5596904aa1f",
    url: {
      en: "https://fosstodon.org/@bebop",
      fr: "https://tooting.ch/@bebop",
      sv: "https://fosstodon.org/@bebop",
    },
  },
  {
    label: "GitHub",
    icon: "https://be-bop.io/digital-file/raw/github-lvuNjO?key=0c5b9899-dcf3-4622-bb3f-bf4617947872",
    url: "https://github.com/be-BOP-io-SA/be-BOP",
  },
  {
    label: "Twitter / X",
    icon: "https://be-bop.io/digital-file/raw/x-twitter-icon-pEFMmX?key=88d8bc1d-e1fe-4b6d-b45c-d4f82df8d260",
    url: "https://x.com/beBOPcommunity",
  },
  {
    label: "LinkedIn",
    icon: "https://be-bop.io/digital-file/raw/linkedin-icon-pBQdmf?key=8eecf303-f1ab-4a32-b035-5e1a9be6e235",
    url: "https://www.linkedin.com/company/be-bop-io/",
  },
];

export function getSocialUrl(link: SocialLink, lang: Lang): string {
  return typeof link.url === "string" ? link.url : link.url[lang];
}
