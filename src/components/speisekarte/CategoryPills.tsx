"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import type { Translatable } from "@/data/menu";

interface Category {
  id: string;
  name: Translatable;
}

const SCROLL_OFFSET = 120; // navbar (64px) + pills bar (~56px)

export function CategoryPills({ categories, lang }: { categories: Category[]; lang: Lang }) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const containerRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const sectionEls = categories
      .map((c) => document.getElementById(c.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: `-${SCROLL_OFFSET}px 0px -60% 0px`, threshold: 0 },
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  useEffect(() => {
    if (!containerRef.current) return;
    const activeBtn = containerRef.current.querySelector<HTMLElement>(`[data-id="${activeId}"]`);
    activeBtn?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeId]);

  function scrollToCategory(id: string) {
    setActiveId(id);
    isClickScrolling.current = true;

    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  }

  return (
    <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            data-id={cat.id}
            onClick={() => scrollToCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeId === cat.id
                ? "bg-accent text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.name[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
