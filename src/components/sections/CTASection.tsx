import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

interface CTASectionProps {
  sectionRef: (el: HTMLElement | null) => void;
}

const CTASection = ({ sectionRef }: CTASectionProps) => (
  <section ref={sectionRef} className="section-fade relative py-28 md:py-36 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
    </div>
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-8 neon-text">
        Seu negócio merece presença digital profissional.
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
        Converse com um especialista e comece a vender online hoje.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta mt-8 inline-flex text-lg"
      >
        <MessageCircle size={22} />
        FALAR NO WHATSAPP AGORA
      </a>
    </div>
  </section>
);

export default CTASection;
