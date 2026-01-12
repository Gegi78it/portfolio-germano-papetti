import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

// ===============================
// SLIDER PROGETTI EXTRA
// ===============================
const extraSlides = {
  slides: [
    {
      images: [
        {
          title: "Video e contenuti per YouTube / social",
          description:
            "Montaggio, titolazione e grafiche per video pubblicati su YouTube e sui social: copertine, schermate di apertura e chiusura.",
          path: "/extra/video-cover.jpg",
        },
        {
          title: "Brani e mashup audio",
          description:
            "Creazione di tracce audio e mashup: editing, pulizia del suono e grafiche di accompagnamento per la pubblicazione online.",
          path: "/extra/audio-cover.jpg",
        },
        {
          title: "Podcast",
          description:
            "Sviluppo di un podcast con cura della parte grafica, copertine, identità visiva degli episodi e supporto ai contenuti.",
          path: "/extra/podcast-cover.jpg",
        },
        {
          title: "Sperimentazioni con AI",
          description:
            "Progetti personali con immagini e video generati tramite strumenti di intelligenza artificiale, come base per copertine e contenuti digitali.",
          path: "/extra/ai-cover.jpg",
        },
      ],
    },
  ],
};

const ExtraSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[400px] sm:h-[580px]"
    >
      {extraSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          {/* griglia delle 4 card, come nei Lavori */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[85%]">
            {slide.images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden flex flex-col bg-[rgba(65,47,123,0.35)]"
              >
                {/* immagine */}
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
          {/* lo spazio sotto (15%) ospita i pallini */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ExtraSlider;
