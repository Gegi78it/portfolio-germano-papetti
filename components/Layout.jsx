import Header from "./Header";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />

      {/* sfondo unico coerente */}
      <main className="min-h-screen bg-primary/30">
        {children}
      </main>
    </>
  );
};

export default Layout;
