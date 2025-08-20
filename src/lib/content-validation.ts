import { BlogPostFrontmatter, CharacterFrontmatter, PageFrontmatter } from '@/types/content';

/**
 * Validates blog post frontmatter
 */
export function validateBlogPostFrontmatter(
  frontmatter: Partial<BlogPostFrontmatter>,
  filePath: string
): frontmatter is BlogPostFrontmatter {
  const requiredFields: (keyof BlogPostFrontmatter)[] = ['title', 'description', 'date', 'slug'];
  const missingFields = requiredFields.filter(field => !(field in frontmatter));
  
  if (missingFields.length > 0) {
    throw new Error(
      `Missing required fields in ${filePath}: ${missingFields.join(', ')}`
    );
  }
  
  return true;
}

/**
 * Validates character frontmatter
 */
export function validateCharacterFrontmatter(
  frontmatter: Partial<CharacterFrontmatter>,
  filePath: string
): frontmatter is CharacterFrontmatter {
  const requiredFields: (keyof CharacterFrontmatter)[] = [
    'title',
    'description',
    'date',
    'slug',
    'name',
    'species',
    'birthday'
  ];
  const missingFields = requiredFields.filter(field => !(field in frontmatter));
  
  if (missingFields.length > 0) {
    throw new Error(
      `Missing required fields in ${filePath}: ${missingFields.join(', ')}`
    );
  }
  
  return true;
}

/**
 * Validates page frontmatter
 */
export function validatePageFrontmatter(
  frontmatter: Partial<PageFrontmatter>,
  filePath: string
): frontmatter is PageFrontmatter {
  const requiredFields: (keyof PageFrontmatter)[] = ['title', 'description', 'slug'];
  const missingFields = requiredFields.filter(field => !(field in frontmatter));
  
  if (missingFields.length > 0) {
    throw new Error(
      `Missing required fields in ${filePath}: ${missingFields.join(', ')}`
    );
  }
  
  return true;
}

/**
 * Validates that frontmatter has required fields based on content type
 */
export function validateFrontmatter(
  contentType: 'blog' | 'character' | 'page',
  frontmatter: Record<string, unknown>,
  filePath: string
): boolean {
  switch (contentType) {
    case 'blog':
      return validateBlogPostFrontmatter(frontmatter, filePath);
    case 'character':
      return validateCharacterFrontmatter(frontmatter, filePath);
    case 'page':
      return validatePageFrontmatter(frontmatter, filePath);
    default:
      throw new Error(`Unknown content type: ${contentType}`);
  }
}