import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuánto cuesta el marketing para techadores en República Dominicana?",
      answer: "MoonBlack Studios ofrece un modelo de retainer mensual de $3,000 USD para contratistas de techado en Zona Este (Punta Cana, La Romana, Higüey). No es publicidad tradicional ni pago por clic. Es una infraestructura digital permanente que filtra prospectos, valida presupuestos y agenda reuniones solo con clientes de alto margen. La inversión incluye posicionamiento premium, cuestionario de calificación y optimización continua de filtros.",
    },
    {
      question: "¿Cómo filtrar clientes de techado que no tienen presupuesto?",
      answer: "El sistema MoonBlack implementa un cuestionario de calificación obligatorio antes de que cualquier prospecto pueda agendar una reunión. Este filtro valida capacidad financiera, tipo de proyecto y urgencia. Los presupuestos menores a $10,000 USD se bloquean automáticamente. Las consultas de reparaciones menores y parches se descartan. Solo pasan prospectos con proyectos estructurales o remodelaciones completas con capacidad de pago verificada.",
    },
    {
      question: "¿Esto es publicidad tradicional?",
      answer: "No. MoonBlack Studios no hace publicidad tradicional ni campañas de pago por clic. Instalamos una infraestructura digital permanente diseñada para filtrar y controlar la calidad de cada prospecto que llega a tu empresa de techado. Es un activo digital que trabaja las 24 horas del día, posicionando tu marca como referente premium en tu zona y descartando automáticamente prospectos que no califican.",
    },
    {
      question: "¿Trabajan por comisión?",
      answer: "No. MoonBlack Studios opera bajo un modelo de fee de implementación y mantenimiento mensual. Instalamos un activo digital que es tuyo y trabaja permanentemente para tu empresa. No cobramos por lead ni por cierre. El retainer cubre la infraestructura completa: posicionamiento premium, filtros de calificación, optimización mensual y exclusividad territorial en tu zona de operación.",
    },
    {
      question: "¿Qué pasa si ya hago anuncios?",
      answer: "La infraestructura de MoonBlack puede integrarse como complemento a cualquier estrategia de anuncios existente. No es obligatorio reemplazar nada. De hecho, muchos contratistas de techado en Punta Cana y La Romana descubren que al agregar nuestro sistema de filtrado, la calidad de sus leads mejora drásticamente porque los prospectos llegan pre-calificados y con presupuesto validado.",
    },
    {
      question: "¿Trabajan con más de un contratista por zona?",
      answer: "Máximo 3 contratistas por región (Punta Cana, La Romana, Higüey). La exclusividad territorial es fundamental para garantizar que el posicionamiento premium funcione. Si saturamos una zona con múltiples clientes compitiendo con el mismo sistema, perdemos la ventaja competitiva. Por eso seleccionamos cuidadosamente y limitamos las plazas disponibles en cada zona de Zona Este.",
    },
  ];

  return (
    <section className="relative section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-10 h-px bg-muted-foreground/30" />
          <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase">FAQ</span>
        </motion.div>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-light tracking-tighter-custom text-foreground mb-14 max-w-3xl heading-tight"
        >
          Preguntas frecuentes sobre captación para contratistas de techado
        </motion.h2>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card border-none px-6">
                <AccordionTrigger className="text-lg font-light text-foreground/90 hover:no-underline py-5">
                  <h3 className="text-left">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base prose-block pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
