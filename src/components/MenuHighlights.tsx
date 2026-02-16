import Link from "next/link";
import { getHighlights } from "@/data/menu";

export function MenuHighlights() {
  const highlights = getHighlights();

  return (
    <section id="speisekarte" className="py-20 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2 text-center">
          Unsere Empfehlungen
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Speisekarte</h2>
        <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
          Italienische Klassiker und türkische Spezialitäten — täglich frisch zubereitet.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{item.desc.de}</p>
              <span className="text-accent font-semibold">&euro; {item.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/speisekarte"
            className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors inline-block"
          >
            Gesamte Speisekarte ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
