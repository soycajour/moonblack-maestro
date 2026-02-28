

## Plan: Refactorizacion Estetica Total - Protocolo Rojo/Negro Enterprise

### Resumen

Transformacion visual completa: eliminar toda la paleta verde menta, adoptar esquema negro puro + blanco + rojo sangre como unico acento tactico. Reestructurar el Hero Section para incluir VSL (Loom video) y reducir drasticamente la carga cognitiva eliminando secciones de ruido.

---

### 1. Paleta de Colores (`src/index.css`)

Reemplazar todos los tokens de color:

- `--primary`: cambiar de `160 60% 45%` (verde menta) a `0 100% 50%` (rojo #FF0000)
- `--primary-foreground`: mantener `0 0% 100%` (blanco) para contraste sobre rojo
- `--accent`: cambiar a `0 100% 25%` (rojo oscuro)
- `--accent-foreground`: cambiar a `0 100% 70%`
- `--ring`: cambiar a `0 100% 50%`
- Eliminar tokens `--mint`, `--mint-glow` o reasignarlos a rojo
- Eliminar `--gradient-mesh`, `--gradient-glow` (reemplazar por negro puro)
- Eliminar `--shadow-glow` (sin brillos)
- Eliminar animaciones `pulse-glow` y `float` (ruido visual)
- `--radius`: cambiar a `0` (bordes cuadrados absolutos)

Actualizar `.text-gradient` para que sea blanco puro sin degradado.
Eliminar `.text-gradient-mint`.
Eliminar `.mesh-bg` y `.glow-effect`.

Actualizar `.btn-primary`:
- Fondo negro, borde 2px rojo, texto blanco mayusculas
- `border-radius: 0`
- Hover: fondo rojo (#FF0000), texto blanco
- Active: `transform: scale(0.95)`, transicion 200ms
- Eliminar `::before` pseudo-elemento

Actualizar `.btn-outline`:
- Borde rojo en hover
- `border-radius: 0`

Actualizar `.glass-card`:
- `border-radius: 0`
- Eliminar backdrop-blur o reducir

Fuente: Agregar peso 700/800 al import de Inter para titulos Extra-Bold.

### 2. Hero Section (`src/components/HeroSection.tsx`)

Reestructuracion completa del contenido:

- Eliminar badge "MoonBlack Studios"
- Eliminar orbes flotantes (gradient orbs)
- Eliminar mesh-bg
- Eliminar bullet points de Check
- Eliminar parrafos intermedios (copy agresivo, subheadline, subtexto geolocalizado)

Nuevo contenido del Hero (de arriba a abajo):

1. **H1** (mantener tag `<h1>`): "INFRAESTRUCTURA DE VENTAS PARA CONTRATISTAS DE TECHOS EN HIGUEY, PUNTA CANA Y LA ROMANA."
   - Estilo: uppercase, font-extrabold, tracking tight, blanco puro, sin text-gradient

2. **Subtitulo** (`<p>`): "Filtramos curiosos. Te entregamos clientes listos para blindar su propiedad contra huracanes y salitre. Cero paja."

3. **VSL Video embed** (Loom iframe):
   - Container con `max-width: 800px`, centrado, aspect ratio 16:9
   - Borde 2px solid `#333`
   - Iframe src: `https://www.loom.com/embed/941199bcd3d84a03a16ab401f34cbe89`

4. **CTA Button**: "INICIAR PROTOCOLO DE SELECCION"
   - Usa clase `btn-primary` actualizada (negro, borde rojo, hover rojo)
   - Sin icono ArrowRight
   - Sin `animate-pulse-glow`

5. **Advertencia** (`<p>`): "No somos una ONG. Solo para negocios que facturan +$5k/mes y entienden que su tiempo vale dinero."
   - Estilo: texto pequeno, muted, sin decoracion

### 3. Eliminacion de Secciones en Index.tsx

Eliminar del layout:
- `PainSection` (seccion "Una web tradicional es un folleto muerto")
- `SolutionSection` (bullets genericos)
- `DefinitionSection`
- `LocalSeoSection`
- `ResultsSection`
- `CaseStudiesSection`

Mantener:
- HeroSection (reestructurado)
- FAQSection
- AboutSection
- Footer
- GatekeeperForm

Orden final: Hero -> FAQ -> About -> Footer

### 4. Navegacion (`src/pages/Index.tsx`)

Actualizar nav:
- Eliminar `bg-primary/20` del logo (usar rojo o blanco)
- `btn-outline` del nav: borde cuadrado, hover rojo
- `border-radius: 0` en todos los elementos

### 5. Componentes secundarios actualizados

**FAQSection.tsx**: Los colores `text-primary` ahora seran rojo automaticamente por el cambio de tokens. No requiere cambios de markup.

**AboutSection.tsx**: Mismo efecto automatico. El CTA usara `btn-primary` actualizado.

**Footer.tsx**: El `bg-primary/20` del logo cambiara a rojo automaticamente.

**GatekeeperForm.tsx**: Los colores primary cambian a rojo automaticamente. Los `glass-card` tendran `border-radius: 0`.

### 6. Tailwind Config (`tailwind.config.ts`)

- Eliminar colores `mint` y `smoke` custom
- Actualizar si es necesario para reflejar nueva paleta

---

### Archivos a modificar

- `src/index.css` - Paleta completa, botones, utilidades
- `src/components/HeroSection.tsx` - Reestructuracion total del Hero
- `src/pages/Index.tsx` - Eliminar secciones, simplificar layout
- `tailwind.config.ts` - Limpiar colores custom

### Archivos que se actualizan automaticamente (por cambio de tokens CSS)

- FAQSection, AboutSection, Footer, GatekeeperForm (no requieren edicion manual)

### Archivos que quedan sin uso (pero no se eliminan para preservar SEO)

- PainSection.tsx, SolutionSection.tsx, DefinitionSection.tsx, LocalSeoSection.tsx, ResultsSection.tsx, CaseStudiesSection.tsx (se eliminan del import en Index.tsx)

### Checklist de autoverificacion

- [ ] Cero verde/menta en toda la interfaz
- [ ] Rojo usado SOLO en CTAs y elementos de conversion
- [ ] Border-radius 0 en todos los elementos
- [ ] Transiciones < 400ms, cortes secos
- [ ] VSL embebido y visible antes de cualquier CTA
- [ ] H1 mantiene tag semantico (solo cambia contenido y estilo)
- [ ] Advertencia visible debajo del CTA
- [ ] Mobile friendly (min 48x48px en CTAs)
