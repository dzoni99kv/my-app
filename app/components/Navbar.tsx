import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6 text-white">
      <Link href="/" className="hover:text-gray-300 transition">
        Pocetna
      </Link>
      <Link href="/usluge" className="hover:text-gray-300 transition">
        Usluge
      </Link>
      <Link href="/galerija" className="hover:text-gray-300 transition">
        Galerija
      </Link>
      <Link href="/kontakt" className="hover:text-gray-300 transition">
        Kontakt
      </Link>
    </nav>
  );
}