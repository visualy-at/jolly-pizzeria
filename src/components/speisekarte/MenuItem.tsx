import type { MenuItem as MenuItemType } from "@/data/menu";
import type { Lang } from "@/lib/i18n";

export function MenuItem({ item, lang }: { item: MenuItemType; lang: Lang }) {
  return (
    <div className="flex justify-between items-baseline gap-4">
      <div>
        <span className="font-medium">{item.name}</span>
        <p className="text-sm text-gray-500">{item.desc[lang]}</p>
      </div>
      <span className="text-accent font-semibold whitespace-nowrap">&euro; {item.price}</span>
    </div>
  );
}
