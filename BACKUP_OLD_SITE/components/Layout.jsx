import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import { useI18n } from "../lib/i18n.jsx";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const { lang, tr } = useI18n();

  const siteTitle =
    "Germano Papetti | Graphic Designer & Art Director per Editoria e Digitale";

  const description = tr(
    "Portfolio di Germano Papetti: graphic design, art direction, impaginazione editoriale, fotoritocco e progetti digitali.",
    "Germano Papetti portfolio: graphic design, art direction, editorial layout, photo retouching and digital projects."
  );

  const canonicalBase = "https://gpgraphicdesigner.com";

  return (
    <main
      className={`${sora.variable} font-sora bg-primary/60 text-white min-h-screen`}
    >
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Germano Papetti" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalBase} />

        {/* Open Graph */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalBase} />
        <meta
          property="og:image"
          content={`${canonicalBase}/works/digitale/social-preview.png`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${canonicalBase}/works/digitale/social-preview.png`}
        />
      </Head>

      {/* Background image */}
      <TopLeftImg />

      {/* Header is fixed; keep space at top so content never hides under it */}
      <Header />

      {/* Main content wrapper:
          - pt-28: space for fixed header on mobile
          - pb-28: space for bottom nav on mobile
          - remove paddings on xl where nav becomes vertical
      */}
      <div className="pt-28 pb-28 xl:pt-0 xl:pb-0">{children}</div>

      {/* Navigation */}
      <Nav />

      {/* Keep HTML lang updated */}
      <style jsx global>{`
        html {
          lang: ${lang};
        }
      `}</style>
    </main>
  );
};

export default Layout;
