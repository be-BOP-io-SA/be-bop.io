import type { PspStripeTranslations } from "./types";

export const de: PspStripeTranslations = {
  hero: {
    eyebrow: "PSP-Einrichtung",
    title: "Stripe einrichten",
    subtitle:
      "Folgen Sie diesen Schritten, um Ihr Stripe-Konto mit Ihrem be-BOP zu verbinden.",
  },
  accordion: {
    title: "Einrichtungsschritte",
    steps: [
      {
        title: "Bei dashboard.stripe.com anmelden",
        body: '<p>Melden Sie sich bei <a class="custom-inline-link" href="https://dashboard.stripe.com/" target="_blank" rel="noopener">dashboard.stripe.com</a> an.</p>',
      },
      {
        title: "Zu den API-Schlüsseln gehen",
        body: '<p>Gehen Sie zu <strong>Entwickler &gt; API-Schlüssel</strong>.</p><img src="https://be-bop.io/digital-file/raw/stripe-api-webp-HWyUmp?key=29a22306-aacd-476d-b9b2-d4070c172f6e" alt="Stripe-API-Schlüssel-Bildschirm" loading="lazy" />',
      },
      {
        title: "Schlüssel kopieren",
        body: "<p>Kopieren Sie Ihren <strong>Secret Key</strong> und Ihren <strong>Public Key</strong>.</p>",
      },
      {
        title: "Zugangsdaten in be-BOP eintragen",
        body: '<p>Geben Sie unter <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; Stripe</span> Ihren Secret Key und Public Key ein.</p>',
      },
    ],
  },
};
