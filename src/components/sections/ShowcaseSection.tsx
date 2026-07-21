import { useState } from "react";
import { motion } from "framer-motion";
import { Store, Utensils, Briefcase, Scissors, Dumbbell } from "lucide-react";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";

const businessTypes = [
  {
    id: "loja",
    label: "Loja Online",
    icon: Store,
    headline: "Moda & Estilo",
    description: "Vitrine elegante com catálogo de produtos, carrinho e integração com pagamentos.",
    features: ["Catálogo de produtos", "Carrinho de compras", "Pagamento integrado"],
  },
  {
    id: "restaurante",
    label: "Restaurante",
    icon: Utensils,
    headline: "Sabor & Experiência",
    description: "Cardápio digital interativo, reservas online e fotos que abrem o apetite.",
    features: ["Cardápio digital", "Reservas online", "Galeria de pratos"],
  },
  {
    id: "advogado",
    label: "Escritório",
    icon: Briefcase,
    headline: "Advocacia & Consultoria",
    description: "Site institucional que transmite autoridade, confiança e profissionalismo.",
    features: ["Áreas de atuação", "Equipe profissional", "Agendamento online"],
  },
  {
    id: "salao",
    label: "Salão / Estética",
    icon: Scissors,
    headline: "Beleza & Bem-estar",
    description: "Agendamento online, galeria de trabalhos e promoções em destaque.",
    features: ["Agendamento online", "Portfólio visual", "Promoções"],
  },
  {
    id: "academia",
    label: "Academia",
    icon: Dumbbell,
    headline: "Força & Resultado",
    description: "Site moderno e impactante para academias e box de treino. Planos, modalidades e CTA para matrícula.",
    features: ["Planos e preços", "Modalidades de treino", "CTA para WhatsApp"],
  },
];

const ShowcaseSection = () => {
  const [active, setActive] = useState(0);
  const current = businessTypes[active];

  return (
    <AnimatedSection className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedDiv className="text-center mb-16">
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            Showcase
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Um site para <span className="gradient-text">cada negócio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Selecione o tipo do seu negócio e veja como seria o seu site.
          </p>
        </AnimatedDiv>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {businessTypes.map((type, i) => (
            <button
              key={type.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              <type.icon size={16} />
              <span className="hidden sm:inline">{type.label}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <current.icon size={36} strokeWidth={1.25} />
          </div>

          <h3 className="font-display text-2xl md:text-4xl font-bold mb-4 text-foreground">{current.headline}</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">{current.description}</p>

          <ul className="flex flex-wrap justify-center gap-3 mb-10">
            {current.features.map((feat, i) => (
              <motion.li
                key={feat}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.15 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-foreground text-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{feat}</span>
              </motion.li>
            ))}
          </ul>

          <a
            href={`https://wa.me/5511988135910?text=Ol%C3%A1!%20Quero%20um%20site%20como%20esse%20modelo%20de%20${encodeURIComponent(current.label)}%20aplicado%20ao%20meu%20neg%C3%B3cio.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-sm"
          >
            Ver esse modelo aplicado ao meu negócio
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ShowcaseSection;
