import Link from "next/link";
import { MenuHighlights } from "@/components/MenuHighlights";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-4">
              Italienisch &amp; Türkisch in Kufstein
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Wo Italien auf die Türkei trifft
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Frische Pizza aus dem Steinofen, türkische Spezialitäten und herzliche
              Gastfreundschaft — mitten in Kufstein.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/speisekarte"
                className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
              >
                Speisekarte ansehen
              </Link>
              <a
                href="https://www.lieferando.at/speisekarte/jolly-pizzeria-restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Über Lieferando bestellen
              </a>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center text-gray-400">
            Bild — Restaurant / Pizza
          </div>
        </div>
      </section>

      {/* SPEISEKARTE HIGHLIGHTS */}
      <MenuHighlights />

      {/* ÜBER UNS */}
      <section id="ueber-uns" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center text-gray-400">
            Bild — Restaurant Innenraum
          </div>
          <div>
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">Über uns</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Zwei Küchen, eine Leidenschaft
            </h2>
            <p className="text-gray-600 mb-4">
              Die Pizzeria Jolly vereint das Beste aus der italienischen und türkischen
              Küche. Von knuspriger Pizza aus dem Steinofen bis hin zum traditionellen
              türkischen Frühstück — bei uns erwartet Sie eine einzigartige kulinarische
              Reise.
            </p>
            <p className="text-gray-600 mb-6">
              In unserem gemütlichen Restaurant in Kufstein servieren wir täglich frisch
              zubereitete Gerichte mit ausgewählten Zutaten. Ob zum Mittagsmenü,
              Abendessen oder Take Away — wir freuen uns auf Sie.
            </p>
            <div className="flex gap-8 text-sm">
              <div>
                <span className="block text-2xl font-bold text-accent">2</span>
                Küchen vereint
              </div>
              <div>
                <span className="block text-2xl font-bold text-accent">50+</span>
                Gerichte
              </div>
              <div>
                <span className="block text-2xl font-bold text-accent">360°</span>
                Panorama Tour
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-20 px-4 bg-light">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">Events</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Feiern Sie bei uns
            </h2>
            <p className="text-gray-600 mb-4">
              Ob Geburtstag, Firmenevent oder Familienfeier — unser Restaurant bietet
              Platz für Veranstaltungen mit bis zu 50 Personen. Wir gestalten Ihr Event
              mit einem individuellen Menü ganz nach Ihren Wünschen.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-accent">&#10003;</span> Bis zu 50 Personen
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">&#10003;</span> Individuelle Menügestaltung
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">&#10003;</span> Italienische &amp; türkische Küche
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">&#10003;</span> Gemütliches Ambiente
              </li>
            </ul>
            <a
              href="#reservierung"
              className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors inline-block"
            >
              Event anfragen
            </a>
          </div>
          <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center text-gray-400">
            Bild — Event / Feier
          </div>
        </div>
      </section>

      {/* RESERVIERUNG */}
      <section id="reservierung" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2 text-center">
            Reservierung
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Tisch reservieren
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Reservieren Sie bequem online oder rufen Sie uns an unter{" "}
            <a href="tel:+436609920050" className="text-accent font-medium">
              0660 9920050
            </a>
          </p>
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="ihre@email.at"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Telefon</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="+43 ..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Personenanzahl</label>
              <input
                type="number"
                min="1"
                max="50"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Datum</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Uhrzeit</label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Nachricht</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                placeholder="Besondere Wünsche, Allergien, Anlass..."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
              >
                Reservierung anfragen
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
