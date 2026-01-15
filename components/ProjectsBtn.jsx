import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
        aria-label="Vai ai lavori"
        title="I miei lavori"
      >
        {/* cerchio + testo */}
        <span className="text-white text-sm font-semibold tracking-wide uppercase">
          I miei lavori
        </span>

        {/* freccia (DEVE essere bianca) */}
        <BsArrowRight className="text-white text-3xl absolute group-hover:translate-x-1 transition" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
