---
name: cine-torrijos-visual
description: Diseña, construye o mejora la demo web de Cine Torrijos en Astro y Tailwind manteniendo su identidad cinematográfica negra, roja y dorada. Usar cuando la tarea afecte al hero, header, cartelera, horarios, promociones, responsive, animaciones, accesibilidad, rendimiento o pulido visual de este repositorio. No usar para proyectos ajenos a Cine Torrijos.
---

# Cine Torrijos — implementación visual

Antes de editar código, leer `references/visual-system.md`.

## Objetivo

Construir una experiencia cinematográfica local, moderna y premium. La web debe sentirse diseñada específicamente para un cine de Torrijos, nunca como una plantilla SaaS, un tema de WordPress o una landing genérica.

## Fuentes de verdad

1. Los archivos existentes del repositorio.
2. Los assets reales de `public/images`.
3. Esta skill y su guía visual.
4. Las instrucciones concretas del usuario.

No inventar películas, horarios, promociones, precios, dirección, teléfono o textos legales cuando no estén proporcionados.

## Assets obligatorios

Usar los assets existentes antes de crear sustitutos:

- `/images/hero-desk.png`: hero para escritorio y tablet horizontal.
- `/images/hero-movil.png`: hero para móvil y tablet vertical cuando el recorte lo requiera.
- `/images/portada1.png`
- `/images/portada2.png`
- `/images/portada3.png`
- `/images/portada4.png`
- `/images/palomitas.png`: promoción Menú Torrijos.
- `/images/butaca.png`: promoción Día del Espectador.
- `/images/tarjeta.png`: promoción Fidelidad Cine Torrijos.

No deformar, recolorear, redibujar ni sustituir estos archivos salvo petición expresa. No añadir placeholders.

## Flujo de trabajo

1. Inspeccionar la estructura, `package.json`, estilos globales y componentes existentes.
2. Mantener Astro como base y Tailwind como sistema de estilos.
3. Definir o reutilizar tokens visuales antes de construir secciones.
4. Construir mobile-first y comprobar después tablet y escritorio.
5. Separar contenido repetido en datos y componentes reutilizables.
6. Implementar interacciones y animaciones solo cuando mejoren jerarquía, orientación o atmósfera.
7. Verificar compilación, responsive, accesibilidad visual y funcionamiento antes de finalizar.
8. Usar la skill de Playwright cuando esté disponible para revisar la web en navegador real.

## Reglas de composición

- El hero debe ser full-bleed, inmersivo y dominado por la imagen.
- Mantener una zona oscura y tranquila detrás del titular.
- Usar un único foco visual dominante por sección.
- Reservar las tarjetas para películas, horarios o promociones repetidas; no encerrar secciones completas en tarjetas.
- Evitar tarjetas dentro de tarjetas.
- Evitar grids genéricos de bloques idénticos.
- Alternar ritmos: hero amplio, franjas editoriales, cartelera escaneable y promociones más compactas.
- Mantener alineaciones firmes y una cuadrícula consistente.
- Los bordes redondeados deben ser contenidos; no usar cápsulas gigantes ni esquinas excesivamente suaves.

## Reglas de identidad

- Fondo principal negro carbón.
- Rojo cine para acción y énfasis.
- Dorado cálido para detalles premium, no como relleno dominante.
- Blanco roto para texto principal.
- Nada de morado, azul SaaS, neón tecnológico ni gradientes arcoíris.
- Nada de glassmorphism abundante.
- Nada de sombras difusas enormes.
- Nada de iconos inventados si existe un icono reconocible en la librería ya instalada.

## Hero responsive

Usar `<picture>` con ambos assets y conservar el foco visual:

```astro
<picture>
  <source media="(max-width: 767px)" srcset="/images/hero-movil.png" />
  <img
    src="/images/hero-desk.png"
    alt=""
    width="1672"
    height="941"
    fetchpriority="high"
    decoding="async"
  />
</picture>
```

- Escritorio: texto a la izquierda; pantalla y sala visibles a la derecha.
- Móvil: texto en el tercio superior o medio, sin tapar el foco de la pantalla.
- Añadir overlays mediante CSS, no editando la imagen.
- El hero debe ocupar aproximadamente `100svh` en escritorio y entre `88svh` y `100svh` en móvil.
- No usar un contenedor blanco ni una tarjeta central encima del hero.

## Responsive obligatorio

Revisar como mínimo:

- 360 × 800
- 390 × 844
- 768 × 1024
- 1024 × 768
- 1280 × 800
- 1440 × 900

Criterios:

- Sin scroll horizontal.
- Sin textos cortados.
- Sin botones fuera del viewport.
- Sin superposición entre header, titular y CTAs.
- Menú móvil accesible, bloqueando correctamente el scroll del fondo.
- Tipografía fluida con `clamp()`.
- Grid de cartelera: 1 columna móvil, 2 tablet, 4 escritorio cuando el contenido lo permita.
- Áreas táctiles de al menos 44 × 44 px.

## Astro y calidad técnica

- Priorizar componentes `.astro`.
- Usar JavaScript cliente únicamente donde exista interacción real.
- Mantener el contenido de películas y horarios en un archivo de datos.
- Usar HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Incluir estados `hover`, `focus-visible` y `active`.
- Respetar `prefers-reduced-motion`.
- Imágenes bajo el primer viewport: `loading="lazy"` y `decoding="async"`.
- Evitar CLS reservando dimensiones o proporciones.
- No introducir dependencias nuevas sin necesidad.
- Usar `pnpm`, no mezclar gestores.

## Movimiento

Movimiento recomendado:

- Entrada del header: desplazamiento corto y opacidad.
- Hero: aparición escalonada de eyebrow, titular, texto y CTAs.
- Cartelera: reveal breve al entrar en viewport.
- Posters: zoom interno muy sutil en hover.
- Botones: respuesta rápida de 160–240 ms.
- Menú móvil: transición clara, reversible y sin rebotes excesivos.

Evitar:

- Animar todos los elementos.
- Parallax intenso.
- Texto que tarda demasiado en ser legible.
- Animaciones que bloqueen interacción.
- Efectos continuos que distraigan.

## Verificación final

Antes de dar la tarea por terminada:

1. Ejecutar `pnpm build`.
2. Ejecutar `pnpm astro check` si está disponible.
3. Abrir la web y comprobar los seis viewports definidos.
4. Verificar navegación, menú móvil, CTAs y estados de foco.
5. Confirmar que todos los assets cargan desde `/images`.
6. Confirmar que no hay contenido inventado ni secciones genéricas.
7. Comparar visualmente con la identidad objetivo y corregir desviaciones.
