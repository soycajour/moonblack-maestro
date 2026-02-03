import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import QualificationSection from "@/components/QualificationSection";
import GatekeeperForm from "@/components/GatekeeperForm";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 py-4">
        <div className="container mx-auto px-6">
          <div className="glass-card px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">M</span>
              </div>
              <span className="text-foreground font-medium hidden sm:block">MoonBlack</span>
            </div>

            {/* CTA */}
            <button
              onClick={handleOpenForm}
              className="btn-outline text-sm py-2 px-4"
            >
              Protocolo de Selección
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <HeroSection onCtaClick={handleOpenForm} />
        <PainSection />
        <SolutionSection />
        <QualificationSection onCtaClick={handleOpenForm} />
      </main>

      <Footer />

      {/* Gatekeeper Form Modal */}
      {showForm && <GatekeeperForm onClose={handleCloseForm} />}
    </div>
  );
};

export default Index;
