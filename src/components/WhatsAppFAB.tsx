import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

const INSTAGRAM_URL =
  "https://www.instagram.com/mountain_dv?igsh=ZnN4YWg2MTB1YzZv";

const WhatsAppFAB = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Siga-nos no Instagram"
      className="w-12 h-12 rounded-full flex items-center justify-center text-foreground bg-card border border-border shadow-lg transition-all duration-300 hover:scale-110 hover:border-primary/30"
    >
      <Instagram size={22} />
    </a>
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      style={{
        background: "hsl(145 72% 45%)",
        color: "white",
        boxShadow: "0 4px 15px hsl(145 72% 45% / 0.3)",
      }}
    >
      <MessageCircle size={22} />
    </a>
  </div>
);

export default WhatsAppFAB;
