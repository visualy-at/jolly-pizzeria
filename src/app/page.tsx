const menuData = [
  {
    category: "Pizza",
    items: [
      { name: "Margherita", desc: "Tomatensoße, Mozzarella, Basilikum", price: "9,50" },
      { name: "Diavola", desc: "Tomatensoße, Mozzarella, scharfe Salami", price: "11,50" },
      { name: "Quattro Formaggi", desc: "Tomatensoße, 4 Käsesorten", price: "12,00" },
      { name: "Prosciutto e Funghi", desc: "Tomatensoße, Mozzarella, Schinken, Champignons", price: "11,50" },
      { name: "Tonno", desc: "Tomatensoße, Mozzarella, Thunfisch, Zwiebeln", price: "12,00" },
      { name: "Jolly Spezial", desc: "Tomatensoße, Mozzarella, Rucola, Parmesan, Parmaschinken", price: "14,50" },
    ],
  },
  {
    category: "Pasta",
    items: [
      { name: "Spaghetti Bolognese", desc: "Klassische Fleischsoße", price: "11,00" },
      { name: "Penne Arrabiata", desc: "Scharfe Tomatensoße", price: "10,00" },
      { name: "Tagliatelle al Salmone", desc: "Lachs, Sahnesoße", price: "13,50" },
      { name: "Lasagne", desc: "Hausgemacht, überbacken", price: "12,00" },
    ],
  },
  {
    category: "Türkische Spezialitäten",
    items: [
      { name: "Adana Kebab", desc: "Scharfes Lammhackfleisch vom Grill, Reis, Salat", price: "14,50" },
      { name: "Iskender Kebab", desc: "Dönerfleisch auf Fladenbrot, Joghurt, Tomatensoße", price: "15,00" },
      { name: "Lahmacun", desc: "Türkische Pizza mit Hackfleisch", price: "8,50" },
      { name: "Pide mit Käse", desc: "Türkisches Fladenbrot, gefüllt mit Käse", price: "10,00" },
    ],
  },
  {
    category: "Frühstück",
    items: [
      { name: "Türkisches Frühstück", desc: "Oliven, Käse, Tomaten, Gurken, Eier, Honig, Butter, Brot, Tee", price: "12,90" },
      { name: "Frühstück Classic", desc: "Semmeln, Butter, Marmelade, Wurst, Käse, Ei, Kaffee", price: "9,90" },
      { name: "Menemen", desc: "Türkisches Eiergericht mit Tomaten, Paprika, Gewürzen", price: "10,50" },
    ],
  },
  {
    category: "Salate",
    items: [
      { name: "Insalata Mista", desc: "Gemischter Salat der Saison", price: "7,50" },
      { name: "Insalata Caprese", desc: "Tomaten, Mozzarella, Basilikum", price: "9,50" },
      { name: "Caesar Salad", desc: "Romana, Parmesan, Croutons, Caesar-Dressing", price: "10,50" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Tiramisu", desc: "Hausgemacht", price: "6,50" },
      { name: "Panna Cotta", desc: "Mit Beerensoße", price: "6,00" },
      { name: "Baklava", desc: "Türkisches Blätterteiggebäck mit Nüssen", price: "5,50" },
      { name: "Kunefe", desc: "Warmes türkisches Käsedessert mit Sirup", price: "8,00" },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            Pizzeria <span className="text-accent">Jolly</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#speisekarte" className="hover:text-accent transition-colors">Speisekarte</a>
            <a href="#ueber-uns" className="hover:text-accent transition-colors">Über uns</a>
            <a href="#events" className="hover:text-accent transition-colors">Events</a>
            <a href="#reservierung" className="hover:text-accent transition-colors">Reservierung</a>
          </div>
          <a
            href="tel:+436609920050"
            className="bg-accent text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Jetzt bestellen
          </a>
        </div>
      </nav>

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
              <a
                href="#speisekarte"
                className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
              >
                Speisekarte ansehen
              </a>
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

      {/* SPEISEKARTE */}
      <section id="speisekarte" className="py-20 px-4 bg-light">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2 text-center">
            Unsere Küche
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Speisekarte</h2>
          <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
            Italienische Klassiker und türkische Spezialitäten — täglich frisch zubereitet.
            Auch als Mittagsmenü erhältlich.
          </p>

          <div className="space-y-12">
            {menuData.map((section) => (
              <div key={section.category}>
                <h3 className="text-xl font-bold mb-6 border-b-2 border-accent pb-2 inline-block">
                  {section.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-baseline gap-4">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                      <span className="text-accent font-semibold whitespace-nowrap">€ {item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.lieferando.at/speisekarte/jolly-pizzeria-restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors inline-block"
            >
              Vollständige Karte auf Lieferando
            </a>
          </div>
        </div>
      </section>

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
                <span className="text-accent">✓</span> Bis zu 50 Personen
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Individuelle Menügestaltung
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Italienische &amp; türkische Küche
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Gemütliches Ambiente
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

      {/* FOOTER */}
      <footer className="bg-primary text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4">
              Pizzeria <span className="text-accent">Jolly</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Italienische und türkische Küche in Kufstein.
              Frisch zubereitet mit Liebe und Leidenschaft.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Kufstein, Österreich</p>
              <p>
                <a href="tel:+436609920050" className="hover:text-accent transition-colors">
                  0660 9920050
                </a>
              </p>
              <p>Take Away &amp; Lieferung</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <a
                  href="https://www.instagram.com/jolly.kufstein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Instagram @jolly.kufstein
                </a>
              </p>
              <p>
                <a
                  href="https://www.lieferando.at/speisekarte/jolly-pizzeria-restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Lieferando
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-accent transition-colors">
                  Impressum
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-accent transition-colors">
                  Datenschutz
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © 2025 Pizzeria Jolly. Alle Rechte vorbehalten.
        </div>
      </footer>
    </>
  );
}
