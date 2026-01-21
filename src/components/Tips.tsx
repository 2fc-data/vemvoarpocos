import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Footprints, Shirt, Sun, Glasses } from "lucide-react";

const Tips = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tips = [
    {
      icon: Footprints,
      title: "Calçado Fechado",
      description: "Para maior segurança e conforto durante o voo",
    },
    {
      icon: Shirt,
      title: "Agasalho",
      description: "Se o tempo estiver mais frio",
    },
    {
      icon: Glasses,
      title: "Óculos Escuros",
      description: "Proteja seus olhos e aproveite o visual",
    },
    {
      icon: Sun,
      title: "Protetor Solar",
      description: "Garanta proteção contra os raios UV",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Prepare-se
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-2">
            Dicas Para <span className="text-primary">o Voo</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Para aproveitar ao máximo sua experiência, siga estas recomendações
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center card-elevated"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <tip.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{tip.title}</h3>
              <p className="text-muted-foreground text-sm">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
