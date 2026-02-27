import { ArrowRight, ChevronDown, Zap, Smartphone, ShoppingCart, Clock } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

const HeroSection = ({ onScrollTo }: HeroSectionProps) => (
  <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <span className="inline-block px-4 py-1.5 mb-8 text-sm font-medium tracking-widest uppercase rounded-full border border-primary/30 text-primary">
        Mountain View
      </span>

      <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
        Crie seu site profissional e comece a{" "}
        <span className="neon-text text-primary">vender online agora.</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
        Sites modernos, rápidos e acessíveis para quem quer crescer de verdade.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-muted-foreground">
        {[
          { icon: Zap, text: "Design moderno" },
          { icon: Smartphone, text: "100% responsivo" },
          { icon: ShoppingCart, text: "Estruturado para vendas" },
          { icon: Clock, text: "Entrega em até 10 dias" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <item.icon size={16} className="text-primary" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-primary font-semibold mb-8 animate-pulse">
        ⚡ Vagas limitadas este mês.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
        >
          QUERO MEU SITE AGORA <ArrowRight size={20} />
        </a>
        <button
          onClick={() => onScrollTo("beneficios")}
          className="btn-secondary-outline"
        >
          Saiba mais <ChevronDown size={20} />
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
