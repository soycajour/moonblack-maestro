const PainSection = () => {
  const painPoints = [
    "Publicar fotos esperando que llegue el cliente correcto.",
    "Depender de referidos impredecibles.",
    "Competir por precio con contratistas más baratos.",
    "Enviar cotizaciones que nadie responde.",
    "Ir a 10 visitas para cerrar 1… si acaso.",
    "Cuadrillas paradas drenando nómina.",
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary/50" />
            <span className="text-primary text-sm font-medium tracking-wide uppercase">El Viejo Modelo</span>
          </div>

          {/* Pain points */}
          <div className="glass-card p-8 md:p-12">
            <ul className="space-y-5">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4 text-lg md:text-xl text-foreground/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-3 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Closing */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <p className="text-2xl md:text-3xl font-light text-foreground/90 tracking-tight-custom leading-relaxed">
                Mucho movimiento.<br />
                Poco margen.<br />
                <span className="text-primary font-normal">Cero control.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
