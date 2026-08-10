import type { PspSumupTranslations } from "./types";

export const de: PspSumupTranslations = {
  hero: {
    eyebrow: "PSP-Einrichtung",
    title: "SumUp einrichten",
    subtitle:
      "Folgen Sie diesen Schritten, um Ihr SumUp-Konto mit Ihrem be-BOP zu verbinden.",
  },
  accordion: {
    title: "Einrichtungsschritte",
    steps: [
      {
        title: "Bei me.sumup.com anmelden",
        body: '<p>Melden Sie sich bei <a class="custom-inline-link" href="https://me.sumup.com/" target="_blank" rel="noopener">me.sumup.com</a> an.</p>',
      },
      {
        title: "Zu den API-Schlüsseln gehen",
        body: '<p>Gehen Sie zu <strong>Einstellungen &gt; Entwickler &gt; API-Schlüssel</strong>.</p><img src="https://be-bop.io/digital-file/raw/sumup-api-1-webp-RQWyl2?key=9c8b2e8b-cca8-444f-9a2a-9914b59e13b0" alt="SumUp-API-Schlüssel-Bildschirm" loading="lazy" />',
      },
      {
        title: "Einen dedizierten API-Schlüssel erstellen",
        body: '<p>Erstellen Sie einen API-Schlüssel speziell für be-BOP.</p><img src="https://be-bop.io/digital-file/raw/sumup-api-2-webp-mVlwAO?key=f8185f6f-62f5-4dc9-8c3d-5fb57289e74b" alt="Erstellung eines SumUp-API-Schlüssels" loading="lazy" />',
      },
      {
        title: "Zugangsdaten in be-BOP eintragen",
        body: '<p>Geben Sie unter <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; SumUp</span> Ihren API Key und Ihren Merchant Code ein.</p>',
      },
    ],
  },
};
