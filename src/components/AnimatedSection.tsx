import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const AnimatedSection = ({ children, className = "", delay = 0, id }: AnimatedSectionProps) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.section>
);

export const AnimatedDiv = ({ children, className = "", delay = 0 }: Omit<AnimatedSectionProps, "id">) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    }}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
