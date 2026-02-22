import { useEffect, useRef } from "react";
import { ArrowLeft, Shield, MapPin, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CheckoutZonaEste = () => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scriptId = "paypal-sdk-zona-este";
    if (document.getElementById(scriptId)) {
      renderButton();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AbBLxDPcmO9q-Pwybk_sxml-GhKcffgFeA6SqTcSZV69pLlQmhvppC6Y8WNASseU2NH9DBsxRVTcq9ue&vault=true&intent=subscription";
    script.setAttribute("data-sdk-integration-source", "button-factory");
    script.onload = renderButton;
    document.body.appendChild(script);

    function renderButton() {
      if (paypalRef.current && (window as any).paypal) {
        paypalRef.current.innerHTML = "";
        (window as any).paypal
          .Buttons({
            style: { shape: "pill", color: "gold", layout: "vertical", label: "paypal" },
            createSubscription: (_data: any, actions: any) =>
              actions.subscription.create({ plan_id: "P-7FF19778J0153804BNGNCPLY" }),
            onApprove: (data: any) => {
              navigate("/checkout/success?subscription=" + data.subscriptionID);
            },
          })
          .render(paypalRef.current);
      }
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>

        <div className="glass-card p-8 md:p-10 space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary text-xs font-medium uppercase tracking-widest">
              <Shield className="w-4 h-4" />
              MoonBlack Studios
            </div>
            <h1 className="text-2xl md:text-3xl font-light tracking-tight-custom text-foreground">
              Sistemas de Captación Inteligente
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              Punta Cana / Bávaro / Higüey
            </div>
          </div>

          <div className="h-px bg-border/50" />

          {/* Detalles */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Optimización de procesos, filtrado de leads cualificados y sistemas de automatización para contratistas de techado en la Zona Este.
            </p>

            <ul className="space-y-3">
              {[
                "Filtrado automático de leads",
                "Exclusividad territorial garantizada",
                "Infraestructura de captación activa 24/7",
                "Soporte y optimización continua",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-border/50" />

          {/* Precio */}
          <div className="flex items-baseline justify-between">
            <span className="text-muted-foreground text-sm">Suscripción mensual</span>
            <div className="text-right">
              <span className="text-3xl font-light text-foreground">$3,000</span>
              <span className="text-muted-foreground text-sm ml-1">USD/mes</span>
            </div>
          </div>

          <div className="h-px bg-border/50" />

          {/* PayPal */}
          <div ref={paypalRef} className="min-h-[150px] flex items-center justify-center">
            <div className="text-muted-foreground text-sm animate-pulse">Cargando método de pago...</div>
          </div>

          <p className="text-muted-foreground/60 text-xs text-center">
            Pago procesado de forma segura por PayPal. Puedes cancelar en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutZonaEste;
