import "../styles/globals.css";

import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// i18n
import { I18nProvider } from "../lib/i18n.jsx";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {/* META GLOBALI DEL SITO */}
      <Head>
        <title>Germano Papetti | Portfolio</title>
        <meta
          name="description"
          content="Portfolio di Germano Papetti: grafica editoriale, contenuti digitali, social media, UI/UX e progetti creativi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <I18nProvider>
        <Layout>
          <AnimatePresence mode="wait">
            <motion.div key={router.route} className="h-full">
              <Transition />
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </I18nProvider>
    </>
  );
}

export default MyApp;
