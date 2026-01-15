const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-secondary/60 backdrop-blur-md">
      <div className="container mx-auto py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Germano Papetti
      </div>
    </footer>
  );
};

export default Footer;
