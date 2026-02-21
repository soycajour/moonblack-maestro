import { ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onCtaClick: () => void;
}

const AboutSection = ({ onCtaClick }: AboutSectionProps) => {
  return (
    <section className="relative py-32">
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-primary/50" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Sobre MoonBlack Studios</span>
        </div>

        <div className="max-w-3xl">
          <div className="glass-card p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed tracking-tight-custom mb-6">
              No trabajamos con volumen.
            </p>
            <p className="text-lg text-foreground/70 font-light leading-relaxed mb-8">
              Seleccionamos pocos contratistas por zona para garantizar exclusividad, posicionamiento premium y control territorial.
            </p>

            <div className="border-t border-border/30 pt-8 space-y-4">
              <p className="text-lg text-foreground/60 font-light">
                Si tu empresa compite por precio…<br />
                <span className="text-destructive/80">Probablemente no calificas.</span>
              </p>
              <p className="text-lg text-foreground/80 font-light">
                Si buscas eliminar curiosos y blindar tu agenda con proyectos de alto margen…
              </p>
            </div>

            <div className="mt-10">
              <button
                onClick={onCtaClick}
                className="group btn-primary inline-flex items-center gap-3 text-lg"
              >
                <span>Acceder al Protocolo</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
