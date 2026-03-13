import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";

const faqs = [
  { q: "Quanto tempo leva para criar meu site?", a: "O prazo médio é de 7 a 10 dias úteis, dependendo da complexidade do projeto." },
  { q: "Preciso ter conhecimento técnico?", a: "Não! Cuidamos de tudo para você — do design ao código, da hospedagem ao domínio." },
  { q: "O site funciona no celular?", a: "Sim, 100%. Todos os nossos sites são desenvolvidos com design responsivo." },
  { q: "O que está incluso na manutenção mensal?", a: "Atualizações de conteúdo, backup regular, pequenas alterações de layout, suporte técnico dedicado e monitoramento de performance." },
  { q: "Posso alterar o site depois de pronto?", a: "Claro! Com nosso plano de manutenção, você pode solicitar alterações sempre que precisar." },
  { q: "Vocês cuidam da hospedagem e domínio?", a: "Sim, configuramos e gerenciamos tudo para que você não se preocupe." },
  { q: "Como funciona o pagamento?", a: "Pagamento único para criação. Manutenção cobrada mensalmente. Aceitamos PIX, transferência e cartão." },
];

const FAQSection = () => (
  <AnimatedSection id="faq" className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <AnimatedDiv className="text-center mb-16">
        <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
          FAQ
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Dúvidas <span className="gradient-text">frequentes</span>
        </h2>
      </AnimatedDiv>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border bg-card rounded-xl px-6 overflow-hidden data-[state=open]:border-primary/20 transition-colors duration-300"
          >
            <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5 text-sm">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </AnimatedSection>
);

export default FAQSection;
