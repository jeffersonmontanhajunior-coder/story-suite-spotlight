import { Check, Shield } from "lucide-react";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20manuten%C3%A7%C3%A3o%20mensal.";

const MaintenanceSection = () => (
  <AnimatedSection className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <AnimatedDiv>
        <div className="card-modern p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Shield size={22} />
              </div>
              <div>
                <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">Manutenção</span>
                <h3 className="font-display text-xl font-bold text-foreground">Mensal</h3>
              </div>
            </div>
            <div className="text-right">
              <span className="font-display text-3xl font-bold gradient-text">R$ 100</span>
              <span className="text-muted-foreground text-sm">/mês</span>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3 mb-6">
            {["Atualizações de conteúdo", "Backup do site", "Pequenas alterações", "Suporte dedicado"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm text-center w-full">
            Adicionar manutenção
          </a>
        </div>
      </AnimatedDiv>
    </div>
  </AnimatedSection>
);

export default MaintenanceSection;
