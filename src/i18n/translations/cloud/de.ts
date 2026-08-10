import type { CloudTranslations } from "./types";

export const de: CloudTranslations = {
  hero: {
    eyebrow: "be‑BOP Cloud",
    title: "Die E-Commerce-Plattform, die wirklich Ihnen gehört.",
    subtitle:
      "Freie Software, für Sie gehostet. Commerce, Ticketing, Abonnements, Gastronomie, Bitcoin & Lightning inklusive, null Plattformgebühr.",
    ctaPrimary: "Kostenlos testen",
    ctaSecondary: "Funktionen entdecken",
    badge: "🔓 AGPL-3.0, Quellcode verfügbar",
  },
  regions: {
    label: "In Ihrer Region verfügbar",
    title: "Wählen Sie Ihre be‑BOP Cloud Instanz.",
    subtitle:
      "Jeder Markt hat seine eigene Instanz, zugeschnitten auf lokale Besonderheiten. Klicken Sie auf Ihr Land, um das passende Angebot zu entdecken.",
    cta: "Angebot entdecken →",
    items: [
      {
        flag: "🇨🇭",
        market: "Schweiz",
        highlight:
          "Gehostet in Deutschland (EWR), DSG- und revDSG-konform, Mehrwährung CHF/EUR.",
        href: "/de/ch-tenant",
      },
      {
        flag: "🇪🇺",
        market: "Frankreich & Europa",
        highlight:
          "Gehostet in Deutschland (EWR), DSGVO-konform, Datenresidenz in der EU.",
        href: "/fr/eu-tenant",
      },
      {
        flag: "🇵🇫",
        market: "Französisch-Polynesien",
        highlight:
          "Optimiert für das Fenua, lokale Konformität, Mehrwährung XPF/EUR.",
        href: "/fr/pf-tenant",
      },
    ],
  },
  features: {
    label: "Funktionen",
    title: "Eine einzige Plattform für alle Ihre Handelsanwendungen.",
    subtitle:
      "Vom E-Commerce über Ticketing und Reservierung bis hin zu Spenden und dem stationären Kassensystem: be‑BOP Cloud vereint alle Verkaufswerkzeuge in einer einzigen All-in-one-Plattform, ganz ohne Plugins oder zusätzliche Drittanbieter-Abos. Jede Funktion ist Teil Ihres Tarifs, egal ob Sie sie aktivieren oder nicht: Sie zahlen nie mehr, je nachdem was Sie nutzen.",
    items: [
      {
        title: "e-Commerce",
        description:
          "Mit be‑BOP Cloud starten Sie ganz einfach einen professionellen Onlineshop für Ihre physischen oder digitalen Produkte. Katalog, Warenkorb und Bestellprozess sind sofort einsatzbereit, ganz ohne Plugin oder komplexe Konfiguration, die Sie selbst verwalten müssten.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-ecommerce-checkout-laptop-bro-svg-5jozA6?key=35a92c4f-5b0e-457b-a383-2422a5585d72",
      },
      {
        title: "Kassensystem (PoS)",
        description:
          "Verwandeln Sie jedes Gerät mit Webbrowser dank der PoS-Oberfläche von be‑BOP Cloud in eine Registrierkasse, entwickelt für den Verkauf am stationären Point of Sale. Verfügbar in der Schweiz und in Französisch-Polynesien, Frankreich und die EU folgen bald.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-pos-bro-svg-b6v6Ln?key=7cac8a27-cd5c-4084-bbb0-0d6060881920",
      },
      {
        title: "Reservierung",
        description:
          "Mit be‑BOP Cloud integriert Ihr Onlineshop nativ die Reservierung von Zeitfenstern, Tagen oder Übernachtungen. Ihre Kunden reservieren und bezahlen online in wenigen Klicks, ganz ohne zusätzliches Plugin oder externes Kalendertool zum Synchronisieren.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-schedule-booking-bro-svg-6kZsHq?key=2b727fd6-dc05-4237-a422-49678da90378",
      },
      {
        title: "Ticketing",
        description:
          "Erstellen Sie Tickets für Ihre Veranstaltungen und verkaufen Sie sie direkt über Ihre be‑BOP Cloud Plattform. Jeder Verkauf erzeugt einen eindeutigen QR-Code, der an Ihre Kunden gesendet wird: Überprüfen Sie dessen Gültigkeit und Nutzung mit jedem Gerät mit Kamera und Webbrowser.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-ticketing-svg-nUtfSn?key=438511f6-80ef-4aec-80b9-64567e62c5d6",
      },
      {
        title: "Spenden und Peerfunding",
        description:
          "be‑BOP Cloud ermöglicht Ihnen, Spenden zu sammeln, Produkte zum freien Preis (PWYW) anzubieten und Crowdfunding-Kampagnen mit Ihren Unterstützern zu organisieren. Die Zahlungen laufen direkt zwischen Ihnen, be‑BOP greift nie ein.",
        illustration:
          "https://be-bop.io/digital-file/raw/story-set-donation-bro-svg-YKEHlh?key=95297ea1-d07b-4709-8571-7c3077762f74",
      },
    ],
  },
  differentiators: {
    label: "Unterscheidungsmerkmale",
    title: "Kein E-Commerce-SaaS wie jedes andere.",
    subtitle:
      "Während Shopify Ihren Shop als Geisel hält, läuft be‑BOP Cloud auf freier Software, die Sie prüfen, forken oder morgen selbst hosten können.",
    cards: [
      {
        title: "Null Plattformgebühr",
        desc: "be‑BOP erhebt keine Provision auf Ihre Verkäufe. Sie zahlen ein festes Abonnement, das ist alles.",
      },
      {
        title: "Datenschutz an erster Stelle",
        desc: "Hosting in Deutschland (EWR), DSG- und DSGVO-Konformität von Anfang an, minimale Datenerhebung.",
      },
      {
        title: "Bitcoin & Lightning nativ",
        desc: "Direkt im Herzen der Zahlungs-Engine integriert, On-Chain und Lightning Network, gleichwertig zu Ihren anderen Zahlungsmitteln und stets optional.",
      },
      {
        title: "Freie Software",
        desc: "AGPL-3.0, ohne Vendor-Lock-in: Prüfen Sie den Code, tragen Sie bei oder hosten Sie Ihre Instanz selbst, wann immer Sie möchten.",
      },
    ],
  },
};
