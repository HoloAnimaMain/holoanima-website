# HoloAnima Website

An automated, SEO-optimized website for HoloAnima, an educational AI animation YouTube channel for children ages 3-15. This website serves as a central hub that seamlessly integrates with the YouTube channel while providing enhanced discoverability through search engines.

## Features

- 🚀 **Next.js 14+** with App Router and TypeScript
- 🎨 **Tailwind CSS** for responsive, child-friendly design
- 📝 **Markdown-to-HTML** conversion for easy content management
- 🌍 **Bilingual support** (English and Spanish) with hreflang
- 🔍 **SEO optimized** with automatic metadata generation
- 📱 **Fully responsive** design for all devices
- 🎬 **YouTube integration** for video content
- 🐭 **Character pages** for HoloAnima characters
- ⚡ **Performance optimized** with static generation
- 🔒 **Security headers** and best practices

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
holoanima-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utility functions and configurations
│   └── types/               # TypeScript type definitions
├── content/
│   ├── blog/
│   │   ├── en/             # English blog posts
│   │   └── es/             # Spanish blog posts
│   ├── characters/         # Character information
│   └── pages/              # Static pages content
├── public/                 # Static assets
└── .kiro/specs/           # Project specifications
```

## Content Management

### Adding Blog Posts

1. Create a new Markdown file in `content/blog/en/` or `content/blog/es/`
2. Add front matter with metadata:
   ```yaml
   ---
   title: 'Your Post Title'
   description: 'Post description for SEO'
   publishDate: '2024-01-15'
   language: 'en'
   characters: ['character-slug']
   relatedVideos: ['youtube-video-id']
   ---
   ```
3. Write your content in Markdown
4. Commit and push - Vercel will automatically deploy

### Environment Variables

Required environment variables for production:

- `NEXT_PUBLIC_SITE_URL` - Your website URL
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `YOUTUBE_API_KEY` - YouTube API key for video integration

## Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

## Contributing

1. Follow the existing code style (Prettier + ESLint)
2. Run tests before committing
3. Use conventional commit messages
4. Update documentation as needed

## License

This project is proprietary to HoloAnima.
# holoanima-website
