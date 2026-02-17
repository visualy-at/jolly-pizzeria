import type { Metadata } from "next";
import { menuCategories } from "@/data/menu";
import { resolveLang } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/speisekarte/LanguageSwitcher";
import { CategoryPills } from "@/components/speisekarte/CategoryPills";
import { MenuSection } from "@/components/speisekarte/MenuSection";

export const metadata: Metadata = {
  title: "Speisekarte — Pizzeria Jolly",
  description:
    "Die vollständige Speisekarte der Pizzeria Jolly in Kufstein: Pizza, Pasta, Pide, Burger, Salate, Snacks, Spezials, Desserts und Getränke.",
};

export default async function SpeisekartePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const lang = resolveLang(params.lang);

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">
              Unsere Küche
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">Speisekarte</h1>
          </div>
          <LanguageSwitcher current={lang} />
        </div>
      </section>

      {/* Sticky Category Pills */}
      <CategoryPills categories={menuCategories} lang={lang} />

      {/* Menu Sections */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {menuCategories.map((category) => (
            <MenuSection key={category.id} category={category} lang={lang} />
          ))}
        </div>

      </section>
    </>
  );
}
