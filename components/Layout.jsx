import Header from "./Header";
import Nav from "./Nav";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />

      {/* ✅ Fondo unico per tutte le pagine interne (niente bande/grigi) */}
      <main className="min-h-screen bg-primary/30">
        {children}
      </main>

      {/* Se vuoi il footer in futuro lo riattivi */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
