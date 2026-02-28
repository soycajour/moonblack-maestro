interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-24">
        {/* H1 - uppercase, extrabold, white */}
        <h1 className="reveal-up text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter-custom text-foreground mb-8 heading-tight">
          INFRAESTRUCTURA DE VENTAS PARA CONTRATISTAS DE TECHOS EN HIGÜEY, PUNTA CANA Y LA ROMANA.
        </h1>

        {/* Subtitle */}
        <p className="reveal-up reveal-delay-1 text-lg md:text-xl text-muted-foreground prose-block mx-auto mb-12 font-light">
          Filtramos curiosos. Te entregamos clientes listos para blindar su propiedad contra huracanes y salitre. Cero paja.
        </p>

        {/* VSL Loom Embed */}
        <div className="reveal-up reveal-delay-2 mx-auto mb-12" style={{ maxWidth: '800px' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, border: '2px solid hsl(0 0% 20%)' }}>
            <iframe
              src="https://www.loom.com/embed/941199bcd3d84a03a16ab401f34cbe89"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="VSL - MoonBlack Studios"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="reveal-up reveal-delay-3 mb-6">
          <button
            onClick={onCtaClick}
            className="btn-primary text-lg px-10 py-5"
          >
            INICIAR PROTOCOLO DE SELECCIÓN
          </button>
        </div>

        {/* Warning */}
        <p className="reveal-up reveal-delay-4 text-sm text-muted-foreground max-w-lg mx-auto">
          No somos una ONG. Solo para negocios que facturan +$5k/mes y entienden que su tiempo vale dinero.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
