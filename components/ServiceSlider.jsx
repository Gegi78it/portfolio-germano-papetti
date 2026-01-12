import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxReader,
    title: "Impaginazione editoriale",
    description:
      "Periodici, inserti speciali, riviste di enigmistica: progetto e gestisco l’impaginazione completa.",
  },
  {
    Icon: RxPencil2,
    title: "Art direction & template",
    description:
      "Sviluppo linee guida grafiche e template per più testate, mantenendo coerenza visiva nel tempo.",
  },
  {
    Icon: RxCrop,
    title: "Fotoritocco & prestampa",
    description:
      "Ottimizzazione immagini, cromia, impaginati pronti per la stampa secondo gli standard editoriali.",
  },
  {
    Icon: RxRocket,
    title: "Marketing, Social & SEO",
    description:
      "Supporto a contenuti editoriali e promozionali pensati per i social e i motori di ricerca.",
  },
  {
    Icon: RxDesktop,
    title: "Contenuti multimediali",
    description:
      "Sperimentazione e produzione di audio, video, podcast e strumenti creativi basati su AI.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i} className="h-auto">
          <div
            className="
              bg-[rgba(65,47,123,0.15)]
              h-full
              rounded-lg
              px-6
              py-8
              flex
              flex-col
              justify-between
              group
              cursor-pointer
              hover:bg-[rgba(89,65,169,0.15)]
              transition-all
              duration-300
            "
          >
            {/* ICONA */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* TITOLO + TESTO */}
            <div className="mb-6">
              <div className="mb-2 text-lg font-semibold">{item.title}</div>
              <p className="max-w-[350px] leading-normal">
                {item.description}
              </p>
            </div>

            {/* FRECCIA SEMPRE ALLINEATA */}
            <div className="text-3xl mt-auto">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
