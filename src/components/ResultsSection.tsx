import { TrendingUp } from "lucide-react";

const ResultsSection = () => {
  const results = [
    "Reducción drástica de visitas improductivas.",
    "Equipo comercial trabajando menos… cerrando más.",
    "Agenda compuesta por proyectos estructurales y remodelaciones completas.",
    "Mayor margen por proyecto.",
    "Menos desgaste operativo.",
    "Más control.",
  ];

  return (
    <section className="relative section-spacing overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-px bg-primary/50" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Resultados</span>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter-custom text-gradient mb-14 heading-tight">
            Resultados en 30–60 días para contratistas de techado en República Dominicana
          </h2>

          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="glass-card p-5 flex items-center gap-4">
                <TrendingUp className="w-5 h-5 text-primary shrink-0" />
                <span className="text-lg text-foreground/80 font-light">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
