import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={70} height={70} />
          </Link>

          {/* NAVBAR */}
          <Navbar />
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-col flex-1">
        <section className="flex-1 flex flex-col justify-between items-center text-white relative pt-24 px-4">
          {/* GIF BACKGROUND */}
          <img
            src="/images/bgslika.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          <div className="relative z-10 text-center max-w-6xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Profesionalne Usluge Gradnje
            </h2>

            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
              Kvalitet, pouzdanost i dugogodišnje iskustvo u građevinskim
              radovima.
            </p>

            <div className="flex flex-wrap md:flex-nowrap gap-5 w-full">
              <div className="flex-1 min-w-[250px]">
                <Card
                  title="Usluga 1"
                  description="Opis usluge 1"
                  imagePath="/images/slika1.jpg"
                />
              </div>
              <div className="flex-1 min-w-[250px]">
                <Card
                  title="Usluga 2"
                  description="Opis usluge 2"
                  imagePath="/images/slika2.jpg"
                />
              </div>
              <div className="flex-1 min-w-[250px]">
                <Card
                  title="Usluga 3"
                  description="Opis usluge 3"
                  imagePath="/images/slika3.jpg"
                />
              </div>
            </div>

            {/* ✅ MOVE BUTTON HERE */}
            <div className="mt-10">
              <Link
                href="/usluge"
                className="inline-flex items-center gap-2 bg-orange-200 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Pogledaj ceo katalog usluga →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
