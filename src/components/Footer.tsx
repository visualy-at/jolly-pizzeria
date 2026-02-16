export function Footer() {
  return (
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
        &copy; 2025 Pizzeria Jolly. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
