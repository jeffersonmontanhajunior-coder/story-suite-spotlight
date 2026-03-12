import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Store, Utensils, Briefcase, Scissors, Dumbbell } from "lucide-react";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";

const businessTypes = [
  {
    id: "loja",
    label: "Loja Online",
    icon: Store,
    headline: "Moda & Estilo Premium",
    description: "Vitrine elegante com catálogo de produtos, carrinho e integração com pagamentos.",
    color: "hsl(var(--primary))",
    features: ["Catálogo de produtos", "Carrinho de compras", "Pagamento integrado"],
    mockup: {
      nav: "MODA LUXO",
      hero: "Nova Coleção Verão 2026",
      cards: ["Vestidos", "Acessórios", "Calçados"],
    },
  },
  {
    id: "restaurante",
    label: "Restaurante",
    icon: Utensils,
    headline: "Sabor & Experiência",
    description: "Cardápio digital interativo, reservas online e fotos que abrem o apetite.",
    color: "hsl(25 90% 55%)",
    features: ["Cardápio digital", "Reservas online", "Galeria de pratos"],
    mockup: {
      nav: "CHEF GOURMET",
      hero: "Uma experiência gastronômica única",
      cards: ["Entradas", "Pratos Principais", "Sobremesas"],
    },
  },
  {
    id: "advogado",
    label: "Escritório",
    icon: Briefcase,
    headline: "Advocacia & Consultoria",
    description: "Site institucional que transmite autoridade, confiança e profissionalismo.",
    color: "hsl(215 80% 55%)",
    features: ["Áreas de atuação", "Equipe profissional", "Agendamento online"],
    mockup: {
      nav: "SILVA & ASSOCIADOS",
      hero: "Excelência jurídica há mais de 20 anos",
      cards: ["Direito Civil", "Empresarial", "Trabalhista"],
    },
  },
  {
    id: "salao",
    label: "Salão / Estética",
    icon: Scissors,
    headline: "Beleza & Bem-estar",
    description: "Agendamento online, galeria de trabalhos e promoções em destaque.",
    color: "hsl(320 70% 55%)",
    features: ["Agendamento online", "Portfólio visual", "Promoções"],
    mockup: {
      nav: "STUDIO BEAUTY",
      hero: "Realce sua beleza natural",
      cards: ["Cabelo", "Unhas", "Estética"],
    },
  },
  {
    id: "academia",
    label: "Academia",
    icon: Dumbbell,
    headline: "Força & Resultado",
    description: "Planos de treino, horários de aulas e matrícula online.",
    color: "hsl(145 72% 45%)",
    features: ["Planos e preços", "Horário de aulas", "Matrícula online"],
    mockup: {
      nav: "POWER FIT",
      hero: "Transforme seu corpo, transforme sua vida",
      cards: ["Musculação", "CrossFit", "Funcional"],
    },
  },
];

const ShowcaseSection = () => {
  const [active, setActive] = useState(0);
  const current = businessTypes[active];

  return (
    <AnimatedSection className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedDiv className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Showcase Interativo
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Um site para <span className="gold-gradient-text">cada negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Selecione o tipo do seu negócio e veja como seria o seu site profissional.
          </p>
        </AnimatedDiv>

        {/* Business type selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {businessTypes.map((type, i) => (
            <button
              key={type.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              <type.icon size={18} />
              {type.label}
            </button>
          ))}
        </div>

        {/* Dynamic preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Mockup */}
            <div className="card-premium p-2 order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden bg-background border border-border">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/40" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                  </div>
                  <div className="flex-1 text-center text-xs text-muted-foreground">
                    www.{current.id}.com.br
                  </div>
                </div>
                {/* Nav */}
                <div className="px-6 py-3 flex items-center justify-between border-b border-border/50">
                  <span className="text-xs font-bold text-foreground tracking-wider">
                    {current.mockup.nav}
                  </span>
                  <div className="flex gap-4 text-[10px] text-muted-foreground">
                    <span>Sobre</span><span>Serviços</span><span>Contato</span>
                  </div>
                </div>
                {/* Hero */}
                <div
                  className="px-6 py-12 text-center"
                  style={{ background: `linear-gradient(135deg, ${current.color}15, transparent)` }}
                >
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {current.mockup.hero}
                  </h3>
                  <div
                    className="inline-block px-4 py-1.5 rounded-lg text-xs font-bold text-primary-foreground mt-2"
                    style={{ background: current.color }}
                  >
                    Saiba mais
                  </div>
                </div>
                {/* Cards */}
                <div className="grid grid-cols-3 gap-3 p-6">
                  {current.mockup.cards.map((card, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg text-center text-xs font-medium text-foreground border border-border bg-card"
                    >
                      {card}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="order-1 lg:order-2">
              <h3 className="font-display text-2xl md:text-4xl font-bold mb-4 text-foreground">
                {current.headline}
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {current.description}
              </p>
              <ul className="space-y-3 mb-8">
                {current.features.map((feat, i) => (
                  <motion.li
                    key={feat}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: current.color }}
                    />
                    <span className="text-sm">{feat}</span>
                  </motion.li>
                ))}
              </ul>
              <a
                href="https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-base"
              >
                Quero um site assim
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};

export default ShowcaseSection;
