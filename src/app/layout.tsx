import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pizzeria Jolly — Italienisch & Türkisch in Kufstein",
  description:
    "Pizzeria Jolly in Kufstein: Italienische und türkische Küche, Pizza, Pasta, türkisches Frühstück, Events bis 50 Personen. Jetzt bestellen oder reservieren!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased text-primary bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
