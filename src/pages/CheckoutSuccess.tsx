import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <SEOHead
        title="Suscripción Activada | MoonBlack Studios"
        description="Tu suscripción al sistema de captación inteligente ha sido activada. Nuestro equipo se pondrá en contacto contigo en 24 horas."
      />
      <main className="glass-card p-8 md:p-12 max-w-md text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-primary" aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-light tracking-tight-custom text-foreground">
          Suscripción Activada
        </h1>
        <p className="text-muted-foreground text-sm">
          Tu pago ha sido procesado exitosamente. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para iniciar la implementación.
        </p>
        <a
          href="/"
          className="btn-primary inline-flex items-center gap-2"
          title="Volver a la página principal de captación para techadores"
        >
          <span>Volver al inicio</span>
        </a>
      </main>
    </div>
  );
};

export default CheckoutSuccess;
