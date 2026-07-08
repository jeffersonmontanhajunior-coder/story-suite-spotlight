import { motion } from "framer-motion";
import AnimatedSection, { AnimatedDiv } from "@/components/AnimatedSection";

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PlanIcon = () => (
  <svg {...iconProps}>
    <path d="M4 5h10M4 10h16M4 15h12M4 20h8" />
    <circle cx="19" cy="15" r="2.2" />
  </svg>
);
const DesignIcon = () => (
  <svg {...iconProps}>
    <path d="M3 20l6-2 10-10a2.3 2.3 0 0 0-3.2-3.3L5.8 14.6 3 20z" />
    <path d="M14 7l3 3" />
  </svg>
);
const DevIcon = () => (
  <svg {...iconProps}>
    <path d="M8 8l-4 4 4 4" />
    <path d="M16 8l4 4-4 4" />
    <path d="M13 5l-2 14" />
  </svg>
);
const LaunchIcon = () => (
  <svg {...iconProps}>
    <path d="M13.5 3c3 0 6 1.5 7.5 4.5-1.5 6-6 10.5-10.5 12L7.5 16.5C9 12 13.5 7.5 19.5 6" />
    <path d="M7.5 16.5L5 14a2 2 0 0 1 0-2l2-2" />
    <path d="M10.5 19.5l2 2a2 2 0 0 0 2 0l2-2" />
    <path d="M5 19c-1 1-1 3-1 3s2 0 3-1" />
    <circle cx="15" cy="9" r="1.5" />
  </svg>
);

const steps = [
  { Icon: PlanIcon, title: "Planejamento", desc: "Entendemos seu negócio, público e objetivos para criar a estratégia ideal.", step: "01" },
  { Icon: DesignIcon, title: "Design", desc: "Criamos o layout moderno e alinhado à identidade da sua marca.", step: "02" },
  { Icon: DevIcon, title: "Desenvolvimento", desc: "Codificamos com tecnologias modernas, garantindo performance e qualidade.", step: "03" },
  { Icon: LaunchIcon, title: "Publicação", desc: "Seu site vai ao ar com domínio, hospedagem e suporte técnico.", step: "04" },
];

const ProcessSection = () => (
  <AnimatedSection id="processo" className="py-16 md:py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <AnimatedDiv className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div className="max-w-xl">
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            Como Funciona
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
            Do conceito ao <span className="gradient-text">lançamento</span>
          </h2>
        </div>
        <p className="text-muted-foreground md:text-right max-w-sm">
          Um processo claro e eficiente para tirar seu projeto do papel — sem surpresas no meio do caminho.
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

            <div className="md:text-left">
              <div className="relative inline-flex mb-5">
                <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                  <step.Icon />
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
