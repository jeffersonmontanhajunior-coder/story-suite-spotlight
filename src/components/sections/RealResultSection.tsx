import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Quero%20um%20site%20r%C3%A1pido%20e%20otimizado%20como%20o%20da%20Salva%20Roupa.";

const RealResultSection = () => (
  <AnimatedSection className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <AnimatedDiv className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-center mb-14">
        <div>
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            Case real
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Resultado real, <span className="gradient-text">não promessa vazia</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Otimizamos o site da Salva Roupa (salvaroupa.com.br) e saímos de 47 para 100 pontos no Google
            PageSpeed Insights — mobile e SEO no topo. Site mais rápido, mais visível no Google e pronto para converter.
          </p>
        </div>
        <div className="hidden md:block h-40 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent" aria-hidden />
      </AnimatedDiv>

      <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-modern p-8 text-center"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Antes</span>
          <div className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-muted-foreground/70 mb-2 leading-none">47</div>
          <span className="text-sm text-muted-foreground">PageSpeed mobile</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="p-8 text-center rounded-2xl border border-primary/40 bg-primary/5"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 flex items-center justify-center gap-2">
            <TrendingUp size={14} /> Depois
          </span>
          <div className="font-display text-5xl sm:text-6xl md:text-8xl font-bold gradient-text mb-2 leading-none pb-1">100</div>
          <span className="text-sm text-foreground">PageSpeed mobile</span>
        </motion.div>
      </div>

      <div className="text-center text-sm text-muted-foreground mb-10">
        Performance mobile · SEO · Carregamento
      </div>

      {/* Espaço reservado para o print real do PageSpeed */}
      <div
        className="w-full rounded-2xl border border-dashed border-border bg-card/40 flex items-center justify-center text-muted-foreground text-sm mb-10"
        style={{ aspectRatio: "16 / 9" }}
      >
        Espaço reservado para o print real do Google PageSpeed
      </div>

      <AnimatedDiv delay={0.2} className="text-center">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta text-sm">
          Quero uma proposta <ArrowRight size={16} />
        </a>
      </AnimatedDiv>
    </div>
  </AnimatedSection>
);

export default RealResultSection;