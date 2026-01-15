import { useI18n } from "../lib/i18n.jsx";

export default function LanguageToggle() {
  const { lang, toggleLang } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="
        inline-flex items-center gap-2
        rounded-full border border-white/20 bg-white/10
        px-3 py-2 text-xs sm:text-sm
        text-white/90 hover:text-white
        hover:bg-white/15 transition
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
      "
      aria-label={lang === "it" ? "Cambia lingua in inglese" : "Switch language to Italian"}
      title={lang === "it" ? "EN" : "IT"}
    >
      <span
        className="
          inline-flex h-6 w-6 items-center justify-center
          rounded-full bg-black/25 text-[11px] font-semibold
        "
        aria-hidden="true"
      >
        {lang.toUpperCase()}
      </span>
      <span className="hidden sm:inline">
        {lang === "it" ? "English" : "Italiano"}
      </span>
    </button>
  );
}
