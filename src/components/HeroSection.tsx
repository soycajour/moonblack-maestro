import { motion } from "framer-motion";
import { Target, Zap, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const bentoItems = [
  {
    icon: Target,
    title: "Requisito",
    description: "+$5k/mes de facturación constante.",
  },
  {
    icon: Zap,
    title: "Mentalidad",
    description: "Tu tiempo vale más que convencer a curiosos.",
  },
  {
    icon: TrendingUp,
    title: "Objetivo",
    description: "Cierre acelerado.",
  },
];

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-28 pb-12">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8"
        >
          <span className="badge-pill">
            SISTEMA EXCLUSIVO PARA CONTRATISTAS DE TECHOS
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter-custom text-foreground mb-6 heading-tight"
        >
          Infraestructura de Ventas para Techadores en el Este.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground prose-block mx-auto mb-12 font-light"
        >
          Filtramos curiosos. Te entregamos clientes listos para blindar su propiedad contra huracanes y salitre. Cero paja.
        </motion.p>

        {/* VSL Loom Embed */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mb-14"
          style={{ maxWidth: '900px' }}
        >
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.08]">
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/941199bcd3d84a03a16ab401f34cbe89"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="VSL - MoonBlack Studios"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6"
        >
          <motion.button
            onClick={onCtaClick}
            className="btn-primary text-lg px-10 py-5"
            whileTap={{ scale: 0.95 }}
          >
            INICIAR PROTOCOLO DE SELECCIÓN
          </motion.button>
        </motion.div>

        {/* Warning */}
        <motion.p
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-sm text-muted-foreground max-w-lg mx-auto mb-20"
        >
          No somos una ONG. Solo para negocios que facturan +$5k/mes y entienden que su tiempo vale dinero.
        </motion.p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={5 + i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bento-card text-left"
            >
              <item.icon className="w-6 h-6 text-muted-foreground mb-4" />
              <h3 className="text-foreground font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
