import type { ManifestoTranslations } from "./types";

export const fr: ManifestoTranslations = {
  hero: {
    eyebrow: "Solutions face aux probl\u00e8mes identifi\u00e9s dans l\u2019\u00e9cosyst\u00e8me",
    title: "Innovations techniques et fonctionnelles<br />de be-BOP",
  },
  opening: {
    quote:
      "\u00ab\u00a0La priorit\u00e9 de quelqu\u2019un qui souhaite partager du contenu devrait \u00eatre sa cr\u00e9ation \u2014 et son partage.\u00a0\u00bb",
    prose:
      "Bien que nous acceptions volontiers qu\u2019un certain pragmatisme soit n\u00e9cessaire \u2014 en mati\u00e8re de pr\u00e9paration, de travail \u00e0 accomplir, de communication, et de r\u00e9gulation \u00e9conomique et fiscale des revenus \u2014 nous pensons que les processus permettant actuellement aux personnes de partager du contenu sont, au mieux biais\u00e9s, et au pire obstructifs.",
  },
  actors: {
    heading: "Les personnes impliqu\u00e9es",
    creator: {
      badge: "C",
      title: "Le Cr\u00e9ateur",
      intro:
        "Quelqu\u2019un qui souhaite partager son contenu est quelqu\u2019un qui, en plus de le cr\u00e9er, doit\u00a0:",
      items: [
        "se rendre visible, virtuellement ou physiquement",
        "proposer ou vendre le fruit de sa cr\u00e9ation",
        "b\u00e9n\u00e9ficier du m\u00e9c\u00e9nat \u2014 collecter des soutiens, des dons, des parrainages",
        "d\u00e9clarer le produit de ses activit\u00e9s cr\u00e9atives",
      ],
    },
    supporter: {
      badge: "S",
      title: "Le Soutien",
      intro: "Le soutien doit pouvoir\u00a0:",
      items: [
        "acc\u00e9der aux actualit\u00e9s et cr\u00e9ations de la personne qu\u2019il suit",
        "obtenir ou acqu\u00e9rir ces cr\u00e9ations de la mani\u00e8re qui lui convient le mieux",
        "soutenir le cr\u00e9ateur de fa\u00e7on alternative, au-del\u00e0 de l\u2019achat",
      ],
    },
  },
  problems: {
    heading: "Les difficult\u00e9s de la Fintech",
    headingDesc:
      "Si l\u2019\u00e9mergence de solutions comme Sum Up ou Twint a aid\u00e9 les cr\u00e9ateurs de contenu \u00e0 mon\u00e9tiser plus facilement, d\u2019autres ont subi les difficult\u00e9s de l\u2019\u00e9cosyst\u00e8me Fintech\u00a0:",
    items: [
      {
        num: "01",
        title: "Sp\u00e9cialisation des plateformes",
        desc: "Une plateforme pour les ventes, une autre pour les dons, une autre pour les abonnements, une autre pour le financement participatif. Cette fragmentation a divis\u00e9 la visibilit\u00e9 des cr\u00e9ateurs de contenu et compliqu\u00e9 le soutien du public \u2014 les obligeant \u00e0 diffuser leurs informations sur de multiples sources centralis\u00e9es qui exploitent et mon\u00e9tisent les donn\u00e9es personnelles.",
      },
      {
        num: "02",
        title: "Censure des plateformes",
        desc: "Qu\u2019il s\u2019agisse de fermetures soudaines de services privant des milliers de personnes de revenus, de modifications unilat\u00e9rales des conditions d\u2019utilisation, ou de d\u00e9mon\u00e9tisation algorithmique abusive \u2014 les cr\u00e9ateurs font face \u00e0 la perte brutale de revenus avec une pr\u00e9somption de culpabilit\u00e9 et sans recours clair.",
      },
    ],
    pullquote:
      "Les solutions auto-h\u00e9berg\u00e9es peuvent \u00eatre si polyvalentes qu\u2019elles imitent le fonctionnement des g\u00e9ants via des plugins co\u00fbteux \u2014 pourtant les besoins des cr\u00e9ateurs sont bien plus simples, et leurs comp\u00e9tences sont cr\u00e9atives, pas techniques en mati\u00e8re de syst\u00e8mes e-commerce avanc\u00e9s.",
  },
  solutions: {
    heading: "Les solutions be-BOP d\u00e9sign\u00e9es",
    headingDesc:
      "Pour r\u00e9pondre \u00e0 ces probl\u00e8mes, nous avons d\u00e9cid\u00e9 de concevoir be-BOP comme\u00a0:",
    items: [
      {
        num: "01",
        title: "\u00c9cosyst\u00e8me ouvert",
        desc: "Une solution h\u00e9berg\u00e9e, sans plugin, open source \u2014 pour une plus grande stabilit\u00e9 sans co\u00fbts cach\u00e9s (merchandising, CMS, ARM, facturation\u2026).",
      },
      {
        num: "02",
        title: "SEO natif",
        desc: "Pas de double saisie. Ce qui est affich\u00e9 sur le site est ce qui est index\u00e9 par les moteurs de recherche \u2014 int\u00e9gr\u00e9 d\u00e8s le premier jour.",
      },
      {
        num: "03",
        title: "Soutien unifi\u00e9",
        desc: "Achat, don, abonnement et pr\u00e9commande au sein d\u2019un seul processus \u2014 sans jongler entre des plateformes sp\u00e9cialis\u00e9es.",
      },
      {
        num: "04",
        title: "Paiements r\u00e9silients",
        desc: "Bitcoin/Lightning, PSP populaires, m\u00e9thodes localis\u00e9es (iDeal, AliPay) et mobile money pour les populations non bancaris\u00e9es.",
      },
      {
        num: "05",
        title: "Vie priv\u00e9e avant tout",
        desc: "Liens de session temporaires, pas de mots de passe stock\u00e9s, collecte minimale de donn\u00e9es \u2014 aucune adresse postale requise pour les biens num\u00e9riques.",
      },
      {
        num: "06",
        title: "Outils de conformit\u00e9",
        desc: "Export en un clic des journaux de transactions, de la TVA et des fichiers comptables adapt\u00e9s au r\u00e9gime et \u00e0 la localisation du cr\u00e9ateur.",
      },
    ],
  },
  future: {
    heading: "L\u2019avenir de be-BOP et des march\u00e9s d\u00e9centralis\u00e9s",
    epigraph: {
      poem: "De l\u2019\u00e9mulation distinguez bien l\u2019envie\u00a0:<br />L\u2019une m\u00e8ne \u00e0 la gloire, et l\u2019autre au d\u00e9shonneur\u00a0;<br />L\u2019une est l\u2019aliment du g\u00e9nie,<br />Et l\u2019autre est le poison du c\u0153ur.",
      cite: "\u2014 Voltaire",
    },
    prose: [
      "Dans la cr\u00e9ation de contenu, comme dans l\u2019artisanat et l\u2019\u00e9criture, on pourrait croire qu\u2019\u00e9craser la concurrence est le seul moyen de percer. Cette mentalit\u00e9 a conduit \u00e0 la publicit\u00e9 payante dans les moteurs de recherche (SEA) o\u00f9 le plus offrant se retrouve en t\u00eate des r\u00e9sultats, et aux boosts de visibilit\u00e9 sur les marketplaces mon\u00e9tis\u00e9es au d\u00e9triment de l\u2019authenticit\u00e9.",
      "Les grandes marketplaces centralis\u00e9es ont marginalis\u00e9 les cr\u00e9ateurs plus petits et plus modestes \u2014 sans parler de l\u2019invisibilisation de certains types de contenu.",
    ],
    statement:
      "Au contraire, la collaboration entre cr\u00e9ateurs \u2014 l\u2019effet \u00ab\u00a0Capsule\u00a0\u00bb, les mises en avant et les partenariats \u2014 a un impact vertueux et intemporel\u00a0: une cr\u00e9ation partag\u00e9e rassemble les communaut\u00e9s.",
    crossBeBop: {
      label: "Cross-be-BOP",
      lead: "Un protocole bas\u00e9 sur Nostr permettant \u00e0 deux instances be-BOP ou plus de collaborer directement.",
      items: [
        "Effectuer des \u00e9changes automatiques de catalogues",
        "Appliquer automatiquement des marges et commissions via Lightning",
        "Envoyer des ordres de facturation automatiques \u00e0 des fins comptables",
        "Lancer des campagnes de financement participatif sans interm\u00e9diaire de r\u00e9tention",
      ],
    },
    metaBeBop: {
      label: "Meta-be-BOP",
      lead: "R\u00e9inventer le r\u00f4le de l\u2019influenceur \u00e0 travers des showrooms organis\u00e9s pour des s\u00e9lections soigneusement choisies.",
      prose:
        "N\u2019importe qui pourrait ouvrir son propre be-BOP et l\u2019alimenter depuis des catalogues publics via un param\u00e8tre \u00ab\u00a0D\u00e9couverte\u00a0\u00bb, avec un taux de commission d\u00e9fini par le cr\u00e9ateur original.",
    },
    useCases: [
      {
        letter: "A",
        desc: "Un influenceur litt\u00e9raire pourrait pr\u00e9senter une s\u00e9lection de livres soigneusement choisie aupr\u00e8s de diff\u00e9rents \u00e9diteurs et percevoir une commission sur chaque vente.",
      },
      {
        letter: "B",
        desc: "Une ONG pourrait pr\u00e9senter une s\u00e9lection de projets humanitaires simplement en choisissant de les rendre visibles, sans revendiquer aucune marge.",
      },
      {
        letter: "C",
        desc: "Un propri\u00e9taire de be-BOP disposant d\u2019un n\u0153ud Bitcoin/Lightning pourrait permettre \u00e0 d\u2019autres, sans ces services, d\u2019atteindre un public plus large.",
      },
    ],
    closing: {
      note: "Tout cela de mani\u00e8re enti\u00e8rement d\u00e9centralis\u00e9e\u00a0: pas d\u2019API centrale, pas de serveur de marketplace agissant comme hub d\u2019information \u2014 communication en topologie \u00e9toile entre chaque boutique via des bots Nostr.",
      statement:
        "Nous esp\u00e9rons encourager une v\u00e9ritable curation artistique et artisanale, o\u00f9 les cr\u00e9ateurs de contenu travaillent en tandem tout en restant pleinement autonomes.",
    },
  },
};
