import Link from "next/link";
import { useI18n } from "../lib/i18n.jsx";

export default function FloatingActions() {
  const { tr } = useI18n();

  return (
    <div
      className="
        fixed left-0 right-0 z-50
        px-4
        pointer-events-none
        bottom-[104px] sm:bottom-24 xl:bottom-4
      "
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto w-full max-w-md pointer-events-auto">
        <div
          className="
            flex flex-col sm:flex-row items-stretch justify-center gap-3
            rounded-2xl border border-white/15 bg-black/35
            backdrop-blur-md shadow-xl
            px-3 py-3
          "
        >
          <Link
            href="/contact"
            className="
              flex-1 inline-flex items-center justify-center
              rounded-xl bg-accent px-4 py-3
              text-sm font-semibold text-white
              hover:opacity-95 transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
            "
          >
            {tr("Contattami", "Contact me")}
          </Link>

          <a
            href="/cv/Germano_Papetti_CV.pdf"
            className="
              flex-1 inline-flex items-center justify-center
              rounded-xl border border-white/20 bg-white/10
              px-4 py-3 text-sm font-semibold text-white
              hover:bg-white/15 transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            {tr("Scarica CV", "Download CV")}
          </a>
        </div>
      </div>
    </div>
  );
}
