const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3" title="MoonBlack Studios - Inicio">
            <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center">
              <span className="text-foreground font-semibold text-sm">M</span>
            </div>
            <span className="text-foreground font-medium">MoonBlack Studios</span>
          </a>
          <nav aria-label="Enlaces del pie de página" className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/#faq" title="Preguntas frecuentes sobre captación para techadores" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="/#sobre-nosotros" title="Exclusividad territorial para contratistas de techado" className="hover:text-foreground transition-colors">Sobre Nosotros</a>
            <a href="/checkout/zona-este" title="Plan de captación para techadores en Zona Este" className="hover:text-foreground transition-colors">Plan Zona Este</a>
          </nav>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-6">
          © {new Date().getFullYear()} MoonBlack Studios. Infraestructura de captación inteligente para contratistas de techado en República Dominicana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
