import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-8 text-white font-medium">
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