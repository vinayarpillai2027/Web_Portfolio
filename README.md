# Vinaya R Pillai | Brutalist Portfolio

A bold, neo-brutalist personal portfolio website built with plain **HTML, CSS and JavaScript**: no frameworks, no build step. Content is laid out as full-screen colour-blocked panels that you scroll through horizontally on desktop, with a dark mode, a custom cursor, and scroll-reveal animations.

---

## Features

- **Horizontal panel layout**: five snap-scrolling panels (Start, Bio, Skills, Work, Contact). On desktop the mouse wheel scrolls sideways; on screens 768px and narrower the layout switches to a normal vertical scroll.
- **Light / dark theme**: toggle button in the bottom nav. The choice is saved in `localStorage`, and the first visit follows the system `prefers-color-scheme` setting.
- **Custom cursor**: a large circle that follows the pointer using `mix-blend-mode: difference` so it stays visible on every panel colour.
- **Scroll-reveal animations**: `IntersectionObserver` triggers each section title, skill card and project card once as it enters view.
- **Smooth anchor navigation**: nav links scroll to their panel with `scrollIntoView({ behavior: "smooth" })`.
- **Animated marquee** in the hero and a bouncing scroll hint.
- **Responsive design**: single-column grids, smaller type, and stacked panels on mobile.
- **Auto-updating footer year.**
- **Theming through CSS variables** (`--bg-color`, `--text-color`, `--border-color`), so colours are changed in one place.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | Semantic HTML5 (`nav`, `main`, `section`, `article`, `footer`) |
| Styling | CSS3: custom properties, Flexbox, Grid, scroll-snap, keyframe animations, media queries |
| Behaviour | Vanilla JavaScript (ES6): DOM APIs, `IntersectionObserver`, `localStorage`, `matchMedia` |
| Fonts | System monospace (`Courier New`) |
| Dependencies | None |

## Project Structure

```
ajce/
├── index.html        # Page markup, panels and embedded styles/script
├── style.css         # Stylesheet
├── script.js         # Interaction logic (cursor, theme, scroll, reveal)
├── .github/
│   └── workflows/    # GitHub Actions configuration
├── .vscode/          # Editor settings
└── README.md
```

## Getting Started

No installation is needed.

```bash
# 1. Clone the repository
git clone https://github.com/vinayarpillai2027/ajce.git
cd ajce

# 2. Open it in a browser
#    Option A: double-click index.html
#    Option B: serve it locally (recommended)
npx serve .
#    or
python -m http.server 8000
```

Then open `http://localhost:3000` (serve) or `http://localhost:8000` (Python).

## Customisation

| I want to change... | Where |
|---------------------|-------|
| Name, role, bio text | the `#hero` and `#about` sections in `index.html` |
| Skills | the `.skill-card` elements in `#skills` |
| Projects and links | the `.project-card` elements in `#projects` |
| Email and social links | the `.contact-big` links in `#contact` |
| Colours | the `:root` and `[data-theme="dark"]` variables, plus the per-panel colours (`#hero`, `#about`, ...) |
| Panel order | reorder the `<section class="panel">` blocks and matching nav items |

## Deployment

The site is fully static, so it can be hosted for free:

- **GitHub Pages**: Settings → Pages → Deploy from branch → `main` / root.
- **Netlify / Vercel**: import the repo, no build command, publish directory `/`.

## Design Notes

- The brutalist look comes from thick 4px borders, hard offset shadows (no blur), monospace type and saturated neon panels.
- The two themes swap background and text colours through CSS variables, so every component adapts without extra rules.
- Horizontal scrolling uses native `scroll-snap-type: x mandatory`, and the wheel handler only translates vertical wheel movement to `scrollLeft` on desktop, leaving mobile scrolling untouched.

## Roadmap

- [ ] Replace placeholder contact details and project links with real ones
- [ ] Link "Work" cards to live demos and repositories
- [ ] Keep one source of truth for styles and script (move inline code into `style.css` / `script.js`)
- [ ] Accessibility pass: keep the native cursor available, add visible focus styles, respect `prefers-reduced-motion`
- [ ] Add a downloadable résumé and a contact form
- [ ] Add Open Graph tags for nicer link previews

## Browser Support

Works in current versions of Chrome, Edge, Firefox and Safari. It relies on CSS custom properties, scroll-snap and `IntersectionObserver`.

## Author

**Vinaya R Pillai**: final-year Computer Science Engineering student, Amal Jyothi College of Engineering.

- GitHub: [@vinayarpillai2027](https://github.com/vinayarpillai2027)
- LinkedIn:https://www.linkedin.com/in/vinaya-pillai-4a60633b1/
- Email:vinayapillai2017@gmail.com

