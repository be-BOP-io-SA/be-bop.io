export interface GetStartedDiyTranslations {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    btnYoutube: string;
    btnPeertube: string;
  };
  sysreq: {
    title: string;
    os: { label: string; value: string };
    hardware: { label: string; value: string };
    domain: { label: string; value: string };
    email: { label: string; value: string };
  };
  cmd: {
    title: string;
    subtitle: string;
    scriptLink: string;
    note: string;
  };
  accordion: {
    title: string;
    steps: {
      title: string;
      body: string;
    }[];
  };
  help: {
    title: string;
    troubleshooting: {
      heading: string;
      body: string;
    };
    channels: {
      heading: string;
      intro: string;
      mastodonUrl: string;
      mastodonLabel: string;
      githubLabel: string;
    };
  };
}
