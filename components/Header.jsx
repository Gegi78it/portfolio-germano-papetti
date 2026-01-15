import Link from "next/link";
import Image from "next/image";

import Socials from "./Socials";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "../lib/i18n.jsx";

const Header = () => {
  const { tr } = useI18n();
  const ctaContact = tr("Contattami", "Contact");
  const ctaCv = tr("Scarica CV", "Download CV");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-secondary/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-3 sm:gap-y-0 py-4 sm:py-6">

          {/* LOGO */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="Germano Papetti"
              width={220}
              height={60}
              priority
              className="w-[170px] sm:w-[200px] xl:w-[220px] h-auto"
            />
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <LanguageToggle />

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full bg-accent text-white font-medium text-sm sm:text-base hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/60"
              >
                {ctaContact}
              </Link>

              <a
                href="/cv/Germano_Papetti_CV.pdf"
                className="px-4 py-2 rounded-full border border-white/20 text-white font-medium text-sm sm:text-base hover:border-white/40 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent/60"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaCv}
              </a>
            </div>

            <div className="flex items-center justify-center">
              <Socials />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
