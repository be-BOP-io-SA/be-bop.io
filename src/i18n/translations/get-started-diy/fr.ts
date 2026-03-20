import type { GetStartedDiyTranslations } from "./types";

export const fr: GetStartedDiyTranslations = {
  hero: {
    eyebrow: "Guide d'installation",
    title: "Installez be-BOP en quelques minutes",
    subtitle:
      "Notre installateur en une seule commande g\u00e8re les d\u00e9pendances, la configuration de la base de donn\u00e9es et les certificats SSL automatiquement sur votre VPS.",
    btnYoutube: "Voir les tutoriels YouTube",
    btnPeertube: "Voir les tutoriels PeerTube",
  },
  sysreq: {
    title: "Configuration requise",
    os: {
      label: "Syst\u00e8me d'exploitation",
      value: "Debian 12 ou<br />Ubuntu LTS",
    },
    hardware: {
      label: "Mat\u00e9riel",
      value: "1 Go RAM (2 Go rec.)<br />40 Go de stockage SSD",
    },
    domain: {
      label: "Nom de domaine",
      value: "exemple.com &amp;<br />s3.exemple.com",
    },
    email: {
      label: "E-mail",
      value: "Utilis\u00e9 uniquement pour g\u00e9n\u00e9rer<br />les certificats TLS",
    },
  },
  cmd: {
    title: "Modifiez cette commande",
    subtitle:
      "Ex\u00e9cutez ceci sur votre serveur \u2014 n'oubliez pas de remplacer le nom de domaine et l'adresse e-mail par les v\u00f4tres :",
    scriptLink: "Consulter le code source de l'installateur",
    note: "Note : ex\u00e9cutez cette commande en tant qu'utilisateur avec les privil\u00e8ges sudo, pas en tant que root.",
  },
  accordion: {
    title: "Guide d'installation d\u00e9taill\u00e9",
    steps: [
      {
        title: "Acc\u00e8s au serveur",
        body: `<p>
                    Assurez-vous d'avoir un acc\u00e8s SSH \u00e0 un VPS ex\u00e9cutant l'un
                    des syst\u00e8mes d'exploitation pris en charge list\u00e9s ci-dessus,
                    respectant la configuration mat\u00e9rielle minimale requise.
                    Tout fournisseur d'h\u00e9bergement convient tant que ces
                    conditions sont remplies.
                </p>
                <p>
                    Pour des raisons de s\u00e9curit\u00e9, \u00e9vitez d'ex\u00e9cuter
                    l'installateur en tant que root. Utilisez plut\u00f4t un compte
                    utilisateur standard disposant des permissions sudo.
                </p>`,
      },
      {
        title: "Nom de domaine",
        body: `<p>
                    Enregistrez le nom de domaine que vos clients utiliseront
                    pour acc\u00e9der \u00e0 votre boutique be-BOP. Vous pouvez utiliser
                    un domaine racine (ex.
                    <strong>exemple.com</strong>) ou un sous-domaine (ex.
                    <strong>boutique.exemple.com</strong>).
                </p>
                <p>
                    Vous configurerez ses enregistrements DNS vers votre serveur
                    \u00e0 l'\u00e9tape suivante.
                </p>`,
      },
      {
        title: "Enregistrements DNS",
        body: `<p>
                    Dans le tableau de bord de votre fournisseur DNS, cr\u00e9ez les
                    <strong>enregistrements A</strong> suivants (IPv4) :
                </p>
                <pre class="custom-accordion__code">nom-d-hote-choisi     \u2192 A \u2192 votre-ipv4-serveur
s3.nom-d-hote-choisi  \u2192 A \u2192 votre-ipv4-serveur</pre>
                <p>
                    Si votre serveur poss\u00e8de \u00e9galement une adresse IPv6, ajoutez
                    les
                    <strong>enregistrements AAAA</strong> correspondants :
                </p>
                <pre class="custom-accordion__code">nom-d-hote-choisi     \u2192 AAAA \u2192 votre-ipv6-serveur
s3.nom-d-hote-choisi  \u2192 AAAA \u2192 votre-ipv6-serveur</pre>
                <p>
                    Laissez le TTL \u00e0 sa valeur par d\u00e9faut. La propagation DNS
                    est instantan\u00e9e pour les nouveaux domaines et prend
                    g\u00e9n\u00e9ralement quelques minutes pour les domaines existants.
                </p>`,
      },
      {
        title: "Ex\u00e9cuter l'installateur",
        body: `<p>
                    Une fois que vous avez un acc\u00e8s SSH \u00e0 votre VPS et que vos
                    enregistrements DNS sont correctement configur\u00e9s, copiez la
                    commande ci-dessus, remplacez
                    <strong>mondomaine.com</strong> par le nom d'h\u00f4te choisi et
                    <strong>email@adresse.com</strong> par une adresse valide, puis
                    collez-la dans votre terminal.
                </p>
                <p>
                    Cette adresse e-mail est utilis\u00e9e exclusivement par Let's
                    Encrypt pour \u00e9mettre vos certificats TLS \u2014 elle n'est jamais
                    transmise ni stock\u00e9e par l'\u00e9quipe be-BOP.
                </p>`,
      },
      {
        title: "Configuration initiale",
        body: `<p>
                    Une fois l'installateur termin\u00e9 avec succ\u00e8s \u2014 g\u00e9n\u00e9ralement
                    en 2 \u00e0 5 minutes \u2014 ouvrez votre domaine dans un navigateur
                    web, cr\u00e9ez vos identifiants de super-administrateur et
                    commencez \u00e0 configurer votre be-BOP selon vos pr\u00e9f\u00e9rences.
                </p>
                <p>
                    Les tutoriels vid\u00e9o en lien en haut de cette page et la
                    documentation officielle de be-BOP sont d'excellents points
                    de d\u00e9part si vous avez besoin d'aide.
                </p>`,
      },
    ],
  },
  help: {
    title: "D\u00e9pannage &amp; Aide",
    troubleshooting: {
      heading: "D\u00e9pannage",
      body: `<p>
            Bloqu\u00e9 pendant l'installation ? L'assistant affiche des messages
            d'erreur exploitables pour vous aider \u00e0 identifier le probl\u00e8me.
            V\u00e9rifiez d'abord que vous respectez la configuration requise et que
            vos enregistrements DNS sont correctement configur\u00e9s.
        </p>
        <p>
            Si le probl\u00e8me persiste, consultez les
            <a
                class="custom-help-link"
                href="https://github.com/be-BOP-io-SA/be-BOP-tooling/issues"
                target="_blank"
                rel="noopener"
            >
                issues ouvertes sur notre d\u00e9p\u00f4t d'installation
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
            et ouvrez-en une nouvelle si aucune ne correspond \u00e0 votre situation.
        </p>`,
    },
    channels: {
      heading: "O\u00f9 obtenir de l'aide",
      intro:
        "Contactez-nous sur la plateforme o\u00f9 vous \u00eates le plus \u00e0 l'aise, nous sommes actifs sur plusieurs d'entre elles.",
      mastodonUrl: "https://tooting.ch/@bebop",
      mastodonLabel: "Mastodon \u2014 @bebop@tooting.ch",
      githubLabel: "GitHub \u2014 Ouvrir une issue",
    },
  },
};
