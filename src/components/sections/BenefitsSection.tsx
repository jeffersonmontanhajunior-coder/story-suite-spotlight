import { Zap, Smartphone, ShoppingCart, Clock, MessageCircle, Shield } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem, AnimatedDiv } from "@/components/AnimatedSection";

const benefits = [
  { icon: Zap, title: "Design moderno", desc: "Visual premium que transmite profissionalismo e confiança." },
  { icon: Smartphone, title: "100% responsivo", desc: "Perfeito em celulares, tablets e computadores." },
  { icon: ShoppingCart, title: "Focado em vendas", desc: "Cada elemento pensado para converter visitantes em clientes." },
  { icon: MessageCircle, title: "WhatsApp integrado", desc: "Seus clientes falam com você em um clique." },
  { icon: Clock, title: "Entrega rápida", desc: "Seu site pronto em até 10 dias úteis." },
  { icon: Shield, title: "Suporte dedicado", desc: "Acompanhamento contínuo para manter tudo funcionando." },
];

const BenefitsSection = () => (
  <AnimatedSection id="beneficios" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <AnimatedDiv className="grid md:grid-cols-[1fr_1fr] gap-8 items-end mb-16">
        <div className="text-left">
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            Vantagens
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-0 leading-[1.05]">
            Por que escolher a{" "}
            <span className="gradient-text">Mountain Dev</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-left md:pb-2">
          Tecnologia, design e estratégia trabalhando juntos para transformar seu site
          em uma ferramenta de crescimento — não apenas um cartão de visitas online.
        </p>
      </AnimatedDiv>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((item, i) => (
          <StaggerItem key={i}>
            <div className="card-modern group p-6 h-full">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </AnimatedSection>
);

export default BenefitsSection;
