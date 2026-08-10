import type { PspSumupTranslations } from "./types";

export const en: PspSumupTranslations = {
  hero: {
    eyebrow: "PSP Setup",
    title: "Set up SumUp",
    subtitle: "Follow these steps to connect your SumUp account to your be-BOP.",
  },
  accordion: {
    title: "Setup steps",
    steps: [
      {
        title: "Log in to me.sumup.com",
        body: '<p>Log in at <a class="custom-inline-link" href="https://me.sumup.com/" target="_blank" rel="noopener">me.sumup.com</a>.</p>',
      },
      {
        title: "Go to the API keys section",
        body: '<p>Go to <strong>Settings &gt; Developers &gt; API Keys</strong>.</p><img src="https://be-bop.io/digital-file/raw/sumup-api-1-webp-RQWyl2?key=9c8b2e8b-cca8-444f-9a2a-9914b59e13b0" alt="SumUp API keys screen" loading="lazy" />',
      },
      {
        title: "Create a dedicated API key",
        body: '<p>Create an API key dedicated to be-BOP.</p><img src="https://be-bop.io/digital-file/raw/sumup-api-2-webp-mVlwAO?key=f8185f6f-62f5-4dc9-8c3d-5fb57289e74b" alt="Creating a SumUp API key" loading="lazy" />',
      },
      {
        title: "Enter your credentials in be-BOP",
        body: '<p>In <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; SumUp</span>, enter your API Key and Merchant Code.</p>',
      },
    ],
  },
};
