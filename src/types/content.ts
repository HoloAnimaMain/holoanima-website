// Types for blog posts
export interface BlogPostFrontmatter {
  title: string;
  description: string;
  date: string;
  slug: string;
  author: string;
  category: string;
  tags?: string[];
  image?: string;
  lang?: string;
  [key: string]: unknown;
}

export interface BlogPost {
  frontmatter: BlogPostFrontmatter;
  content: string;
  slug: string;
  filePath: string;
}

// Types for characters
export interface CharacterFrontmatter {
  title: string;
  description: string;
  date: string;
  slug: string;
  name: string;
  species: string;
  birthday: string;
  likes: string[];
  dislikes: string[];
  image?: string;
  lang?: string;
  [key: string]: unknown;
}

export interface Character {
  frontmatter: CharacterFrontmatter;
  content: string;
  slug: string;
  filePath: string;
}

// Types for pages
export interface PageFrontmatter {
  title: string;
  description: string;
  slug: string;
  lang?: string;
  [key: string]: unknown;
}

export interface Page {
  frontmatter: PageFrontmatter;
  content: string;
  slug: string;
  filePath: string;
}

// Types for videos
export interface Video {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  videoUrl: string;
}