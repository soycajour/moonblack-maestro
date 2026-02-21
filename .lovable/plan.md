

## Plan: Actualizar copy completo de la landing page

### Cambios por componente

**1. HeroSection.tsx**
- Quitar el indicador de "Scroll" (lineas 52-57)
- Nuevo titular: "Tu web actual esta dejando pasar proyectos de 6 cifras."
- Nuevo subtitular con el copy de filtrado
- Agregar subtexto: "Infraestructura de Captura Premium para contratistas de techado en Punta Cana y La Romana."
- Agregar dos bullet points antes del CTA: "Elimina visitas de cortesia" y "Agenda solo proyectos con presupuesto validado"
- CTA: "Iniciar Protocolo de Seleccion"

**2. PainSection.tsx - Renombrar a "El Viejo Modelo"**
- Reemplazar el bloque de texto unico por una lista de pain points:
  - Publicar fotos esperando que llegue el cliente correcto
  - Depender de referidos impredecibles
  - Competir por precio con contratistas mas baratos
  - Enviar cotizaciones que nadie responde
  - Ir a 10 visitas para cerrar 1... si acaso
  - Cuadrillas paradas drenando nomina
- Cierre: "Mucho movimiento. Poco margen. Cero control."

**3. SolutionSection.tsx - Renombrar a "El Nuevo Modelo (MoonBlack System)"**
- Titular: "No hacemos paginas bonitas."
- Subtitulo: "Instalamos Infraestructura de Captura y Filtrado."
- Reemplazar las 3 tarjetas por una lista de 6 bullets del sistema
- Cierre: "No es marketing tradicional. Es control de calidad comercial."

**4. Nuevas secciones a crear:**

- **ResultsSection.tsx** - "Resultados en 30-60 dias" con los 6 puntos de resultados
- **CaseStudiesSection.tsx** - "Casos de Uso" con 3 contratistas (A, B, C)
- **FAQSection.tsx** - 4 preguntas frecuentes usando componente Accordion
- **AboutSection.tsx** - "Sobre MoonBlack Studios" con copy de exclusividad y CTA final "Acceder al Protocolo"

**5. QualificationSection.tsx** - Eliminar (reemplazado por AboutSection con el mismo concepto de desapego)

**6. Index.tsx** - Actualizar imports y orden de secciones:
Hero -> PainSection -> SolutionSection -> ResultsSection -> CaseStudiesSection -> FAQSection -> AboutSection -> Footer

**7. Footer.tsx** - Actualizar copy a "Infraestructura de Captura Premium para Contratistas"

### Detalles tecnicos
- Las nuevas secciones seguiran los mismos patrones de estilo: `glass-card`, `text-gradient`, labels con linea + texto uppercase
- FAQ usara el componente Accordion de Radix ya existente
- Todos los CTAs apuntaran a `onCtaClick` para abrir el formulario Gatekeeper
- Se mantiene la estetica ultra-dark con acentos mint green

