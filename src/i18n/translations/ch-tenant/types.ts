export interface TenantPressArticle {
  outlet: string;
  angle: string;
  url: string;
  image: string;
}

export interface TenantOffer {
  price: string;
  oldPrice: string;
  discount: string;
  periodNote: string;
  trialBadge: string;
  features: string[];
  cta: string;
  ctaNote: string;
}

export interface TenantSpecificItem {
  title: string;
  description: string;
  illustration: string;
}

export interface ChTenantTranslations {
  hero: {
    eyebrow: string;
    title: string; // HTML — may contain manual <br> to control line wrapping
    badge: string;
    poweredBy: string;
    offer: TenantOffer;
  };
  specifics: {
    label: string;
    title: string;
    subtitle: string;
    items: TenantSpecificItem[];
  };
  press: {
    eyebrow: string;
    title: string;
    intro: string;
    articles: TenantPressArticle[];
    video?: { outlet: string; title: string; url: string; thumbnail: string };
    readArticleLabel: string;
    watchVideoLabel: string;
  };
  finalCta: {
    eyebrow: string; // HTML — non-breaking space before "?"
    title: string;
    subtitle: string;
    cta: string;
    note: string;
  };
}
