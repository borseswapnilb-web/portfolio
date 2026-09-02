# React Portfolio Website

A single-page professional portfolio built with **React** and **Vite**.
Designed as an academic assignment: lightweight, accessible, responsive, and
production-optimized.

## Project Overview

This project is a personal developer portfolio that introduces the author,
shows selected projects, lists skills, links to a resume, and provides a
contact form. It is a single-page application — no routing library — using
smooth-scroll anchor navigation between sections.

The implementation focuses on:

- A clean component-based React structure.
- Responsive layout that works from 375 px (small mobile) up to 1920 px (large
  desktop).
- Production-grade performance: lazy-loaded components, lazy-loaded images,
  Vite code-splitting, and a minified production build.
- Accessibility: semantic HTML, accessible labels, keyboard focus states,
  reduced-motion support.

## Features

- Sticky responsive **Navbar** with mobile hamburger menu.
- **Hero** section with name, role, short bio, and two calls-to-action.
- **About** section with two short paragraphs and a highlights list.
- **Skills** section with seven skill cards (HTML, CSS, JavaScript, React,
  Git, GitHub, Responsive Design).
- **Projects** section with three cards — title, description, technology
  pills, GitHub link, Live Demo link, and a preview image.
- **Resume** section with View and Download buttons.
- **Contact** section with a frontend-only validated form (name, email,
  message).
- **Footer** with copyright and social/email links.
- Smooth-scroll anchor navigation between every section.
- Accessible loading spinner fallback for lazy components.
- `prefers-reduced-motion` respected globally.

## Technologies Used

- **React 19** (`react`, `react-dom`) — functional components, hooks,
  `lazy()`/`Suspense`.
- **Vite 8** — dev server, production build, asset hashing, code splitting.
- **@vitejs/plugin-react** — React Fast Refresh in dev, JSX transform in build.
- **oxlint** — fast linter.
- **CSS** — design tokens via CSS variables, Flexbox + Grid layouts,
  responsive media queries. No CSS framework, no UI library, no router, no
  image library.

## Project Structure

```
portfolio/
├── index.html              # HTML entry; <meta>, <title>, mount point
├── package.json            # Scripts + dependencies
├── vite.config.js          # Vite config (supports VITE_BASE_PATH)
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx            # React root + <StrictMode>
    ├── App.jsx             # Composition root; lazy() + <Suspense>
    ├── App.css             # Section chrome, buttons, fallback spinner
    ├── index.css           # Design tokens, reset, focus rings, reduced-motion
    ├── assets/
    │   ├── project-task-tracker.svg
    │   ├── project-weather-dashboard.svg
    │   └── project-portfolio.svg
    ├── data/
    │   └── projects.js     # Centralized project content
    └── components/
        ├── Navbar.jsx   + Navbar.css
        ├── Hero.jsx     + Hero.css
        ├── About.jsx    + About.css
        ├── Skills.jsx   + Skills.css
        ├── Projects.jsx + Projects.css
        ├── Resume.jsx   + Resume.css
        ├── Contact.jsx  + Contact.css
        └── Footer.jsx   + Footer.css
```

Each component owns its CSS file. The design system (colors, spacing, radii,
shadows, typography, motion) is centralized in `src/index.css` and consumed
throughout via CSS variables.

## Installation

```bash
npm install
```

## Development

Start the Vite dev server with Hot Module Replacement:

```bash
npm run dev
```

The app is served at <http://localhost:5173>.

## Production Build

Generate the optimized production bundle into `dist/`:

```bash
npm run build
```

Output is a static folder containing hashed JS and CSS files ready for any
static host.

## Local Production Testing

Serve the production build locally to verify behavior end-to-end:

```bash
npm run preview
```

The production build is served at <http://localhost:4173>.

## Performance Optimization

### Lazy-loaded images

Project images use the native HTML `loading="lazy"` attribute so the browser
defers fetching them until they approach the viewport. Each `<img>` also
sets `decoding="async"`, an explicit `width`/`height` (640×360), and is
wrapped in a container with `aspect-ratio: 16/9` so the layout reserves
the correct space and never shifts when the image arrives.

### React.lazy()

Five below-the-fold sections are loaded on demand:

- `About`
- `Skills`
- `Projects`
- `Resume`
- `Contact`

Each is wrapped in `React.lazy(() => import('./components/X'))`. `Navbar`,
`Hero`, and `Footer` remain eagerly imported because they are above the
fold (or trivially small) and must be available immediately.

### Suspense

A single `<Suspense fallback={<SectionFallback />}>` boundary wraps all
five lazy components. The fallback renders a small spinner with
`role="status"`, `aria-live="polite"`, and a visually-hidden "Loading
section" message for screen readers. Its CSS animation is disabled under
`prefers-reduced-motion`.

### Vite production build

`npm run build` runs Vite's production pipeline:

- ES module bundling and tree-shaking.
- Built-in minification for JavaScript and CSS (no extra plugin required).
- Hashed asset filenames (`index-wLfNRrKW.js`,
  `Projects-BWdaPplz.js`, etc.) for cache busting.
- One JS + one CSS chunk per lazy section.
- SVG assets under a small size threshold are inlined as base64 `data:`
  URIs to eliminate extra network requests.

### JavaScript / CSS optimization

- Main JS payload: ~195 kB raw / ~62 kB gzip (React 19 + eagerly imported
  components).
- Below-fold lazy JS payload combined: ~12 kB raw / ~5 kB gzip — loaded on
  demand.
- CSS is split per component. The shared base CSS is ~7.5 kB raw
  (~2.2 kB gzip); each section CSS is ≤ 2 kB.
- Unused dependencies were pruned (no UI framework, no router, no image
  library). Stray `@types/react` and `@types/react-dom` devDeps were
  removed because no TypeScript files exist.
- `vite.config.js` reads an optional `VITE_BASE_PATH` environment variable
  so the same project can be deployed at the root of a domain or under a
  subpath (e.g. GitHub Pages) without source changes.

## Responsive Design

The layout was validated at the following breakpoints using browser
DevTools device-mode:

| Class         | Widths verified     |
|---------------|---------------------|
| Large desktop | 1920 px             |
| Desktop       | 1440 px             |
| Laptop        | 1024 px             |
| Tablet        | 768 px              |
| Mobile        | 480 px              |
| Small mobile  | 375 px              |

Implementation details:

- A single source-of-truth typography scale uses `clamp()` so headings and
  body text scale fluidly.
- Section padding scales with the viewport via media queries at 1600 /
  1024 / 768 / 480 / 375 px.
- Project and skill grids use `minmax(0, 1fr)` (not `minmax(280px, 1fr)`)
  so they never exceed their container at narrow widths; explicit media
  queries collapse the columns from many → 2 → 1 at small viewports.
- The navbar collapses to a hamburger menu below 768 px.
- `html`, `body`, and `#root` all set `overflow-x: hidden` as a safety
  net against accidental horizontal scroll.
- Hero CTAs, Resume buttons, and the contact form inputs all reach a
  usable size and full-width layout on small phones.
- `scroll-padding-top` is set on `html` so sticky-navbar anchor scrolling
  never hides the section title behind the bar.

## Testing

### Functional testing

- `npm run dev` boots the app; every section renders, every anchor scrolls
  to the correct section, the contact form validates required fields and
  displays a status message, and the mobile hamburger toggles correctly.
- `npm run build` completes without errors.
- `npm run preview` serves the built bundle; all asset URLs return 200 with
  correct MIME types (`text/javascript`, `text/css`, `image/svg+xml`).

### Responsive testing

- Visual checks via DevTools device-mode at 1920 / 1440 / 1024 / 768 /
  480 / 375 px.
- Verified no horizontal scroll at any breakpoint.
- Verified that the sticky navbar does not overlap section titles after
  anchor jumps.

### Browser testing

The build targets modern evergreen browsers (Chrome, Edge, Firefox,
Safari 15+). Manual verification has been performed in Chrome and Edge
during development. Safari-specific considerations are documented in the
project history; `backdrop-filter` on the navbar uses both standard and
`-webkit-` prefixes.

### Production build testing

`npm run build` succeeds and produces:

- `dist/index.html`
- `dist/assets/index-*.js` + `dist/assets/index-*.css` (main bundle)
- `dist/assets/{About,Skills,Projects,Resume,Contact}-*.js` + matching
  `.css` (one lazy chunk per section)
- `dist/favicon.svg`, `dist/icons.svg`

No errors, no warnings during transformation.

## Deployment

The project is a static site. Any of the following hosts work.

### Vercel (recommended)

1. Push this repository to GitHub.
2. Import the repository at <https://vercel.com/new>.
3. Vercel auto-detects Vite. Build command: `npm run build`. Output
   directory: `dist`.
4. Click **Deploy**.

### Netlify

1. Push this repository to GitHub.
2. Import at <https://app.netlify.com/start>.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy**.

### GitHub Pages (project site at `<user>.github.io/<repo>`)

1. Build with the project subpath as base:
   ```bash
   npm run build
   ```
   with a `.env` file containing `VITE_BASE_PATH=/<repo>/` (or
   `VITE_BASE_PATH=/<repo>/ npm run build`).
2. Publish `dist/` to the `gh-pages` branch:
   ```bash
   npx gh-pages -d dist
   ```
3. In GitHub repository settings → Pages, choose the `gh-pages` branch.

## Custom Domain and HTTPS

All three hosts above support custom domains and HTTPS out of the box:

- **Vercel**: Project Settings → Domains → add your domain. Vercel
  provisions a Let's Encrypt certificate automatically.
- **Netlify**: Domain Settings → add domain → Netlify provisions SSL.
- **GitHub Pages**: Repository Settings → Pages → Custom domain. Add a
  `CNAME` file containing the domain in `public/` before building. GitHub
  provisions a Let's Encrypt certificate automatically once DNS is
  verified.

## Challenges and Solutions

| Challenge | Solution |
|---|---|
| Vite's default scaffold included heavy branding assets (`hero.png`, `react.svg`, `vite.svg`) and demo markup that had no place in a portfolio. | Replaced `App.jsx`, `App.css`, `index.css`, and deleted the unused assets. |
| Default Vite CSS used a fixed `#root` width that broke responsive design. | Removed fixed widths; added `min-height: 100vh` and a full-width container. |
| CSS Grid `auto-fit` with `minmax(280px, 1fr)` pushed columns past the viewport on small screens because of intrinsic min-content. | Switched to `minmax(0, 1fr)` and added explicit breakpoints that collapse the grid to fewer columns at small viewports. |
| The sticky navbar overlapped anchor scroll targets when navigating to sections by ID. | Added `html { scroll-padding-top: 72px }`. |
| Images could cause Cumulative Layout Shift (CLS) while loading. | Added explicit `width` / `height` attributes, an `aspect-ratio: 16/9` wrapper, and `object-fit: cover`. |
| Multi-line template strings inside JS template literals broke Vite's parser. | Replaced implicit multi-line strings with single-line strings. |
| Shipping the whole app in a single JS bundle wasted initial bandwidth on sections the user might never scroll to. | Wrapped `About`, `Skills`, `Projects`, `Resume`, and `Contact` in `React.lazy()` with one `<Suspense>` boundary. Vite emits one chunk per section. |
| The default `<Suspense>` fallback is just text — inaccessible. | Built `SectionFallback` with `role="status"`, `aria-live="polite"`, a visually-hidden "Loading section" message, and a CSS spinner that respects `prefers-reduced-motion`. |
| TypeScript `@types/react` and `@types/react-dom` devDeps were installed by default but no TypeScript files exist. | Uninstalled them. |
| Hardcoded asset paths would 404 on GitHub Pages subpath deployments. | `vite.config.js` now reads `VITE_BASE_PATH` via `loadEnv`, leaving the default `/` for Vercel/Netlify root hosting. |
| No accessible loading feedback when lazy chunks were pending. | Spinner fallback plus `aria-live` region. |

## Screenshots

Add screenshots of the deployed portfolio here. Recommended captures:

- Desktop view at 1440 px (full page or hero + projects).
- Tablet view at 768 px.
- Mobile view at 375 px (full page or hero + skills).
- Contact form on desktop.

Suggested layout:

```markdown
![Desktop hero](./screenshots/desktop-hero.png)
![Projects section](./screenshots/desktop-projects.png)
![Mobile view](./screenshots/mobile-375.png)
```

## Live Website

`YOUR_DEPLOYED_WEBSITE_URL`

## GitHub Repository

`YOUR_GITHUB_REPOSITORY_URL`