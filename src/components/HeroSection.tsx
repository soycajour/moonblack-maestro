import { ArrowRight } from "lucide-react";

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
          Tu web actual es un folleto muerto que te hace perder el tiempo.
        </h1>

        {/* Subheadline */}
        <p className="reveal-up reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
          Si entran leads basura o explicas lo mismo diez veces al día, te falta un sistema de filtrado, no una página bonita.
        </p>

        {/* CTA */}
        <div className="reveal-up reveal-delay-3">
          <button
            onClick={onCtaClick}
            className="group btn-primary inline-flex items-center gap-3 text-lg animate-pulse-glow"
          >
            <span>Pasar al Protocolo de Selección</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="reveal-up reveal-delay-4 absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-muted-foreground text-sm">
            <span>Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
