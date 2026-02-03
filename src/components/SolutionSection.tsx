import { Zap, Filter, Target } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Filter,
      title: "Filtrado Automático",
      description: "Separa clientes con presupuesto de curiosos sin valor."
    },
    {
      icon: Target,
      title: "Pre-cualificación",
      description: "Solo hablas con quien ya está listo para cerrar."
    },
    {
      icon: Zap,
      title: "Cierre Acelerado",
      description: "Menos llamadas, más contratos firmados."
    }
  ];

  return (
    <section className="relative py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-primary/50" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">La Tesis</span>
        </div>

        {/* Main statement */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter-custom text-gradient mb-6">
            No hacemos webs.
          </h2>
          <p className="text-2xl md:text-3xl font-light text-foreground/80">
            Instalamos{" "}
            <span className="text-primary font-normal">Infraestructura de Ventas</span>. Un sistema que separa a los clientes con presupuesto de los que solo vienen a estorbar.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card-hover p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 
                            group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
