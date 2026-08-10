import type { PeerfundingPalier1Translations } from "./types";

export const en: PeerfundingPalier1Translations = {
  hero: {
    eyebrow: "Peerfunding be-BOP · April 27 – June 8 2026 · 24h Extension!",
    title: "Let's build <em>PipeliNostr</em> together",
    subtitle:
      "be-BOP launches its crowdfunding campaign.<br><strong>5,000 EUR. 42 days. One community.</strong>",
    countdownLabel: "Campaign ends in…",
    video: {
      title: "PipeliNostr peerfunding presentation from be-BOP",
      src: "https://peertube.ch/videos/embed/2BHE8K49JumbAZPYeDFG29",
    },
  },

  beBopIntro: {
    eyebrow: "About be-BOP",
    title: "New to be-BOP? Watch this first",
    video: {
      title: "What is be-BOP? Presentation in less than a minute",
      src: "https://peertube.ch/videos/embed/sEMdwW8HcaSiYk6n6ue8ZF",
    },
  },

  brief: {
    eyebrow: "The campaign",
    title: "Peerfunding at a glance",
    desc: '<strong>PipeliNostr</strong> is an open-source event router — think of it as <strong>"the n8n of Nostr"</strong>. It listens to Nostr events (encrypted DMs, zap receipts, mentions) and routes them via YAML workflows to external services: email, Telegram, databases, and other connectors. Any developer can integrate it into their own software under its AGPLv3 licence.',
    bullets: [
      {
        title: "YAML Workflows",
        body: "Automation is handled via a simple YAML file in which you declare your various workflows and connect your different services.",
      },
      {
        title: "API connectors",
        body: "PipeliNostr interfaces with existing services via their APIs to bridge them to the Nostr network or between different networks.",
      },
      {
        title: "Universal & free",
        body: "Open-source under AGPLv3, usable with any software. be-BOP is its first user, but won't be the last.",
      },
    ],
    stats: [
      { value: "5,000", label: "EUR to raise" },
      { value: "42", label: "Campaign days" },
      { value: "AGPLv3", label: "Free licence" },
    ],
  },

  agenda: {
    eyebrow: "Agenda",
    title: "News & Events",
    events: [
      {
        date: "25 April 2026",
        name: "Swiss Bitcoin Conference",
        location: "Kreuzlingen",
      },
      {
        date: "27 April 2026",
        name: "Peerfunding campaign launch",
        location: "Online",
        active: true,
      },
      {
        date: "7 May 2026",
        name: "Talk at Klab",
        location: "Pontarlier · Free entry",
      },
      {
        date: "21 May 2026",
        name: "LibreLocal",
        location: "Neuchâtel",
      },
      {
        date: "26–27 June 2026",
        name: "Paradigme Bitcoin",
        location: "Neuchâtel",
      },
    ],
  },

  obj1: {
    eyebrow: "Objective 01",
    title: "Fund <em>PipeliNostr</em>",
    desc: "Where be-BOP handles your sales and payments, PipeliNostr takes over: it connects be-BOP, or any other software, to the rest of the digital world. Here are a few examples of what it makes possible.",
    usecases: [
      {
        trigger: "Order → Nostr DM",
        action:
          "The customer receives a unique activation code directly in their Nostr client via DM.",
      },
      {
        trigger: "Private DM → Email",
        action:
          "Receive your private Nostr messages in your email inbox — your bot bridges the gap.",
      },
      {
        trigger: "Zap → Physical action",
        action:
          "A physical device triggers in under a second as soon as a Zap is received — no LNbits, no Bitcoin switch, not even a screen.",
      },
    ],
    goalEyebrow: "Our campaign goals.",
    goals: [
      {
        label: "Goal 1",
        amount: "5,000 EUR",
        name: "PipeliNostr DIY",
        desc: "A standalone, modular version, freely published under AGPLv3. Any developer can integrate it into their own project.",
      },
      {
        label: "Goal 2",
        amount: "10,000 EUR",
        name: "Something bigger and better",
        desc: "Help us reach our first goal so we can communicate about the second one.",
      },
    ],
    supportEyebrow: "How to support us?",
    supports: [
      {
        title: "Donation",
        body: "With your preferred payment method",
        url: "/peerfunding-campaign-donation",
      },
      {
        title: "be-BOP goodies",
        body: "Products in exchange for your support.",
        url: "/peerfunding-campaign-goodies",
      },
      {
        title: "Services",
        body: "be-BOP Cloud pre-sale, training, or technical support.",
        url: "/peerfunding-campaign-services",
      },
      {
        title: "Pending be-BOP",
        body: "A subscription offered to a partner association.",
        url: "/peerfunding-campaign-pending",
      },
    ],
  },

  obj2: {
    eyebrow: "Objective 02",
    title: "GitHub &amp; <em>Nostributor</em>",
    desc1:
      "The Nostributeur is an open-source drink dispenser for the ESP-32 board that accepts payments via the Nostr protocol — no central server, no screen, no traditional payment processor. In less than a second after payment, the device triggers.",
    desc2:
      "Its code will be made public as soon as the be-BOP GitHub repository reaches <strong>200 stars</strong>.",
    cta: "Star the GitHub repository",
  },

  obj3: {
    eyebrow: "Objective 03",
    title: "Adoption by <em>associations</em>",
    desc: "We are offering a preferential rate to a selection of non-profit associations and organisations during the first months following the launch of be-BOP Cloud, from Europe to Goma in the Democratic Republic of Congo. In regions like Goma, digital payment tools are out of reach: terminals too expensive, blocking KYC requirements, failing banking infrastructure. be-BOP changes that.",
    suspended: {
      title: "The pending be-BOP",
      body: "Like a pending coffee, you pay the be-BOP subscription for a partner association. As soon as be-BOP Cloud launches, they will be able to benefit from it directly.",
    },
    assosLabel: "Associations you are supporting",
    tabs: [
      { id: "sarah", label: "S.A.R.A.H." },
      { id: "mwasi", label: "Mwasi na Bitcoin" },
      { id: "kongo", label: "Kongo Mwinda" },
      { id: "alle", label: "AID LIFE LEARN ENV." },
      { id: "avenir", label: "+ coming soon" },
    ],
    assos: {
      mwasi: {
        location: "Goma, DRC · Financial inclusion",
        name: "Mwasi na Bitcoin",
        tags: ["Bitcoin", "Financial autonomy"],
        desc: "Based in Goma, Mwasi na Bitcoin trains women to use Bitcoin as a tool for financial autonomy and a shield against inflation, in a city where banks are often closed or inaccessible.",
        facts: [
          {
            title: "100+ people trained",
            body: "Bitcoin Academy in Goma neighbourhoods, completed with a certificate ceremony.",
          },
          {
            title: "Bitcoin meetups",
            body: "6 meetups organised since April 2025 to spread Bitcoin culture in Goma.",
          },
          {
            title: "Specialist training",
            body: "Dedicated training conducted for a local feminist organisation.",
          },
        ],
      },
      kongo: {
        location: "Goma, DRC · Digital inclusion",
        name: "Kongo Mwinda",
        tags: ["Digital", "Leadership"],
        desc: "Led by young women, Kongo Mwinda works towards female digital inclusion in Goma: learning to use digital tools responsibly, protecting against crypto scams and online violence.",
        facts: [
          {
            title: "Digital security",
            body: "Training in basic practices: two-factor authentication, privacy settings, content reporting.",
          },
          {
            title: "Support for orphaned girls",
            body: "Girls aged 9 to 18: craft skills, hygiene, financial autonomy and critical thinking.",
          },
          {
            title: "Fighting scams",
            body: "Raising awareness of fake crypto projects and technology-facilitated economic violence.",
          },
          {
            title: "Legal awareness",
            body: "Sharing local digital laws so that every woman knows her rights online.",
          },
        ],
      },
      alle: {
        location: "Eastern DRC · Environment & Youth",
        name: "AID LIFE LEARN ENVIRONMENT",
        tags: ["Environment", "Ecofeminism", "Youth"],
        desc: "A local youth NGO based in eastern DRC, active in Goma, Kisangani, Beni, Kinshasa and Bukavu. AID LIFE LEARN ENVIRONMENT mobilises local communities around major climate and social challenges, with a particular focus on women and young people.",
        facts: [
          {
            title: "Agroecology",
            body: "Building young people's capacity in sustainable farming practices and climate justice.",
          },
          {
            title: "Green entrepreneurship",
            body: "Supporting young people towards environmentally responsible economic activities.",
          },
          {
            title: "Ecofeminism",
            body: "Women at the heart of environmental action — as agents, not as victims of climate vulnerability.",
          },
          {
            title: "5 active cities",
            body: "Goma · Kisangani · Beni · Kinshasa · Bukavu: a national network in the making.",
          },
        ],
      },
      sarah: {
        location: "Besançon, France · Disability & Inclusion",
        name: "Association S.A.R.A.H.",
        tags: ["Disability", "Inclusion"],
        desc: "Association S.A.R.A.H. offers inclusive leisure activities bringing together children with disabilities and non-disabled children, respite services for families, facilitated access to care, and intergenerational activities with older adults.",
        facts: [
          {
            title: "Inclusive welcome",
            body: "Children with and without disabilities welcomed together, in a spirit of respect for difference.",
          },
          {
            title: "Family respite",
            body: "Wellbeing professionals supporting families of children with disabilities.",
          },
          {
            title: "Intergenerational connection",
            body: "Shared activities between older adults and children, centred on know-how and living together.",
          },
        ],
      },
      avenir: {
        desc: "More associations will be joining the programme soon.",
        regions: "France · French Polynesia · El Salvador · Indonesia",
      },
    },
  },

  obj4: {
    eyebrow: "Objective 04",
    title: "Growing our <em>community</em>",
    stoat: {
      label: "New Stoat server",
      title: "Join the be-BOP Stoat server",
      desc: "Our community already exists on Twitter, Mastodon and GitHub, but it is scattered. It was time to give it a shared space.",
      cta: "Join the Stoat server!",
    },
  },

  ctaBar: {
    eyebrow: "Want to contribute?",
    title: "Support the peerfunding campaign",
    cta: "Support us",
  },

  sidebar: {
    eyebrow: "Campaign",
    title: "Our rewards",
    supports: [
      {
        title: "Donation",
        body: "With your preferred payment method",
        url: "/peerfunding-campaign-donation",
      },
      {
        title: "be-BOP goodies",
        body: "Products in exchange for your support.",
        url: "/peerfunding-campaign-goodies",
      },
      {
        title: "Services",
        body: "be-BOP Cloud pre-sale, training, or technical support.",
        url: "/peerfunding-campaign-services",
      },
      {
        title: "Pending be-BOP",
        body: "A subscription offered to a partner association.",
        url: "/peerfunding-campaign-pending",
      },
    ],
    community: {
      eyebrow: "Community",
      title: "Join our Stoat server",
      cta: "Join our community!",
    },
  },

  mobileCta: "Our rewards →",
};
