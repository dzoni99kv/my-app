"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
type Mode = "login" | "register";

export default function PrijavaPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError("");
    const values = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch(`${apiUrl}/auth/${mode === "login" ? "login" : "register"}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Prijava nije uspela.");
      localStorage.setItem("tvojaFirmaToken", data.token);
      localStorage.setItem("tvojaFirmaUser", JSON.stringify(data.user));
      window.dispatchEvent(new Event("tvojaFirmaAuth"));
      router.push(data.user.role === "admin" ? "/admin" : "/");
    } catch (requestError) { setError(requestError instanceof Error ? requestError.message : "Došlo je do greške."); }
    finally { setLoading(false); }
  }
  return <div className="min-h-[calc(100vh-70px)] bg-stone-50 px-6 py-16"><div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">Korisnički nalog</p><h1 className="mt-3 text-3xl font-semibold text-slate-900">{mode === "login" ? "Dobro došli nazad" : "Kreirajte nalog"}</h1><p className="mt-3 text-sm leading-6 text-slate-600">{mode === "login" ? "Prijavite se za pristup svom nalogu." : "Nalog vam olakšava praćenje budućih upita."}</p><form onSubmit={submit} className="mt-7 grid gap-5">{mode === "register" && <label className="text-sm font-medium text-slate-700">Ime i prezime<input required name="name" minLength={2} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500" /></label>}<label className="text-sm font-medium text-slate-700">E-pošta<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500" /></label><label className="text-sm font-medium text-slate-700">Lozinka<input required type="password" name="password" minLength={8} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500" /></label>{error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}<button disabled={loading} className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700 disabled:opacity-60">{loading ? "Sačekajte..." : mode === "login" ? "Prijavite se" : "Kreirajte nalog"}</button></form><button onClick={() => { setMode(mode === "login" ? "register" : "login"); setError(""); }} className="mt-6 text-sm font-semibold text-orange-700 hover:text-orange-600">{mode === "login" ? "Nemate nalog? Registrujte se" : "Već imate nalog? Prijavite se"}</button></div></div>;
}
