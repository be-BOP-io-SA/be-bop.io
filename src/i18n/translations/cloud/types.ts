export interface CloudTranslations {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
  };
  regions: {
    label: string;
    title: string;
    subtitle: string;
    cta: string;
    items: {
      flag: string;
      market: string;
      highlight: string;
      href: string;
    }[];
  };
  features: {
    label: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      illustration: string;
    }[];
  };
  differentiators: {
    label: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      desc: string; // HTML — some cards use a non-breaking space before ":"
    }[];
  };
}
