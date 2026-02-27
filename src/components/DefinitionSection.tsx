const DefinitionSection = () => {
  return (
    <section className="relative section-spacing">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-px bg-primary/50" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Definición</span>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter-custom text-gradient mb-10 heading-tight">
            Qué es una Infraestructura de Captación para Contratistas de Techado
          </h2>

          <div className="glass-card p-8 md:p-10">
            <p className="text-lg text-foreground/80 font-light prose-block leading-relaxed">
              Una infraestructura de captación para contratistas de techado es un sistema digital permanente 
              diseñado para atraer, filtrar y calificar prospectos de manera automatizada. A diferencia del 
              marketing tradicional, este modelo no busca generar volumen de contactos, sino controlar la 
              calidad de cada prospecto que accede al proceso comercial. Integra posicionamiento premium, 
              cuestionarios de calificación obligatoria y filtros de presupuesto mínimo para garantizar que 
              solo proyectos de alto margen lleguen a la agenda del contratista. En mercados como Punta Cana, 
              La Romana e Higüey dentro de la Zona Este de República Dominicana, esta infraestructura permite 
              a los contratistas de techado operar con exclusividad territorial y máximo control sobre su 
              pipeline comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefinitionSection;
