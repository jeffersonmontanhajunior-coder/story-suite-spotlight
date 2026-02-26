import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

const WhatsAppFAB = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
    style={{
      background: "hsl(145 72% 45%)",
      boxShadow: "0 4px 20px hsl(145 72% 45% / 0.4)",
    }}
  >
    <MessageCircle size={26} />
  </a>
);

export default WhatsAppFAB;
