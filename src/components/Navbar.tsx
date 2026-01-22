import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudSun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#galeria", label: "Galeria" },
    { href: "#precos", label: "Preços" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-navy/95 backdrop-blur-md shadow-lg py-3"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-display text-2xl text-primary-foreground">
            <CloudSun className="w-4 h-4 text-gold fill-gold" />
            Vem Voar <span className="text-gold">Poços</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 md:hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5535999309770?text=Olá! Gostaria de agendar um voo!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-6 py-2 rounded-full font-semibold text-sm"
            >
              Agendar Voo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-md border-t border-white/10 px-4 pb-8 md:hidden shadow-xl"
            >
              <div className="flex flex-col gap-6 pt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-primary-foreground/90 active:text-gold font-medium text-lg block transition-none"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/5535999309770?text=Olá! Gostaria de agendar um voo!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-6 py-4 rounded-full font-semibold text-center mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Agendar Voo
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
