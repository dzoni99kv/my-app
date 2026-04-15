import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="flex justify-between items-center p-2 absolute top-0 left-0 w-full z-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </Link>
        <Navbar />
      </header>
      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-white px-4">
          <h2 className="text-5xl font-bold mb-6">
            Profesionalne Usluge Gradnje
          </h2>

          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Kvalitet, pouzdanost i dugogodišnje iskustvo u građevinskim
            radovima.
          </p>

          {/* CARDS */}
          <div className="flex gap-3 flex-col md:flex-row">
            <Card
              title="Usluga 1"
              description="Opis usluge 1"
              imagePath="/images/slika1.jpg"
            />
            <Card
              title="Usluga 2"
              description="Opis usluge 2"
              imagePath="/images/slika2.jpg"
            />
            <Card
              title="Usluga 3"
              description="Opis usluge 3"
              imagePath="/images/slika3.jpg"
            />
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
