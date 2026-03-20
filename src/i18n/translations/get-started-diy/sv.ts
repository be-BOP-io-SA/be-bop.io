import type { GetStartedDiyTranslations } from "./types";

export const sv: GetStartedDiyTranslations = {
  hero: {
    eyebrow: "Gu\u00eda de instalaci\u00f3n",
    title: "Instal\u00e1 be-BOP en unos minutos",
    subtitle:
      "Con un solo comando manejas las dependencias, la configuraci\u00f3n de la base de datos y los certificados SSL autom\u00e1ticamente en tu servidor.",
    btnYoutube: "Ver tutoriales en YouTube (en ingl\u00e9s)",
    btnPeertube: "Ver tutoriales en PeerTube (en ingl\u00e9s)",
  },
  sysreq: {
    title: "Requisitos del sistema",
    os: {
      label: "Sistema operativo",
      value: "Debian 12 o<br />Ubuntu LTS",
    },
    hardware: {
      label: "Hardware",
      value: "1 GB RAM (2 GB rec.)<br />40 GB de almacenamiento SSD",
    },
    domain: {
      label: "Un dominio de internet para tu tienda",
      value: "ejemplo.com.sv &amp;<br />s3.ejemplo.com.sv",
    },
    email: {
      label: "Correo electr\u00f3nico",
      value: "Solo se usa para generar<br />los certificados TLS",
    },
  },
  cmd: {
    title: "Modific\u00e1 este comando",
    subtitle:
      "Ejecut\u00e1 esto en tu servidor \u2014 no olvides cambiar el nombre de dominio y la direcci\u00f3n de correo electr\u00f3nico por los tuyos:",
    scriptLink: "Revis\u00e1 el c\u00f3digo libre del instalador.",
    note: "Nota: ejecut\u00e1 este comando como un usuario con privilegios sudo, no como root.",
  },
  accordion: {
    title: "Gu\u00eda de configuraci\u00f3n detallada",
    steps: [
      {
        title: "Acceso al servidor",
        body: `<p>
                    Asegurate de tener acceso SSH a un VPS con uno de los
                    sistemas operativos compatibles listados arriba, que cumpla
                    con los requisitos m\u00ednimos de hardware. Cualquier proveedor
                    de hosting funciona bien siempre que se cumplan esas
                    condiciones.
                </p>
                <p>
                    Por razones de seguridad, evit\u00e1 ejecutar el instalador como
                    root. Us\u00e1 en cambio una cuenta de usuario regular que tenga
                    permisos sudo.
                </p>`,
      },
      {
        title: "Nombre de dominio",
        body: `<p>
                    Registr\u00e1 el nombre de dominio que tus clientes usar\u00e1n para
                    acceder a tu tienda be-BOP. Pod\u00e9s usar un dominio ra\u00edz (ej.
                    <strong>ejemplo.com.sv</strong>) o un subdominio (ej.
                    <strong>tienda.ejemplo.com.sv</strong>).
                </p>
                <p>
                    Apuntar\u00e1s sus registros DNS hacia tu servidor en el
                    siguiente paso.
                </p>`,
      },
      {
        title: "Registros DNS",
        body: `<p>
                    En el panel de tu proveedor DNS, cre\u00e1 los siguientes
                    <strong>registros A</strong> (IPv4):
                </p>
                <pre class="custom-accordion__code">nombre-host-elegido     \u2192 A \u2192 IPv4-de-tu-servidor
s3.nombre-host-elegido  \u2192 A \u2192 IPv4-de-tu-servidor</pre>
                <p>
                    Si tu servidor tambi\u00e9n tiene una direcci\u00f3n IPv6, agreg\u00e1 los
                    <strong>registros AAAA</strong> correspondientes:
                </p>
                <pre class="custom-accordion__code">nombre-host-elegido     \u2192 AAAA \u2192 IPv6-de-tu-servidor
s3.nombre-host-elegido  \u2192 AAAA \u2192 IPv6-de-tu-servidor</pre>
                <p>
                    Dej\u00e1 el TTL en su valor por defecto. El DNS se propaga de
                    forma instant\u00e1nea para dominios nuevos y generalmente en
                    pocos minutos para los existentes.
                </p>`,
      },
      {
        title: "Ejecutar el instalador",
        body: `<p>
                    Una vez que teng\u00e1s acceso SSH a tu VPS y tus registros DNS
                    est\u00e9n correctamente configurados, copi\u00e1 el comando de
                    arriba, reemplaz\u00e1
                    <strong>mydomain.com</strong> con tu nombre de host elegido y
                    <strong>email@address.com</strong> con una direcci\u00f3n v\u00e1lida, luego
                    pegalo en tu terminal.
                </p>
                <p>
                    Esta direcci\u00f3n de correo electr\u00f3nico es usada exclusivamente
                    por Let's Encrypt para emitir tus certificados TLS \u2014 nunca
                    es transmitida ni almacenada por el equipo de be-BOP.
                </p>`,
      },
      {
        title: "Configuraci\u00f3n inicial",
        body: `<p>
                    Una vez que el instalador termine correctamente \u2014
                    generalmente en 2 a 5 minutos \u2014 abr\u00ed tu dominio en un
                    navegador web, cre\u00e1 tus credenciales de super-administrador
                    y empez\u00e1 a configurar tu be-BOP a tu gusto.
                </p>
                <p>
                    Los tutoriales en video enlazados al inicio de esta p\u00e1gina y
                    la documentaci\u00f3n oficial de be-BOP son excelentes puntos de
                    partida si necesit\u00e1s orientaci\u00f3n.
                </p>`,
      },
    ],
  },
  help: {
    title: "Soluci\u00f3n de problemas &amp; Ayuda",
    troubleshooting: {
      heading: "\u00bftuviste algún problema?",
      body: `<p>
            \u00bfTe travaste durante la instalaci\u00f3n? El asistente muestra mensajes de
            error con acciones concretas para ayudarte a identificar el
            problema. Primero, verific\u00e1 que cumpl\u00eds con los requisitos del
            sistema y que tus registros DNS est\u00e1n correctamente configurados.
        </p>
        <p>
            Si el problema persiste, revis\u00e1 los
            <a
                class="custom-help-link"
                href="https://github.com/be-BOP-io-SA/be-BOP-tooling/issues"
                target="_blank"
                rel="noopener"
            >
                issues abiertos en nuestro repositorio del instalador
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
            y abr\u00ed uno nuevo si ninguno corresponde a tu situaci\u00f3n.
        </p>`,
    },
    channels: {
      heading: "D\u00f3nde obtener ayuda",
      intro:
        "Escrib\u00ednos en la plataforma donde te sent\u00eds m\u00e1s c\u00f3modo, estamos activos en varias de ellas.",
      mastodonUrl: "https://fosstodon.org/@bebop",
      mastodonLabel: "Mastodon \u2014 @bebop@fosstodon.org",
      githubLabel: "GitHub \u2014 Abr\u00ed un issue",
    },
  },
};
