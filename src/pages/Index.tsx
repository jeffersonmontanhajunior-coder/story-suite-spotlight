import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import {
  Monitor,
  Smartphone,
  MessageCircle,
  Instagram,
  Zap,
  FileText,
  Mail,
  MapPin,
  Search,
  Building2,
  ShoppingBag,
  Dumbbell,
  Church,
  Wrench,
  User,
  Store,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

const benefits = [
  { icon: Monitor, label: "Design profissional" },
  { icon: Smartphone, label: "Funciona perfeitamente no celular" },
  { icon: MessageCircle, label: "Botão direto para WhatsApp" },
  { icon: Instagram, label: "Integração com Instagram" },
  { icon: Zap, label: "Carregamento rápido" },
  { icon: FileText, label: "Página de serviços personalizada" },
  { icon: Mail, label: "Formulário de contato" },
  { icon: MapPin, label: "Mapa de localização" },
  { icon: Search, label: "Estrutura otimizada para o Google" },
];

const audiences = [
  { icon: Building2, label: "Empresas" },
  { icon: ShoppingBag, label: "Lojas" },
  { icon: Dumbbell, label: "Academias" },
  { icon: Church, label: "Igrejas" },
  { icon: Wrench, label: "Prestadores de serviço" },
  { icon: User, label: "Profissionais autônomos" },
  { icon: Store, label: "Pequenos negócios" },
];

const differentials = [
  "Atendimento direto",
  "Desenvolvimento ágil",
  "Suporte durante todo o processo",
  "Sites modernos e personalizados",
];

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    sectionsRef.current[i] = el;
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Header />

      {/* 1 — Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/5 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-8 text-sm font-medium tracking-widest uppercase rounded-full border border-primary/30 text-primary">
            Mountain Dev
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Transforme sua presença online com um{" "}
            <span className="neon-text text-primary">site profissional.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A Mountain Dev desenvolve sites modernos, rápidos e estratégicos
            para atrair clientes e fortalecer sua marca na internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta">
              SOLICITAR MEU SITE <ArrowRight size={20} />
            </a>
            <button onClick={scrollToAbout} className="btn-secondary-outline">
              Saiba mais <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 2 — About */}
      <section
        id="about"
        ref={setRef(0)}
        className="section-fade py-24 md:py-32 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Sobre nós
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
            Quem é a <span className="text-primary">MV</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            A Mountain Dev é especializada na criação de sites profissionais para
            empresas, autônomos e negócios locais que desejam crescer e
            conquistar mais clientes através da internet.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Criamos sites personalizados, modernos e pensados estrategicamente
            para gerar autoridade e aumentar sua presença online.
          </p>
        </div>
      </section>

      {/* 3 — Benefits */}
      <section id="benefits" ref={setRef(1)} className="section-fade py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Benefícios
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              O que seu site terá
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <b.icon size={22} />
                </div>
                <span className="text-foreground font-medium text-base pt-2">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Target Audience */}
      <section ref={setRef(2)} className="section-fade py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Público
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Para quem desenvolvemos sites?
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {audiences.map((a, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <a.icon size={24} />
                </div>
                <span className="font-medium text-foreground">{a.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xl md:text-2xl font-semibold text-primary mt-14 neon-text">
            Se você quer vender mais, precisa estar presente na internet.
          </p>
        </div>
      </section>

      {/* 5 — Differentials */}
      <section ref={setRef(3)} className="section-fade py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Diferencial
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-10">
            Por que escolher a Mountain Dev?
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {differentials.map((d, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-xl glow-border bg-card"
              >
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{d}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground">
            Você informa sua necessidade, e nós transformamos em um site
            profissional.
          </p>
        </div>
      </section>

      {/* 6 — Impact CTA */}
      <section
        ref={setRef(4)}
        className="section-fade relative py-28 md:py-36 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-secondary/10" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-8 neon-text">
            Seu site pode ser sua melhor ferramenta de vendas.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
            Mais presença. Mais autoridade. Mais clientes.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta mt-8 inline-flex"
          >
            CRIAR MEU SITE AGORA <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* 7 — Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>Mountain Dev © 2026 — Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:contato@mountaindev.com"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppFAB />
    </div>
  );
};

export default Index;
