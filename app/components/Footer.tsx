import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 border-t border-white/5">
      <div className="max-w-6xl leading-relaxed mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Tvoja Firma
          </h3>
          <p className="text-sm">
            Profesionalne građevinske usluge uz kvalitet i pouzdanost.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Navigacija
          </h3>
          <ul className=" space-y-2 text-sm">
            <li><Link className="hover:text-white transition" href="/">Početna</Link></li>
            <li><Link className="hover:text-white transition" href="/usluge">Usluge</Link></li>
            <li><Link className="hover:text-white transition" href="/galerija">Galerija</Link></li>
            <li><Link className="hover:text-white transition" href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Kontakt
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📞 +381 60 123 4567</li>
            <li>✉️ info@tvojafirma.rs</li>
            <li>📍 Beograd, Srbija</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/5 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Tvoja Firma. Sva prava zadržana.
      </div>
    </footer>
  );
}