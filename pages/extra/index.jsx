import { motion } from "framer-motion";
import Head from "next/head";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useI18n } from "../../lib/i18n.jsx";
import { extraProjects } from "../../data/extraProjects";

function toEmbedUrl(url) {
  try {
    const u = new URL(url);
    // youtu.be/<id>
    if (u.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${u.pathname.replace("/", "")}`;
    }
    // youtube.com/watch?v=<id>
    const v = u.searchParams.get("v");
    if (v) return `https://www.youtube.com/embed/${v}`;
    // already embed or shorts
    if (u.pathname.startsWith("/embed/")) return url;
    if (u.pathname.startsWith("/shorts/")) {
      return `https://www.youtube.com/embed/${u.pathname.split("/shorts/")[1]}`;
    }
  } catch (_) {}
  return url;
}

const Section = ({ title, items, lang }) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => {
          const t = lang === "en" ? item.title_en : item.title_it;
          const note = lang === "en" ? item.note_en : item.note_it;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
            >
              <div className="p-4">
                <div className="font-semibold">{t}</div>
                {note ? <div className="text-white/70 text-sm mt-1">{note}</div> : null}
              </div>

              <div className="aspect-video w-full bg-black/40">
                <iframe
                  className="w-full h-full"
                  src={toEmbedUrl(item.youtubeUrl)}
                  title={t}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Extra = () => {
  const { lang, tr } = useI18n();

    const pageTitle = tr("Progetti extra | Germano Papetti", "Extra projects | Germano Papetti");
    const desc = tr(
    "Podcast, mashup e film mixati: progetti personali e sperimentali pubblicati su YouTube.",
    "Podcast, mashups and mixed films: personal and experimental projects published on YouTube."
  );

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://gpgraphicdesigner.com/extra" />
      </Head>

      <div className="h-full bg-primary/30 py-28 sm:py-32 text-center xl:text-left">
        <Circles />

        <div className="container mx-auto h-full flex flex-col justify-center">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {tr("Progetti extra", "Extra projects")}{" "}
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[700px] mx-auto xl:mx-0 mb-10 text-white/80"
          >
            {tr(
              "Qui trovi una selezione di contenuti personali: podcast, mashup e video. Se vuoi, posso riconvertire questa sezione in un vero e proprio case study con obiettivi e processo creativo.",
              "Here you can find a selection of personal content: podcast, mashups and videos. If you want, I can turn this section into full case studies with goals and creative process."
            )}
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-left"
          >
            <Section
              title={tr("Podcast", "Podcast")}
              items={extraProjects.podcast}
              lang={lang}
            />
            <Section
              title={tr("Mashup", "Mashups")}
              items={extraProjects.mashups}
              lang={lang}
            />
            <Section
              title={tr("Film / Video", "Films / Videos")}
              items={extraProjects.films}
              lang={lang}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Extra;
