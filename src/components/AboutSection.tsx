import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface AboutSectionProps {
  onCtaClick: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const AboutSection = ({ onCtaClick }: AboutSectionProps) => {
  return (
    <section className="relative section-spacing">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-10 h-px bg-muted-foreground/30" />
          <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase">Sobre MoonBlack Studios</span>
        </motion.div>

        <div className="max-w-3xl">
          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-light tracking-tighter-custom text-foreground mb-10 heading-tight"
          >
            Exclusividad territorial para contratistas en Punta Cana, La Romana e Higüey
          </motion.h2>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card p-8 md:p-12"
          >
            <p className="text-2xl md:text-3xl font-light text-foreground/90 tracking-tight-custom mb-6 heading-tight">
              No trabajamos con volumen.
            </p>
            <p className="text-lg text-foreground/70 font-light prose-block mb-10">
              Seleccionamos pocos contratistas por zona para garantizar exclusividad, posicionamiento premium y control territorial.
            </p>

            <div className="border-t border-white/[0.08] pt-10 space-y-4">
              <p className="text-lg text-foreground/60 font-light">
                Si tu empresa compite por precio…<br />
                <span className="text-destructive/80">Probablemente no calificas.</span>
              </p>
              <p className="text-lg text-foreground/80 font-light">
                Si buscas eliminar curiosos y blindar tu agenda con proyectos de alto margen…
              </p>
            </div>

            <div className="mt-12">
              <motion.button
                onClick={onCtaClick}
                className="group btn-primary inline-flex items-center gap-3 text-lg px-10 py-5"
                whileTap={{ scale: 0.95 }}
              >
                <span>Acceder al Protocolo</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
