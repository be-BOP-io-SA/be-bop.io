import type { PspOsbTranslations } from "./types";

export const de: PspOsbTranslations = {
  hero: {
    eyebrow: "PSP-Einrichtung",
    title: "OSB einrichten",
    subtitle:
      "Folgen Sie diesen Schritten, um Ihr OSB-Konto (PayZen by OSB) mit Ihrem be-BOP zu verbinden.",
  },
  requirement:
    "Erforderliches Konto: ein Händlerkonto bei <strong>OSB (PayZen by OSB)</strong>.",
  accordion: {
    title: "Einrichtungsschritte",
    steps: [
      {
        title: "Bei secure.osb.pf anmelden",
        body: '<p>Melden Sie sich bei <a class="custom-inline-link" href="https://secure.osb.pf/" target="_blank" rel="noopener">secure.osb.pf</a> an.</p>',
      },
      {
        title: "Shop-ID abrufen",
        body: '<p>Gehen Sie zu <strong>Einstellungen &gt; Shop &gt; Schlüssel</strong>, um Ihre Shop-ID abzurufen.</p><img src="https://be-bop.io/digital-file/raw/osb-api-1-png-sZC6yj?key=fdcf389f-ce6e-46a1-bb25-585f21b04f14" alt="OSB-Shop-Schlüssel-Bildschirm" loading="lazy" /><img src="https://be-bop.io/digital-file/raw/osb-api-2-webp-kEnUu9?key=4df7175a-a2e4-4e5f-8089-1ff0708395e7" alt="OSB-REST-API-Schlüssel-Bildschirm, Teil 1" loading="lazy" />',
      },
      {
        title: "REST-API-Schlüssel abrufen",
        body: '<p>Gehen Sie zu <strong>REST-API-Schlüssel</strong>, um Ihr Produktionspasswort und Ihren HMAC-SHA-256-Produktionsschlüssel abzurufen.</p><img src="https://be-bop.io/digital-file/raw/osb-api-3-webp-i8LwXT?key=15601248-9345-403d-923a-955d8e7c5209" alt="OSB-REST-API-Schlüssel-Bildschirm, Teil 2" loading="lazy" /><div class="custom-psp-note"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><p>Achten Sie darauf, das <strong>Test</strong>-Passwort nicht mit dem <strong>Produktions</strong>-Passwort zu verwechseln: Verwenden Sie für Ihr produktives be-BOP stets die Produktionszugangsdaten.</p></div>',
      },
      {
        title: "Zugangsdaten in be-BOP eintragen",
        body: '<p>Geben Sie unter <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; OSB</span> Ihre Shop-ID, Ihr Produktionspasswort und Ihren HMAC-SHA-256-Produktionsschlüssel ein.</p>',
      },
    ],
  },
};
