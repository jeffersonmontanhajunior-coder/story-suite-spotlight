import { ArrowRight, ChevronDown, Zap, Smartphone, ShoppingCart, Clock } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

const HeroSection = ({ onScrollTo }: HeroSectionProps) => (
  <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[200px]" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="inline-block px-5 py-2 mb-8 text-sm font-medium tracking-widest uppercase rounded-full border border-primary/30 text-primary bg-primary/5"
      >
        Mountain View
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
      >
        Crie seu site profissional e comece a{" "}
        <span className="gold-gradient-text">vender online agora.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed"
      >
        Sites modernos, rápidos e acessíveis para quem quer crescer de verdade.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-muted-foreground"
      >
        {[
          { icon: Zap, text: "Design moderno" },
          { icon: Smartphone, text: "100% responsivo" },
          { icon: ShoppingCart, text: "Estruturado para vendas" },
          { icon: Clock, text: "Entrega em até 10 dias" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <item.icon size={16} className="text-primary" />
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-sm text-primary font-semibold mb-8 animate-pulse"
      >
        ⚡ Vagas limitadas este mês.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
        >
          QUERO MEU SITE AGORA <ArrowRight size={20} />
        </a>
        <button
          onClick={() => onScrollTo("beneficios")}
          className="btn-secondary-outline"
        >
          Saiba mais <ChevronDown size={20} />
        </button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
