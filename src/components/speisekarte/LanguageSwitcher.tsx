"use client";

import { useRouter, usePathname } from "next/navigation";
import { LANGUAGES, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({ current }: { current: Lang }) {
  const router = useRouter();
  const pathname = usePathname();

  function switchLang(code: Lang) {
    const params = new URLSearchParams();
    if (code !== "de") {
      params.set("lang", code);
    }
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  return (
    <div className="flex gap-2">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchLang(code)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            current === code
              ? "bg-accent text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
