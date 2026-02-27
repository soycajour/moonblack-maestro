import { ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onCtaClick: () => void;
}

const AboutSection = ({ onCtaClick }: AboutSectionProps) => {
  return (
    <section className="relative section-spacing">
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-px bg-primary/50" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Sobre MoonBlack Studios</span>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter-custom text-gradient mb-10 heading-tight">
            Exclusividad territorial para contratistas en Punta Cana, La Romana e Higüey
          </h2>

          <div className="glass-card p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-light text-foreground/90 tracking-tight-custom mb-6 heading-tight">
              No trabajamos con volumen.
            </p>
            <p className="text-lg text-foreground/70 font-light prose-block mb-10">
              Seleccionamos pocos contratistas por zona para garantizar exclusividad, posicionamiento premium y control territorial.
            </p>

            <div className="border-t border-border/30 pt-10 space-y-4">
              <p className="text-lg text-foreground/60 font-light">
                Si tu empresa compite por precio…<br />
                <span className="text-destructive/80">Probablemente no calificas.</span>
              </p>
              <p className="text-lg text-foreground/80 font-light">
                Si buscas eliminar curiosos y blindar tu agenda con proyectos de alto margen…
              </p>
            </div>

            <div className="mt-12">
              <button
                onClick={onCtaClick}
                className="group btn-primary inline-flex items-center gap-3 text-lg px-10 py-5"
              >
                <span>Acceder al Protocolo</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-100 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
