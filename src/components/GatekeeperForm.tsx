import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, XCircle, CheckCircle, Calendar } from "lucide-react";

type FormStep = "welcome" | "sector" | "revenue" | "priority" | "success" | "rejected";

interface GatekeeperFormProps {
  onClose: () => void;
}

const stepVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

const GatekeeperForm = ({ onClose }: GatekeeperFormProps) => {
  const [step, setStep] = useState<FormStep>("welcome");
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 250);
  };

  const handleSectorSelect = (isContractor: boolean) => {
    if (isContractor) setStep("revenue");
    else setStep("rejected");
  };

  const handleRevenueSelect = (revenue: string) => {
    if (revenue === "less-5k") setStep("rejected");
    else setStep("priority");
  };

  const handlePrioritySelect = (wantsQuality: boolean) => {
    if (wantsQuality) setStep("success");
    else setStep("rejected");
  };

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return (
          <motion.div key="welcome" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="text-center space-y-8">
            <div className="w-16 h-16 mx-auto glass-card rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-foreground/70" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground mb-4 heading-tight">
                Protocolo de Selección de Casos de Éxito
              </h2>
              <p className="text-muted-foreground">No aceptamos a cualquiera. Responde con precisión.</p>
            </div>
            <motion.button onClick={() => setStep("sector")} className="btn-primary inline-flex items-center gap-3" whileTap={{ scale: 0.95 }}>
              <span>Comenzar</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        );

      case "sector":
        return (
          <motion.div key="sector" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <div>
              <span className="text-muted-foreground text-sm font-medium">Pregunta 1 de 3</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground mt-2 heading-tight">¿Cuál es tu sector?</h2>
            </div>
            <div className="space-y-3">
              <button onClick={() => handleSectorSelect(true)} className="w-full glass-card-hover p-5 text-left group min-h-[48px] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-foreground">Contratista - Construcción</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </button>
              <button onClick={() => handleSectorSelect(false)} className="w-full glass-card-hover p-5 text-left group min-h-[48px] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-muted-foreground">Otro sector</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/50" />
                </div>
              </button>
            </div>
          </motion.div>
        );

      case "revenue":
        return (
          <motion.div key="revenue" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <div>
              <span className="text-muted-foreground text-sm font-medium">Pregunta 2 de 3</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground mt-2 heading-tight">¿Cuál es tu facturación mensual?</h2>
            </div>
            <div className="space-y-3">
              {[
                { label: "Menos de $5,000", value: "less-5k", muted: true },
                { label: "$5,000 - $15,000", value: "5k-15k", muted: false },
                { label: "Más de $15,000", value: "15k-plus", muted: false },
              ].map((opt) => (
                <button key={opt.value} onClick={() => handleRevenueSelect(opt.value)} className="w-full glass-card-hover p-5 text-left group min-h-[48px] rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className={`text-lg ${opt.muted ? 'text-muted-foreground' : 'text-foreground'}`}>{opt.label}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case "priority":
        return (
          <motion.div key="priority" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
            <div>
              <span className="text-muted-foreground text-sm font-medium">Pregunta 3 de 3</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground mt-2 heading-tight">¿Qué es más importante para ti?</h2>
            </div>
            <div className="space-y-3">
              <button onClick={() => handlePrioritySelect(true)} className="w-full glass-card-hover p-5 text-left group min-h-[48px] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-foreground">Una solución profesional que genere resultados</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </button>
              <button onClick={() => handlePrioritySelect(false)} className="w-full glass-card-hover p-5 text-left group min-h-[48px] rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-muted-foreground">Lo más barato posible</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/50" />
                </div>
              </button>
            </div>
          </motion.div>
        );

      case "success":
        return (
          <motion.div key="success" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="text-center space-y-8">
            <div className="w-20 h-20 mx-auto glass-card rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground mb-4 heading-tight">
                Tu negocio califica para una Auditoría Técnica
              </h2>
              <p className="text-muted-foreground">
                Hemos verificado que cumples con los requisitos mínimos. El siguiente paso es agendar una auditoría técnica con nuestro equipo.
              </p>
            </div>
            <motion.a
              href="https://calendly.com/gcajour/auditoria-territorial"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5"
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Reservar Auditoría</span>
            </motion.a>
          </motion.div>
        );

      case "rejected":
        return (
          <motion.div key="rejected" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="text-center space-y-8">
            <div className="w-20 h-20 mx-auto glass-card rounded-2xl flex items-center justify-center">
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
          </motion.div>
        );
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={step !== "rejected" ? handleClose : undefined} />

      <motion.div
        className="relative w-full max-w-xl glass-card p-8 md:p-12 rounded-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: isExiting ? 0.95 : 1, opacity: isExiting ? 0 : 1 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {step !== "rejected" && step !== "success" && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground glass-card rounded-lg min-h-[48px] min-w-[48px] transition-colors duration-200"
          >
            ×
          </button>
        )}

        {step !== "welcome" && step !== "success" && step !== "rejected" && (
          <div className="mb-8">
            <div className="h-1 bg-white/[0.06] overflow-hidden rounded-full">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, hsla(220, 60%, 55%, 1), hsla(260, 60%, 55%, 1))' }}
                animate={{ width: step === "sector" ? "33%" : step === "revenue" ? "66%" : "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default GatekeeperForm;
