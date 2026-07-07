import { ClipboardList, Palette, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";

const steps = [
  {
    icon: ClipboardList,
    title: "Planejamento",
    desc: "Entendemos seu negócio, público e objetivos para criar a estratégia ideal.",
    step: "01",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Criamos o layout moderno e alinhado à identidade da sua marca.",
    step: "02",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    desc: "Codificamos com tecnologias modernas, garantindo performance e qualidade.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Publicação",
    desc: "Seu site vai ao ar com domínio, hospedagem e suporte técnico.",
    step: "04",
  },
];

const ProcessSection = () => (
  <AnimatedSection id="processo" className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <AnimatedDiv className="text-center mb-16">
        <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
          Como Funciona
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Do conceito ao <span className="gradient-text">lançamento</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Um processo claro e eficiente para tirar seu projeto do papel.
        </p>
      </AnimatedDiv>

      <div className="relative grid md:grid-cols-4 gap-6">
        {/* Vertical connector line (mobile) / Horizontal (desktop) */}
        <div className="md:hidden absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-border to-primary/10" aria-hidden />
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative group flex md:block items-start gap-5"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-gradient-to-r from-primary/40 to-border" />
            )}

            <div className="md:text-center">
              <div className="relative inline-flex mb-5">
                <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                  <step.icon size={26} />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ProcessSection;
