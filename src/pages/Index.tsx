import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import GatekeeperForm from "@/components/GatekeeperForm";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseForm = () => {
    setShowForm(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Captación Inteligente para Techadores en Punta Cana | MoonBlack Studios"
        description="Sistema de captación y filtrado de prospectos para contratistas de techado en Zona Este, RD. Exclusividad territorial y clientes de alto margen. Solicita tu auditoría."
      />

      {/* Navigation */}
      <nav aria-label="Navegación principal" className="fixed top-0 left-0 right-0 z-40 py-4">
        <div className="container mx-auto px-6">
          <div className="glass-card px-6 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3" title="MoonBlack Studios - Inicio">
              <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center">
                <span className="text-foreground font-semibold text-sm">M</span>
              </div>
              <span className="text-foreground font-medium hidden sm:block">MoonBlack</span>
            </a>
            <button
              onClick={handleOpenForm}
              className="btn-outline text-sm py-2 px-4"
            >
              PROTOCOLO DE SELECCIÓN
            </button>
          </div>
        </div>
      </nav>

      <main>
        <HeroSection onCtaClick={handleOpenForm} />
        <FAQSection />
        <AboutSection onCtaClick={handleOpenForm} />
      </main>

      <Footer />

      {showForm && <GatekeeperForm onClose={handleCloseForm} />}
    </div>
  );
};

export default Index;
