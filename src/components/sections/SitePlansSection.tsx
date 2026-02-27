import { CheckCircle2 } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

interface SitePlansSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
}

const plans = [
  {
    name: "Site Básico",
    price: "R$ 300",
    type: "pagamento único",
    featured: false,
    cta: "Começar agora",
    items: [
      "1 a 3 páginas",
      "Design profissional",
      "Botão WhatsApp integrado",
      "Formulário de contato",
      "100% responsivo",
    ],
  },
  {
    name: "Site Avançado",
    price: "R$ 500",
    type: "pagamento único",
    featured: true,
    cta: "Quero o avançado",
    items: [
      "5 a 8 páginas",
      "Layout estratégico para vendas",
      "Galeria / portfólio",
      "Integração com redes sociais",
      "Blog simples ou newsletter",
      "Funcionalidades extras",
    ],
  },
];

const SitePlansSection = ({ sectionRef }: SitePlansSectionProps) => (
  <section id="planos" ref={sectionRef} className="section-fade py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
          Criação de Sites
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Investimento <span className="text-primary">acessível</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Sites profissionais com preço justo. Escolha o que faz sentido para o momento do seu negócio.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {plans.map((plan, idx) => (
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
                Recomendado
              </span>
            )}
            <h3 className="font-display text-2xl font-bold mb-1 text-foreground">{plan.name}</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">{plan.type}</p>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
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
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SitePlansSection;
