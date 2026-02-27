import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Zap,
  Smartphone,
  Users,
  Search,
  Shield,
  BarChart3,
  Globe,
  MessageCircle,
  TrendingUp,
  Eye,
  XCircle,
  Lightbulb,
  Target,
} from "lucide-react";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Header />

      {/* 1 — Hero */}
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
            Pare de perder clientes por não ter um{" "}
            <span className="neon-text text-primary">site profissional.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Seu negócio precisa vender todos os dias — e nós criamos o site
            certo para isso.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
            {[
              { icon: Zap, text: "Design moderno" },
              { icon: Smartphone, text: "Site rápido e responsivo" },
              { icon: Users, text: "Estruturado para gerar clientes" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon size={16} className="text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              SOLICITAR ORÇAMENTO GRATUITO <ArrowRight size={20} />
            </a>
            <button
              onClick={() => scrollTo("problema")}
              className="btn-secondary-outline"
            >
              Saiba mais <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 2 — Problema */}
      <section
        id="problema"
        ref={setRef(0)}
        className="section-fade py-24 md:py-32 px-6"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              O problema
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Seu cliente está te procurando…{" "}
              <span className="text-primary">mas não te encontra.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Enquanto você depende de indicação, seus concorrentes estão sendo
              encontrados no Google todos os dias. Empresas sem presença digital
              perdem vendas, credibilidade e oportunidades de crescimento.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sem um site profissional, seu negócio se torna invisível para
              quem mais importa: o cliente que está pronto para comprar.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: XCircle, text: "Clientes procuram e não te encontram" },
              { icon: Eye, text: "Concorrentes aparecem no seu lugar" },
              { icon: TrendingUp, text: "Vendas perdidas todos os dias" },
              { icon: Shield, text: "Falta de credibilidade online" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Solução */}
      <section ref={setRef(1)} className="section-fade py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            {[
              { icon: Globe, label: "Autoridade digital" },
              { icon: Target, label: "Conversão de clientes" },
              { icon: BarChart3, label: "Vendas 24h por dia" },
              { icon: Lightbulb, label: "Posicionamento estratégico" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon size={24} />
                </div>
                <span className="font-medium text-foreground text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="order-1 md:order-2">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              A solução
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Criamos sites estratégicos que{" "}
              <span className="text-primary">
                transformam visitas em clientes.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Um site profissional da Mountain View não é apenas bonito — ele é
              projetado para gerar autoridade, captar clientes e funcionar como
              sua melhor ferramenta de vendas, 24 horas por dia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Combinamos design moderno com estratégia de conversão para que
              cada visitante se torne uma oportunidade real de negócio.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — Planos */}
      <section
        id="planos"
        ref={setRef(2)}
        className="section-fade py-24 md:py-32 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Planos
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Escolha o plano{" "}
              <span className="text-primary">ideal para você</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada negócio tem uma necessidade. Escolha o plano que faz sentido
              para o momento da sua empresa e comece a atrair clientes pela
              internet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Essencial */}
            <div className="flex flex-col p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300">
              <h3 className="font-display text-2xl font-bold mb-2">
                Essencial
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Ideal para quem está começando
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Até 5 páginas",
                  "Layout profissional",
                  "Botão WhatsApp integrado",
                  "100% Responsivo",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-base text-center"
              >
                Quero começar agora
              </a>
            </div>

            {/* Profissional */}
            <div className="flex flex-col p-8 rounded-xl glow-border bg-card relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary text-primary-foreground">
                Mais popular
              </span>
              <h3 className="font-display text-2xl font-bold mb-2">
                Profissional
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Para quem quer crescer de verdade
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Até 8 páginas",
                  "Estratégia de conversão",
                  "Integração com redes sociais",
                  "SEO básico",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-base text-center"
              >
                Quero crescer meu negócio
              </a>
            </div>

            {/* Premium */}
            <div className="flex flex-col p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300">
              <h3 className="font-display text-2xl font-bold mb-2">Premium</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Para quem quer ser referência
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Projeto personalizado",
                  "Estratégia focada em vendas",
                  "SEO avançado",
                  "Suporte prioritário",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-outline text-base text-center"
              >
                Quero ser referência
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — CTA Final */}
      <section
        ref={setRef(3)}
        className="section-fade relative py-28 md:py-36 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-8 neon-text">
            Está pronto para parar de perder clientes?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
            Converse com um especialista e descubra como ter um site que vende
            por você.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta mt-8 inline-flex text-lg"
          >
            <MessageCircle size={22} />
            FALAR COM ESPECIALISTA AGORA
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>Mountain View © 2026 — Todos os direitos reservados.</p>
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
              href="mailto:contato@mountainview.com"
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
