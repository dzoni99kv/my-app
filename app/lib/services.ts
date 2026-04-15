export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
};

export const services: Service[] = [
  {
    slug: "gradjevinski-radovi",
    title: "Građevinski radovi",
    description:
      "Izvodimo sve vrste građevinskih radova uz visok kvalitet i poštovanje rokova.",
    longDescription:
      "Pružamo kompletnu uslugu izgradnje objekata, od temelja do završnih radova. Radimo sa modernom opremom i kvalitetnim materijalima.",
  },
  {
    slug: "asfaltiranje",
    title: "Asfaltiranje",
    description:
      "Profesionalno asfaltiranje dvorišta, prilaza i puteva.",
    longDescription:
      "Specijalizovani smo za asfaltiranje dvorišta, parkinga i puteva uz dugotrajne i kvalitetne rezultate.",
  },
  {
    slug: "renoviranje",
    title: "Renoviranje objekata",
    description:
      "Kompletno renoviranje stanova i kuća.",
    longDescription:
      "Izvodimo kompletne renovacije enterijera i eksterijera sa pažnjom na detalje i želje klijenta.",
  },
  {
    slug: "iskopi",
    title: "Iskopi i priprema terena",
    description:
      "Priprema zemljišta za gradnju.",
    longDescription:
      "Vrši se iskop, nivelacija i priprema terena uz savremenu mehanizaciju.",
  },
  {
    slug: "betonski-radovi",
    title: "Betonski radovi",
    description:
      "Izrada temelja i konstrukcija.",
    longDescription:
      "Radimo sve vrste betonskih radova uključujući ploče, temelje i konstrukcije.",
  },
  {
    slug: "fasade",
    title: "Fasaderski radovi",
    description:
      "Kvalitetna izrada fasada.",
    longDescription:
      "Izrada fasada sa modernim materijalima koji obezbeđuju dugotrajnu zaštitu.",
  },
];