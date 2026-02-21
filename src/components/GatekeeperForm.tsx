import { useState } from "react";
import { ArrowRight, Shield, XCircle, CheckCircle, Calendar } from "lucide-react";

type FormStep = "welcome" | "sector" | "revenue" | "priority" | "success" | "rejected";

interface GatekeeperFormProps {
  onClose: () => void;
}

const GatekeeperForm = ({ onClose }: GatekeeperFormProps) => {
  const [step, setStep] = useState<FormStep>("welcome");
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 300);
  };

  const handleSectorSelect = (isContractor: boolean) => {
    if (isContractor) {
      setStep("revenue");
    } else {
      setStep("rejected");
    }
  };

  const handleRevenueSelect = (revenue: string) => {
    if (revenue === "less-5k") {
      setStep("rejected");
    } else {
      setStep("priority");
    }
  };

  const handlePrioritySelect = (wantsQuality: boolean) => {
    if (wantsQuality) {
      setStep("success");
    } else {
      setStep("rejected");
    }
  };

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-gradient mb-4">
                Protocolo de Selección de Casos de Éxito
              </h2>
              <p className="text-muted-foreground">
                No aceptamos a cualquiera. Responde con precisión.
              </p>
            </div>
            <button
              onClick={() => setStep("sector")}
              className="btn-primary inline-flex items-center gap-3"
            >
              <span>Comenzar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        );

      case "sector":
        return (
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-primary text-sm font-medium">Pregunta 1 de 3</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground mt-2">
                ¿Cuál es tu sector?
              </h2>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => handleSectorSelect(true)}
                className="w-full glass-card-hover p-6 text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                    Contratista - Construcción
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </button>
              <button
                onClick={() => handleSectorSelect(false)}
                className="w-full glass-card-hover p-6 text-left group border-muted/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-muted-foreground">
                    Otro sector
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/50" />
                </div>
              </button>
            </div>
          </div>
        );

      case "revenue":
        return (
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-primary text-sm font-medium">Pregunta 2 de 3</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground mt-2">
                ¿Cuál es tu facturación mensual?
              </h2>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => handleRevenueSelect("less-5k")}
                className="w-full glass-card-hover p-6 text-left group border-muted/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-muted-foreground">
                    Menos de $5,000
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/50" />
                </div>
              </button>
              <button
                onClick={() => handleRevenueSelect("5k-15k")}
                className="w-full glass-card-hover p-6 text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                    $5,000 - $15,000
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </button>
              <button
                onClick={() => handleRevenueSelect("15k-plus")}
                className="w-full glass-card-hover p-6 text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                    Más de $15,000
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </button>
            </div>
          </div>
        );

      case "priority":
        return (
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-primary text-sm font-medium">Pregunta 3 de 3</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground mt-2">
                ¿Qué es más importante para ti?
              </h2>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => handlePrioritySelect(true)}
                className="w-full glass-card-hover p-6 text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                    Una solución profesional que genere resultados
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </button>
              <button
                onClick={() => handlePrioritySelect(false)}
                className="w-full glass-card-hover p-6 text-left group border-muted/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-muted-foreground">
                    Lo más barato posible
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/50" />
                </div>
              </button>
            </div>
          </div>
        );

      case "success":
        return (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center glow-effect">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-gradient mb-4">
                Tu negocio califica para una Auditoría Técnica
              </h2>
              <p className="text-muted-foreground">
                Hemos verificado que cumples con los requisitos mínimos. El siguiente paso es agendar una auditoría técnica con nuestro equipo.
              </p>
            </div>
            <a
              href="https://calendly.com/gcajour/auditoria-territorial"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>Reservar Auditoría</span>
            </a>
          </div>
        );

      case "rejected":
        return (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="w-20 h-20 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
              <XCircle className="w-10 h-10 text-destructive/70" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground/80 mb-4">
                Acceso Denegado
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                No somos compatibles. No trabajamos con negocios sin tracción económica o fuera del sector de construcción.
              </p>
            </div>
            {/* No exit buttons as per spec */}
          </div>
        );
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-xl"
        onClick={step !== "rejected" ? handleClose : undefined}
      />
      
      {/* Form container */}
      <div className={`relative w-full max-w-xl glass-card p-8 md:p-12 transition-transform duration-300 ${isExiting ? 'scale-95' : 'scale-100'}`}>
        {/* Close button (hidden on rejected) */}
        {step !== "rejected" && step !== "success" && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center 
                       text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            ×
          </button>
        )}

        {/* Progress bar */}
        {step !== "welcome" && step !== "success" && step !== "rejected" && (
          <div className="mb-8">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ 
                  width: step === "sector" ? "33%" : step === "revenue" ? "66%" : "100%" 
                }}
              />
            </div>
          </div>
        )}

        {renderStep()}
      </div>
    </div>
  );
};

export default GatekeeperForm;
