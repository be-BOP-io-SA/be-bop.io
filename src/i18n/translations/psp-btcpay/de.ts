import type { PspBtcpayTranslations } from "./types";

export const de: PspBtcpayTranslations = {
  hero: {
    eyebrow: "PSP-Einrichtung",
    title: "BTCPay Server einrichten",
    subtitle:
      "Folgen Sie diesen Schritten, um Ihre BTCPay-Server-Instanz mit Ihrem be-BOP zu verbinden.",
    btnYoutube: "YouTube-Tutorial (EN)",
    btnPeertube: "PeerTube-Tutorial (EN)",
  },
  requirement:
    "Erforderlich: eine <strong>BTCPay Server</strong>-Instanz (selbst gehostet oder bei einem Drittanbieter).",
  note: "<p>be-BOP stellt keine BTCPay-Server-Instanz bereit: Sie müssen Ihre eigene hosten oder einen Drittanbieter Ihrer Wahl nutzen.</p>",
  accordion: {
    title: "Einrichtungsschritte",
    steps: [
      {
        title: "Bei Ihrer BTCPay-Server-Instanz anmelden",
        body: "<p>Melden Sie sich bei Ihrer BTCPay-Server-Instanz an.</p>",
      },
      {
        title: "Store auswählen und dessen Store ID notieren",
        body: '<p>Erstellen oder wählen Sie den Store, der mit be-BOP genutzt werden soll, und notieren Sie dessen <strong>Store ID</strong> (Store-Einstellungen &gt; Allgemein).</p><img src="https://be-bop.io/digital-file/raw/btcpay-api-1-webp-PgxBTk?key=fbf285a0-3bdf-46d9-9a6f-3f8cde8f6945" alt="BTCPay-Server-Store-ID-Bildschirm" loading="lazy" />',
      },
      {
        title: "Zu den API Keys gehen",
        body: "<p>Gehen Sie zu <strong>Account &gt; API Keys</strong> (bei Versionen vor 2.0: <strong>Account &gt; Manage Account &gt; API Keys</strong>).</p>",
      },
      {
        title: "Einen API-Schlüssel generieren",
        body: '<p>Klicken Sie auf <strong>Generate Key</strong>, beschränken Sie den Schlüssel auf den betreffenden Store und wählen Sie die nötigen Berechtigungen aus.</p><img src="https://be-bop.io/digital-file/raw/btcpay-api-2-webp-f413jv?key=490a48b9-92d7-4064-8810-495bc24536ca" alt="BTCPay-Server-Bildschirm zur Generierung eines API-Schlüssels" loading="lazy" /><p>Kopieren Sie den generierten API-Schlüssel.</p>',
      },
      {
        title: "Zugangsdaten in be-BOP eintragen",
        body: '<p>Geben Sie unter <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; BTCPay Server</span> Ihre Server-URL, Ihre Store ID und Ihren API Key ein.</p>',
      },
    ],
  },
};
