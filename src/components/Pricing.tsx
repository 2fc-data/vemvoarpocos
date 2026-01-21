import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Video, Camera } from "lucide-react";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const packages = [
    {
      name: "Voo Duplo",
      price: "400",
      description: "A experiência completa de voo livre",
      features: [
        "10 a 15 minutos de voo",
        "Instrutor certificado CBVL",
        "Equipamento de segurança completo",
        "Opção de acrobacias",
        "Decolagem da Serra de São Domingos",
      ],
      icon: null,
      highlighted: true,
    },
    {
      name: "Filmagem HD",
      price: "100",
      description: "Registre cada momento em alta definição",
      features: [
        "Câmera GoPro HD",
        "Ângulos incríveis do voo",
        "Arquivo digital incluso",
        "Compartilhe nas redes sociais",
      ],
      icon: Video,
      highlighted: false,
    },
    {
      name: "Filmagem 360°",
      price: "200",
      description: "Experiência imersiva completa",
      features: [
        "Câmera GoPro Max 360",
        "Edição profissional inclusa",
        "Visualização panorâmica",
        "Arquivo de alta qualidade",
      ],
      icon: Camera,
      highlighted: false,
    },
  ];

  const paymentMethods = [
    "Dinheiro",
    "PIX",
    "Cartão (parcelamos em até 12x)",
  ];

  return (
    <section id="precos" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Investimento
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-2">
            Valores e <span className="text-primary">Pacotes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                pkg.highlighted
                  ? "bg-linear-to-br from-primary to-sky-dark text-primary-foreground shadow-elevated"
                  : "bg-card border border-border card-elevated"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                {pkg.icon && (
                  <pkg.icon className={`w-12 h-12 mx-auto mb-4 ${pkg.highlighted ? "text-gold" : "text-primary"}`} />
                )}
                <h3 className={`font-display text-3xl mb-2 ${pkg.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>
              </div>

              <div className="text-center mb-6">
                <span className={`text-sm ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>R$</span>
                <span className={`font-display text-5xl ${pkg.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                  {pkg.price}
                </span>
                <span className={`text-sm ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>,00</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 shrink-0 ${pkg.highlighted ? "text-gold" : "text-primary"}`} />
                    <span className={pkg.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5535999309770?text=Olá! Gostaria de saber mais sobre o pacote de voo!"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                  pkg.highlighted
                    ? "btn-gold"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Quero Voar!
              </a>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">Formas de pagamento:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="px-4 py-2 bg-muted rounded-full text-sm text-foreground"
              >
                {method}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
