# Shehroz Majeed — Portfolio

A premium, futuristic personal portfolio website for a cybersecurity professional. Built with Next.js 14, TypeScript, Tailwind CSS, Three.js, and Framer Motion.

## Features

- **3D Cyber Grid Hero** — Animated Three.js particle field and infinite grid
- **3D Tilt Project Cards** — Interactive hover tilt effects on project cards
- **Dynamic Typing Animation** — Typewriter effect in the hero section
- **Glassmorphism UI** — Modern frosted glass design throughout
- **Fully Responsive** — Mobile-first design with hamburger navigation
- **SEO Optimized** — Meta tags, OpenGraph, semantic HTML
- **Accessibility** — Reduced motion support, focus states, ARIA labels

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Three.js + React Three Fiber
- Framer Motion
- Lucide React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to [vercel.com](https://vercel.com)
3. Framework: Next.js
4. Deploy

### GitHub Pages
The project is configured for static export (`output: "export"`).

```bash
npm run build
# Upload the `dist/` folder to GitHub Pages
```

## Project Structure

```
shehroz-portfolio/
├── app/
│   ├── sections/       # Page sections (Hero, About, Skills, etc.)
│   ├── components/     # Reusable components (Navbar, CyberGrid, etc.)
│   ├── hooks/          # Custom hooks (useTilt)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── utils.ts
├── public/
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## License

© 2026 Shehroz Majeed. All rights reserved.
