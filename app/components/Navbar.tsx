import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6">
  <Link href="/" className="text-gray-400 hover:text-white transition">
    Pocetna
  </Link>
  <Link href="/usluge" className="text-gray-400 hover:text-white transition">
    Usluge
  </Link>
  <Link href="/galerija" className="text-gray-400 hover:text-white transition">
    Galerija
  </Link>
  <Link href="/kontakt" className="text-gray-400 hover:text-white transition">
    Kontakt
  </Link>
</nav>
  );
}