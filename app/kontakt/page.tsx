import Footer from "../components/Footer";
import Header from "../components/Header";

export default function KontaktPage() {
  return (
    <div className=" min-h-screen flex flex-col bg-[#121212] text-[#e5e5e5]">
      <Header />

      <main className="flex-1 pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* TOP SECTION */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            {/* LEFT */}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Kontakt</h1>

              <p className="text-gray-400 mb-8 max-w-md">
                Kontaktirajte nas za sve informacije, ponude i dogovor oko
                radova.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 text-sm">Telefon</p>
                  <a
                    href="tel:+381601234567"
                    className="text-lg font-medium hover:text-white transition"
                  >
                    +381 60 123 4567
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a
                    href="mailto:info@tvojafirma.rs"
                    className="text-lg font-medium hover:text-white transition"
                  >
                    info@tvojafirma.rs
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Lokacija</p>
                  <p className="text-lg font-medium">Beograd, Srbija</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-white/5">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Radno vreme
              </h2>

              <div className="space-y-2 text-gray-400 mb-8">
                <p>Ponedeljak – Petak: 08:00 – 17:00</p>
                <p>Subota: 09:00 – 14:00</p>
                <p>Nedelja: Neradni dan</p>
              </div>

              <div className="border-t border-white/10 my-6"></div>

              <p className="text-gray-400 mb-6">
                Odgovaramo u najkraćem roku. Za hitne upite, pozovite nas
                direktno.
              </p>

              <a
                href="tel:+381601234567"
                className="inline-block w-full text-center bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Pozovi odmah
              </a>
            </div>
          </div>

          {/* MAP (separate section, full width) */}
          <div className="h-[250px] md:h-[300px] w-full rounded-xl overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=44.80247344143549,20.451848596643288&z=15&output=embed"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </main>
    </div>
  );
}
