import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Pizzeria <span className="text-accent">Jolly</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/speisekarte" className="hover:text-accent transition-colors">
            Speisekarte
          </Link>
          <a href="/#ueber-uns" className="hover:text-accent transition-colors">
            Über uns
          </a>
          <a href="/#events" className="hover:text-accent transition-colors">
            Events
          </a>
          <a href="/#reservierung" className="hover:text-accent transition-colors">
            Reservierung
          </a>
        </div>
        <a
          href="tel:+436609920050"
          className="bg-accent text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
        >
          Jetzt bestellen
        </a>
      </div>
    </nav>
  );
}
