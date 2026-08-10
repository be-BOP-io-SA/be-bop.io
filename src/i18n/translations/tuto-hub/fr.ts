import type { TutoHubTranslations } from "./types";

export const fr: TutoHubTranslations = {
  hero: {
    eyebrow: "be-BOP · Documentation",
    title: "Aide à la configuration",
    lede: "Retrouvez ici tous les guides pour connecter et configurer vos moyens de paiement sur be-BOP : Bitcoin, Lightning et paiements fiat. Choisissez un service pour accéder à son tutoriel pas à pas.",
  },
  toc: {
    label: "Sommaire",
    items: [
      {
        num: "1.",
        label:
          "Aide à la connexion et à la configuration des services de paiement sur be-BOP",
        href: "#services-paiement",
      },
    ],
  },
  section: {
    num: "1",
    title: "Connexion et configuration des services de paiement",
    subtitle:
      "Sélectionnez votre prestataire pour ouvrir le guide correspondant. Les tuiles grisées seront disponibles prochainement.",
  },
  tiles: {
    btcpay: {
      name: "BTCPay Server",
      kind: "Bitcoin · Lightning",
      cta: "Configurer",
    },
    paypal: {
      name: "PayPal",
      kind: "Fiat · portefeuille",
      cta: "Configurer",
    },
    osb: {
      name: "OSB",
      kind: "Fiat · carte bancaire",
      cta: "Configurer",
    },
    swissBitcoinPay: {
      name: "Swiss Bitcoin Pay",
      kind: "Bitcoin · Lightning",
      cta: "Configurer",
    },
    stripe: {
      name: "Stripe",
      kind: "Fiat · carte bancaire",
      cta: "Configurer",
    },
    sumup: {
      name: "SumUp",
      kind: "Fiat · TPE / carte",
      cta: "Configurer",
    },
    cash: {
      name: "Cash et autres paiements PoS",
      kind: "Espèces · point de vente",
      cta: "Configurer",
    },
  },
  soon: {
    badge: "Bientôt",
    label: "Bientôt disponible",
    bitcoinOnchain: {
      name: "Bitcoin on-chain (nodeless)",
      kind: "Bitcoin · sans nœud",
    },
    gnuTaler: {
      name: "GNU Taler",
      kind: "Monnaie électronique",
    },
  },
};
