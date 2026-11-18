# Norda · sitio web

Landing one-page de **Norda** (Río Cuarto, Córdoba): páginas web a medida y sistemas a medida.
Nordi y Agendi figuran solo como tabs "Pronto" con su página de Próximamente (`/nordi`, `/agendi`).
La versión anterior, con la sección completa de Nordi y sus planes, quedó en la rama `backup/con-nordi` y en la carpeta `backup-con-nordi/`.
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
- **`src/layouts/Layout.astro`**: head, header, menú mobile, footer y modales legales (compartidos por todas las páginas).
- **`src/pages/index.astro`**: el markup de la home y su JS de interacción.
- **`src/pages/nordi.astro`**, **`src/pages/agendi.astro`**: páginas de Próximamente (usan `src/components/ComingSoon.astro`).
  Las imágenes van en `public/img/nordi-preview.png` y `public/img/agendi-preview.png`; si no están, se ve un recuadro con degradado.
- **`src/styles/global.css`**: tokens del design system y estilos.
- Imágenes: hoy son placeholders rayados (componente `Placeholder`). Reemplazar por fotos reales.

## Pendientes

- Imagen para redes `og-norda.png` (1200×630).
- Textos legales: son un **borrador**, los tiene que revisar un profesional.
- Si se usa un dominio propio, cambiar `site` y quitar `base` en `astro.config.mjs`.
