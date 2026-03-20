export interface HomeTranslations {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    btnGetStarted: string;
    btnDiscover: string;
  };
  pricing: {
    title: string;
    fossTitle: string;
    fossDesc: string;
    fossLink: string;
    cloudDesc: string;
    cloudBtn: string;
  };
  info: {
    title: string;
    subtitle: string;
    points: {
      title: string;
      desc: string;
    }[];
    manifestoLink: string;
    imageAlt: string;
  };
  features: {
    headerTitle: string;
    headerSubtitle: string;
    online: {
      title: string;
      items: { title: string; desc: string }[];
    };
    onsite: {
      title: string;
      items: { title: string; desc: string }[];
    };
  };
  patrons: {
    title: string;
    partnersBtn: string;
    supportLink: string;
  };
  social: {
    title: string;
    subtitle: string;
  };
}
