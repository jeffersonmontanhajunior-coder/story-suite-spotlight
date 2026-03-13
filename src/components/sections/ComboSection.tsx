import { Check, Sparkles } from "lucide-react";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20o%20combo%20Comece%20Online.";

const ComboSection = () => (
  <AnimatedSection className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <AnimatedDiv>
        <div className="p-8 md:p-12 rounded-2xl bg-card glow-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles size={22} />
              </div>
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Combo Estratégico</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">Comece Online</h3>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Site Básico + Manutenção mensal. Tudo que você precisa para começar sua presença digital.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Investimento inicial</p>
                <p className="font-display text-2xl font-bold gradient-text">R$ 300</p>
                <p className="text-xs text-muted-foreground">pagamento único</p>
              </div>
              <div className="p-5 rounded-xl bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Manutenção mensal</p>
                <p className="font-display text-2xl font-bold gradient-text">R$ 100</p>
                <p className="text-xs text-muted-foreground">a partir do 2º mês</p>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {["Site profissional completo", "Botão WhatsApp", "Atualizações mensais", "Backup e suporte"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <Check size={14} className="text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta text-sm text-center w-full">
              Quero o Combo Comece Online
            </a>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  </AnimatedSection>
);

export default ComboSection;
