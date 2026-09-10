# Michael Richard — Personal website

A personal portfolio built with React 19, Vite, and React Router. The design combines an editorial layout with quiet surfaces, serif accents, and light and dark themes.

## Development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run lint
npm run preview
```

The production build is written to `dist/`.

## Content and design

- `src/data/portfolio.js`: biography, work, education, leadership, projects, awards, contact, and music.
- `src/data/techStack.js`: skills grouped by discipline.
- `src/data/blog.js`: posts with slugs, dates, summaries, and trusted, author-written HTML. Do not insert untrusted HTML here.
- `src/pages/Home.jsx`: portfolio sections and music genre selector.
- `src/pages/Blog.jsx` and `src/pages/BlogPost.jsx`: writing index and individual posts.
- `src/components/Navbar.jsx`: desktop/mobile navigation and theme control.
- `src/index.css`: responsive layout and shared design tokens.
- `src/Assets/`: portrait and organization logos.

All original sections are retained: introduction, about, work experience, education, activities and leadership, skills, projects, awards, music, and contact. The homepage also includes a writing preview. Existing blog URLs remain available.

The initial theme follows the system preference. Choosing a theme saves it in local storage under `portfolio-theme` and restores it before the page renders. If storage is unavailable, switching still works for the current page session.

The site includes keyboard focus states, a skip link, labeled controls, reduced-motion support, and a mobile navigation menu. Fonts use local system stacks; project artwork is CSS-based and has no external image dependency.

## Deployment

The existing GitHub Actions workflow builds pushes to `master` and deploys `dist/` to the `gh-pages` branch. It copies the entry page to `404.html` so direct visits to blog URLs can load the client-side router on GitHub Pages.

Committing locally does not publish the website. A push to `master` triggers deployment.
