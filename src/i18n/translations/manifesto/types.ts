export interface ManifestoTranslations {
  hero: {
    eyebrow: string;
    title: string;
  };
  opening: {
    quote: string;
    prose: string;
  };
  actors: {
    heading: string;
    creator: {
      badge: string;
      title: string;
      intro: string;
      items: string[];
    };
    supporter: {
      badge: string;
      title: string;
      intro: string;
      items: string[];
    };
  };
  problems: {
    heading: string;
    headingDesc: string;
    items: {
      num: string;
      title: string;
      desc: string;
    }[];
    pullquote: string;
  };
  solutions: {
    heading: string;
    headingDesc: string;
    items: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  future: {
    heading: string;
    epigraph: {
      poem: string;
      translation?: string;
      cite: string;
    };
    prose: string[];
    statement: string;
    crossBeBop: {
      label: string;
      lead: string;
      items: string[];
    };
    metaBeBop: {
      label: string;
      lead: string;
      prose: string;
    };
    useCases: {
      letter: string;
      desc: string;
    }[];
    closing: {
      note: string;
      statement: string;
    };
  };
}
