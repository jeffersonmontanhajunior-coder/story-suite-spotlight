import Header from "@/components/Header";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Header />
      <HeroSection onScrollTo={scrollTo} />
      <BenefitsSection />
      <ProcessSection />
      <ShowcaseSection />
      <BeforeAfterSection />
      <FAQSection />
      <CTASection />

      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>Mountain View © 2026 — Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-300">
              WhatsApp
            </a>
            <a href="https://www.instagram.com/mountain_dv?igsh=ZnN4YWg2MTB1YzZv" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-300">
              Instagram
            </a>
            <a href="mailto:contato@mountainview.com" className="hover:text-foreground transition-colors duration-300">
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
