import type { TutoHubTranslations } from "./types";

export const en: TutoHubTranslations = {
  hero: {
    eyebrow: "be-BOP · Documentation",
    title: "Setup help",
    lede: "Find all the guides to connect and configure your payment methods on be-BOP: Bitcoin, Lightning, and fiat payments. Choose a service to open its step-by-step tutorial.",
  },
  toc: {
    label: "Contents",
    items: [
      {
        num: "1.",
        label: "Help connecting and configuring payment services on be-BOP",
        href: "#services-paiement",
      },
    ],
  },
  section: {
    num: "1",
    title: "Connecting and configuring payment services",
    subtitle:
      "Select your provider to open the matching guide. Greyed-out tiles will be available soon.",
  },
  tiles: {
    btcpay: {
      name: "BTCPay Server",
      kind: "Bitcoin · Lightning",
      cta: "Set up",
    },
    paypal: {
      name: "PayPal",
      kind: "Fiat · wallet",
      cta: "Set up",
    },
    osb: {
      name: "OSB",
      kind: "Fiat · card payments",
      cta: "Set up",
    },
    swissBitcoinPay: {
      name: "Swiss Bitcoin Pay",
      kind: "Bitcoin · Lightning",
      cta: "Set up",
    },
    stripe: {
      name: "Stripe",
      kind: "Fiat · card payments",
      cta: "Set up",
    },
    sumup: {
      name: "SumUp",
      kind: "Fiat · card terminal",
      cta: "Set up",
    },
    cash: {
      name: "Cash and other PoS payments",
      kind: "Cash · point of sale",
      cta: "Set up",
    },
  },
  soon: {
    badge: "Coming soon",
    label: "Coming soon",
    bitcoinOnchain: {
      name: "Bitcoin on-chain (nodeless)",
      kind: "Bitcoin · nodeless",
    },
    gnuTaler: {
      name: "GNU Taler",
      kind: "Electronic cash",
    },
  },
};
