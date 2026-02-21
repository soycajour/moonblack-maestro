const CaseStudiesSection = () => {
  const cases = [
    {
      label: "Contratista A",
      text: "Pasó de 12 visitas mensuales con baja tasa de cierre a 4 reuniones filtradas con mayor probabilidad de contrato.",
    },
    {
      label: "Contratista B",
      text: "Eliminó más del 80% de consultas de reparaciones pequeñas y trabajos de bajo margen.",
    },
    {
      label: "Contratista C",
      text: "Concentró su agenda en proyectos industriales y residenciales premium, reduciendo desplazamientos innecesarios.",
    },
  ];

  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-primary/50" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Casos de Uso</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-light tracking-tighter-custom text-gradient mb-12 max-w-3xl">
          Estructura Real
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {cases.map((c, index) => (
            <div key={index} className="glass-card p-8 flex flex-col">
              <span className="text-primary text-sm font-medium tracking-wide uppercase mb-4">{c.label}</span>
              <p className="text-foreground/80 font-light leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
