import type { PspPaypalTranslations } from "./types";

export const de: PspPaypalTranslations = {
  hero: {
    eyebrow: "PSP-Einrichtung",
    title: "PayPal einrichten",
    subtitle:
      "Folgen Sie diesen Schritten, um Ihr PayPal-Konto mit Ihrem be-BOP zu verbinden.",
  },
  requirement: "Erforderliches Konto: ein <strong>PayPal Business</strong>-Konto.",
  accordion: {
    title: "Einrichtungsschritte",
    steps: [
      {
        title: "PayPal Developer Dashboard öffnen",
        body: '<p>Gehen Sie zum <a class="custom-inline-link" href="https://developer.paypal.com/dashboard/" target="_blank" rel="noopener">PayPal Developer Dashboard</a> und melden Sie sich an, oder erstellen Sie ein Konto.</p>',
      },
      {
        title: "Zu Apps & Credentials gehen",
        body: '<p>Gehen Sie zu <strong>Apps &amp; Credentials</strong>.</p><img src="https://be-bop.io/digital-file/raw/pay-pal-api-png-LynMjx?key=5485d8b4-8c39-4dc3-a58a-ec1eb8cef0fc" alt="PayPal-API-Zugangsdaten-Bildschirm" loading="lazy" /><div class="custom-psp-note"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><p>Achten Sie darauf, zwischen der Umgebung <strong>Sandbox</strong> (Test) und <strong>Live</strong> (Produktion) zu unterscheiden: Die Zugangsdaten sind nicht dieselben.</p></div>',
      },
      {
        title: "Bei Bedarf eine neue Anwendung erstellen",
        body: "<p>Ein neu erstelltes Konto verfügt bereits über eine Default Application unter REST API apps. Für ein neues Projekt klicken Sie auf <strong>Create App</strong>.</p>",
      },
      {
        title: "Zugangsdaten kopieren",
        body: "<p>Kopieren Sie Ihre <strong>Client ID</strong> und Ihr <strong>Client Secret</strong> aus Ihrer Anwendung.</p>",
      },
      {
        title: "Zugangsdaten in be-BOP eintragen",
        body: '<p>Geben Sie unter <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; PayPal</span> Ihre Client ID und Ihr Secret ein.</p>',
      },
    ],
  },
};
