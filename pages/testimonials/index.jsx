import { motion } from "framer-motion";

import Circles from "../../components/Circles";
import ExtraSlider from "../../components/ExtraSlider";
import { fadeIn } from "../../variants";

const ExtraProjects = () => {
  return (
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
              Progetti <span className="text-accent">extra</span>.
            </h2>

            <p className="max-w-[500px] mb-6 xl:mb-12">
              Una selezione di progetti personali e sperimentali:
              video, contenuti audio, podcast e utilizzo di strumenti
              basati su intelligenza artificiale per creare nuove forme
              di comunicazione visiva e sonora.
            </p>
          </motion.div>

          {/* slider progetti extra */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[60%]"
          >
            <ExtraSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExtraProjects;
