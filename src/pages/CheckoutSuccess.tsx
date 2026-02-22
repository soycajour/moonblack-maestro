import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="glass-card p-8 md:p-12 max-w-md text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center glow-effect">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-2xl font-light tracking-tight-custom text-foreground">
          Suscripción Activada
        </h1>
        <p className="text-muted-foreground text-sm">
          Tu pago ha sido procesado exitosamente. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para iniciar la implementación.
        </p>
        <button onClick={() => navigate("/")} className="btn-primary inline-flex items-center gap-2">
          <span>Volver al inicio</span>
        </button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
