import "../styles/globals.css";

// components
import Layout from "../components/Layout";

// i18n
import { I18nProvider } from "../lib/i18n.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <I18nProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </I18nProvider>
  );
}

export default MyApp;
