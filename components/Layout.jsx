import Header from "./Header";
import Nav from "./Nav";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />

      {/* ✅ padding-top per evitare che l'header fixed copra i contenuti */}
      <main className="min-h-screen bg-primary/30 pt-28">
        {children}
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
