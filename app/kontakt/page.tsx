"use client";
import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";
const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

export default function KontaktPage() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("sending"); setError("");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    try {
      const token = localStorage.getItem("tvojaFirmaToken");
      const response = await fetch(`${apiUrl}/quotes`, { method: "POST", headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) }, body: JSON.stringify(payload) });
      if (!response.ok) { const data = await response.json().catch(() => null); throw new Error(data?.error ?? "Slanje upita nije uspelo."); }
      formElement.reset(); setState("sent");
    } catch (requestError) { setState("error"); setError(requestError instanceof Error ? requestError.message : "Došlo je do greške. Pokušajte ponovo."); }
  }
  return <div className="bg-stone-50 px-6 py-16 lg:px-8"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]"><section><p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">Kontakt</p><h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-900">Recite nam šta gradite.</h1><p className="mt-6 max-w-md leading-7 text-slate-600">Pošaljite osnovne informacije o projektu. Javljamo se u roku od 48 sati sa sledećim korakom.</p><dl className="mt-10 space-y-6"><div><dt className="text-sm text-slate-500">Telefon</dt><dd className="mt-1 font-semibold"><a href="tel:+381601234567">+381 60 123 4567</a></dd></div><div><dt className="text-sm text-slate-500">E-pošta</dt><dd className="mt-1 font-semibold"><a href="mailto:info@tvojafirma.rs">info@tvojafirma.rs</a></dd></div><div><dt className="text-sm text-slate-500">Radno vreme</dt><dd className="mt-1 font-semibold">Pon–Pet, 08:00–17:00</dd></div></dl></section><section className="rounded-3xl bg-slate-900 p-7 text-white shadow-xl sm:p-10"><h2 className="text-2xl font-semibold">Zatražite ponudu</h2>{state === "sent" ? <div className="mt-6"><p className="rounded-xl bg-emerald-400/15 p-5 text-emerald-200">Hvala! Vaš upit je uspešno poslat. Javljamo se uskoro.</p><button onClick={() => setState("idle")} className="mt-5 text-sm font-semibold text-orange-300 hover:text-orange-200">Pošaljite novi upit</button></div> : <form onSubmit={submit} className="mt-7 grid gap-5"><label className="text-sm">Ime i prezime<input required name="name" minLength={2} className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-orange-300" /></label><label className="text-sm">E-pošta<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-orange-300" /></label><label className="text-sm">Vrsta usluge<select name="service" className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 outline-none"><option>Građevinski radovi</option><option>Asfaltiranje</option><option>Renoviranje</option><option>Drugo</option></select></label><label className="text-sm">Opišite projekat<textarea required name="message" minLength={10} rows={4} className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-orange-300" /></label>{state === "error" && <p role="alert" className="rounded-xl bg-red-400/15 p-3 text-sm text-red-200">{error}</p>}<button disabled={state === "sending"} className="rounded-full bg-orange-400 px-6 py-3 font-semibold text-slate-950 hover:bg-orange-300 disabled:cursor-not-allowed disabled:opacity-60">{state === "sending" ? "Šaljemo..." : "Pošaljite upit"}</button></form>}</section></div></div>;
}
