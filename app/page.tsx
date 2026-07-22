import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";

const highlights = [
  ["15+", "godina iskustva"],
  ["250+", "završenih projekata"],
  ["48h", "do prve ponude"],
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate min-h-[720px] bg-slate-950 text-white">
        <Image src="/images/bgslika.jpg" alt="Izgradnja modernog objekta" fill priority className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-2 text-sm font-medium text-orange-200">Gradimo sigurno. Završavamo precizno.</p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Prostor koji traje generacijama.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Od prvog iskopa do poslednjeg detalja, naš tim vodi svaki projekat uz jasnu komunikaciju, proverene materijale i dogovorene rokove.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/kontakt" className="rounded-full bg-orange-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-orange-300">Zatražite ponudu</Link>
              <Link href="/galerija" className="rounded-full border border-white/25 px-6 py-3 font-semibold transition hover:bg-white/10">Pogledajte radove</Link>
            </div>
            <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-7">
              {highlights.map(([value, label]) => <div key={label}><dt className="text-2xl font-semibold text-orange-300">{value}</dt><dd className="mt-1 text-sm text-slate-400">{label}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-6 py-24 text-slate-900 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">Naše usluge</p><h2 className="mt-3 text-4xl font-semibold tracking-tight">Sve što je projektu potrebno, na jednom mestu.</h2></div>
            <Link href="/usluge" className="font-semibold text-orange-800 hover:text-orange-600">Sve usluge →</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card title="Građevinski radovi" description="Pouzdana realizacija od temelja do krova." imagePath="/images/slika1.jpg" slug="gradjevinski-radovi" />
            <Card title="Asfaltiranje" description="Trajni prilazi, dvorišta i parking površine." imagePath="/images/slika2.jpg" slug="asfaltiranje" />
            <Card title="Betonski radovi" description="Stabilne konstrukcije izvedene sa preciznošću." imagePath="/images/slika3.jpg" slug="betonski-radovi" />
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"><div className="relative h-[360px] overflow-hidden rounded-3xl"><Image src="/images/IMG_20200920_124959.jpg" alt="Završen građevinski projekat" fill className="object-cover" /></div><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">Naš proces</p><h2 className="mt-3 text-4xl font-semibold">Bez nejasnoća od ideje do primopredaje.</h2><ol className="mt-8 space-y-5 text-slate-300"><li><span className="mr-3 text-orange-300">01</span>Razgovor, obilazak i jasna ponuda.</li><li><span className="mr-3 text-orange-300">02</span>Plan rada i dogovoreni rokovi.</li><li><span className="mr-3 text-orange-300">03</span>Kontrola kvaliteta na svakom koraku.</li></ol><Link href="/kontakt" className="mt-10 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-200">Razgovarajmo o projektu</Link></div></div></section>
    </div>
  );
}
