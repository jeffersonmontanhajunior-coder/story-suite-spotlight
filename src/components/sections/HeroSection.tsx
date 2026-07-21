import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

const HeroSection = ({ onScrollTo }: HeroSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Parallax background elements */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[200px]" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div className="relative z-10 max-w-5xl mx-auto text-center" style={{ opacity }}>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.2em] uppercase rounded-full border border-primary/20 text-primary bg-primary/5"
        >
          Desenvolvimento Web Profissional
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          Criamos sites que{" "}
          <span className="gradient-text">convertem visitantes</span>{" "}
          em clientes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Sites modernos, rápidos e estratégicos para negócios que querem crescer de verdade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta">
            Começar meu projeto <ArrowRight size={18} />
          </a>
          <button onClick={() => onScrollTo("beneficios")} className="btn-outline">
            Saiba mais <ChevronDown size={18} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
