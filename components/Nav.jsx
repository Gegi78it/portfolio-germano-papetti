import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useI18n } from "../lib/i18n.jsx";

// nav data — icons in public/icon/navbar
const navData = [
  { key: "home", path: "/", icon: "/icon/navbar/home.apng" },
  { key: "about", path: "/about", icon: "/icon/navbar/chi_sono.apng" },
  { key: "services", path: "/services", icon: "/icon/navbar/servizi.apng" },
  { key: "work", path: "/work", icon: "/icon/navbar/lavori.apng" },
  { key: "extra", path: "/extra", icon: "/icon/navbar/progetti_extra.apng" },
  { key: "contact", path: "/contact", icon: "/icon/navbar/contatti.apng" },
];

const labels = {
  it: {
    home: "Home",
    about: "Chi sono",
    services: "Servizi",
    work: "Lavori",
    extra: "Progetti extra",
    contact: "Contatti",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    work: "Work",
    extra: "Extra projects",
    contact: "Contact",
  },
};

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const { lang } = useI18n();

  return (
    <nav
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      className="flex flex-col items-center xl:justify-center fixed bottom-0 xl:right-[2%] z-40 top-auto xl:top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-10 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link) => (
          <Link
            key={link.key}
            href={link.path}
            className={`
              relative flex items-center group
              hover:text-accent transition-all duration-300
              ${pathname === link.path ? "text-accent" : "text-white/80"}
            `}
          >
            {/* tooltip (desktop) */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[4px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {labels[lang]?.[link.key] ?? labels.it[link.key]}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
              </div>
            </div>

            {/* icon */}
            <Image
              src={link.icon}
              alt={labels[lang]?.[link.key] ?? labels.it[link.key]}
              width={28}
              height={28}
              className="w-7 h-7 xl:w-8 xl:h-8"
              priority={link.key === "home"}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
