import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SitePlansSection from "@/components/sections/SitePlansSection";
import MaintenanceSection from "@/components/sections/MaintenanceSection";
import MarketingSection from "@/components/sections/MarketingSection";
import ComboSection from "@/components/sections/ComboSection";
import CustomSection from "@/components/sections/CustomSection";
import CTASection from "@/components/sections/CTASection";

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
      <HeroSection onScrollTo={scrollTo} />
      <BenefitsSection sectionRef={setRef(0)} />
      <SitePlansSection sectionRef={setRef(1)} />
      <MaintenanceSection sectionRef={setRef(2)} />
      <MarketingSection sectionRef={setRef(3)} />
      <ComboSection sectionRef={setRef(4)} />
      <CustomSection sectionRef={setRef(5)} />
      <CTASection sectionRef={setRef(6)} />

      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>Mountain View © 2026 — Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              WhatsApp
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="mailto:contato@mountainview.com" className="hover:text-primary transition-colors">
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
