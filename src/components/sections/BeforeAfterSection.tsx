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
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            Comparação
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            De amador para <span className="gradient-text">profissional</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Veja a diferença que um site premium faz para o seu negócio.
          </p>
        </AnimatedDiv>

        <div className="flex justify-center mb-12">
          <div className="bg-card border border-border rounded-xl p-1 flex">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                !showAfter ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Site Comum
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                showAfter ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Site Premium
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            animate={{ opacity: showAfter ? 0.4 : 1, scale: showAfter ? 0.97 : 1 }}
            transition={{ duration: 0.4 }}
            className="card-modern p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-destructive/10 flex items-center justify-center">
                <X size={18} className="text-destructive" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Site Comum</h3>
            </div>
            <div className="rounded-xl border border-border overflow-hidden mb-6 bg-muted/30">
              <div className="p-4 border-b border-border">
                <div className="h-3 w-24 bg-muted-foreground/20 rounded mb-2" />
                <div className="flex gap-2"><div className="h-2 w-12 bg-muted-foreground/10 rounded" /><div className="h-2 w-12 bg-muted-foreground/10 rounded" /></div>
              </div>
              <div className="p-4">
                <div className="h-16 bg-muted-foreground/5 rounded mb-3 flex items-center justify-center text-xs text-muted-foreground/40">Imagem genérica</div>
                <div className="space-y-2"><div className="h-2 w-full bg-muted-foreground/10 rounded" /><div className="h-2 w-3/4 bg-muted-foreground/10 rounded" /></div>
              </div>
            </div>
            <ul className="space-y-2.5">
              {["Design desatualizado", "Não funciona no celular", "Sem estratégia de vendas", "Carregamento lento"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground text-sm"><X size={13} className="text-destructive flex-shrink-0" />{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            animate={{ opacity: showAfter ? 1 : 0.4, scale: showAfter ? 1 : 0.97 }}
            transition={{ duration: 0.4 }}
            className={`p-6 md:p-8 rounded-2xl transition-all duration-500 ${showAfter ? "glow-border bg-card" : "card-modern"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Check size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Site Premium</h3>
            </div>
            <div className="rounded-xl border border-primary/20 overflow-hidden mb-6 bg-card">
              <div className="p-4 border-b border-primary/10 bg-primary/5">
                <div className="h-3 w-24 bg-primary/30 rounded mb-2" />
                <div className="flex gap-2"><div className="h-2 w-12 bg-primary/20 rounded" /><div className="h-2 w-16 bg-primary/30 rounded" /></div>
              </div>
              <div className="p-4 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="h-16 bg-primary/10 rounded mb-3 flex items-center justify-center text-xs text-primary/60 font-medium border border-primary/10">Hero profissional</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-7 bg-primary/10 rounded border border-primary/10" />
                  <div className="h-7 bg-primary/10 rounded border border-primary/10" />
                  <div className="h-7 bg-primary/15 rounded border border-primary/15" />
                </div>
              </div>
            </div>
            <ul className="space-y-2.5">
              {["Design moderno e premium", "100% responsivo", "Otimizado para conversão", "Carregamento ultrarrápido"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground text-sm"><Check size={13} className="text-primary flex-shrink-0" />{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <AnimatedDiv delay={0.3} className="text-center mt-10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta text-sm">
            Quero um site premium <ArrowRight size={16} />
          </a>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
};

export default BeforeAfterSection;
