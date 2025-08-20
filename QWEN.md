# HoloAnima Website - Qwen Code Context

## Project Overview

This is a Next.js 15+ powered website for HoloAnima, an educational AI animation YouTube channel targeting children ages 3-15. The website serves as a central hub that integrates with YouTube while providing enhanced discoverability through search engines.

### Key Technologies
- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Content**: Markdown/MDX with frontmatter
- **Internationalization**: Bilingual support (English/Spanish)
- **Deployment**: Vercel

### Architecture
```
holoanima-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utility functions and content management
│   └── types/               # TypeScript type definitions
├── content/
│   ├── blog/               # Blog posts (MD/MDX)
│   ├── characters/         # Character information (MD)
│   └── pages/              # Static pages content (MD)
├── public/                 # Static assets
└── specs/                  # Project specifications
```

## Content Management System

The website uses a custom file-based CMS that reads Markdown files with YAML frontmatter:

### Character Content Structure
```yaml
---
title: "Character Name"
description: "Brief description"
date: "2025-08-19"
slug: "character-slug"
name: "Character"
species: "Species"
birthday: "YYYY-MM-DD"
likes: ["item1", "item2"]
dislikes: ["item1", "item2"]
image: "/characters/Character.png"
lang: "en"
---
```

### Content Organization
- English content: In root of content directories
- Spanish content: In `es/` subdirectories
- System automatically falls back to English if Spanish version doesn't exist

## Styling System

Custom design system with CSS variables for consistent theming:

### Color Palette
- `--primary`: Main brand color (indigo)
- `--secondary`: Supporting color (green)
- `--accent`: Highlight color (amber)
- `--background`: Page background
- `--foreground`: Text color
- `--card`: Card backgrounds
- `--border`: Border colors

### Component Classes
- `.card`: Styled containers with hover effects
- `.btn`: Button styles with variants (`.btn-primary`, `.btn-secondary`)
- `.text-muted`: Secondary text color

## Internationalization

Bilingual support with automatic language detection:
- URLs prefixed with `/en/` or `/es/`
- Middleware redirects root URLs to `/en/` by default
- Components receive `language` prop to render appropriate text

## Building and Running

### Development
```bash
npm run dev
# Starts development server with Turbopack
# Access at http://localhost:3000
```

### Production
```bash
npm run build
# Creates optimized production build

npm run start
# Starts production server
```

### Code Quality
```bash
npm run lint
# Runs ESLint

npm run lint:fix
# Fixes ESLint issues

npm run format
# Formats code with Prettier

npm run type-check
# Runs TypeScript type checking
```

## Development Conventions

### Component Structure
1. Use TypeScript interfaces for props
2. Implement responsive design with Tailwind classes
3. Use CSS variables for consistent theming
4. Follow established patterns for cards, buttons, and text

### Content Management
1. Add new characters by creating MD files in `content/characters/`
2. Place character images in `public/characters/`
3. Maintain both English and Spanish versions when possible

### Styling Guidelines
1. Use the custom design system variables
2. Apply consistent spacing with Tailwind utilities
3. Implement hover effects for interactive elements
4. Ensure accessibility with proper contrast and semantic HTML

## Key Components

### Layout Components
- `Layout.tsx`: Main layout with Header and Footer
- `Header.tsx`: Navigation with language toggle
- `Footer.tsx`: Site footer with social links

### Content Components
- `PageTemplate.tsx`: Consistent page structure
- `CharacterImage.tsx`: Responsive character images with fallbacks
- `CharacterDetail.tsx`: Detailed character information display

### Utility Functions
- `content.ts`: Content loading and parsing
- `language.ts`: Language detection and URL generation
- `mdx.ts`: MDX processing configuration

## Asset Organization

### Public Directory
```
public/
├── characters/             # Character images (PNG format preferred)
├── favicon/                # Favicon files
└── ...                     # Other static assets
```

### Image Guidelines
- Character images: PNG format for transparency support
- Logo: JPEG format
- All images should be in their respective directories
- Reference images with relative paths from public root

## Environment Variables

Required for production:
- `NEXT_PUBLIC_SITE_URL`: Website URL
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID
- `YOUTUBE_API_KEY`: YouTube API key for video integration

For local development, copy `.env.example` to `.env.local` and populate values.

## Deployment

The project is configured for Vercel deployment:
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Automatic deployments on push to main branch