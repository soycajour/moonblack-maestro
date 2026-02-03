import { Check, X } from "lucide-react";

interface QualificationSectionProps {
  onCtaClick: () => void;
}

const QualificationSection = ({ onCtaClick }: QualificationSectionProps) => {
  const forYou = [
    "Facturas +$5k/mes de forma consistente",
    "Entiendes que tu tiempo vale más que el código de una página",
    "Buscas resultados, no promesas"
  ];

  const notForYou = [
    "Buscas \"lo más barato\"",
    "Crees que una web es un gasto, no una inversión",
    "No tienes tracción económica todavía"
  ];

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-primary/50" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Cualificación</span>
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter-custom text-gradient">
            No trabajamos con cualquiera.
          </h2>
        </div>

        {/* Qualification cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {/* For you */}
          <div className="glass-card p-8 border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground">Para ti si:</h3>
            </div>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="glass-card p-8 border-destructive/20 bg-destructive/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-medium text-foreground">No pierdas el tiempo si:</h3>
            </div>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/60">
                  <X className="w-5 h-5 text-destructive/70 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-6 border-t border-destructive/10 text-sm text-muted-foreground italic">
              No somos una ONG.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onCtaClick}
            className="btn-primary inline-flex items-center gap-3 text-lg"
          >
            <span>Iniciar Protocolo de Selección</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
