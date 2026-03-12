import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

const navLinks = [
  { id: "beneficios", label: "Benefícios" },
  { id: "planos", label: "Planos" },
  { id: "marketing", label: "Marketing" },
  { id: "faq", label: "FAQ" },
];

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
          <span className="gold-gradient-text">M</span>V
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta !py-2.5 !px-6 !text-sm">
            Contato
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-5 text-base font-medium overflow-hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta text-center !text-base">
              Contato
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
