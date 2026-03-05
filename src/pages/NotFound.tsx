import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SEOHead
        title="Página No Encontrada | MoonBlack Studios"
        description="La página que buscas no existe. Vuelve a la página principal de MoonBlack Studios para explorar nuestros servicios de captación para techadores."
      />
      <main className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Página no encontrada</p>
        <a
          href="/"
          className="text-primary underline hover:text-primary/90"
          title="Volver a la página principal de captación para techadores"
        >
          Volver al inicio
        </a>
      </main>
    </div>
  );
};

export default NotFound;
