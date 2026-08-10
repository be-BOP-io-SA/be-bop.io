import type { TutoHubTranslations } from "./types";

export const de: TutoHubTranslations = {
  hero: {
    eyebrow: "be-BOP · Dokumentation",
    title: "Einrichtungshilfe",
    lede: "Hier finden Sie alle Anleitungen, um Ihre Zahlungsmethoden bei be-BOP zu verbinden und einzurichten: Bitcoin, Lightning und Fiat-Zahlungen. Wählen Sie einen Dienst, um die Schritt-für-Schritt-Anleitung zu öffnen.",
  },
  toc: {
    label: "Inhalt",
    items: [
      {
        num: "1.",
        label:
          "Hilfe beim Verbinden und Einrichten von Zahlungsdiensten bei be-BOP",
        href: "#services-paiement",
      },
    ],
  },
  section: {
    num: "1",
    title: "Verbindung und Einrichtung der Zahlungsdienste",
    subtitle:
      "Wählen Sie Ihren Anbieter, um die passende Anleitung zu öffnen. Ausgegraute Kacheln sind bald verfügbar.",
  },
  tiles: {
    btcpay: {
      name: "BTCPay Server",
      kind: "Bitcoin · Lightning",
      cta: "Einrichten",
    },
    paypal: {
      name: "PayPal",
      kind: "Fiat · Wallet",
      cta: "Einrichten",
    },
    osb: {
      name: "OSB",
      kind: "Fiat · Kartenzahlung",
      cta: "Einrichten",
    },
    swissBitcoinPay: {
      name: "Swiss Bitcoin Pay",
      kind: "Bitcoin · Lightning",
      cta: "Einrichten",
    },
    stripe: {
      name: "Stripe",
      kind: "Fiat · Kartenzahlung",
      cta: "Einrichten",
    },
    sumup: {
      name: "SumUp",
      kind: "Fiat · Kartenterminal",
      cta: "Einrichten",
    },
    cash: {
      name: "Bargeld und andere PoS-Zahlungen",
      kind: "Bargeld · Kassenpunkt",
      cta: "Einrichten",
    },
  },
  soon: {
    badge: "Demnächst",
    label: "Demnächst verfügbar",
    bitcoinOnchain: {
      name: "Bitcoin on-chain (nodeless)",
      kind: "Bitcoin · ohne Node",
    },
    gnuTaler: {
      name: "GNU Taler",
      kind: "Elektronisches Geld",
    },
  },
};
