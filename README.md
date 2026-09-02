# Personal Portfolio

A single-page professional portfolio built with **React** and **Vite**.
Designed for an academic assignment: lightweight, accessible, responsive, and
production-optimized.

## Tech Stack

- **React 19** — functional components, hooks, `lazy()`/`Suspense`
- **Vite 8** — dev server, build, code splitting, asset hashing
- **CSS** — design tokens (variables), responsive Flexbox/Grid, media queries,
  no UI framework
- **oxlint** — fast linting

No UI library, no router, no image library, no CSS framework. Total below-fold
JS payload (lazy chunks combined) is ~12 kB raw.

## Sections

Navbar, Hero, About, Skills, Projects, Resume, Contact, Footer.

## Development Process

1. **Scaffold** — `npm create vite@latest portfolio -- --template react`
2. **Architecture** — planned a component-based structure under `src/components/`
   with one CSS file per component.
3. **Content placeholders** — created all components first with simple markup so
   the layout could be wired up end-to-end.
4. **Styling pass 1** — replaced Vite's default styles with a minimal reset
   and section/page chrome.
5. **Responsive design** — added media queries at 1920 / 1440 / 1024 / 768 /
   480 / 375 using Flexbox + Grid; replaced fixed widths with `minmax(0, 1fr)`
   to prevent grid blowout.
6. **Visual polish** — introduced a design-token system in `index.css`
   (colors, spacing scale, radii, shadows, typography, motion), then applied it
   across every component for consistency.
8. **Images** — added three SVG project placeholders, inlined as imports;
   configured `loading="lazy"`, `decoding="async"`, `width`/`height`, and
   `aspect-ratio: 16/9` wrapper to prevent CLS.
9. **Code splitting** — converted five below-the-fold components to
   `React.lazy()` inside a single `<Suspense>` boundary with an accessible
   spinner fallback. Verified Vite produced one JS+CSS chunk per section.
10. **Production optimization** — removed two stray TypeScript `@types/*`
    devDeps (no TS in project), reordered imports for clarity, added
    `description` and `theme-color` meta tags. Verified `npm run build` and
    `npm run preview`.
11. **Deployment readiness** — `vite.config.js` now reads an optional
    `VITE_BASE_PATH` env var so the same build can target Vercel/Netlify
    (root) or GitHub Pages (`/portfolio/`).

## Run Locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # serves dist/ on http://localhost:4173
```

## Deployment Process

### Vercel (zero-config, recommended)

1. Push the repo to GitHub.
2. Import the repository at https://vercel.com/new.
3. Vercel auto-detects Vite. Build command: `npm run build`. Output dir: `dist`.
4. Deploy. Custom domain + SSL: Project Settings → Domains → add your domain;
   Vercel provisions Let's Encrypt SSL automatically.

### Netlify

1. Push to GitHub.
2. Import at https://app.netlify.com/start.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Custom domain + SSL: Domain settings → add domain → Netlify provisions SSL.

### GitHub Pages (project site at `<user>.github.io/portfolio`)

1. Build with the base path:
   ```bash
   npm run build -- --base=/portfolio/
   ```
   (Vite 8 honors the CLI flag, or set `VITE_BASE_PATH=/portfolio/` in CI.)
2. Push `dist/` to the `gh-pages` branch:
   ```bash
   npx gh-pages -d dist
   ```
3. In GitHub repo settings → Pages, select the `gh-pages` branch.
4. Custom domain: add a `CNAME` file containing your domain in `public/` and
   configure DNS. GitHub provisions SSL via Let's Encrypt.

## Challenges & Solutions

| Challenge | Solution |
|---|---|
| Vite default scaffold had heavy branding assets and demo code | Replaced `App.jsx`, `App.css`, `index.css`; deleted `hero.png`, `react.svg`, `vite.svg` |
| Default Vite CSS used a fixed `#root` width that broke responsive design | Removed fixed widths; added `min-height: 100vh` and full-width container |
| Grid items could overflow on small viewports due to intrinsic min-content | Used `minmax(0, 1fr)` instead of `minmax(280px, 1fr)` for grid tracks |
| Sticky navbar overlapped anchor scroll targets | Added `html { scroll-padding-top: 72px }` so anchored sections clear the navbar |
| Images could cause Cumulative Layout Shift (CLS) | Set explicit `width`/`height` on `<img>` + `aspect-ratio` wrapper + `object-fit: cover` |
| Multi-line template strings inside template literals broke the Vite parser | Replaced implicit multi-line strings with single-line strings |
| Below-fold JS shipping wasted initial bandwidth | Wrapped About/Projects/Skills/Resume/Contact in `React.lazy()` with one `<Suspense>` boundary |
| No accessible loading fallback for lazy chunks | Created `SectionFallback` with `role="status"`, `aria-live="polite"`, and a visually-hidden "Loading section" message; respects `prefers-reduced-motion` |
| TypeScript `@types/*` devDeps installed but no TS files | Removed `@types/react` and `@types/react-dom` |
| Asset URLs would 404 on GitHub Pages subpath | Added optional `base` config in `vite.config.js` reading `VITE_BASE_PATH` |

## Browser Support

Tested manually in modern Chrome, Edge, and Firefox. Safari-specific
considerations:

- `backdrop-filter` is used on the sticky navbar; Safari supports it natively
  and the `-webkit-` prefix is included for older versions.
- `aspect-ratio` is supported in Safari 15+.

If targeting older browsers, add PostCSS `autoprefixer` (not currently needed
for the target audience of a portfolio site).

## Responsive Validation

Layout verified at: 1920, 1440, 1024, 768, 480, 375 px. No horizontal overflow
at any breakpoint. `overflow-x: hidden` is set on `html`, `body`, and `#root`
as a safety net.

## License

MIT (academic assignment — free to adapt).