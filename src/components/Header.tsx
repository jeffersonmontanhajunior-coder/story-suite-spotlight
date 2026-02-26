import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          <span className="text-primary">M</span>V
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollTo("about")} className="text-muted-foreground hover:text-foreground transition-colors">Sobre</button>
          <button onClick={() => scrollTo("benefits")} className="text-muted-foreground hover:text-foreground transition-colors">Benefícios</button>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta !py-2.5 !px-6 !text-sm">
            Contato
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-5 text-base font-medium animate-fade-in">
          <button onClick={() => scrollTo("about")} className="text-left text-muted-foreground hover:text-foreground transition-colors">Sobre</button>
          <button onClick={() => scrollTo("benefits")} className="text-left text-muted-foreground hover:text-foreground transition-colors">Benefícios</button>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta text-center !text-base">
            Contato
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
