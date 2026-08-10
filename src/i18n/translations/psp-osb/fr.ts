import type { PspOsbTranslations } from "./types";

export const fr: PspOsbTranslations = {
  hero: {
    eyebrow: "Configuration PSP",
    title: "Configurer OSB",
    subtitle:
      "Suivez ces étapes pour connecter votre compte OSB (PayZen by OSB) à votre be-BOP.",
  },
  requirement:
    "Compte requis : un compte marchand <strong>OSB (PayZen by OSB)</strong>.",
  accordion: {
    title: "Étapes de configuration",
    steps: [
      {
        title: "Se connecter à secure.osb.pf",
        body: '<p>Connectez-vous sur <a class="custom-inline-link" href="https://secure.osb.pf/" target="_blank" rel="noopener">secure.osb.pf</a>.</p>',
      },
      {
        title: "Récupérer l'identifiant boutique",
        body: '<p>Allez dans <strong>Paramétrage &gt; Boutique &gt; Clés</strong> pour récupérer votre Identifiant boutique.</p><img src="https://be-bop.io/digital-file/raw/osb-api-1-png-sZC6yj?key=fdcf389f-ce6e-46a1-bb25-585f21b04f14" alt="Écran des clés boutique OSB" loading="lazy" /><img src="https://be-bop.io/digital-file/raw/osb-api-2-webp-kEnUu9?key=4df7175a-a2e4-4e5f-8089-1ff0708395e7" alt="Écran des clés d\'API REST OSB, partie 1" loading="lazy" />',
      },
      {
        title: "Récupérer les clés d'API REST",
        body: '<p>Allez dans <strong>Clés d\'API REST</strong> pour récupérer votre Mot de passe de production et votre clé HMAC-SHA-256 de production.</p><img src="https://be-bop.io/digital-file/raw/osb-api-3-webp-i8LwXT?key=15601248-9345-403d-923a-955d8e7c5209" alt="Écran des clés d\'API REST OSB, partie 2" loading="lazy" /><div class="custom-psp-note"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><p>Attention à ne pas confondre le mot de passe de <strong>test</strong> et le mot de passe de <strong>production</strong> : utilisez toujours les identifiants de production pour votre be-BOP en exploitation.</p></div>',
      },
      {
        title: "Renseigner vos identifiants dans be-BOP",
        body: '<p>Dans <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; OSB</span>, renseignez votre Identifiant boutique, votre Mot de passe de production, et votre clé HMAC-SHA-256 de production.</p>',
      },
    ],
  },
};
