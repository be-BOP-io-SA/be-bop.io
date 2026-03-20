import type { Lang } from "../i18n/types";

export interface Patron {
  url: string;
  img: string;
  alt: Record<Lang, string>;
  style?: string;
}

export const patrons: Patron[] = [
  {
    url: "https://www.ne.ch/Pages/accueil.aspx",
    img: "https://be-bop.io/digital-file/raw/ne-transparent-NbEALD?key=b8503da9-7e7f-4a35-b366-1bdd789a409a",
    alt: {
      en: "Canton de Neuchâtel",
      fr: "Canton de Neuchâtel",
      sv: "Canton de Neuchâtel",
    },
  },
  {
    url: "https://www.seco.admin.ch/seco/fr/home/Standortfoerderung/Regional_Raumordnungspolitik/nrp.html",
    img: "https://be-bop.io/digital-file/raw/npr-transparent-81ZJJh?key=1cfce8c1-a057-41e0-b6cf-83b43d18e758",
    alt: {
      en: "Nouvelles Politiques Régionales",
      fr: "Nouvelles Politiques Régionales",
      sv: "Nouvelles Politiques Régionales",
    },
  },
  {
    url: "https://www.watchmakersunited.com/",
    img: "https://be-bop.io/digital-file/raw/watchmakersunited-X7FBGa?key=27809770-ca2b-4ec8-808e-296e656705ae",
    alt: {
      en: "Watchmakers United",
      fr: "Watchmakers United",
      sv: "Watchmakers United",
    },
  },
  {
    url: "https://leparadigmebitcoin.ch/",
    img: "https://be-bop.io/digital-file/raw/paradigme-3btjMm?key=1657e692-994a-4af7-b84d-3eded544b763",
    alt: {
      en: "Le Paradigme Bitcoin",
      fr: "Le Paradigme Bitcoin",
      sv: "Le Paradigme Bitcoin",
    },
  },
  {
    url: "https://coworking-neuchatel.ch/",
    img: "https://coworking-neuchatel.ch/wp-content/uploads/2020/08/cropped-cropped-Logo_coworkingneuchatel.png",
    alt: {
      en: "Coworking Neuchâtel",
      fr: "Coworking Neuchâtel",
      sv: "Coworking Neuchâtel",
    },
  },
  {
    url: "https://www.nedao.ch/",
    img: "https://be-bop.io/digital-file/raw/nedao-oCvmG6?key=f8acbe3d-4b51-43ee-86bd-ada5de853a0a",
    alt: {
      en: "NEDAO",
      fr: "NEDAO",
      sv: "NEDAO",
    },
  },
  {
    url: "https://zulip.com/",
    img: "https://be-bop.io/digital-file/raw/zulip-log-o-svg-vmzptj?key=26d8199c-d8e3-4f5c-8a80-25d8d5330a87",
    alt: {
      en: "Zulip",
      fr: "Zulip",
      sv: "Zulip",
    },
    style: "min-height:40px;width:auto;",
  },
];
