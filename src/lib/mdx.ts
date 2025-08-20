import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { BlogPostFrontmatter, CharacterFrontmatter } from '@/types/content';

/**
 * MDX configuration with custom remark plugins
 */
export const mdxOptions = {
  remarkPlugins: [
    remarkFrontmatter,
    remarkMdxFrontmatter,
  ],
  rehypePlugins: [],
};

/**
 * Type for frontmatter extracted by remark-mdx-frontmatter
 */
export interface MdxFrontmatter {
  blog?: BlogPostFrontmatter;
  character?: CharacterFrontmatter;
  [key: string]: unknown;
}