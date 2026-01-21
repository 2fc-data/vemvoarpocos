import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Video, Heart } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg";

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Equipamentos certificados e manutenção rigorosa para sua tranquilidade.",
    },
    {
      icon: Award,
      title: "Instrutores Certificados",
      description: "Profissionais habilitados pela CBVL seguindo normas da ANAC.",
    },
    {
      icon: Video,
      title: "Registro em Vídeo",
      description: "Opções de filmagem em HD e 360° para reviver a experiência.",
    },
    {
      icon: Heart,
      title: "Experiência Única",
      description: "Adrenalina, beleza natural e momentos inesquecíveis.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{ backgroundImage: `url(${gallery3})` }}
      />
      <div className="absolute inset-0 bg-navy/75" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mt-2">
            Por Que Voar <span className="text-gold">Conosco?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-primary-foreground/15 hover:border-gold/50 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                  <benefit.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-primary-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
