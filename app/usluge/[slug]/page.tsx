import { services } from "../../lib/services";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!service) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        Usluga nije pronađena
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#e5e5e5]">
      <main className="flex-1 pt-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          {service.title}
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          {service.longDescription}
        </p>

        <div className="w-full h-80 bg-[#1e1e1e] rounded-xl mb-10"></div>

        <div className="mt-10">
          <a
            href="/kontakt"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Kontaktirajte nas
          </a>
        </div>
      </main>
    </div>
  );
}