import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";

const faqs = [
  {
    q: "Vocês trabalham com WordPress/Elementor ou só código?",
    a: "Trabalhamos com os dois: sites institucionais e lojas geralmente em WordPress/Elementor, e projetos mais robustos ou landing pages de alta performance em código (React/Vercel).",
  },
  {
    q: "Vocês também cuidam de tráfego pago (Meta Ads)?",
    a: "Sim. Além do site, fazemos gestão completa de campanhas no Meta Ads (Instagram/Facebook), incluindo configuração de pixel, criativos e otimização de orçamento.",
  },
  {
    q: "Depois que o site fica pronto, eu consigo editar sozinho?",
    a: "Sim, se for em WordPress/Elementor você recebe acesso total e pode editar textos e imagens sem depender de programador. Explicamos o básico antes de entregar.",
  },
  {
    q: "Quanto tempo leva um projeto do início ao ar?",
    a: "Depende da complexidade, mas a maioria dos sites fica pronta entre 7 e 15 dias úteis, incluindo ajustes solicitados pelo cliente.",
  },
  {
    q: "Vocês cuidam de domínio e hospedagem?",
    a: "Sim, ajudamos a configurar tudo — domínio, hospedagem e certificado de segurança (SSL) — para o site ir ao ar sem dor de cabeça.",
  },
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
