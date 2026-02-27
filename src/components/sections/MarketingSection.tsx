import { CheckCircle2, TrendingUp } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20marketing%20digital.";

interface MarketingSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
}

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

const MarketingSection = ({ sectionRef }: MarketingSectionProps) => (
  <section id="marketing" ref={sectionRef} className="section-fade py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
          Marketing Digital
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Cresça mais rápido com <span className="text-primary">marketing profissional</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Opcional para quem quer acelerar resultados e atrair mais clientes nas redes sociais.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {marketingPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`flex flex-col p-8 rounded-2xl bg-card transition-all duration-300 shadow-sm ${
              plan.featured
                ? "glow-border relative"
                : "border border-border hover:border-primary/40"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary text-primary-foreground">
                Popular
              </span>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
            </div>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-display text-3xl font-bold text-primary">{plan.price}</span>
              <span className="text-muted-foreground text-sm">/mês</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-base text-center ${plan.featured ? "btn-cta" : "btn-secondary-outline"}`}
            >
              Quero este plano
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MarketingSection;
