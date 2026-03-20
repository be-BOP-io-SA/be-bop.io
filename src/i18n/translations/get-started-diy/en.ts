import type { GetStartedDiyTranslations } from "./types";

export const en: GetStartedDiyTranslations = {
  hero: {
    eyebrow: "Installation guide",
    title: "Install be-BOP in minutes",
    subtitle:
      "Our single-command installer handles dependencies, database setup, and SSL certificates automatically on your VPS.",
    btnYoutube: "Watch YouTube tutorials",
    btnPeertube: "Watch PeerTube tutorials",
  },
  sysreq: {
    title: "System Requirements",
    os: {
      label: "OS",
      value: "Debian 12 or<br />Ubuntu LTS",
    },
    hardware: {
      label: "Hardware",
      value: "1 GB RAM (2 GB rec.)<br />40 GB SSD Storage",
    },
    domain: {
      label: "Domain name",
      value: "example.com &amp;<br />s3.example.com",
    },
    email: {
      label: "E-mail",
      value: "Only used to generate<br />TLS certificates",
    },
  },
  cmd: {
    title: "Edit this command",
    subtitle:
      "Run this on your server — don't forget to replace the domain name and email address with your own:",
    scriptLink: "Review the installer source code",
    note: "Note: run this command as a user with sudo privileges, not as root.",
  },
  accordion: {
    title: "Detailed Setup Guide",
    steps: [
      {
        title: "Server Access",
        body: `<p>
                    Ensure you have SSH access to a VPS running one of the
                    supported operating systems listed above, meeting the
                    minimum hardware requirements. Any hosting provider works
                    fine as long as those conditions are met.
                </p>
                <p>
                    For security reasons, avoid running the installer as root.
                    Use a regular user account that has sudo permissions
                    instead.
                </p>`,
      },
      {
        title: "Domain Name",
        body: `<p>
                    Register the domain name your customers will use to reach
                    your be-BOP store. You can use a root domain (e.g.
                    <strong>example.com</strong>) or a subdomain (e.g.
                    <strong>shop.example.com</strong>).
                </p>
                <p>
                    You will point its DNS records to your server in the next
                    step.
                </p>`,
      },
      {
        title: "DNS Records",
        body: `<p>
                    In your DNS provider's dashboard, create the following
                    <strong>A records</strong> (IPv4):
                </p>
                <pre class="custom-accordion__code">chosen-hostname     \u2192 A \u2192 your-server-ipv4
s3.chosen-hostname  \u2192 A \u2192 your-server-ipv4</pre>
                <p>
                    If your server also has an IPv6 address, add matching
                    <strong>AAAA records</strong>:
                </p>
                <pre class="custom-accordion__code">chosen-hostname     \u2192 AAAA \u2192 your-server-ipv6
s3.chosen-hostname  \u2192 AAAA \u2192 your-server-ipv6</pre>
                <p>
                    Leave the TTL at its default value. DNS propagates instantly
                    for brand-new domains and typically within a few minutes for
                    existing ones.
                </p>`,
      },
      {
        title: "Run the Installer",
        body: `<p>
                    Once you have SSH access to your VPS and your DNS records
                    are correctly configured, copy the command above, replace
                    <strong>mydomain.com</strong> with your chosen hostname and
                    <strong>email@address.com</strong> with a valid address, then
                    paste it into your terminal.
                </p>
                <p>
                    This email address is used exclusively by Let's Encrypt to
                    issue your TLS certificates \u2014 it is never transmitted to or
                    stored by the be-BOP team.
                </p>`,
      },
      {
        title: "Initial Configuration",
        body: `<p>
                    Once the installer finishes successfully \u2014 usually within
                    2\u20135 minutes \u2014 open your domain in a web browser, create your
                    super-admin credentials, and start configuring your be-BOP
                    to your liking.
                </p>
                <p>
                    The video tutorials linked at the top of this page and the
                    official be-BOP documentation are great starting points if
                    you need guidance.
                </p>`,
      },
    ],
  },
  help: {
    title: "Troubleshooting &amp; Help",
    troubleshooting: {
      heading: "Troubleshooting",
      body: `<p>
            Stuck during installation? The wizard displays actionable error
            messages to help you identify the issue. First, verify that you meet
            the system requirements and that your DNS records are correctly
            configured.
        </p>
        <p>
            If the problem persists, check the
            <a
                class="custom-help-link"
                href="https://github.com/be-BOP-io-SA/be-BOP-tooling/issues"
                target="_blank"
                rel="noopener"
            >
                open issues on our installer repository
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
            and open a new one if none address your situation.
        </p>`,
    },
    channels: {
      heading: "Where to get help",
      intro:
        "Reach out on the platform where you're most comfortable, we're active across several of them.",
      mastodonUrl: "https://fosstodon.org/@bebop",
      mastodonLabel: "Mastodon \u2014 @bebop@fosstodon.org",
      githubLabel: "GitHub \u2014 Open an issue",
    },
  },
};
