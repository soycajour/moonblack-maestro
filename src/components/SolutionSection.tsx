const SolutionSection = () => {
  const systemPoints = [
    "Usa posicionamiento premium para atraer propietarios de alto patrimonio.",
    "Implementa un cuestionario de calificación obligatorio.",
    "Bloquea presupuestos menores a $10,000 USD.",
    "Descarta automáticamente consultas de \"parches\" y reparaciones menores.",
    "Agenda reuniones solo con capacidad financiera validada.",
    "Optimiza filtros mensualmente para mantener calidad.",
  ];

  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-primary/50" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">El Nuevo Modelo</span>
        </div>

        {/* Main statement */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter-custom text-gradient mb-4">
            El nuevo modelo de captación para contratistas de techado en República Dominicana
          </h2>
          <p className="text-2xl md:text-3xl font-light text-foreground/80 mb-2">
            No hacemos páginas bonitas.
          </p>
          <p className="text-2xl md:text-3xl font-light text-foreground/80">
            Instalamos{" "}
            <span className="text-primary font-normal">Infraestructura de Captura y Filtrado.</span>
          </p>
        </div>

        {/* System bullets */}
        <div className="max-w-3xl">
          <p className="text-muted-foreground mb-6 text-lg font-light">Un sistema que:</p>
          <div className="glass-card p-8 md:p-10">
            <ul className="space-y-4">
              {systemPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4 text-foreground/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing */}
          <div className="mt-10">
            <p className="text-xl md:text-2xl font-light text-foreground/70">
              No es marketing tradicional.
            </p>
            <p className="text-xl md:text-2xl font-light text-primary mt-1">
              Es control de calidad comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
