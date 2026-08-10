export interface PspOsbTranslations {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  requirement: string; // HTML — contains <strong>
  accordion: {
    title: string;
    steps: {
      title: string;
      body: string; // HTML
    }[];
  };
}
