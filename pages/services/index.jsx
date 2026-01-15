import Head from "next/head";
import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";
import { useI18n } from "../../lib/i18n.jsx";

const Services = () => {
  const { tr } = useI18n();

  return (
    <>
      <Head>
        <title>{tr("Servizi | Germano Papetti", "Services | Germano Papetti")}</title>
        <meta
          name="description"
          content={tr(
            "Servizi di art direction, grafica editoriale, fotoritocco, SEO e social media.",
            "Services: art direction, editorial design, photo retouching, SEO and social media."
          )}
        />
        <link rel="canonical" href="https://gpgraphicdesigner.com/services" />
      </Head>

      <div className="h-full bg-primary/30 py-36 flex items-center">
        <Circles />

        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* testo */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-8"
              >
                {tr("I miei servizi", "My services")}{" "}
                <span className="text-accent">.</span>
              </motion.h2>

              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                {tr(
                  "Dall’editoria al digitale: supporto editoriale, grafico e strategico per riviste, progetti stampati, contenuti web e comunicazione sui social.",
                  "From editorial to digital: editorial, design and strategic support for magazines, print projects, web content and social communication."
                )}
              </motion.p>
            </div>

            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>

        <Bulb />
      </div>
    </>
  );
};

export default Services;
