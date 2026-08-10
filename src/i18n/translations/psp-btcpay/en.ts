import type { PspBtcpayTranslations } from "./types";

export const en: PspBtcpayTranslations = {
  hero: {
    eyebrow: "PSP Setup",
    title: "Set up BTCPay Server",
    subtitle:
      "Follow these steps to connect your BTCPay Server instance to your be-BOP.",
    btnYoutube: "YouTube Tutorial",
    btnPeertube: "PeerTube Tutorial",
  },
  requirement:
    "Account required: a <strong>BTCPay Server</strong> instance (self-hosted or third-party).",
  note: "<p>be-BOP does not provide a BTCPay Server instance: you must host your own or use a third-party provider of your choice.</p>",
  accordion: {
    title: "Setup steps",
    steps: [
      {
        title: "Log in to your BTCPay Server instance",
        body: "<p>Log in to your BTCPay Server instance.</p>",
      },
      {
        title: "Select the Store and note its Store ID",
        body: '<p>Create or select the Store to use with be-BOP, and note its <strong>Store ID</strong> (Store Settings &gt; General).</p><img src="https://be-bop.io/digital-file/raw/btcpay-api-1-webp-PgxBTk?key=fbf285a0-3bdf-46d9-9a6f-3f8cde8f6945" alt="BTCPay Server Store ID screen" loading="lazy" />',
      },
      {
        title: "Go to API Keys",
        body: "<p>Go to <strong>Account &gt; API Keys</strong> (on versions prior to 2.0: <strong>Account &gt; Manage Account &gt; API Keys</strong>).</p>",
      },
      {
        title: "Generate an API key",
        body: '<p>Click <strong>Generate Key</strong>, restrict the key to the relevant Store, and select the necessary permissions.</p><img src="https://be-bop.io/digital-file/raw/btcpay-api-2-webp-f413jv?key=490a48b9-92d7-4064-8810-495bc24536ca" alt="BTCPay Server API key generation screen" loading="lazy" /><p>Copy the generated API key.</p>',
      },
      {
        title: "Enter your credentials in be-BOP",
        body: '<p>In <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; BTCPay Server</span>, enter your Server URL, Store ID, and API Key.</p>',
      },
    ],
  },
};
