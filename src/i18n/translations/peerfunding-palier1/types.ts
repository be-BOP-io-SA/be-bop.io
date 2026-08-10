export interface PfFact {
  title: string;
  body: string;
}

export interface PfSupportLink extends PfFact {
  url: string;
}

export interface PfAssociation {
  location: string;
  name: string;
  tags: string[];
  desc: string;
  facts: PfFact[];
}

export interface PeerfundingPalier1Translations {
  hero: {
    eyebrow: string;
    title: string; // HTML — contains <em> for accent colour
    subtitle: string; // HTML — contains <strong>
    countdownLabel: string;
    video: { title: string; src: string };
  };
  beBopIntro: {
    eyebrow: string;
    title: string;
    video: { title: string; src: string };
  };
  brief: {
    eyebrow: string;
    title: string;
    desc: string; // HTML — contains <strong>
    bullets: PfFact[];
    stats: Array<{ value: string; label: string }>;
  };
  agenda: {
    eyebrow: string;
    title: string;
    events: Array<{
      date: string;
      name: string;
      location: string;
      active?: boolean;
    }>;
  };
  obj1: {
    eyebrow: string;
    title: string; // HTML — contains <em>
    desc: string;
    usecases: Array<{ trigger: string; action: string }>;
    goalEyebrow: string;
    goals: Array<{ label: string; amount: string; name: string; desc: string }>;
    supportEyebrow: string;
    supports: PfSupportLink[];
  };
  obj2: {
    eyebrow: string;
    title: string; // HTML — contains <em>
    desc1: string;
    desc2: string; // HTML — contains <strong>
    cta: string;
  };
  obj3: {
    eyebrow: string;
    title: string; // HTML — contains <em>
    desc: string;
    suspended: { title: string; body: string };
    assosLabel: string;
    tabs: Array<{ id: string; label: string }>;
    assos: {
      mwasi: PfAssociation;
      kongo: PfAssociation;
      alle: PfAssociation;
      sarah: PfAssociation;
      avenir: { desc: string; regions: string };
    };
  };
  obj4: {
    eyebrow: string;
    title: string; // HTML — contains <em>
    stoat: {
      label: string;
      title: string;
      desc: string;
      cta: string;
    };
  };
  ctaBar: {
    eyebrow: string;
    title: string;
    cta: string;
  };
  sidebar: {
    eyebrow: string;
    title: string;
    supports: PfSupportLink[];
    community: { eyebrow: string; title: string; cta: string };
  };
  mobileCta: string;
}
