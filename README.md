# Sustainability Plan Explorer

## [orchid-initiative.github.io/sustainability-plan-explorer](https://orchid-initiative.github.io/sustainability-plan-explorer/)

### Summary
A mobile-friendly, clickable interface for exploring a city sustainability plan.

This project is an **unofficial prototype** designed to make a long-form public document easier to navigate, especially on mobile devices.

## ⚠️ Important note

This is **not an official city website**.

It is an independent prototype exploring alternative ways to present and navigate public documents.

## 🔍 What this is

- A section-by-section interface for browsing the plan  
- Designed for quick navigation instead of PDF scrolling  
- Intended to make the document easier to access and revisit  

All content is sourced from the official document:  
https://www.alhambraca.gov/DocumentCenter/View/7621/Alhambra-Sustainability-Plan-Draft

### Status
- **Phase:** Active development — first build complete.
- **Done:** Astro 5 scaffold, Zod-validated content schema, Alhambra brand design system, home page with theme grid, theme detail pages with no-JS accordions, real content extracted for all 9 sectors of the March 2026 Public Draft.
- **Up next:** Web Share / Open Graph metadata, accessibility audit (axe-core, focus states, Google Translate widget), GitHub Pages deployment, content tone-pass with stakeholders.

### General Information
- Want the project background, goals, and scope? See the [Project Charter](documentation/PROJECT_CHARTER.md).
- Are you a non-developer who needs to update the site's content? See the [Content Update Guide](documentation/CONTENT_GUIDE.md).
- Ready to contribute? Reach out to contact@orchidinitiative.com.
- Bug reports or feature requests? Use the GitHub Issues page on this repo.

### Repository Contents
- `src/` — Astro site source: pages, layouts, components, content schema, design tokens.
- `src/content/themes/` — One Markdown file per sustainability sector. **Edit these to update the site's content.**
- `public/` — Static assets served as-is (favicon, etc.).
- `documentation/` — Project charter and content-update guide.

### Running Locally
Requires Node.js 22.12+.

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist/
npm run preview  # serve the production build locally
```

The build is **strict** — a malformed theme file (missing required field, invalid color, bad slug) will fail the build with a clear error pointing at the file. This is intentional: it prevents broken pages from ever being deployed.

### Tech Stack
- **[Astro 5](https://astro.build/)** — static site generator
- **[Tailwind CSS 4](https://tailwindcss.com/)** — utility-first styling with brand tokens
- **[Zod](https://zod.dev/)** — content schema validation (via Astro's content collections)
- **Markdown + YAML frontmatter** — content storage, editable in any text editor
- **GitHub Pages** — static hosting (planned)