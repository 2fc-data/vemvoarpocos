import { motion } from "framer-motion";
import { CloudSun, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <CloudSun className="w-4 h-4 text-gold fill-gold" />
            <h3 className="font-display text-2xl text-primary-foreground">
              Vem Voar <span className="text-gold">Poços</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Voo Duplo <span className="text-gold">Parapente</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="https://www.instagram.com/vemvoarpocosdecaldas/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-navy transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/vemvoarpocoscaldas/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-navy transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-primary-foreground/50 text-sm flex items-center gap-1"
          >
            © {currentYear} • Feito por <a href="mailto:2fc.data@gmail.com" className="hover:underline">2fc.data</a>
          </motion.p>          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
