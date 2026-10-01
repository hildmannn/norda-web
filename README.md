# Norda · sitio web

Landing one-page de **Norda** (Río Cuarto, Córdoba): páginas web a medida, sistemas a medida y Nordi.
Hecha con [Astro](https://astro.build) (sitio estático) a partir del diseño de Claude Design.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321/norda-web
npm run build    # genera dist/
```

Cada push a `main` se publica solo en GitHub Pages (`.github/workflows/deploy.yml`).

## Dónde cambiar las cosas

- **`src/data/site.ts`**: número de WhatsApp, email, horario, fecha legal, textos de FAQ, planes, equipo, etc.
  Los placeholders `549XXXXXXXXXX`, `[EMAIL]`, `[HORARIO]` y `[FECHA]` se reemplazan ahí y se actualiza todo el sitio.
- `SHOW_PROYECTOS` (en el mismo archivo) prende la sección Proyectos. También se puede ver con `?proyectos=1`.
- **`src/pages/index.astro`**: el markup de la página y el JS de interacción.
- **`src/styles/global.css`**: tokens del design system y estilos.
- Imágenes: hoy son placeholders rayados (componente `Placeholder`). Reemplazar por fotos reales.

## Pendientes

- Imagen para redes `og-norda.png` (1200×630).
- Textos legales: son un **borrador**, los tiene que revisar un profesional.
- Si se usa un dominio propio, cambiar `site` y quitar `base` en `astro.config.mjs`.
