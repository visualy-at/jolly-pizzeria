export type Lang = "de" | "en" | "tr" | "it";

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "it", label: "IT" },
];

export const DEFAULT_LANG: Lang = "de";

export function isValidLang(lang: string | undefined): lang is Lang {
  return lang === "de" || lang === "en" || lang === "tr" || lang === "it";
}

export function resolveLang(param: string | undefined): Lang {
  return isValidLang(param) ? param : DEFAULT_LANG;
}
