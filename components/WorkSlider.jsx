import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

// ===============================
// SLIDER LAVORI: EDITORIA + DIGITALE
// ===============================
const workSlides = {
  slides: [
    {
      // SLIDE 1 — PROGETTI EDITORIALI
      images: [
        {
          title: "Collana Sfida – enigmistica moderna",
          description:
            "Art director e creatore di giochi. Sviluppo del progetto grafico, coordinamento visivo della collana e realizzazione di contenuti enigmistici.",
          path: "/works/editoria/sfida-enigmistica.webp",
        },
        {
          title: "Tempi di Guerra – Newedit",
          description:
            "Impaginatore, progetto grafico e cura di tutte le immagini. Gestione completa del layout redazionale e preparazione per la stampa.",
          path: "/works/editoria/tempi-di-guerra.jpg",
        },
        {
          title: "QN Enigmistica – Keesing",
          description:
            "Impaginatore e creatore di giochi. Progettazione delle pagine e realizzazione di contenuti enigmistici per la collana collegata ai quotidiani QN.",
          path: "/works/editoria/qn-enigmistica.jpg",
        },
        {
          title: "Astra – PRS Editore",
          description:
            "Impaginatore e fotoritocco. Supporto alla realizzazione della rivista con interventi su immagini e impaginazione redazionale.",
          path: "/works/editoria/astra.jpg",
        },
      ],
    },

    {
      // SLIDE 2 — PROGETTI DIGITALI
      images: [
        {
          title: "Social media & campagne",
          description:
            "Concept di presenza coordinata su Facebook, Instagram, TikTok e YouTube: copertine, post e format grafici pensati per i diversi canali.",
          path: "/works/digitale/social-preview.png",
        },
        {
          title: "UI / UX per siti editoriali",
          description:
            "Prototipi di interfacce per siti e sezioni editoriali: struttura delle pagine, gerarchie, leggibilità e coerenza con l’identità visiva.",
          path: "/works/digitale/uiux-sito.png",
        },
        {
          title: "Concept app Sudoku",
          description:
            "Idea di app dedicata a Sudoku e giochi logici: interfaccia chiara, ispirata all’esperienza di lettura delle riviste di enigmistica.",
          path: "/works/digitale/app-sudoku.png",
        },
        {
          title: "Studio e rebranding loghi",
          description:
            "Analisi dell’identità visiva e redesign di loghi esistenti: restyling, equilibrio tipografico e coerenza con i valori del brand.",
          path: "/works/digitale/logo.png",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      // altezza aumentata -> più spazio totale
      className="work-slider h-[400px] sm:h-[580px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          {/* le card occupano solo l'85% dell'altezza dello slide */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[85%]">
            {slide.images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden flex flex-col bg-[rgba(65,47,123,0.35)]"
              >
                {/* immagine copertina / mockup */}
                <div className="relative h-[55%]">
                  <Image
                    src={image.path}
                    width={800}
                    height={600}
                    alt={image.title}
                    className="object-cover object-top w-full h-full"
                  />
                </div>

                {/* testo */}
                <div className="flex-1 p-3 flex flex-col justify-between">
                  <h3 className="text-sm font-semibold mb-1">
                    {image.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-snug">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* lo spazio rimanente (15%) resta vuoto e i pallini ci cadono dentro */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
