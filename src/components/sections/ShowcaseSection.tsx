import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Store, Utensils, Briefcase, Scissors, Dumbbell, ImageIcon } from "lucide-react";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";
import academiaAsset from "@/assets/performance-academia-website.png.asset.json";
import salaoAsset from "@/assets/lara-beautiful-salao-estetica.png.asset.json";
import restauranteAsset from "@/assets/restaurante-sabor-experiencia.png.asset.json";


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
    image: salaoAsset.url,
    imageAlt: "Site de salão de beleza Lara Beautiful com layout elegante em tons de rosa e bege, hero com modelo e seções de serviços",
  },

  {
    id: "academia",
    label: "Academia",
    icon: Dumbbell,
    headline: "Força & Resultado",
    description: "Site moderno e impactante para academias e box de treino. Planos, modalidades e CTA para matrícula.",
    features: ["Planos e preços", "Modalidades de treino", "CTA para WhatsApp"],
    image: academiaAsset.url,
    imageAlt: "Site de academia Performance com layout escuro, verde neon e destaque para planos de treino",
  },
];

const ShowcaseSection = () => {
  const [active, setActive] = useState(3);
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

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Área reservada para screenshot real do projeto */}
            <div className="order-2 lg:order-1">
              {current.image ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full rounded-2xl border border-border bg-card/40 overflow-hidden"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <img
                    src={current.image}
                    alt={current.imageAlt || `Screenshot do projeto ${current.label}`}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
              ) : (
                <div
                  className="w-full rounded-2xl border border-dashed border-border bg-card/40 flex flex-col items-center justify-center text-muted-foreground text-sm gap-3 p-6 text-center"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <ImageIcon size={28} className="opacity-40" />
                  <span>Espaço reservado para screenshot real do projeto ({current.label})</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="order-1 lg:order-2">
              <h3 className="font-display text-2xl md:text-4xl font-bold mb-4 text-foreground">{current.headline}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{current.description}</p>
              <ul className="space-y-3 mb-8">
                {current.features.map((feat, i) => (
                  <motion.li
                    key={feat}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.15 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm">{feat}</span>
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
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};

export default ShowcaseSection;
