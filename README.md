# Shinobi SEO — Manga/Anime Style SEO Agency Website

A modern, high-performance website for an SEO agency built with **Astro** and **Tailwind CSS v4**, featuring a distinctive manga / anime aesthetic.

**Agency Name:** Shinobi SEO  
**Tagline:** Master the Art of Rankings. Dominate the SERPs.

## Features

- Dark theme with electric cyan, hot pink, and neon accents
- Manga-inspired design elements: thick comic borders, speech bubbles, speed lines, bold typography
- Fully responsive multi-page site
- SEO-optimized (semantic HTML, meta tags, Open Graph, JSON-LD Organization schema)
- Fast by default (Astro static output)
- Accessible focus states and high-contrast colors

## Pages

- **Home** (`/`) — Hero, signature techniques, testimonials, CTA
- **Techniques** (`/services`) — Detailed service offerings
- **Legends** (`/case-studies`) — Success stories
- **Dojo** (`/about`) — About the agency + stats
- **Summon Us** (`/contact`) — Contact form

## Quick Start

1. **Install dependencies**

```bash
cd rankshinobi-seo   # or the folder name you used
npm install
```

2. **Start the development server**

```bash
npm run dev
```

Open http://localhost:4321

3. **Build for production**

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── ServiceCard.astro
│   ├── SpeechBubble.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   ├── services.astro
│   ├── about.astro
│   ├── case-studies.astro
│   └── contact.astro
└── styles/
    └── global.css
```

## Customization

### Colors
Edit the `@theme` block in `src/styles/global.css`:

```css
--color-anime-pink: #FF2D55;
--color-anime-cyan: #00F5FF;
--color-anime-purple: #7C3AED;
--color-anime-yellow: #FFE600;
--color-anime-dark: #0B0B14;
--color-anime-panel: #151528;
```

### Content
- Update copy in each page and component
- Replace the 🥷 placeholder with a custom illustration or Lottie animation
- Change agency name, email, and domain throughout the files

### Contact Form
The form currently points to Formspree. Replace `YOUR_FORM_ID` in `src/pages/contact.astro` with your own Formspree, Netlify Forms, or custom endpoint.

### Domain
Update the `site` value in `astro.config.mjs` and the JSON-LD URL in `Layout.astro`.

## Deployment

Recommended platforms: **Vercel**, **Netlify**, or **Cloudflare Pages**.

```bash
npm run build
```

Deploy the contents of the `dist/` folder.

## Technical Notes

- Tailwind CSS v4 is integrated via the Vite plugin (`@tailwindcss/vite`).
- Fonts loaded from Google Fonts: Bangers (headings), Noto Sans JP (Japanese accent), Inter (body).
- All interactive effects use pure CSS transitions for optimal performance and Core Web Vitals.
- The design deliberately balances playful manga aesthetics with professional readability suitable for a client-facing SEO agency website.

Built collaboratively for a distinctive, high-converting presence.
