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
      
      {/* Content - Halo Effect: maximum negative space, isolated message */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        {/* Badge */}
        <div className="reveal-up mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            MoonBlack Studios
          </span>
        </div>

        {/* H1 SEO optimizado - heading-tight for 1.1 line-height */}
        <h1 className="reveal-up reveal-delay-1 text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter-custom text-gradient mb-8 heading-tight">
          Infraestructura de Captación para Contratistas de Techado en Punta Cana y La Romana
        </h1>

        {/* Copy agresivo como párrafo destacado - isolated with generous spacing */}
        <p className="reveal-up reveal-delay-2 text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 prose-block mx-auto mb-6 heading-tight">
          Tu web actual está dejando pasar proyectos de 6 cifras.
        </p>

        {/* Subheadline */}
        <p className="reveal-up reveal-delay-2 text-lg md:text-xl text-muted-foreground prose-block mx-auto mb-8 font-light">
          Si sigues recibiendo visitas "para ver" o llamadas preguntando "¿cuánto cuesta más o menos?", no necesitas más tráfico.
          Necesitas un sistema que filtre antes de que te llamen.
        </p>

        {/* Subtexto geolocalizado */}
        <p className="reveal-up reveal-delay-2 text-sm text-primary/80 mb-10 font-medium tracking-wide">
          Infraestructura de Captura Premium para contratistas de techado en Punta Cana y La Romana.
        </p>

        {/* Bullet points - spaced out */}
        <div className="reveal-up reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-6 mb-14">
          <div className="flex items-center gap-2 text-foreground/80">
            <Check className="w-5 h-5 text-primary" />
            <span>Elimina visitas de cortesía.</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <Check className="w-5 h-5 text-primary" />
            <span>Agenda solo proyectos con presupuesto validado.</span>
          </div>
        </div>

        {/* CTA - dominant, isolated, maximum click area */}
        <div className="reveal-up reveal-delay-4">
          <button
            onClick={onCtaClick}
            className="group btn-primary inline-flex items-center gap-3 text-lg px-10 py-5 animate-pulse-glow"
          >
            <span>Iniciar Protocolo de Selección</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-100 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
