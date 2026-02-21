import { ArrowRight, Check } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-bg" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-smoke-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        {/* Badge */}
        <div className="reveal-up mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            MoonBlack Studios
          </span>
        </div>

        {/* Headline */}
        <h1 className="reveal-up reveal-delay-1 text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter-custom text-gradient mb-6 leading-tight">
          Tu web actual está dejando pasar proyectos de 6 cifras.
        </h1>

        {/* Subheadline */}
        <p className="reveal-up reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 font-light">
          Si sigues recibiendo visitas "para ver" o llamadas preguntando "¿cuánto cuesta más o menos?", no necesitas más tráfico.
          Necesitas un sistema que filtre antes de que te llamen.
        </p>

        {/* Subtexto */}
        <p className="reveal-up reveal-delay-2 text-sm text-primary/80 mb-8 font-medium tracking-wide">
          Infraestructura de Captura Premium para contratistas de techado en Punta Cana y La Romana.
        </p>

        {/* Bullet points */}
        <div className="reveal-up reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-foreground/80">
            <Check className="w-5 h-5 text-primary" />
            <span>Elimina visitas de cortesía.</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <Check className="w-5 h-5 text-primary" />
            <span>Agenda solo proyectos con presupuesto validado.</span>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal-up reveal-delay-4">
          <button
            onClick={onCtaClick}
            className="group btn-primary inline-flex items-center gap-3 text-lg animate-pulse-glow"
          >
            <span>Iniciar Protocolo de Selección</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
