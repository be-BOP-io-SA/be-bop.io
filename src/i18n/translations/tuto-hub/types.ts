export interface TutoHubTranslations {
  hero: {
    eyebrow: string;
    title: string;
    lede: string; // HTML — contains &nbsp;
  };
  toc: {
    label: string;
    items: { num: string; label: string; href: string }[];
  };
  section: {
    num: string;
    title: string;
    subtitle: string;
  };
  tiles: {
    btcpay: { name: string; kind: string; cta: string };
    paypal: { name: string; kind: string; cta: string };
    osb: { name: string; kind: string; cta: string };
    swissBitcoinPay: { name: string; kind: string; cta: string };
    stripe: { name: string; kind: string; cta: string };
    sumup: { name: string; kind: string; cta: string };
    cash: { name: string; kind: string; cta: string };
  };
  soon: {
    badge: string;
    label: string;
    bitcoinOnchain: { name: string; kind: string };
    gnuTaler: { name: string; kind: string };
  };
}
