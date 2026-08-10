import type { PspPaypalTranslations } from "./types";

export const en: PspPaypalTranslations = {
  hero: {
    eyebrow: "PSP Setup",
    title: "Set up PayPal",
    subtitle: "Follow these steps to connect your PayPal account to your be-BOP.",
  },
  requirement: "Account required: a <strong>PayPal Business</strong> account.",
  accordion: {
    title: "Setup steps",
    steps: [
      {
        title: "Open the PayPal Developer Dashboard",
        body: '<p>Go to the <a class="custom-inline-link" href="https://developer.paypal.com/dashboard/" target="_blank" rel="noopener">PayPal Developer Dashboard</a> and log in, or create an account.</p>',
      },
      {
        title: "Go to Apps & Credentials",
        body: '<p>Go to <strong>Apps &amp; Credentials</strong>.</p><img src="https://be-bop.io/digital-file/raw/pay-pal-api-png-LynMjx?key=5485d8b4-8c39-4dc3-a58a-ec1eb8cef0fc" alt="PayPal API credentials screen" loading="lazy" /><div class="custom-psp-note"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><p>Make sure to distinguish between the <strong>Sandbox</strong> (testing) and <strong>Live</strong> (production) environments: the credentials are not the same.</p></div>',
      },
      {
        title: "Create a new app if needed",
        body: "<p>A newly created account already has a Default Application under REST API apps. For a new project, click <strong>Create App</strong>.</p>",
      },
      {
        title: "Copy your credentials",
        body: "<p>Copy your <strong>Client ID</strong> and <strong>Client Secret</strong> from your application.</p>",
      },
      {
        title: "Enter your credentials in be-BOP",
        body: '<p>In <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; PayPal</span>, enter your Client ID and Secret.</p>',
      },
    ],
  },
};
