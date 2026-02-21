import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Esto es publicidad tradicional?",
      answer: "No. Es una infraestructura digital permanente diseñada para filtrar y controlar calidad de prospectos.",
    },
    {
      question: "¿Trabajan por comisión?",
      answer: "No. Instalamos un activo digital con fee de implementación y mantenimiento mensual.",
    },
    {
      question: "¿Qué pasa si ya hago anuncios?",
      answer: "Puede integrarse como complemento. No es obligatorio reemplazar nada.",
    },
    {
      question: "¿Trabajan con más de un contratista por zona?",
      answer: "Máximo 3 por región (Punta Cana, La Romana, Higüey).",
    },
  ];

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-primary/50" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">FAQ</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-light tracking-tighter-custom text-gradient mb-12 max-w-3xl">
          Preguntas Frecuentes
        </h2>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card border-none px-6">
                <AccordionTrigger className="text-lg font-light text-foreground/90 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
