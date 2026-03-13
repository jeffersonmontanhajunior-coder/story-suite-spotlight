import { Check } from "lucide-react";
import AnimatedSection, { AnimatedDiv, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

const plans = [
  {
    name: "Site Básico",
    price: "R$ 300",
    type: "pagamento único",
    featured: false,
    cta: "Começar agora",
    items: ["1 a 3 páginas", "Design profissional", "Botão WhatsApp integrado", "Formulário de contato", "100% responsivo"],
  },
  {
    name: "Site Avançado",
    price: "R$ 500",
    type: "pagamento único",
    featured: true,
    cta: "Quero o avançado",
    items: ["5 a 8 páginas", "Layout estratégico para vendas", "Galeria / portfólio", "Integração com redes sociais", "Blog simples ou newsletter", "Funcionalidades extras"],
  },
];

const SitePlansSection = () => (
  <AnimatedSection id="planos" className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <AnimatedDiv className="text-center mb-16">
        <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
          Planos
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Investimento <span className="gradient-text">acessível</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Sites profissionais com preço justo para cada fase do seu negócio.
        </p>
      </AnimatedDiv>

      <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {plans.map((plan, idx) => (
          <StaggerItem key={idx}>
            <div
              className={`flex flex-col p-8 rounded-2xl bg-card transition-all duration-500 h-full ${
                plan.featured
                  ? "glow-border relative"
                  : "border border-border hover:border-primary/30"
              } hover:-translate-y-1`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary text-primary-foreground">
                  Recomendado
                </span>
              )}
              <h3 className="font-display text-2xl font-bold mb-1 text-foreground">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display text-4xl font-bold gradient-text">{plan.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.type}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
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
                {plan.cta}
              </a>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </AnimatedSection>
);

export default SitePlansSection;
