import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Tenho%20uma%20ideia%20e%20gostaria%20de%20um%20plano%20sob%20medida.";

interface CustomSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
}

const CustomSection = ({ sectionRef }: CustomSectionProps) => (
  <section ref={sectionRef} className="section-fade py-20 px-6">
    <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-2xl bg-card border border-border">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
        Tem uma ideia <span className="text-primary">diferente?</span>
      </h2>
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        Fale conosco e montamos um plano sob medida para o seu negócio. Cada projeto é único e merece atenção especial.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary-outline text-base inline-flex"
      >
        <MessageCircle size={20} />
        Negociação personalizada
      </a>
    </div>
  </section>
);

export default CustomSection;
