import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-2 sm:gap-y-0 py-4 sm:py-6">
          {/* LOGO */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="Germano Papetti"
              width={220}
              height={60}
              priority
              className="w-[150px] sm:w-[180px] md:w-[200px] h-auto"
            />
          </Link>

          {/* SOCIAL */}
          <div className="flex items-center justify-center">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
