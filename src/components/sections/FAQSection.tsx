import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";

const faqs = [
  {
    q: "Quanto tempo leva para criar meu site?",
    a: "O prazo médio é de 7 a 10 dias úteis, dependendo da complexidade do projeto. Sites básicos podem ficar prontos em menos de uma semana.",
  },
  {
    q: "Preciso ter conhecimento técnico?",
    a: "Não! Cuidamos de tudo para você — do design ao código, da hospedagem ao domínio. Você só precisa nos contar sobre o seu negócio.",
  },
  {
    q: "O site funciona no celular?",
    a: "Sim, 100%. Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência perfeita em qualquer dispositivo.",
  },
  {
    q: "O que está incluso na manutenção mensal?",
    a: "Atualizações de conteúdo, backup regular, pequenas alterações de layout, suporte técnico dedicado e monitoramento de performance.",
  },
  {
    q: "Posso alterar o site depois de pronto?",
    a: "Claro! Com nosso plano de manutenção, você pode solicitar alterações sempre que precisar. Também oferecemos atualizações avulsas.",
  },
  {
    q: "Vocês cuidam da hospedagem e domínio?",
    a: "Sim, podemos cuidar de tudo. A hospedagem e o domínio são configurados e gerenciados por nós para que você não se preocupe com nada.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Trabalhamos com pagamento único para a criação do site. A manutenção é cobrada mensalmente. Aceitamos PIX, transferência e cartão.",
  },
];

const FAQSection = () => (
  <AnimatedSection className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <AnimatedDiv className="text-center mb-16">
        <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
          Dúvidas Frequentes
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Perguntas <span className="gold-gradient-text">respondidas</span>
        </h2>
      </AnimatedDiv>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border bg-card rounded-xl px-6 overflow-hidden data-[state=open]:border-primary/30 transition-colors duration-300"
          >
            <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </AnimatedSection>
);

export default FAQSection;
