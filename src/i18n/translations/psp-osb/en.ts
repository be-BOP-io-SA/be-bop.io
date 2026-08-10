import type { PspOsbTranslations } from "./types";

export const en: PspOsbTranslations = {
  hero: {
    eyebrow: "PSP Setup",
    title: "Set up OSB",
    subtitle: "Follow these steps to connect your OSB (PayZen by OSB) account to your be-BOP.",
  },
  requirement:
    "Account required: an <strong>OSB (PayZen by OSB)</strong> merchant account.",
  accordion: {
    title: "Setup steps",
    steps: [
      {
        title: "Log in to secure.osb.pf",
        body: '<p>Log in at <a class="custom-inline-link" href="https://secure.osb.pf/" target="_blank" rel="noopener">secure.osb.pf</a>.</p>',
      },
      {
        title: "Retrieve your shop ID",
        body: '<p>Go to <strong>Setup &gt; Shop &gt; Keys</strong> to retrieve your Shop ID.</p><img src="https://be-bop.io/digital-file/raw/osb-api-1-png-sZC6yj?key=fdcf389f-ce6e-46a1-bb25-585f21b04f14" alt="OSB shop keys screen" loading="lazy" /><img src="https://be-bop.io/digital-file/raw/osb-api-2-webp-kEnUu9?key=4df7175a-a2e4-4e5f-8089-1ff0708395e7" alt="OSB REST API keys screen, part 1" loading="lazy" />',
      },
      {
        title: "Retrieve your REST API keys",
        body: '<p>Go to <strong>REST API Keys</strong> to retrieve your production password and your production HMAC-SHA-256 key.</p><img src="https://be-bop.io/digital-file/raw/osb-api-3-webp-i8LwXT?key=15601248-9345-403d-923a-955d8e7c5209" alt="OSB REST API keys screen, part 2" loading="lazy" /><div class="custom-psp-note"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><p>Be careful not to mix up the <strong>test</strong> password and the <strong>production</strong> password: always use the production credentials for your live be-BOP.</p></div>',
      },
      {
        title: "Enter your credentials in be-BOP",
        body: '<p>In <span class="custom-psp-path">be-BOP Admin &gt; Payment Settings &gt; OSB</span>, enter your Shop ID, your production password, and your production HMAC-SHA-256 key.</p>',
      },
    ],
  },
};
