import { Check, TrendingUp } from "lucide-react";
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20marketing%20digital.";

const marketingPlans = [
  {
    name: "Básico",
    price: "R$ 120",
    items: ["Gestão de 1 rede social", "4 posts/mês", "Identidade visual básica", "Relatório mensal"],
  },
  {
    name: "Intermediário",
    price: "R$ 300",
    featured: true,
    items: ["Gestão de 2 redes sociais", "12 posts/mês", "Stories e Reels", "Estratégia de conteúdo", "Relatório quinzenal"],
  },
  {
    name: "Avançado",
    price: "R$ 600",
    items: ["Gestão completa", "20+ posts/mês", "Copywriting estratégico", "Funil de vendas", "Suporte prioritário", "Relatório semanal"],
  },
];

const MarketingSection = () => (
  <AnimatedSection id="marketing" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <AnimatedDiv className="text-center mb-16">
        <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
          Marketing Digital
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Cresça com <span className="gradient-text">marketing profissional</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Atraia mais clientes nas redes sociais com estratégia e conteúdo de qualidade.
        </p>
      </AnimatedDiv>

      <StaggerContainer className="grid md:grid-cols-3 gap-5">
        {marketingPlans.map((plan, idx) => (
          <StaggerItem key={idx}>
            <div
              className={`flex flex-col p-7 rounded-2xl bg-card transition-all duration-500 h-full ${
                plan.featured
                  ? "glow-border relative"
                  : "border border-border hover:border-primary/30"
              } hover:-translate-y-1`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary text-primary-foreground">
                  Popular
                </span>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <TrendingUp size={18} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-3xl font-bold gradient-text">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/mês</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm text-center ${plan.featured ? "btn-cta" : "btn-outline"}`}
              >
                Quero este plano
              </a>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </AnimatedSection>
);

export default MarketingSection;
