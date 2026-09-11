# Niket Marble & Stone

A luxury, mobile-first website for an architectural marble and stone atelier based in Kishangarh, Rajasthan.

## Stack

- React 19 (JavaScript `.jsx`)
- Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- [TanStack Router](https://tanstack.com/router) file-based routes (Start-compatible route modules)
- Custom CSS animations (hero pan, scroll reveal, image zoom)
- Semantic HTML, JSON-LD, Open Graph, canonical URLs, `sitemap.xml`

## Scripts

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build
npm run preview
```

## Content

Company copy, products, categories, testimonials, and FAQs live in `src/data/siteData.js`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/interior` | Interior solutions |
| `/exterior` | Exterior solutions |
| `/catalogue` | Searchable catalogue |
| `/products/$slug` | Product detail |
| `/about` | About & FAQ |
| `/contact` | Contact, map, quote form |
