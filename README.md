# Cybersecurity Portfolio

A premium, production-ready portfolio website for ethical hackers, penetration testers, and red team engineers.

## Features

- **Professional Design**: Luxury red and black theme inspired by enterprise SOC dashboards
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion
- **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance Optimized**: Fast builds, optimized images, lazy loading
- **SEO Ready**: Robots.txt, sitemap.xml, OpenGraph, structured metadata

## Sections

- **Hero**: Eye-catching entry with animated terminal and CTA buttons
- **About**: Professional introduction and key expertise highlights
- **Skills**: Categorized technical skills with visual cards
- **Projects**: Security assessment case studies with technologies and results
- **Experience**: Professional timeline with key achievements
- **Certifications**: Certification roadmap with status tracking
- **Research**: Security research articles and blog posts
- **Contact**: Professional contact form and social links

## Component Architecture

```
src/app/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Page sections (Hero, About, Skills, etc)
│   ├── ui/           # Reusable components (Button, Card, Badge)
│   └── effects/      # Visual effects (GridBackground, etc)
├── config/           # Theme, colors, animations
├── types/            # TypeScript type definitions
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Technologies

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React Icons
