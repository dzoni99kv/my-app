import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const images: string[] = [
  "/images/slika1.jpg",
  "/images/slika2.jpg",
  "/images/slika3.jpg",
  "/images/slika1.jpg",
  "/images/slika2.jpg",
];

export default function GalerijaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      
      
      {/* HEADER */}
      

      {/* MAIN */}
      <main className="flex-1 pt-24 px-6">
        
        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold mb-12 max-w-6xl mx-auto">
          Galerija radova
        </h1>

        {/* GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          
          {/* BIG IMAGE */}
          <div className="relative md:col-span-2 h-[400px] group overflow-hidden rounded-xl">
            <Image
              src={images[0]}
              alt="Gallery"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* SIDE */}
          <div className="flex flex-col gap-4">
            {images.slice(1, 3).map((src, i) => (
              <div key={i} className="relative h-[190px] group overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt="Gallery"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* BOTTOM */}
          {images.slice(3).map((src, i) => (
            <div key={i} className="relative h-[250px] group overflow-hidden rounded-xl">
              <Image
                src={src}
                alt="Gallery"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      
    </div>
  );
}