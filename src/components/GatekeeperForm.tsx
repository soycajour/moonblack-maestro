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
    setTimeout(onClose, 200);
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
            <div className="w-16 h-16 mx-auto bg-primary/10 flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-gradient mb-4 heading-tight">
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
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground mt-2 heading-tight">
                ¿Cuál es tu sector?
              </h2>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => handleSectorSelect(true)}
                className="w-full glass-card-hover p-5 text-left group min-h-[48px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-foreground group-hover:text-primary" style={{ transition: 'color 80ms ease' }}>
                    Contratista - Construcción
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" style={{ transition: 'color 80ms ease' }} />
                </div>
              </button>
              <button
                onClick={() => handleSectorSelect(false)}
                className="w-full glass-card-hover p-5 text-left group border-muted/30 min-h-[48px]"
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
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground mt-2 heading-tight">
                ¿Cuál es tu facturación mensual?
              </h2>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => handleRevenueSelect("less-5k")}
                className="w-full glass-card-hover p-5 text-left group border-muted/30 min-h-[48px]"
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
                className="w-full glass-card-hover p-5 text-left group min-h-[48px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-foreground group-hover:text-primary" style={{ transition: 'color 80ms ease' }}>
                    $5,000 - $15,000
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" style={{ transition: 'color 80ms ease' }} />
                </div>
              </button>
              <button
                onClick={() => handleRevenueSelect("15k-plus")}
                className="w-full glass-card-hover p-5 text-left group min-h-[48px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-foreground group-hover:text-primary" style={{ transition: 'color 80ms ease' }}>
                    Más de $15,000
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" style={{ transition: 'color 80ms ease' }} />
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
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground mt-2 heading-tight">
                ¿Qué es más importante para ti?
              </h2>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => handlePrioritySelect(true)}
                className="w-full glass-card-hover p-5 text-left group min-h-[48px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-foreground group-hover:text-primary" style={{ transition: 'color 80ms ease' }}>
                    Una solución profesional que genere resultados
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" style={{ transition: 'color 80ms ease' }} />
                </div>
              </button>
              <button
                onClick={() => handlePrioritySelect(false)}
                className="w-full glass-card-hover p-5 text-left group border-muted/30 min-h-[48px]"
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
            <div className="w-20 h-20 mx-auto bg-primary/20 flex items-center justify-center glow-effect" style={{ borderRadius: 'var(--radius)' }}>
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-gradient mb-4 heading-tight">
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
              className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5"
            >
              <Calendar className="w-5 h-5" />
              <span>Reservar Auditoría</span>
            </a>
          </div>
        );

      case "rejected":
        return (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="w-20 h-20 mx-auto bg-destructive/10 flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
              <XCircle className="w-10 h-10 text-destructive/70" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground/80 mb-4 heading-tight">
                Acceso Denegado
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                No somos compatibles. No trabajamos con negocios sin tracción económica o fuera del sector de construcción.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isExiting ? 'opacity-0' : 'opacity-100'}`} style={{ transition: 'opacity 200ms ease' }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-xl"
        onClick={step !== "rejected" ? handleClose : undefined}
      />
      
      {/* Form container */}
      <div className={`relative w-full max-w-xl glass-card p-8 md:p-12 ${isExiting ? 'scale-95' : 'scale-100'}`} style={{ transition: 'transform 200ms ease' }}>
        {/* Close button */}
        {step !== "rejected" && step !== "success" && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center 
                       text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted min-h-[48px] min-w-[48px]"
            style={{ borderRadius: 'var(--radius)', transition: 'color 80ms ease, background-color 80ms ease' }}
          >
            ×
          </button>
        )}

        {/* Progress bar */}
        {step !== "welcome" && step !== "success" && step !== "rejected" && (
          <div className="mb-8">
            <div className="h-1 bg-muted overflow-hidden" style={{ borderRadius: 'var(--radius)' }}>
              <div 
                className="h-full bg-primary"
                style={{ 
                  width: step === "sector" ? "33%" : step === "revenue" ? "66%" : "100%",
                  transition: 'width 150ms ease'
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
