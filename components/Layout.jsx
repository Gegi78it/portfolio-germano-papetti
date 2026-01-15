import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main className="min-h-screen pt-[100px]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
