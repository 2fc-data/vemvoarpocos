import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Wind } from "lucide-react";
import galleryImage from "@/assets/gallery-1.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Clock,
      title: "10 a 15 minutos",
      description: "de pura liberdade no ar",
    },
    {
      icon: Users,
      title: "Para todos",
      description: "Menores com autorização dos pais",
    },
    {
      icon: Wind,
      title: "Com acrobacias",
      description: "Opção de manobras radicais",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 section-divider" />
      
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={galleryImage} 
                alt="Experiência de voo duplo" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-gold text-accent-foreground px-6 py-4 rounded-xl shadow-gold font-display text-2xl"
            >
              R$ 400,00
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              A Experiência
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-2 mb-6">
              Seu Primeiro Voo
              <br />
              <span className="text-primary">Inesquecível</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              O Voo Duplo de Parapente é a experiência ideal para quem deseja ter o primeiro contato 
              com o voo livre. Decolamos da incrível <strong className="text-foreground">Serra de São Domingos</strong>, 
              em Poços de Caldas - MG, e você vai viver momentos de pura adrenalina, 
              aproveitando um visual deslumbrante enquanto sente a emoção de estar nas alturas.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-muted/50"
                >
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-display text-xl text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="#precos"
              className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-full font-semibold text-lg"
            >
              Ver Valores
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
