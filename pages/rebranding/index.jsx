import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../variants";

const rebrandingData = [
  { id: "01", title: "Armani" },
  { id: "02", title: "Barilla" },
  { id: "03", title: "BMW" },
  { id: "04", title: "Coca Cola" },
  { id: "05", title: "Ferrari" },
  { id: "06", title: "Ikea" },
  { id: "07", title: "Lacoste" },
  { id: "08", title: "Lego" },
  { id: "09", title: "AC Milan" },
  { id: "10", title: "Nutella" },
];

const RebrandCard = ({ item }) => {
  const [showAfter, setShowAfter] = useState(false);

  const beforeSrc = `/rebranding/${item.id}/before.png`;
  const afterSrc = `/rebranding/${item.id}/after.png`;

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
      onMouseEnter={() => setShowAfter(true)}
      onMouseLeave={() => setShowAfter(false)}
      onClick={() => setShowAfter((v) => !v)} // tap su mobile
      role="button"
      tabIndex={0}
      aria-label={`${item.title} rebranding: prima e dopo`}
      title="Tocca/clicca per vedere il dopo"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setShowAfter((v) => !v);
      }}
    >
      {/* titolo */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-white/10">
        <div className="text-sm sm:text-base font-semibold text-white">
          {item.id} — <span className="text-accent">{item.title}</span>
        </div>
        <div className="text-[11px] sm:text-xs text-white/60">
          {showAfter ? "DOPO" : "PRIMA"}
        </div>
      </div>

      {/* area immagini */}
      <div className="relative w-full aspect-[4/3] bg-black/20">
        {/* BEFORE */}
        <div className="absolute inset-0">
          <Image
            src={beforeSrc}
            alt={`${item.title} - prima`}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={item.id === "01"}
          />
        </div>

        {/* AFTER con animazione slide */}
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            x: showAfter ? "0%" : "100%",
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-black/10" />
          <Image
            src={afterSrc}
            alt={`${item.title} - dopo`}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* hint */}
      <div className="px-4 py-3 text-xs text-white/60">
        Desktop: passa col mouse • Mobile: tocca per PRIMA/DOPO
      </div>
    </div>
  );
};

export default function Rebranding() {
  return (
    <>
      <Head>
        <title>Rebranding | Germano Papetti</title>
        <meta
          name="description"
          content="Rebranding: loghi famosi rivisitati da Germano Papetti. Confronto prima e dopo."
        />
        <link rel="canonical" href="https://gpgraphicdesigner.com/rebranding" />
      </Head>

      <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
        <div className="container mx-auto">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Rebranding <span className="text-accent">.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[900px] mx-auto xl:mx-0 mb-10 text-white/70"
          >
            Studio di rebranding personale su marchi noti, realizzato a scopo
            creativo e dimostrativo. Nessuna affiliazione con i brand originali.
            Tocca/clicca sui box per vedere il confronto “prima e dopo”.
          </motion.p>

          {/* griglia */}
          <motion.div
            variants={fadeIn("up", 0.45)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {rebrandingData.map((item) => (
              <RebrandCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
