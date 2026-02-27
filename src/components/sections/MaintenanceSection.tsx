import { CheckCircle2, Shield } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20manuten%C3%A7%C3%A3o%20mensal.";

interface MaintenanceSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
}

const MaintenanceSection = ({ sectionRef }: MaintenanceSectionProps) => (
  <section ref={sectionRef} className="section-fade py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
          Manutenção Mensal
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Seu site sempre <span className="text-primary">atualizado</span>
        </h2>
      </div>

      <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">Manutenção</h3>
              <p className="text-sm text-muted-foreground">Tudo funcionando perfeitamente</p>
            </div>
          </div>
          <div className="text-right">
            <span className="font-display text-3xl font-bold text-primary">R$ 100</span>
            <span className="text-muted-foreground text-sm">/mês</span>
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3 mb-6">
          {["Atualizações de conteúdo", "Backup do site", "Pequenas alterações", "Suporte dedicado"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-foreground">
              <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground italic mb-6">
          "Mantenha seu site sempre atualizado e funcionando perfeitamente."
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary-outline text-base text-center w-full"
        >
          Adicionar manutenção
        </a>
      </div>
    </div>
  </section>
);

export default MaintenanceSection;
