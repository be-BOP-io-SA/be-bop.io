import type { PfTenantTranslations } from "./types";

export const fr: PfTenantTranslations = {
  hero: {
    eyebrow: "be‑BOP Cloud Fenua",
    title: "Votre commerce. Un abonnement. Votre instance Fenua.",
    badge: "🇵🇫 Optimisé pour le Fenua · Conformité fiscale locale",
    poweredBy:
      "be‑BOP Cloud Fenua est le service hébergé par be‑BOP.io SA. Le logiciel be‑BOP qui le fait tourner reste libre, sous licence AGPL-3.0.",
    offer: {
      price: "1 999 XPF/mois",
      oldPrice: "2 499 XPF",
      discount: "−20 %",
      periodNote: "Tarif valable pendant les 6 premiers mois, puis 2 499 XPF/mois.",
      trialBadge: "🎁 7 jours d'essai gratuit, nouveaux clients",
      features: [
        "Multi-devises XPF/EUR",
        "Bitcoin & Lightning inclus",
        "E-commerce, billetterie, abonnements, dons, peerfunding, point de vente, restauration",
        "Zéro commission sur vos ventes",
      ],
      cta: "Commencer mon essai gratuit",
      ctaNote: "Sans engagement, résiliable à tout moment.",
    },
  },
  specifics: {
    label: "Spécificités locales",
    title: "Pensé pour le Fenua.",
    subtitle:
      "be‑BOP Cloud s'adapte aux réalités du commerce en Polynésie française, de la devise locale à la conformité réglementaire.",
    items: [
      {
        title: "XPF natif et conformité locale",
        description:
          "be‑BOP Cloud prend en charge nativement le Franc Pacifique (XPF), la devise officielle de la Polynésie française. Votre instance vous donne tous les outils nécessaires pour exploiter votre commerce en conformité avec la réglementation locale.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-island-bro-svg-hYYqbj?key=75b3a21f-43fb-4635-b0aa-74565ba251fc",
      },
      {
        title: "Parfait pour le tourisme",
        description:
          "En plus d'afficher vos prix en XPF, be‑BOP Cloud propose un double affichage avec l'euro directement sur votre boutique. Idéal pour les commerces touristiques qui accueillent une clientèle internationale habituée à une devise de référence.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-tourisme-fuena-bro-svg-4J8ZgA?key=20cc78a3-3cb7-422d-ae7d-47a497e86718",
      },
      {
        title: "Vente et facturation",
        description:
          "be‑BOP Cloud devient le hub central de votre activité : il regroupe toutes vos ventes dans une comptabilité unifiée et génère automatiquement les factures pour vos clients, quel que soit le canal de vente utilisé.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-pos-bro-svg-b6v6Ln?key=7cac8a27-cd5c-4084-bbb0-0d6060881920",
      },
    ],
  },
  payments: {
    label: "Paiements locaux",
    title: "Vos moyens de paiement, chez vous.",
    subtitle:
      "be‑BOP Cloud s'intègre avec des prestataires de paiement présents en Polynésie française, en carte comme en Bitcoin. Comme tous les moyens de paiement disponibles sur be‑BOP Cloud, ils restent entièrement optionnels.",
    items: [
      {
        title: "Océanienne de Services Business (OSB)",
        description:
          "be‑BOP Cloud s'intègre nativement avec Océanienne de Services Business (OSB), votre prestataire de paiement de proximité. Acceptez les cartes de paiement locales directement depuis votre boutique, sans passerelle tierce à configurer.",
        logo: "https://be-bop.io/digital-file/raw/os-b-logo-webp-6RQ7wG?key=55d4c0e7-59d8-4278-af91-a0f80bc067c4",
      },
      {
        title: "Swiss Bitcoin Pay",
        description:
          "be‑BOP Cloud prend en charge de nombreuses intégrations pour accepter Bitcoin et le réseau Lightning, dont Swiss Bitcoin Pay. Acceptez Bitcoin facilement, à moindres frais, avec la possibilité de convertir vos paiements en monnaie locale dès leur réception.",
        logo: "https://swiss-bitcoin-pay.ch/d6a3c5f7023ed0ff951c.png",
      },
    ],
  },
  press: {
    eyebrow: "Vu dans les médias",
    title: "La presse en parle déjà.",
    intro:
      "Avant d'être une offre Cloud, be‑BOP est un logiciel libre déjà repéré par la presse, jusqu'en Polynésie.",
    articles: [
      {
        outlet: "nedao.ch",
        angle: "Portrait du projet et de sa solution de caisse libre.",
        url: "https://nedao.ch/news/be-bop-solution-caisse/",
        image:
          "https://be-bop.io/digital-file/raw/touchscreen-nedao-bebop-jpg-UTmiL2?key=d5461657-eaad-441b-a95f-9c950fb4d007",
      },
    ],
    video: {
      outlet: "TNTV",
      title: "be‑BOP présenté sur TNTV Polynésie",
      url: "https://www.tntv.pf/player/38820/series?assetType=series",
      thumbnail:
        "https://be-bop.io/digital-file/raw/fuena-tntv-bebop-jpg-r96QSm?key=88449458-95d4-401f-80d8-9000aeb633ce",
    },
  },
  finalCta: {
    eyebrow: "Prêt à démarrer ?",
    title: "Lancez votre instance be‑BOP Cloud Fenua.",
    subtitle:
      "7 jours d'essai gratuit, sans engagement. Profitez du tarif de lancement pendant vos 6 premiers mois.",
    cta: "Commencer mon essai gratuit",
    note: "Résiliable à tout moment.",
  },
};
