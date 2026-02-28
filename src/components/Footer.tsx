const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center">
              <span className="text-foreground font-semibold text-sm">M</span>
            </div>
            <span className="text-foreground font-medium">MoonBlack Studios</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MoonBlack Studios. Infraestructura de Captura Premium para Contratistas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
