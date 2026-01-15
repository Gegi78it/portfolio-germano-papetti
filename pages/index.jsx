import Head from "next/head";
import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";
import { useI18n } from "../lib/i18n.jsx";

const Home = () => {
  const { tr } = useI18n();

  const pageTitle = tr(
    "Germano Papetti | Graphic Designer & Art Director per Editoria e Digitale",
    "Germano Papetti | Graphic Designer & Art Director for Editorial & Digital"
  );

  const desc = tr(
    "Portfolio di Germano Papetti, Graphic Designer e Art Director: impaginazione editoriale, art direction, branding, UI/UX, fotoritocco e contenuti digitali.",
    "Portfolio of Germano Papetti, Graphic Designer & Art Director: editorial layout, art direction, branding, UI/UX, photo retouching and digital content."
  );

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://gpgraphicdesigner.com/" />
      </Head>

      <div className="bg-primary/60 min-h-screen relative pt-28 pb-28">
        {/* gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10" />

        {/* content */}
        <div className="container mx-auto min-h-screen text-center xl:text-left flex flex-col justify-center relative z-10">
          {/* TITLE */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {tr("Trasformo idee editoriali", "I turn editorial ideas")}
            <br />
            {tr("in", "into")}{" "}
            <span className="text-accent">
              {tr("progetti grafici di qualità", "high-quality design projects")}
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white/85"
          >
            {tr(
              "Grafico editoriale e Art Director con oltre 20 anni di esperienza. Mi occupo di impaginazione periodici, art direction, fotoritocco e contenuti enigmistici. Integro competenze in Social Media Management e SEO per rendere i progetti editoriali più efficaci anche online.",
              "Editorial designer and Art Director with 20+ years of experience. I work on magazine layout, art direction, photo retouching and puzzle content. I also integrate Social Media Management and SEO to make editorial projects more effective online."
            )}
          </motion.p>

          {/* Projects button (mobile) */}
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn("up", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex relative z-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>

        {/* particles */}
        <div className="absolute inset-0 z-0">
          <ParticlesContainer />
        </div>

        {/* avatar */}
        <div className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] z-10 pointer-events-none">
          <Avatar />
        </div>
      </div>
    </>
  );
};

export default Home;
