import { createContext, useContext, useEffect, useMemo, useState } from "react";

const I18nContext = createContext(null);

const STORAGE_KEY = "gp_lang";

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("it");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "it" || saved === "en") setLang(saved);
    } catch (_) {}
  }, []);

  useEffect(() => {
    // Keep <html lang=""> in sync for accessibility/SEO
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    toggleLang: () => setLang((prev) => (prev === "it" ? "en" : "it")),
    tr: (it, en) => (lang === "en" ? en : it),
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return ctx;
}
