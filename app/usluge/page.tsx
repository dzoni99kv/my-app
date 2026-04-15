import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

type Service = {
  slug: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    slug: "gradjevinski-radovi",
    title: "Građevinski radovi",
    description:
      "Izvodimo sve vrste građevinskih radova uz visok kvalitet i poštovanje rokova.",
  },
  {
    slug: "asfaltiranje",
    title: "Asfaltiranje",
    description:
      "Profesionalno asfaltiranje dvorišta, prilaza i puteva uz dugotrajne rezultate.",
  },
  {
    slug: "renoviranje",
    title: "Renoviranje objekata",
    description: "Kompletno renoviranje stanova, kuća i poslovnih prostora.",
  },
  {
    slug: "iskopi",
    title: "Iskopi i priprema terena",
    description: "Priprema zemljišta za gradnju uz savremenu mehanizaciju.",
  },
  {
    slug: "betonski-radovi",
    title: "Betonski radovi",
    description: "Izrada temelja, ploča i drugih betonskih konstrukcija.",
  },
  {
    slug: "fasade",
    title: "Fasaderski radovi",
    description:
      "Kvalitetna izrada fasada sa modernim materijalima i dugotrajnom zaštitom.",
  },
];

export default function UslugePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#e5e5e5]">
      {/* HEADER */}
      

      {/* MAIN */}
      <main className="flex-1 pt-24 px-6">
        {/* TITLE */}
        <div className="max-w-6xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Naše usluge</h1>
          <p className="text-gray-400 max-w-2xl">
            Nudimo širok spektar građevinskih usluga uz profesionalan pristup i
            vrhunski kvalitet.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link key={i} href={`/usluge/${service.slug}`}>
              <div className="bg-[#1e1e1e] p-6 rounded-xl border border-white/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      
    </div>
  );
}
