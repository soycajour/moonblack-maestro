const LocalSeoSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-primary/50" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">SEO Local</span>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter-custom text-gradient mb-8">
            Cómo conseguir clientes de techado en Punta Cana
          </h2>

          <div className="glass-card p-8 md:p-10 space-y-6">
            <p className="text-lg text-foreground/80 font-light leading-relaxed">
              Si le preguntas a Google cómo conseguir clientes de techado en Punta Cana, la mayoría de 
              resultados te dirán que inviertas en anuncios pagados o que publiques en redes sociales. 
              Pero los contratistas de techado en Zona Este que realmente cierran proyectos de alto 
              margen no dependen de estrategias genéricas.
            </p>
            <p className="text-lg text-foreground/80 font-light leading-relaxed">
              El modelo que funciona en La Romana, Higüey y el resto de la Zona Este de República 
              Dominicana es uno basado en infraestructura digital permanente: un sistema que posiciona 
              al contratista como referente premium en su territorio, filtra automáticamente prospectos 
              sin capacidad de pago y agenda únicamente reuniones con propietarios de proyectos 
              estructurales y remodelaciones completas. No es volumen. Es precisión territorial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSeoSection;
