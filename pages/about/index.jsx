import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// ===============================
// DATI PER I TAB "CHI SONO"
// ===============================
// Le icone puntano a file in public/icon/skills/*.png
export const aboutData = [
  // ---------- SKILL ----------
  {
    title: "skill",
    info: [
      {
        title: "Uso quotidianamente",
        skills: [
          { name: "InDesign", icon: "/icon/skills/indesign.png" },
          { name: "Photoshop", icon: "/icon/skills/photoshop.png" },
          { name: "Illustrator", icon: "/icon/skills/illustrator.png" },
          { name: "Canva", icon: "/icon/skills/canva.png" },
          { name: "WordPress", icon: "/icon/skills/wordpress.png" },
        ],
      },
      {
        title: "Sto imparando e sperimentando",
        skills: [
          { name: "After Effects", icon: "/icon/skills/aftereffects.png" },
          { name: "Audition", icon: "/icon/skills/audition.png" },
          { name: "Blender", icon: "/icon/skills/blender.png" },
          { name: "Figma", icon: "/icon/skills/figma.png" },
          { name: "Runway", icon: "/icon/skills/runway.png" },
        ],
      },
    ],
  },

  // ---------- COLLABORAZIONI ----------
  {
  title: "collaborazioni",
  info: [
    {
      title: "Rizzoli (RCS MediaGroup)",
      stage:
        "Fotoritocco per diverse testate del gruppo. Attività di marketing e supporto grafico per Max, Amica, IoDonna, Anna, Bravacasa, Oggi, Visto e Novella 2000. Impaginazione per Astra."
    },
    {
      title: "PRS Editore",
      stage:
        "Fotoritocco per Novella 2000, Visto e OK Salute. Impaginazione editoriale per Astra e riviste di enigmistica, con particolare attenzione alla collana QN Enigmistica."
    },
    {
      title: "Keesing Italia",
      stage:
        "Impaginatore e creatore di giochi per riviste di enigmistica. Realizzazione di contenuti grafici per numeri dedicati alla collana QN Enigmistica."
    },
    {
      title: "Newedit",
      stage:
        "Impaginazione completa della rivista Tempi di Guerra, dalla gestione delle pagine alla preparazione per la stampa."
    },
    {
      title: "Bramante srl",
      stage:
        "Art director per la linea di riviste Sfida: Sfida Enigmistica, Sfida Sudoku, Sfida Colorare e Sfida Puzzle. Coordinamento del progetto grafico e dei layout."
    },
  ],
},


  // ---------- FORMAZIONE ----------
  {
    title: "formazione",
    info: [
      {
        title:
          "Digital Communication & Graphic Designer – Fondazione Le Vele (Pavia)",
        stage:
          "Corso con moduli dedicati a Social Media Management e SEO – 2024.",
      },
      {
        title:
          "Diploma Perito Grafico – Istituto Pavoniano Artigianelli (Milano)",
        stage: "Percorso di studi grafici professionali – 1996–2000.",
      },
      {
        title: "Formazione continua",
        stage:
          "Aggiornamento su After Effects, Blender, Figma, produzione audio/video e strumenti basati su AI.",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar (desktop) */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* COLONNA SINISTRA: TITOLO + TESTO + CONTATORI */}
        <div className="flex-1 flex flex-col justify-center">
          {/* titolo */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Dall’editoria al <span className="text-accent">digitale</span>:
            <br />
            grafica, contenuti e strategie per comunicare.
          </motion.h2>

          {/* sottotitolo */}
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Sono un grafico editoriale e Art Director con oltre vent’anni di
            esperienza in riviste, enigmistica e progetti editoriali. Negli
            anni ho affiancato alla grafica competenze in marketing, contenuti
            per il web, social media e formati multimediali.
          </motion.p>

          {/* CONTATORI */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* 1: anni di esperienza */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  anni di esperienza
                </div>
              </div>

              {/* 2: riviste e testate seguite */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[140px]">
                  riviste e testate seguite
                </div>
              </div>

              {/* 3: progetti editoriali realizzati */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[150px]">
                  progetti editoriali realizzati
                </div>
              </div>

              {/* 4: anni nel digitale */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[140px]">
                  anni nel digitale
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* COLONNA DESTRA: TAB + CONTENUTO */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* titoli dei tab */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* contenuto del tab selezionato */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => (
              <div
                key={i}
                className="w-full max-w-md flex flex-col gap-y-2 text-center xl:text-left"
              >
                <div className="font-semibold">{item.title}</div>

                {/* se ci sono skill con icone (tab Skill) */}
                {item.skills && (
                  <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-6">
                    {item.skills.map((skill, j) => (
                      <div
                        key={j}
                        className="flex flex-col items-center gap-1 text-[11px] text-white/60"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="object-contain opacity-80 hover:opacity-100 transition"
                        />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* se è testo semplice (collaborazioni / formazione) */}
                {!item.skills && item.stage && (
                  <div className="text-sm text-white/60">{item.stage}</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
