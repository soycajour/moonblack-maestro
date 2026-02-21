# Plan: Reestructuración SEO Completa (GEO + LLMO + SGO + SXO + SEO Local Avanzado)

## Resumen

Reestructurar el `index.html` y los componentes React para maximizar posicionamiento en:

- Buscadores clásicos (Google orgánico)
- Motores de búsqueda generativa (Google SGE, ChatGPT, Perplexity)
- Búsqueda por voz (Voice Search)
- SEO Local fuerte en Zona Este

Manteniendo:

- Estética ultra-dark intacta
- Tono agresivo high-converting
- Estructura de conversión actual
- Gatekeeper como único CTA

---

## 1. Head SEO Completo (index.html)

### Mantener y optimizar:

- Title optimizado con keyword + ubicación
- Meta description declarativa clara
- Open Graph completo
- Canonical
- Meta robots: index, follow
- Viewport (eliminar duplicado si existe)

### Agregar:

- `hreflang="es-DO"` en `<html>`
- Meta geo.region (DO-11)
- Meta geo.placename (Punta Cana, La Romana, Higüey)
- Meta geo.position (coordenadas aproximadas Zona Este)
- Script JSON-LD ProfessionalService
- Script JSON-LD FAQPage (al final del body)

---

## 2. Estructura Semántica H1-H2-H3

Reestructuración obligatoria:


| Sección            | Tag        | Contenido                                                                             |
| ------------------ | ---------- | ------------------------------------------------------------------------------------- |
| Hero               | H1 (único) | "Infraestructura de Captación para Contratistas de Techado en Punta Cana y La Romana" |
| Pain               | H2         | "Por qué los contratistas de techado en Zona Este pierden proyectos de alto margen"   |
| Solution           | H2         | "El nuevo modelo de captación para contratistas de techado en República Dominicana"   |
| Definition (NUEVA) | H2         | "Qué es una Infraestructura de Captación para Contratistas de Techado"                |
| SEO Local (NUEVA)  | H2         | "Cómo conseguir clientes de techado en Punta Cana"                                    |
| Results            | H2         | "Resultados en 30-60 días para contratistas de techado en República Dominicana"       |
| Cases              | H2         | "Casos de uso reales en Zona Este"                                                    |
| FAQ                | H2 + H3    | Cada pregunta será H3                                                                 |
| About              | H2         | "Exclusividad territorial para contratistas en Punta Cana, La Romana e Higüey"        |


---

## 3. Nueva Sección Independiente: DefinitionSection.tsx (GEO / LLMO)

⚠ Importante: NO debe ir dentro de SolutionSection.

Debe ser componente independiente.

### H2:

"Qué es una Infraestructura de Captación para Contratistas de Techado"

### Contenido:

- 100–120 palabras
- Estilo enciclopédico
- Declarativo
- Sin tono de venta
- Citable por IA
- Mencionar: Punta Cana, Zona Este, República Dominicana

Objetivo:  
Optimización para Google SGE y citabilidad en ChatGPT.

Se ubicará después de SolutionSection.

---

## 4. Nueva Sección: LocalSeoSection.tsx (SEO Local Contextual + Voice Search)

### H2:

"Cómo conseguir clientes de techado en Punta Cana"

### Contenido:

- 120–150 palabras
- Respuesta directa tipo Voice Search
- Incluir frase natural:  
"Si le preguntas a Google cómo conseguir clientes de techado en Punta Cana..."
- Mencionar naturalmente:  
Punta Cana, La Romana, Higüey, Zona Este, República Dominicana
- Tono profesional, no corporativo

Se posicionará entre DefinitionSection y ResultsSection.

---

## 5. Entity Reinforcement Layer (Refuerzo Estratégico)

En múltiples secciones agregar menciones naturales como:

- "Contratistas de techado en Punta Cana que facturan más de $15,000 USD al mes"
- "Empresas de techado en Zona Este con cuadrillas activas"
- "Negocios de techado en República Dominicana que buscan exclusividad territorial"

Objetivo:

- Reforzar perfil ideal
- Mejorar LLMO
- Mejorar intención comercial local
- Fortalecer segmentación algorítmica

No hacer keyword stuffing.

---

## 6. FAQ Reestructurada para SGO (FAQSection.tsx)

### H2 principal:

"Preguntas frecuentes sobre captación para contratistas de techado"

Cada pregunta será H3.

### Preguntas obligatorias:

- ¿Cuánto cuesta el marketing para techadores en República Dominicana?
- ¿Cómo filtrar clientes de techado que no tienen presupuesto?
- ¿Esto es publicidad tradicional?
- ¿Trabajan por comisión?
- ¿Qué pasa si ya hago anuncios?
- ¿Trabajan con más de un contratista por zona?

### Respuestas:

- 80–120 palabras máximo
- Claras
- Citables
- Sin relleno

Agregar Schema FAQPage JSON-LD en index.html.

---

## 7. Actualización de Secciones Existentes

### HeroSection.tsx

- H1 optimizado SEO
- Copy agresivo pasa debajo como párrafo destacado
- Mantener bullets y CTA al Gatekeeper
- Mantener geolocalización

---

### PainSection.tsx

- H2 con keyword + ubicación
- Mantener estructura actual
- Incluir menciones locales naturales

---

### SolutionSection.tsx

- H2 con keyword principal
- Mantener bullets actuales
- No incluir definición aquí

---

### ResultsSection.tsx

- H2 con mención República Dominicana
- Incluir referencia a Zona Este

---

### CaseStudiesSection.tsx

- H2 con mención Zona Este
- Mantener estructura

---

### AboutSection.tsx

- H2 con mención Punta Cana, La Romana, Higüey
- Refuerzo fuerte de exclusividad territorial
- Mantener CTA único al Gatekeeper

---

## 8. Schema JSON-LD (index.html)

Agregar al final del body:

### ProfessionalService

- name: MoonBlack Studios
- serviceType: Infraestructura de Captación para Contratistas de Techado
- areaServed:
  - Punta Cana
  - La Romana
  - Higüey
  - Zona Este
- priceRange: "$$$$"
- url
- description

---

### FAQPage

Incluir todas las preguntas del FAQ con sus respuestas exactas.

---

## 9. Orden Final de Secciones en Index.tsx

1. HeroSection (H1 geolocalizado)
2. PainSection (problema – intención comercial)
3. SolutionSection (mecanismo)
4. DefinitionSection (GEO independiente)
5. LocalSeoSection (SEO local contextual)
6. ResultsSection
7. CaseStudiesSection
8. FAQSection
9. AboutSection (exclusividad territorial)
10. Footer

---

## 10. Archivos a Modificar

- index.html
- src/components/HeroSection.tsx
- src/components/PainSection.tsx
- src/components/SolutionSection.tsx
- src/components/ResultsSection.tsx
- src/components/CaseStudiesSection.tsx
- src/components/FAQSection.tsx
- src/components/AboutSection.tsx
- src/pages/Index.tsx

---

## 11. Archivos a Crear

- src/components/DefinitionSection.tsx
- src/components/LocalSeoSection.tsx

---

## Principios Mantenidos

- Tono agresivo intacto
- Estética ultra-dark preservada
- Todos los CTAs siguen apuntando al Gatekeeper
- Copy de venta no diluido
- Bloques GEO/LLMO agregados como secciones complementarias
- No convertir la landing en blog
- Optimización sin sacrificar conversión