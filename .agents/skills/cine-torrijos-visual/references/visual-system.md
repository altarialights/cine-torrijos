# Sistema visual — Cine Torrijos

## Personalidad

Cinematográfico, local, inmersivo, elegante, moderno y accesible. Debe comunicar la emoción de ir al cine sin parecer antiguo, barroco o excesivamente lujoso.

Palabras guía:

- sala oscura
- terciopelo rojo
- luz cálida
- estreno
- gran pantalla
- emoción compartida
- Torrijos

## Tokens recomendados

Definirlos como variables CSS y conectarlos con Tailwind cuando sea útil:

```css
:root {
  --cinema-bg: #050607;
  --cinema-surface: #0b0d0f;
  --cinema-surface-raised: #111316;
  --cinema-red: #d62f38;
  --cinema-red-dark: #7f1016;
  --cinema-gold: #d8a63c;
  --cinema-gold-soft: #f0c96c;
  --cinema-text: #f5f1e8;
  --cinema-muted: #aaa59b;
  --cinema-line: rgba(216, 166, 60, 0.22);
  --cinema-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
}
```

Uso:

- `--cinema-bg`: fondo general.
- `--cinema-surface`: tarjetas de cartelera y franjas oscuras.
- `--cinema-red`: CTA principal, selección activa y horarios destacados.
- `--cinema-gold`: iconos, líneas, microdetalles y CTA secundario.
- `--cinema-text`: títulos y texto principal.
- `--cinema-muted`: descripciones y metadatos.

No usar el dorado como fondo de grandes superficies.

## Tipografía

Dirección recomendada:

- Display: `Bebas Neue`, `Oswald` o una sans condensada equivalente.
- Interfaz y cuerpo: `Manrope`, `DM Sans` o la fuente sans ya establecida en el proyecto.

Reglas:

- Titular hero: mayúsculas, compacto, fuerte, con `clamp(3.4rem, 8vw, 8rem)`.
- No usar más de dos familias.
- Mantener cuerpo entre 16 y 18 px.
- No abusar del tracking en párrafos.
- El dorado puede aparecer en una palabra o línea del titular, no en todo el texto.

## Espaciado

- Ancho máximo de contenido: 1200–1320 px.
- Padding lateral: `clamp(1rem, 4vw, 4.5rem)`.
- Separación vertical de secciones: `clamp(4.5rem, 9vw, 9rem)`.
- Separación entre tarjetas: 16–24 px.
- Radio habitual: 10–16 px.
- Radio de botones: 8–12 px o forma ligeramente rectangular; evitar píldoras genéricas.

## Header

- Posición absoluta sobre el hero al inicio.
- Fondo transparente o negro con opacidad al hacer scroll.
- Logo/nombre a la izquierda.
- Navegación clara en escritorio.
- CTA de entradas visible, pero no compitiendo con el hero.
- En móvil, menú hamburguesa funcional con overlay oscuro completo o panel lateral bien definido.
- Incluir `aria-expanded`, `aria-controls`, cierre con Escape y restauración del foco.

## Hero

Composición:

- Imagen a sangre.
- Gradiente negro desde la izquierda para legibilidad.
- Gradiente inferior para conectar con la sección siguiente.
- Eyebrow pequeño en dorado o rojo.
- Titular principal blanco roto con una línea o palabra en color cálido.
- Máximo dos CTAs.
- Tres beneficios pequeños solo si caben sin saturar.

Overlays sugeridos:

```css
background:
  linear-gradient(90deg, rgba(0,0,0,.94) 0%, rgba(0,0,0,.72) 32%, rgba(0,0,0,.16) 67%, rgba(0,0,0,.08) 100%),
  linear-gradient(0deg, #050607 0%, rgba(5,6,7,0) 28%);
```

En móvil, usar un gradiente vertical adicional para separar texto e imagen.

## Cartelera

- Posters protagonistas.
- Ratio vertical consistente.
- Información debajo o superpuesta solo sobre una base oscura sólida.
- Título, género/edad y duración visibles.
- Horarios como botones compactos o chips, no como cápsulas decorativas sin función.
- El horario seleccionado puede usar rojo.
- Hover: elevar 2–4 px, iluminar borde y ampliar imagen 1.02–1.04.
- No esconder información esencial exclusivamente en hover.

## Promociones

Usar los assets transparentes:

- `palomitas.png`
- `butaca.png`
- `tarjeta.png`

Composición preferida:

- Fondo oscuro con degradado rojo/dorado muy controlado.
- Objeto visual en un lado.
- Texto y CTA en el otro.
- Cada promoción debe tener una silueta y ritmo diferentes.
- No repetir tres tarjetas idénticas si una franja editorial o grid asimétrico mejora la narrativa.

## Botones

Primario:

- Fondo rojo.
- Texto blanco.
- Hover ligeramente más luminoso.
- Sombra corta y controlada.

Secundario:

- Fondo transparente.
- Borde dorado.
- Texto dorado o blanco roto.
- Hover con fondo dorado muy tenue.

Estados:

- `focus-visible` claramente perceptible.
- `disabled` con contraste suficiente y cursor correcto.
- Iconos alineados y con tamaño coherente.

## Iconografía

- Línea simple.
- Grosor consistente.
- Rojo o dorado según jerarquía.
- No mezclar iconos rellenos, 3D y outline en la misma zona.
- Usar la librería existente; no dibujar SVG improvisados.

## Copy visual

Tono directo, emocional y local:

- «Vive el cine en Torrijos»
- «Tu cine, tu momento, tus historias»
- «Hoy en cartelera»
- «Próximos estrenos»
- «Elige tu sesión»

No usar frases de SaaS como «revoluciona tu experiencia», «solución integral» o «descubre el futuro».
