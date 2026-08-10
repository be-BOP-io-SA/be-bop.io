export interface PfFact {
  title: string;
  body: string;
}

export interface PfAssociation {
  location: string;
  name: string;
  tags: string[];
  desc: string;
  facts: PfFact[];
}

export interface PeerfundingClosedTranslations {
  hero: {
    eyebrow: string;
    title: string; // HTML — contains <em> for accent colour
    subtitle: string; // HTML — contains <strong>
    video: { title: string; src: string };
  };
  closedBanner: {
    badge: string;
    title: string;
    raised: string;
    raisedLabel: string;
    goal: string;
    goalLabel: string;
    percent: string;
    percentLabel: string;
    thanks: string;
    cta: string;
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
    closedNotice: string;
    supportCta: string;
    supportUrl: string;
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
  sidebar: {
    closedEyebrow: string;
    closedTitle: string;
    closedBody: string;
    supportCta: string;
    supportUrl: string;
    community: { eyebrow: string; title: string; cta: string };
  };
}
