"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
type User = { name: string; role: "customer" | "admin" };
const links = [["Početna", "/"], ["Usluge", "/usluge"], ["Galerija", "/galerija"], ["Kontakt", "/kontakt"]] as const;
export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => { const update = () => { const stored = localStorage.getItem("tvojaFirmaUser"); setUser(stored ? JSON.parse(stored) : null); }; update(); window.addEventListener("tvojaFirmaAuth", update); return () => window.removeEventListener("tvojaFirmaAuth", update); }, []);
  function logout() { localStorage.removeItem("tvojaFirmaToken"); localStorage.removeItem("tvojaFirmaUser"); setUser(null); }
  return <nav aria-label="Glavna navigacija" className="flex items-center gap-3 text-sm sm:gap-5">{links.map(([label, href]) => <Link key={href} href={href} className="text-slate-300 transition hover:text-orange-300">{label}</Link>)}{user ? <><Link href="/profil" className="rounded-full border border-orange-300/40 px-3 py-1.5 font-semibold text-orange-200 hover:bg-white/10">{user.name.split(" ")[0]}</Link>{user.role === "admin" && <Link href="/admin" className="text-orange-300 hover:text-orange-200">Admin</Link>}<button onClick={logout} className="text-slate-300 hover:text-orange-300">Odjava</button></> : <Link href="/prijava" className="text-slate-300 transition hover:text-orange-300">Prijava</Link>}</nav>;
}
