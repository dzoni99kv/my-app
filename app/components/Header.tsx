import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8"><Link href="/" className="flex items-center gap-3"><Image src="/logo.png" alt="Tvoja Firma" width={46} height={46} className="rounded-full" /><span className="text-sm font-bold tracking-wide text-white">TVOJA FIRMA</span></Link><Navbar /><Link href="/kontakt" className="hidden rounded-full bg-orange-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-orange-300 sm:block">Zatražite ponudu</Link></div></header>;
}
