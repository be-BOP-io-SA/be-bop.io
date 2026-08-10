import type { PspStripeTranslations } from "./types";

export const fr: PspStripeTranslations = {
  hero: {
    eyebrow: "Configuration PSP",
    title: "Configurer Stripe",
    subtitle:
      "Suivez ces étapes pour connecter votre compte Stripe à votre be-BOP.",
  },
  accordion: {
    title: "Étapes de configuration",
    steps: [
      {
        title: "Se connecter à dashboard.stripe.com",
        body: '<p>Connectez-vous sur <a class="custom-inline-link" href="https://dashboard.stripe.com/" target="_blank" rel="noopener">dashboard.stripe.com</a>.</p>',
      },
      {
        title: "Accéder aux clés API",
        body: '<p>Allez dans <strong>Développeurs &gt; Clés API</strong>.</p><img src="https://be-bop.io/digital-file/raw/stripe-api-webp-HWyUmp?key=29a22306-aacd-476d-b9b2-d4070c172f6e" alt="Écran des clés API Stripe" loading="lazy" />',
      },
      {
        title: "Copier vos clés",
        body: "<p>Copiez votre <strong>Secret Key</strong> et votre <strong>Public Key</strong>.</p>",
      },
      {
        title: "Renseigner vos identifiants dans be-BOP",
        body: '<p>Dans <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; Stripe</span>, renseignez votre Secret Key et votre Public Key.</p>',
      },
    ],
  },
};
