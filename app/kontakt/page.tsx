
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function KontaktPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#e5e5e5]">
      
      {/* HEADER */}
      

      {/* MAIN */}
      <main className="flex-1 pt-24 px-6 flex items-center justify-center">
        
        <div className="max-w-xl w-full bg-[#1e1e1e] p-8 rounded-2xl shadow-xl border border-white/5">
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Kontakt
          </h1>

          <div className="space-y-6 text-lg">
            
            <div>
              <p className="font-semibold text-white">Telefon</p>
              <p className="text-gray-400">+381 60 123 4567</p>
            </div>

            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-gray-400">info@tvojafirma.rs</p>
            </div>

            <div>
              <p className="font-semibold text-white">Adresa</p>
              <p className="text-gray-400">Beograd, Srbija</p>
            </div>

            <div>
              <p className="font-semibold text-white">Radno vreme</p>
              <p className="text-gray-400">
                Ponedeljak – Petak: 08:00 – 17:00
              </p>
            </div>

          </div>
        </div>

      </main>

      {/* FOOTER */}
      
    </div>
  );
}