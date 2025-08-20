import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, Character, Page } from '@/types/content';

// Define content directories
const CONTENT_DIRS = {
  blog: path.join(process.cwd(), 'content', 'blog'),
  characters: path.join(process.cwd(), 'content', 'characters'),
  pages: path.join(process.cwd(), 'content', 'pages'),
};

/**
 * Reads and parses a Markdown file with frontmatter
 */
export function parseMarkdownFile<T extends { frontmatter: Record<string, unknown>; content: string }>(
  filePath: string
): { frontmatter: T['frontmatter']; content: string } {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    frontmatter: data,
    content,
  };
}

/**
 * Gets all content items from a directory
 */
export function getAllContentItems<T extends { frontmatter: Record<string, unknown>; content: string; slug: string; filePath: string }>(
  contentType: keyof typeof CONTENT_DIRS,
  locale: string = 'en'
): T[] {
  const contentDir = CONTENT_DIRS[contentType];
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const items: T[] = [];
  const processedSlugs = new Set<string>();
  
  // First, process locale-specific files
  const localeDir = path.join(contentDir, locale);
  if (fs.existsSync(localeDir)) {
    const localeEntries = fs.readdirSync(localeDir);
    for (const localeEntry of localeEntries) {
      if (localeEntry.endsWith('.md') || localeEntry.endsWith('.mdx')) {
        const slug = path.basename(localeEntry, path.extname(localeEntry));
        if (!processedSlugs.has(slug)) {
          const localeFullPath = path.join(localeDir, localeEntry);
          const { frontmatter, content } = parseMarkdownFile<T>(localeFullPath);
          items.push({
            frontmatter,
            content,
            slug,
            filePath: localeFullPath,
          } as T);
          processedSlugs.add(slug);
        }
      }
    }
  }
  
  // Then, process generic files (only if no locale-specific version exists)
  const dirEntries = fs.readdirSync(contentDir);
  for (const entry of dirEntries) {
    const fullPath = path.join(contentDir, entry);
    const stat = fs.statSync(fullPath);
    
    // Skip directories (including locale directories)
    if (stat.isDirectory()) {
      continue;
    }
    
    // Process direct files
    if ((entry.endsWith('.md') || entry.endsWith('.mdx'))) {
      const slug = path.basename(entry, path.extname(entry));
      if (!processedSlugs.has(slug)) {
        const { frontmatter, content } = parseMarkdownFile<T>(fullPath);
        items.push({
          frontmatter,
          content,
          slug,
          filePath: fullPath,
        } as T);
        processedSlugs.add(slug);
      }
    }
  }
  
  return items;
}

/**
 * Gets a specific content item by slug
 */
export function getContentItemBySlug<T extends { frontmatter: Record<string, unknown>; content: string; slug: string; filePath: string }>(
  contentType: keyof typeof CONTENT_DIRS,
  slug: string,
  locale: string = 'en'
): T | null {
  const contentDir = CONTENT_DIRS[contentType];
  
  // Check for locale-specific file first
  const localeFilePath = path.join(contentDir, locale, `${slug}.md`);
  if (fs.existsSync(localeFilePath)) {
    const { frontmatter, content } = parseMarkdownFile<T>(localeFilePath);
    return {
      frontmatter,
      content,
      slug,
      filePath: localeFilePath,
    } as T;
  }
  
  // Check for generic file
  const filePath = path.join(contentDir, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    const { frontmatter, content } = parseMarkdownFile<T>(filePath);
    return {
      frontmatter,
      content,
      slug,
      filePath,
    } as T;
  }
  
  // Also check for .mdx files
  const mdxFilePath = path.join(contentDir, `${slug}.mdx`);
  if (fs.existsSync(mdxFilePath)) {
    const { frontmatter, content } = parseMarkdownFile<T>(mdxFilePath);
    return {
      frontmatter,
      content,
      slug,
      filePath: mdxFilePath,
    } as T;
  }
  
  const localeMdxFilePath = path.join(contentDir, locale, `${slug}.mdx`);
  if (fs.existsSync(localeMdxFilePath)) {
    const { frontmatter, content } = parseMarkdownFile<T>(localeMdxFilePath);
    return {
      frontmatter,
      content,
      slug,
      filePath: localeMdxFilePath,
    } as T;
  }
  
  return null;
}

/**
 * Gets all blog posts
 */
export function getAllBlogPosts(locale: string = 'en'): BlogPost[] {
  return getAllContentItems<BlogPost>('blog', locale);
}

/**
 * Gets a blog post by slug
 */
export function getBlogPostBySlug(slug: string, locale: string = 'en'): BlogPost | null {
  return getContentItemBySlug<BlogPost>('blog', slug, locale);
}

/**
 * Gets all characters
 */
export function getAllCharacters(locale: string = 'en'): Character[] {
  return getAllContentItems<Character>('characters', locale);
}

/**
 * Gets a character by slug
 */
export function getCharacterBySlug(slug: string, locale: string = 'en'): Character | null {
  return getContentItemBySlug<Character>('characters', slug, locale);
}

/**
 * Gets all pages
 */
export function getAllPages(locale: string = 'en'): Page[] {
  return getAllContentItems<Page>('pages', locale);
}

/**
 * Gets a page by slug
 */
export function getPageBySlug(slug: string, locale: string = 'en'): Page | null {
  return getContentItemBySlug<Page>('pages', slug, locale);
}