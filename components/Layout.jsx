import Header from "./Header";
import Nav from "./Nav";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />

      {/* ✅ page gestisce padding-top globale (così header non copre più) */}
      <main className="page bg-primary/30">
        {children}
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
