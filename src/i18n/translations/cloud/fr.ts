import type { CloudTranslations } from "./types";

export const fr: CloudTranslations = {
  hero: {
    eyebrow: "be‑BOP Cloud",
    title: "La plateforme e‑commerce qui vous appartient vraiment.",
    subtitle:
      "Logiciel libre, hébergé pour vous. Commerce, billetterie, abonnements, restauration, Bitcoin & Lightning inclus, zéro commission plateforme.",
    ctaPrimary: "Essai gratuit",
    ctaSecondary: "Voir les fonctionnalités",
    badge: "🔓 AGPL-3.0, code source disponible",
  },
  regions: {
    label: "Disponible dans votre région",
    title: "Choisissez votre instance be‑BOP Cloud.",
    subtitle:
      "Chaque marché a sa propre instance, pensée pour ses spécificités locales. Cliquez sur votre pays pour découvrir l'offre qui vous correspond.",
    cta: "Découvrir l'offre →",
    items: [
      {
        flag: "🇨🇭",
        market: "Suisse",
        highlight:
          "Hébergé en Allemagne (EEA), conforme LPD et nLPD, multi-devises CHF/EUR.",
        href: "/fr/ch-tenant",
      },
      {
        flag: "🇪🇺",
        market: "France & Europe",
        highlight:
          "Hébergé en Allemagne (EEA), conforme RGPD, résidence des données en UE.",
        href: "/fr/eu-tenant",
      },
      {
        flag: "🇵🇫",
        market: "Polynésie française",
        highlight:
          "Optimisé pour le Fenua, conformité locale, multi-devises XPF/EUR.",
        href: "/fr/pf-tenant",
      },
    ],
  },
  features: {
    label: "Fonctionnalités",
    title: "Une seule plateforme, tous vos usages commerciaux.",
    subtitle:
      "Du e-commerce à la billetterie, en passant par la réservation, les dons et le point de vente physique, be‑BOP Cloud réunit tous les outils de vente dans une seule plateforme tout-en-un, sans plugin ni abonnement tiers à empiler. Chaque fonctionnalité fait partie de votre forfait, que vous l'activiez ou non : vous ne payez jamais plus selon ce que vous utilisez.",
    items: [
      {
        title: "e-Commerce",
        description:
          "Grâce à be‑BOP Cloud, lancez facilement une boutique en ligne professionnelle pour vendre vos produits physiques ou numériques. Catalogue, panier et tunnel d'achat sont prêts à l'emploi, sans plugin ni configuration complexe à gérer vous-même.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-ecommerce-checkout-laptop-bro-svg-5jozA6?key=35a92c4f-5b0e-457b-a383-2422a5585d72",
      },
      {
        title: "Point de vente (PoS)",
        description:
          "Transformez n'importe quel appareil équipé d'un navigateur web en caisse enregistreuse grâce à l'interface PoS de be‑BOP Cloud, pensée pour la vente en point de vente physique. Disponible en Suisse et en Polynésie française, la France et l'UE arrivent bientôt.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-pos-bro-svg-b6v6Ln?key=7cac8a27-cd5c-4084-bbb0-0d6060881920",
      },
      {
        title: "Réservation",
        description:
          "Avec be‑BOP Cloud, votre boutique en ligne intègre nativement la réservation de créneaux horaires, de journées ou de nuitées. Vos clients réservent et paient en ligne en quelques clics, sans plugin additionnel ni outil de calendrier externe à synchroniser.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-schedule-booking-bro-svg-6kZsHq?key=2b727fd6-dc05-4237-a422-49678da90378",
      },
      {
        title: "Billetterie",
        description:
          "Créez des billets pour vos événements et vendez-les directement depuis votre plateforme be‑BOP Cloud. Chaque vente génère un QR code unique envoyé à vos clients : vérifiez sa validité et son usage depuis n'importe quel appareil équipé d'une caméra et d'un navigateur web.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-ticketing-svg-nUtfSn?key=438511f6-80ef-4aec-80b9-64567e62c5d6",
      },
      {
        title: "Dons et Peerfunding",
        description:
          "be‑BOP Cloud vous permet de récolter des dons, de proposer des produits à prix libre (PWYW) et d'organiser des campagnes de financement participatif avec vos supporteurs. Les paiements transitent directement entre vous, be‑BOP n'y intervient jamais.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-donation-bro-svg-YKEHlh?key=95297ea1-d07b-4709-8571-7c3077762f74",
      },
    ],
  },
  differentiators: {
    label: "Différenciateurs",
    title: "Pas un SaaS e-commerce comme les autres.",
    subtitle:
      "Là où Shopify garde votre boutique en otage, be‑BOP Cloud tourne sur un logiciel libre que vous pouvez auditer, forker, ou auto-héberger demain.",
    cards: [
      {
        title: "Zéro commission plateforme",
        desc: "be‑BOP ne prélève aucune commission sur vos ventes. Vous payez un abonnement fixe, c'est tout.",
      },
      {
        title: "Respectueux des données",
        desc: "Hébergement en Allemagne (EEA), conformité LPD et RGPD dès la conception, minimisation des données collectées.",
      },
      {
        title: "Bitcoin & Lightning natif",
        desc: "Intégré au cœur du moteur de paiement, on-chain et Lightning Network, au même titre que vos autres moyens de paiement et toujours en option.",
      },
      {
        title: "Logiciel libre",
        desc: "AGPL-3.0, sans vendor lock-in : auditez le code, contribuez, ou auto-hébergez votre instance quand vous le souhaitez.",
      },
    ],
  },
};
