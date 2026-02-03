import { AlertCircle } from "lucide-react";

const PainSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary/50" />
            <span className="text-primary text-sm font-medium tracking-wide uppercase">El Espejo</span>
          </div>

          {/* Pain statement */}
          <div className="glass-card p-8 md:p-12 relative">
            {/* Decorative icon */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
              <AlertCircle className="w-4 h-4 text-destructive" />
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/90 leading-relaxed tracking-tight-custom">
              Mientras estás en la obra, tu web debería estar{" "}
              <span className="text-primary font-normal">matando objeciones</span>. Si solo sirve para que te llamen curiosos a pedir presupuesto{" "}
              <span className="text-muted-foreground italic">"por encimita"</span>, estás tirando dinero.
            </p>

            {/* Bottom accent */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              <span className="text-sm text-muted-foreground">La realidad incómoda</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
