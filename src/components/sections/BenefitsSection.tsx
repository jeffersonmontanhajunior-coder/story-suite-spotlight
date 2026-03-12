import { Zap, Smartphone, ShoppingCart, Clock, MessageCircle } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem, AnimatedDiv } from "@/components/AnimatedSection";

const benefits = [
  { icon: Zap, title: "Design moderno", desc: "Visual premium que transmite profissionalismo e confiança." },
  { icon: Smartphone, title: "100% responsivo", desc: "Perfeito em celulares, tablets e computadores." },
  { icon: ShoppingCart, title: "Estruturado para vendas", desc: "Cada elemento pensado para converter visitantes em clientes." },
  { icon: MessageCircle, title: "Integração WhatsApp", desc: "Seus clientes falam com você em um clique." },
  { icon: Clock, title: "Entrega rápida", desc: "Seu site pronto em até 10 dias úteis." },
];

const BenefitsSection = () => (
  <AnimatedSection id="beneficios" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <AnimatedDiv className="text-center mb-16">
        <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
          Por que a Mountain View?
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Tudo que seu negócio <span className="gold-gradient-text">precisa para vender</span>
        </h2>
      </AnimatedDiv>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((item, i) => (
          <StaggerItem key={i}>
            <div className="card-premium flex flex-col items-start gap-4 p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <item.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </AnimatedSection>
);

export default BenefitsSection;
