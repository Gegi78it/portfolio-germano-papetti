import { useState } from "react";
import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const content = {
  it: {
    titleLine1: "Trasformo idee editoriali",
    titleLine2: "in",
    titleAccent: "progetti grafici di qualità",
    subtitle:
      "Grafico editoriale e Art Director con oltre 20 anni di esperienza. Mi occupo di impaginazione periodici, art direction, fotoritocco e contenuti enigmistici. Integro competenze in Social Media Management e SEO per rendere i progetti editoriali più efficaci anche online.",
  },
  en: {
    titleLine1: "Turning editorial ideas",
    titleLine2: "into",
    titleAccent: "high-quality graphic projects",
    subtitle:
      "Editorial graphic designer and Art Director with 20+ years of experience. I work on magazine layout, art direction, photo editing and puzzle content. I also integrate Social Media Management and SEO skills to make editorial projects more effective online.",
  },
};

const Home = () => {
  const [language, setLanguage] = useState("it");
  const t = content[language];

  return (
    <div className="bg-primary/60 h-full relative">

      {/* ===== SWITCH LINGUA — NASCOSTO PER ORA ===== */}
      <div className="hidden absolute top-4 left-1/2 -translate-x-1/2 xl:top-6 xl:right-6 xl:left-auto xl:translate-x-0 z-20">
        <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
          <span className="text-xs uppercase tracking-[2px] text-white/60">
            Language
          </span>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setLanguage("it")}
            className={`text-xs font-semibold px-3 py-1 rounded-full transition-all ${
              language === "it"
                ? "bg-accent text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            IT
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setLanguage("en")}
            className={`text-xs font-semibold px-3 py-1 rounded-full transition-all ${
              language === "en"
                ? "bg-accent text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            EN
          </motion.button>
        </div>
      </div>

      {/* layer con sfumatura */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">

          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {t.titleLine1}
            <br />
            {t.titleLine2}{" "}
            <span className="text-accent">{t.titleAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            {t.subtitle}
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
