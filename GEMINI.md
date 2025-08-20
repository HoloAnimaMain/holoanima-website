# Project Overview

This is a Next.js 14+ project with TypeScript, Tailwind CSS, and MDX. It's an automated, SEO-optimized website for HoloAnima, an educational AI animation YouTube channel for children. The website serves as a central hub for the YouTube channel, providing enhanced discoverability through search engines. It features bilingual support (English and Spanish), character pages, and a blog.

## Building and Running

### Prerequisites

*   Node.js 18+
*   npm or yarn

### Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

### Available Scripts

*   `npm run dev`: Start development server with Turbopack.
*   `npm run build`: Build for production.
*   `npm run start`: Start production server.
*   `npm run lint`: Run ESLint.
*   `npm run lint:fix`: Fix ESL-int issues.
*   `npm run format`: Format code with Prettier.
*   `npm run format:check`: Check code formatting.
*   `npm run type-check`: Run TypeScript type checking.

## Development Conventions

*   **Coding Style**: The project uses Prettier for code formatting and ESLint for linting. Configuration files for both are present in the root directory.
*   **Content Management**: Content is managed through Markdown files with frontmatter. The `src/lib/content.ts` file contains the logic for parsing and retrieving content. The `content` directory is organized by content type (blog, characters, pages) and locale (en, es).
*   **Deployment**: The project is configured for deployment on Vercel.
