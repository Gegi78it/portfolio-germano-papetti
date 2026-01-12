import { motion } from "framer-motion";
import Head from "next/head";

import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";
import { useI18n } from "../../lib/i18n.jsx";

const Work = () => {
  const { tr } = useI18n();

  return (
    <>
      <Head>
        <title>{tr("Lavori | Germano Papetti", "Work | Germano Papetti")}</title>
        <meta name="description" content={tr("Selezione di lavori: editoria, digitale, UI/UX e contenuti.", "Selected work: editorial, digital, UI/UX and content.")} />
        <link rel="canonical" href="https://gpgraphicdesigner.com/work" />
      </Head>

    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* testo introduttivo */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col mb-8 xl:mb-0"
          >
            <h2 className="h2">
              {tr("I miei ", "My ")}<span className="text-accent">{tr("lavori", "work")}</span>.
            </h2>

            <p className="max-w-[500px] mb-6 xl:mb-12">
              {tr("Una panoramica dei progetti a cui ho lavorato:", "A selection of projects I worked on:")} dalle riviste e
              collane di enigmistica alla presenza digitale, tra social media,
              interfacce per il web e concept di app dedicate ai giochi.
            </p>
          </motion.div>

          {/* slider lavori */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[60%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Work;
