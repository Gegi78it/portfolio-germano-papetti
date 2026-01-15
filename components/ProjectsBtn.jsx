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
        {/* testo circolare (leggermente più piccolo + staccato dal bordo) */}
        <div className="absolute inset-0 z-0 p-[10px]">
          <Image
            src="/rounded-text.png"
            alt="I miei lavori"
            fill
            className="object-contain animate-spin-slow scale-[0.92]"
            priority
          />
        </div>

        {/* freccia sopra */}
        <BsArrowRight className="text-white text-3xl relative z-10 group-hover:translate-x-1 transition" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
