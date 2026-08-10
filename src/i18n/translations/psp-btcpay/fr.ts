import type { PspBtcpayTranslations } from "./types";

export const fr: PspBtcpayTranslations = {
  hero: {
    eyebrow: "Configuration PSP",
    title: "Configurer BTCPay Server",
    subtitle:
      "Suivez ces étapes pour connecter votre instance BTCPay Server à votre be-BOP.",
    btnYoutube: "Tuto YouTube (EN)",
    btnPeertube: "Tuto PeerTube (EN)",
  },
  requirement:
    "Compte requis : une instance <strong>BTCPay Server</strong> (auto-hébergée ou tierce).",
  note: "<p>be-BOP ne fournit pas d'instance BTCPay Server : vous devez héberger la vôtre ou utiliser un prestataire tiers de votre choix.</p>",
  accordion: {
    title: "Étapes de configuration",
    steps: [
      {
        title: "Se connecter à votre instance BTCPay Server",
        body: "<p>Connectez-vous à votre instance BTCPay Server.</p>",
      },
      {
        title: "Sélectionner le Store et noter son Store ID",
        body: '<p>Créez ou sélectionnez le Store à utiliser avec be-BOP, et notez son <strong>Store ID</strong> (Paramètres du Store &gt; Général).</p><img src="https://be-bop.io/digital-file/raw/btcpay-api-1-webp-PgxBTk?key=fbf285a0-3bdf-46d9-9a6f-3f8cde8f6945" alt="Écran du Store ID BTCPay Server" loading="lazy" />',
      },
      {
        title: "Accéder aux API Keys",
        body: "<p>Allez dans <strong>Account &gt; API Keys</strong> (sur les versions antérieures à 2.0 : <strong>Account &gt; Manage Account &gt; API Keys</strong>).</p>",
      },
      {
        title: "Générer une clé API",
        body: '<p>Cliquez sur <strong>Generate Key</strong>, restreignez la clé au Store concerné et sélectionnez les permissions nécessaires.</p><img src="https://be-bop.io/digital-file/raw/btcpay-api-2-webp-f413jv?key=490a48b9-92d7-4064-8810-495bc24536ca" alt="Écran de génération de clé API BTCPay Server" loading="lazy" /><p>Copiez la clé API générée.</p>',
      },
      {
        title: "Renseigner vos identifiants dans be-BOP",
        body: '<p>Dans <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; BTCPay Server</span>, renseignez votre Server URL, votre Store ID et votre API Key.</p>',
      },
    ],
  },
};
