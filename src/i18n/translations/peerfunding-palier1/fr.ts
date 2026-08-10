import type { PeerfundingPalier1Translations } from "./types";

export const fr: PeerfundingPalier1Translations = {
  hero: {
    eyebrow: "Peerfunding be-BOP · 27 avril – 8 juin 2026 · Prolongation 24h !",
    title: "Construisons ensemble <em>PipeliNostr</em>",
    subtitle:
      "be-BOP lance sa campagne de financement participatif.<br><strong>5 000 EUR. 42 jours. Une communauté.</strong>",
    countdownLabel: "Fin de la campagne dans…",
    video: {
      title: "PipeliNostr présentation du Peerfunding par be-BOP",
      src: "https://peertube.ch/videos/embed/rVmsXV8fhm1GTRjUMvBN1c",
    },
  },

  beBopIntro: {
    eyebrow: "À propos de be-BOP",
    title: "Vous ne connaissez pas be-BOP ? Commencez par là",
    video: {
      title: "Qu'est-ce que be-BOP ? Présentation en moins d'une minute",
      src: "https://peertube.ch/videos/embed/huVXLzUzpzTp3roQhGTi73",
    },
  },

  brief: {
    eyebrow: "La campagne",
    title: "Le peerfunding en bref",
    desc: "<strong>PipeliNostr</strong> est un routeur d’événements open-source, on pourrait le décrire comme <strong>« le n8n de Nostr »</strong>. Il écoute les événements Nostr (DMs chiffrés, reçus de zaps, mentions) et les achemine via des workflows YAML vers des services externes : email, Telegram, bases de données, et d'autres connecteurs. Tout développeur peut l’intégrer dans son propre logiciel en respectant sa licence AGPLv3.",
    bullets: [
      {
        title: "Workflows YAML",
        body: "L'automatisation se fait via un simple fichier YAML depuis lequel vous déclarez vos différents workflows et connectez vos différents services.",
      },
      {
        title: "Connecteurs API",
        body: "PipeliNostr s’interface avec les services existants via leurs API pour faire le pont vers le réseau Nostr ou entre différents réseaux.",
      },
      {
        title: "Universel & libre",
        body: "Open-source sous AGPLv3, utilisable avec n’importe quel logiciel. be-BOP en est le premier utilisateur, mais ne sera pas le seul.",
      },
    ],
    stats: [
      { value: "5 000", label: "EUR à atteindre" },
      { value: "42", label: "Jours de campagne" },
      { value: "AGPLv3", label: "Licence libre" },
    ],
  },

  agenda: {
    eyebrow: "Agenda",
    title: "News & Rendez-vous",
    events: [
      {
        date: "25 avril 2026",
        name: "Swiss Bitcoin Conference",
        location: "Kreuzlingen",
      },

      {
        date: "27 avril 2026",
        name: "Lancement de la campagne peerfunding",
        location: "En ligne",
        active: true,
      },

      {
        date: "7 mai 2026",
        name: "Conférence au Klab",
        location: "Pontarlier · Entrée libre",
      },
      {
        date: "21 mai 2026",
        name: "LibreLocal",
        location: "Neuchâtel",
      },
      {
        date: "26–27 juin 2026",
        name: "Paradigme Bitcoin",
        location: "Neuchâtel",
      },
    ],
  },

  obj1: {
    eyebrow: "Objectif 01",
    title: "Financer <em>PipeliNostr</em>",
    desc: "Là où be-BOP gère vos ventes et vos paiements, PipeliNostr prend le relais : il connecte be-BOP, ou tout autre logiciel au reste du monde numérique. Voici quelques exemples de ce qu’il rend possible.",
    usecases: [
      {
        trigger: "Commande → DM Nostr",
        action:
          "Le client reçoit un code d'activation unique directement dans son client Nostr via DM.",
      },
      {
        trigger: "DM privé → Email",
        action:
          "Recevez vos messages privés Nostr dans votre boîte e-mail, votre bot fais le pont.",
      },
      {
        trigger: "Zap → Action physique",
        action:
          "Un dispositif physique se déclenche en moins d’une seconde dès qu’un Zap est reçu sans LNbits, bitcoin switch ou ni même un écran.",
      },
    ],
    goalEyebrow: "Nos objectifs de campagne.",
    goals: [
      {
        label: "Objectif 1",
        amount: "5 000 EUR",
        name: "PipeliNostr DIY",
        desc: "Version autonome et modulaire, publiée librement sous AGPLv3. Tout développeur peut l’intégrer dans son propre projet.",
      },
      {
        label: "Objectif 2",
        amount: "10 000 EUR",
        name: "Quelque chose de plus grand et de mieux",
        desc: "Aidez-nous à atteindre notre premier objectif pour qu’on puisse vous parler du second.",
      },
    ],
    supportEyebrow: "Comment nous soutenir ?",
    supports: [
      {
        title: "Don libre",
        body: "Avec votre méthode de paiement préférée",
        url: "/peerfunding-campaign-donation",
      },
      {
        title: "Goodies be-BOP",
        body: "Produits en échange de votre soutien.",
        url: "/peerfunding-campaign-goodies",
      },
      {
        title: "Services",
        body: "Pré-vente be-BOP Cloud, Formation ou accompagnement technique.",
        url: "/peerfunding-campaign-services",
      },
      {
        title: "be-BOP suspendu",
        body: "Abonnement offert à une association partenaire.",
        url: "/peerfunding-campaign-pending",
      },
    ],
  },

  obj2: {
    eyebrow: "Objectif 02",
    title: "GitHub &amp; <em>Nostributeur</em>",
    desc1:
      "Le Nostributeur est un distributeur automatique open-source pour l'ESP-32 qui accepte les paiements via le protocole Nostr, sans serveur central, sans écran, sans processeur de paiement traditionnel. En moins d’une seconde après le paiement, le dispositif se déclenche.",
    desc2:
      "Son code sera rendu public dès que le dépôt GitHub de be-BOP atteindra <strong>200 étoiles</strong>.",
    cta: "Mettre une étoile sur le dépôt GitHub",
  },

  obj3: {
    eyebrow: "Objectif 03",
    title: "Adoption par les <em>associations</em>",
    desc: "Nous offrons un tarif préférentiel à une sélection d'associations et organisations à but non-lucratif lors des premiers mois suivant le lancement de be-BOP Cloud, de l'Europe à Goma en République Démocratique du Congo. Dans des régions comme Goma, les outils de paiement numériques sont inaccessibles : terminaux trop chers, exigences KYC bloquantes, infrastructure bancaire défaillante. be-BOP change ça.",
    suspended: {
      title: "Le be-BOP suspendu",
      body: "Comme un café suspendu, vous payez l’abonnement be-BOP d’une association partenaire. Dès le lancement de be-BOP Cloud, elle pourra en bénéficier directement.",
    },
    assosLabel: "Associations que vous soutenez",
    tabs: [
      { id: "sarah", label: "S.A.R.A.H." },
      { id: "mwasi", label: "Mwasi na Bitcoin" },
      { id: "kongo", label: "Kongo Mwinda" },
      { id: "alle", label: "AID LIFE LEARN ENV." },
      { id: "avenir", label: "+ à venir" },
    ],
    assos: {
      mwasi: {
        location: "Goma, RDC · Inclusion financière",
        name: "Mwasi na Bitcoin",
        tags: ["Bitcoin", "Autonomie financière"],
        desc: "Basée à Goma, Mwasi na Bitcoin forme les femmes à utiliser Bitcoin comme outil d’autonomie financière et bouclier contre l’inflation, dans une ville où les banques sont souvent fermées ou inaccessibles.",
        facts: [
          {
            title: "100+ personnes formées",
            body: "Académie Bitcoin dans les quartiers de Goma, clôturée avec remise de brevets.",
          },
          {
            title: "MeetUps Bitcoin",
            body: "6 MeetUps organisés depuis avril 2025 pour diffuser la culture Bitcoin à Goma.",
          },
          {
            title: "Formations spécialisées",
            body: "Formation dédiée conduite pour une organisation féministe locale.",
          },
        ],
      },
      kongo: {
        location: "Goma, RDC · Inclusion numérique",
        name: "Kongo Mwinda",
        tags: ["Numérique", "Leadership"],
        desc: "Dirigée par de jeunes femmes, Kongo Mwinda œuvre pour l’inclusion numérique féminine à Goma : apprendre à utiliser le numérique de manière responsable, se protéger des arnaques crypto et des violences en ligne.",
        facts: [
          {
            title: "Sécurité numérique",
            body: "Formation aux gestes de base : double authentification, paramètres de confidentialité, signalement de contenus.",
          },
          {
            title: "Encadrement d’orphelines",
            body: "Jeunes filles de 9 à 18 ans : métiers artisanaux, hygiène, autonomie financière et sens critique.",
          },
          {
            title: "Lutte contre les arnaques",
            body: "Sensibilisation aux faux projets crypto et aux violences économiques facilitées par la technologie.",
          },
          {
            title: "Vulgarisation juridique",
            body: "Partage des lois numériques locales pour que chaque femme connaisse ses droits en ligne.",
          },
        ],
      },
      alle: {
        location: "Est RDC · Environnement & Jeunesse",
        name: "AID LIFE LEARN ENVIRONMENT",
        tags: ["Environnement", "Écoféminisme", "Jeunesse"],
        desc: "ONG locale de jeunes basée à l’est de la RDC, active à Goma, Kisangani, Beni, Kinshasa et Bukavu. AID LIFE LEARN ENVIRONMENT mobilise les communautés locales autour des grands défis climatiques et sociaux, avec une attention particulière pour les femmes et les jeunes.",
        facts: [
          {
            title: "Agroaécologie",
            body: "Capacitation des jeunes aux pratiques agricoles durables et à la justice climatique.",
          },
          {
            title: "Entrepreneuriat vert",
            body: "Accompagnement des jeunes vers des activités économiques respectueuses de l’environnement.",
          },
          {
            title: "Écoféminisme",
            body: "Les femmes au cœur de l’action environnementale, comme actrices et non comme victimes de la vulnérabilité climatique.",
          },
          {
            title: "5 villes actives",
            body: "Goma · Kisangani · Beni · Kinshasa · Bukavu : un réseau national en construction.",
          },
        ],
      },
      sarah: {
        location: "Besançon, France · Handicap & Inclusion",
        name: "Association S.A.R.A.H.",
        tags: ["Handicap", "Inclusion"],
        desc: "L’Association S.A.R.A.H. propose un accueil de loisirs inclusif réunissant enfants en situation de handicap et enfants ordinaires, des services de répit pour les familles, un accès facilité aux soins et des activités intergénérationnelles avec des seniors.",
        facts: [
          {
            title: "Accueil inclusif",
            body: "Enfants handicapés et ordinaires accueillis ensemble, dans le respect de la différence.",
          },
          {
            title: "Répit familial",
            body: "Professionnels du bien-être au service des familles d’enfants en situation de handicap.",
          },
          {
            title: "Lien intergénérationnel",
            body: "Activités partagées entre séniors et enfants, autour du savoir-faire et du vivre-ensemble.",
          },
        ],
      },
      avenir: {
        desc: "D’autres associations rejoignent bientôt le programme.",
        regions: "France · Polynésie française · Salvador · Indonésie",
      },
    },
  },

  obj4: {
    eyebrow: "Objectif 04",
    title: "Développer notre <em>communauté</em>",
    stoat: {
      label: "Nouveau serveur Stoat",
      title: "Rejoignez le serveur Stoat de be-BOP",
      desc: "Notre communauté existe déjà sur Twitter, Mastodon, GitHub, mais elle est éparpillée. Il était temps de lui donner un espace commun.",
      cta: "Rejoindre le serveur Stoat !",
    },
  },

  ctaBar: {
    eyebrow: "Vous souhaitez contribuer ?",
    title: "Soutenez la campagne peerfunding",
    cta: "Nous soutenir",
  },

  sidebar: {
    eyebrow: "Campagne",
    title: "Nos contreparties",
    supports: [
      {
        title: "Don libre",
        body: "Avec votre méthode de paiement préférée",
        url: "/peerfunding-campaign-donation",
      },
      {
        title: "Goodies be-BOP",
        body: "Produits en échange de votre soutien.",
        url: "/peerfunding-campaign-goodies",
      },
      {
        title: "Services",
        body: "Pré-vente be-BOP Cloud, Formation ou accompagnement technique.",
        url: "/peerfunding-campaign-services",
      },
      {
        title: "be-BOP suspendu",
        body: "Abonnement offert à une association partenaire.",
        url: "/peerfunding-campaign-pending",
      },
    ],
    community: {
      eyebrow: "Communauté",
      title: "Rejoignez notre serveur Stoat",
      cta: "Rejoindre la communauté !",
    },
  },

  mobileCta: "Nos contreparties →",
};
