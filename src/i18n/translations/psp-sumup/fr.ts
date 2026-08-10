import type { PspSumupTranslations } from "./types";

export const fr: PspSumupTranslations = {
  hero: {
    eyebrow: "Configuration PSP",
    title: "Configurer SumUp",
    subtitle:
      "Suivez ces étapes pour connecter votre compte SumUp à votre be-BOP.",
  },
  accordion: {
    title: "Étapes de configuration",
    steps: [
      {
        title: "Se connecter à me.sumup.com",
        body: '<p>Connectez-vous sur <a class="custom-inline-link" href="https://me.sumup.com/" target="_blank" rel="noopener">me.sumup.com</a>.</p>',
      },
      {
        title: "Accéder aux clés API",
        body: '<p>Allez dans <strong>Paramètres &gt; Développeurs &gt; Clés API</strong>.</p><img src="https://be-bop.io/digital-file/raw/sumup-api-1-webp-RQWyl2?key=9c8b2e8b-cca8-444f-9a2a-9914b59e13b0" alt="Écran des clés API SumUp" loading="lazy" />',
      },
      {
        title: "Créer une clé API dédiée",
        body: '<p>Créez une clé API dédiée à be-BOP.</p><img src="https://be-bop.io/digital-file/raw/sumup-api-2-webp-mVlwAO?key=f8185f6f-62f5-4dc9-8c3d-5fb57289e74b" alt="Création d\'une clé API SumUp" loading="lazy" />',
      },
      {
        title: "Renseigner vos identifiants dans be-BOP",
        body: '<p>Dans <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; SumUp</span>, renseignez votre API Key et votre Code Marchant (Merchant Code).</p>',
      },
    ],
  },
};
