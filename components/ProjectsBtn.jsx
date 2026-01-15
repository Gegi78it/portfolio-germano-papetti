import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 w-[185px] h-[185px] relative">
      <Link
        href="/work"
        aria-label="I miei lavori"
        title="I miei lavori"
        className="w-full h-full relative flex items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        {/* Testo circolare */}
        <Image
          src="/rounded-text.png"
          alt="I miei lavori"
          fill
          className="object-contain animate-spin-slow"
          priority
        />

        {/* Freccia centrale */}
        <BsArrowRight className="text-white text-3xl relative z-10 group-hover:translate-x-1 transition" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
