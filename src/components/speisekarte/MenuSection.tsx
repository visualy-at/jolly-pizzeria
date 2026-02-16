import type { MenuCategory } from "@/data/menu";
import type { Lang } from "@/lib/i18n";
import { MenuItem } from "./MenuItem";

export function MenuSection({ category, lang }: { category: MenuCategory; lang: Lang }) {
  return (
    <section id={category.id}>
      <h3 className="text-xl font-bold mb-6 border-b-2 border-accent pb-2 inline-block">
        {category.name[lang]}
      </h3>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} lang={lang} />
        ))}
      </div>
    </section>
  );
}
