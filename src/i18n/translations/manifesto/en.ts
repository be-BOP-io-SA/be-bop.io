import type { ManifestoTranslations } from "./types";

export const en: ManifestoTranslations = {
  hero: {
    eyebrow: "Solutions vs identified problems in the ecosystem",
    title: "Technical and Functional<br />Innovations of be-BOP",
  },
  opening: {
    quote:
      "\u201CThe priority of someone who wants to share content should be the creation of it \u2014 and its sharing.\u201D",
    prose:
      "While we willingly accept that a certain pragmatism must be present \u2014 regarding preparation, work to be done, communication, and economic and fiscal regulation of earnings \u2014 we believe that the processes currently enabling people to share content are at best biased and at worst obstructive.",
  },
  actors: {
    heading: "The people involved",
    creator: {
      badge: "C",
      title: "The Creator",
      intro:
        "Someone who wants to share their content is someone who, in addition to creating it, must:",
      items: [
        "make themselves visible, virtually or physically",
        "offer or sell the product of their creation",
        "benefit from patronage \u2014 collecting support, donations, sponsorships",
        "declare the product of their creative activities",
      ],
    },
    supporter: {
      badge: "S",
      title: "The Supporter",
      intro: "Support should be able to:",
      items: [
        "access the news and creations of the person they follow",
        "obtain or acquire those creations in the way that suits them best",
        "support the creator in alternative ways, beyond purchase",
      ],
    },
  },
  problems: {
    heading: "The Fintech hardships",
    headingDesc:
      "While the emergence of solutions like Sum Up or Twint has helped content sharers monetize more easily, others have suffered the hardships of the Fintech ecosystem:",
    items: [
      {
        num: "01",
        title: "Platform Specialization",
        desc: "One platform for sales, another for donations, another for subscriptions, another for crowdfunding. This fragmentation has split the visibility of content creators and complicated public support \u2014 requiring them to spread information across multiple centralized sources that exploit and monetize personal data.",
      },
      {
        num: "02",
        title: "Platform Censorship",
        desc: "Whether through sudden service shutdowns that deprive thousands of income, unilateral changes to Terms of Use, or abusive algorithmic demonetization \u2014 creators face the abrupt loss of revenue with a presumption of guilt and no clear recourse.",
      },
    ],
    pullquote:
      "Self-hosted solutions can be so versatile that they mimic the functioning of giants via expensive plugins \u2014 yet the needs of creators are much simpler, and their skills are creative, not managing advanced e-commerce systems.",
  },
  solutions: {
    heading: "Designated be-BOP solutions",
    headingDesc:
      "To address these issues, we have decided to designate be-BOP:",
    items: [
      {
        num: "01",
        title: "Open Ecosystem",
        desc: "A hosted, plugin-free, open-source solution \u2014 for greater stability without hidden costs (merch, CMS, ARM, billing\u2026).",
      },
      {
        num: "02",
        title: "Native SEO",
        desc: "No double entry. What is displayed on the site is what is indexed by search crawlers \u2014 built-in from day one.",
      },
      {
        num: "03",
        title: "Unified Support",
        desc: "Purchase, donation, subscription, and pre-order within a single process \u2014 no juggling between specialised platforms.",
      },
      {
        num: "04",
        title: "Resilient Payments",
        desc: "Bitcoin/Lightning, popular PSPs, localized methods (iDeal, AliPay), and mobile money for unbanked populations.",
      },
      {
        num: "05",
        title: "Privacy First",
        desc: "Temporary session links, no stored passwords, minimal data collection \u2014 no postal address required for digital goods.",
      },
      {
        num: "06",
        title: "Compliance Tools",
        desc: "One-click export of transaction logs, VAT, and accounting files adapted to the creator\u2019s regime and location.",
      },
    ],
  },
  future: {
    heading: "The Future of be-BOP and Decentralized Marketplaces",
    epigraph: {
      poem: "De l\u2019\u00e9mulation distinguez bien l\u2019envie\u00a0:<br />L\u2019une m\u00e8ne \u00e0 la gloire, et l\u2019autre au d\u00e9shonneur\u00a0;<br />L\u2019une est l\u2019aliment du g\u00e9nie,<br />Et l\u2019autre est le poison du c\u0153ur.",
      translation:
        "Distinguish emulation well from envy: one leads to glory, the other to dishonor;<br />one is the nourishment of genius, the other the poison of the heart.",
      cite: "\u2014 Voltaire",
    },
    prose: [
      "In content creation, as in craftsmanship and writing, one might believe that crushing the competition is the only way to break through. This mindset has led to paid search advertising (SEA) where the highest bidder tops results, and to visibility boosts on monetized marketplaces at the expense of authenticity.",
      "Large centralized marketplaces have sidelined smaller, more modest creators \u2014 not to mention the invisibilization of certain types of content.",
    ],
    statement:
      "On the contrary, collaboration between creators \u2014 the \u201CCapsule\u201D effect, featuring, and partnerships \u2014 has a virtuous and timeless impact: a shared creation brings communities together.",
    crossBeBop: {
      label: "Cross-be-BOP",
      lead: "A Nostr-based protocol enabling two or more be-BOP instances to collaborate directly.",
      items: [
        "Perform automatic catalogue exchanges",
        "Automatically apply margins and commissions via Lightning",
        "Send automatic billing orders for accounting purposes",
        "Run peerfunding campaigns without any retention intermediary",
      ],
    },
    metaBeBop: {
      label: "Meta-be-BOP",
      lead: "Reinventing the role of the influencer through curated showrooms for handpicked selections.",
      prose:
        "Anyone could open their own be-BOP and populate it from public catalogues via a \u201CDiscovery\u201D setting, with a commission rate defined by the original creator.",
    },
    useCases: [
      {
        letter: "A",
        desc: "A literary influencer could showcase a curated book selection from various publishers and earn a commission on each sale.",
      },
      {
        letter: "B",
        desc: "An NGO could present a selection of humanitarian projects simply by choosing to make them visible, without claiming any margin.",
      },
      {
        letter: "C",
        desc: "A be-BOP owner with a Bitcoin/Lightning node could enable others without those services to reach a broader audience.",
      },
    ],
    closing: {
      note: "All of this in a fully decentralized manner: no central API, no marketplace server acting as an information hub \u2014 star-topology communication between each shop via Nostr bots.",
      statement:
        "We hope to encourage genuine artistic and artisanal curation, where content creators work in tandem yet remain fully autonomous.",
    },
  },
};
