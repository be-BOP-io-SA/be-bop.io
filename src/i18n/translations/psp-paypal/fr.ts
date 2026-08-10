import type { PspPaypalTranslations } from "./types";

export const fr: PspPaypalTranslations = {
  hero: {
    eyebrow: "Configuration PSP",
    title: "Configurer PayPal",
    subtitle:
      "Suivez ces étapes pour connecter votre compte PayPal à votre be-BOP.",
  },
  requirement: "Compte requis : un compte <strong>PayPal Business</strong>.",
  accordion: {
    title: "Étapes de configuration",
    steps: [
      {
        title: "Ouvrir le Dashboard développeur PayPal",
        body: '<p>Rendez-vous sur le <a class="custom-inline-link" href="https://developer.paypal.com/dashboard/" target="_blank" rel="noopener">Dashboard développeur PayPal</a> et connectez-vous, ou créez un compte.</p>',
      },
      {
        title: "Accéder à Apps & Credentials",
        body: '<p>Allez dans <strong>Apps &amp; Credentials</strong>.</p><img src="https://be-bop.io/digital-file/raw/pay-pal-api-png-LynMjx?key=5485d8b4-8c39-4dc3-a58a-ec1eb8cef0fc" alt="Écran des identifiants API PayPal" loading="lazy" /><div class="custom-psp-note"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><p>Pensez à distinguer environnement <strong>Sandbox</strong> (tests) et <strong>Live</strong> (production) : les identifiants ne sont pas les mêmes.</p></div>',
      },
      {
        title: "Si nécessaire, créer une nouvelle application",
        body: "<p>Un compte nouvellement créé dispose déjà d'une Default Application dans la section REST API apps. Pour un nouveau projet, cliquez sur <strong>Create App</strong>.</p>",
      },
      {
        title: "Copier vos identifiants",
        body: "<p>Copiez le <strong>Client ID</strong> et le <strong>Client Secret</strong> de votre application.</p>",
      },
      {
        title: "Renseigner vos identifiants dans be-BOP",
        body: '<p>Dans <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; PayPal</span>, renseignez votre Client ID et votre Secret.</p>',
      },
    ],
  },
};
