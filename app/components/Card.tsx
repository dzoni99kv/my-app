import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imagePath: string;
};

export default function Card({ title, description, imagePath }: Props) {
  return (
    <a
      href="#"
      className="flex flex-col bg-[#f5f0e6] p-6 border border-black/10 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 h-full"
    >
      {/* IMAGE */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src={imagePath}
          alt="Service image"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 text-black">
        {/* TEXT BLOCK */}
        <div>
          <h5 className="mb-2 text-xl font-bold break-words">{title}</h5>

          <p className="mb-4 text-gray-700 text-sm">{description}</p>
        </div>

        {/* BUTTON (sticks to bottom) */}
        <div className="mt-auto">
          <button className="w-fit px-4 py-2 text-sm font-medium rounded-lg bg-black text-white hover:bg-gray-800 transition">
            Pogledaj više →
          </button>
        </div>
      </div>
    </a>
  );
}
