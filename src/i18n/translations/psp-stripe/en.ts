import type { PspStripeTranslations } from "./types";

export const en: PspStripeTranslations = {
  hero: {
    eyebrow: "PSP Setup",
    title: "Set up Stripe",
    subtitle: "Follow these steps to connect your Stripe account to your be-BOP.",
  },
  accordion: {
    title: "Setup steps",
    steps: [
      {
        title: "Log in to dashboard.stripe.com",
        body: '<p>Log in at <a class="custom-inline-link" href="https://dashboard.stripe.com/" target="_blank" rel="noopener">dashboard.stripe.com</a>.</p>',
      },
      {
        title: "Go to the API keys section",
        body: '<p>Go to <strong>Developers &gt; API keys</strong>.</p><img src="https://be-bop.io/digital-file/raw/stripe-api-webp-HWyUmp?key=29a22306-aacd-476d-b9b2-d4070c172f6e" alt="Stripe API keys screen" loading="lazy" />',
      },
      {
        title: "Copy your keys",
        body: "<p>Copy your <strong>Secret Key</strong> and your <strong>Public Key</strong>.</p>",
      },
      {
        title: "Enter your credentials in be-BOP",
        body: '<p>In <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; Stripe</span>, enter your Secret Key and Public Key.</p>',
      },
    ],
  },
};
