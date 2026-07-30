## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Cine Torrijos — frontend

- Para cualquier tarea visual de esta web, usar primero `$cine-torrijos-visual`.
- Para composición, detalle visual y prevención de diseños genéricos, combinar con `$frontend-skill`.
- Antes de afirmar que la interfaz está terminada, usar `$playwright` para revisar responsive y comportamiento en navegador.
- Stack: Astro + Tailwind + pnpm.
- Usar siempre los assets reales de `public/images`; no crear placeholders.
- No inventar películas, horarios, promociones ni datos del negocio.
- Mantener la identidad negra, roja y dorada descrita por la skill del proyecto.
- Construir mobile-first y validar 360, 390, 768, 1024, 1280 y 1440 px.
- Hacer cambios reales en el repositorio; no limitarse a describirlos.
- Ejecutar `pnpm build` antes de finalizar.
