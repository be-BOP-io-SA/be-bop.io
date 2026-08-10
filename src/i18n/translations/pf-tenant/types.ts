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

export interface TenantPaymentItem {
  title: string;
  description: string;
  logo: string;
}

export interface PfTenantTranslations {
  hero: {
    eyebrow: string;
    title: string;
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
  payments: {
    label: string;
    title: string;
    subtitle: string; // HTML — contains a non-breaking space
    items: TenantPaymentItem[];
  };
  press: {
    eyebrow: string;
    title: string;
    intro: string;
    articles: TenantPressArticle[];
    video?: { outlet: string; title: string; url: string; thumbnail: string };
  };
  finalCta: {
    eyebrow: string; // HTML — non-breaking space before "?"
    title: string;
    subtitle: string;
    cta: string;
    note: string;
  };
}
