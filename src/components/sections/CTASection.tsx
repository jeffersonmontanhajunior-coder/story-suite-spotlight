import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const WHATSAPP_URL =
  "https://wa.me/5511988135910?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

const CTASection = () => (
  <AnimatedSection className="relative py-28 md:py-36 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/3 to-transparent" />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px]" />
    </div>
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 neon-text"
      >
        Seu negócio merece presença digital profissional.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-lg text-muted-foreground mb-8 leading-relaxed"
      >
        Converse com um especialista e comece a vender online hoje.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta inline-flex"
      >
        <MessageCircle size={20} />
        FALAR NO WHATSAPP AGORA
      </motion.a>
    </div>
  </AnimatedSection>
);

export default CTASection;
