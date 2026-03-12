import { useState } from "react";
import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Quero%20transformar%20meu%20site%20em%20algo%20profissional.";

const BeforeAfterSection = () => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <AnimatedSection className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedDiv className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Antes & Depois
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            De amador para <span className="gold-gradient-text">profissional</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Veja a diferença que um site premium faz para o seu negócio.
          </p>
        </AnimatedDiv>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-card border border-border rounded-xl p-1 flex">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                !showAfter
                  ? "bg-muted text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Site Comum
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                showAfter
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Site Premium ✨
            </button>
          </div>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before card */}
          <motion.div
            animate={{ opacity: showAfter ? 0.5 : 1, scale: showAfter ? 0.97 : 1 }}
            transition={{ duration: 0.4 }}
            className="card-premium p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X size={20} className="text-destructive" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Site Comum</h3>
            </div>

            {/* Mini mockup - bad */}
            <div className="rounded-xl border border-border overflow-hidden mb-6 bg-muted/30">
              <div className="p-4 border-b border-border">
                <div className="h-3 w-24 bg-muted-foreground/20 rounded mb-2" />
                <div className="flex gap-2">
                  <div className="h-2 w-12 bg-muted-foreground/10 rounded" />
                  <div className="h-2 w-12 bg-muted-foreground/10 rounded" />
                  <div className="h-2 w-12 bg-muted-foreground/10 rounded" />
                </div>
              </div>
              <div className="p-4">
                <div className="h-20 bg-muted-foreground/5 rounded mb-3 flex items-center justify-center text-xs text-muted-foreground/40">
                  Imagem genérica
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-muted-foreground/10 rounded" />
                  <div className="h-2 w-3/4 bg-muted-foreground/10 rounded" />
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Design desatualizado",
                "Não funciona no celular",
                "Sem estratégia de vendas",
                "Carregamento lento",
                "Sem integração WhatsApp",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <X size={14} className="text-destructive flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After card */}
          <motion.div
            animate={{ opacity: showAfter ? 1 : 0.5, scale: showAfter ? 1 : 0.97 }}
            transition={{ duration: 0.4 }}
            className={`p-6 md:p-8 rounded-2xl transition-all duration-500 ${
              showAfter ? "glow-border bg-card" : "card-premium"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Check size={20} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Site Premium</h3>
            </div>

            {/* Mini mockup - good */}
            <div className="rounded-xl border border-primary/20 overflow-hidden mb-6 bg-card">
              <div className="p-4 border-b border-primary/10 bg-primary/5">
                <div className="h-3 w-24 bg-primary/30 rounded mb-2" />
                <div className="flex gap-2">
                  <div className="h-2 w-12 bg-primary/20 rounded" />
                  <div className="h-2 w-12 bg-primary/20 rounded" />
                  <div className="h-2 w-16 bg-accent/40 rounded" />
                </div>
              </div>
              <div className="p-4" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.05), transparent)" }}>
                <div className="h-20 bg-primary/10 rounded mb-3 flex items-center justify-center text-xs text-primary/60 font-medium border border-primary/10">
                  Hero profissional
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 bg-primary/10 rounded border border-primary/10" />
                  <div className="h-8 bg-primary/10 rounded border border-primary/10" />
                  <div className="h-8 bg-accent/20 rounded border border-accent/20" />
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Design moderno e premium",
                "100% responsivo",
                "Otimizado para conversão",
                "Carregamento ultrarrápido",
                "WhatsApp integrado",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground text-sm">
                  <Check size={14} className="text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <AnimatedDiv delay={0.3} className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-base"
          >
            Quero um site premium <ArrowRight size={20} />
          </a>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
};

export default BeforeAfterSection;
