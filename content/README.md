# Content Processing Pipeline

This document explains how our Markdown content processing pipeline works with MDX integration.

## Directory Structure

```
content/
├── blog/
│   ├── en/
│   ├── es/
│   └── *.md
├── characters/
│   └── *.md
└── pages/
    └── *.md
```

## Content Types

### Blog Posts

Blog posts are stored in `content/blog/` with the following frontmatter:

```yaml
title: "Post Title"
description: "Short description for SEO"
date: "2025-08-19"
slug: "post-slug"
author: "Author Name"
category: "category-name"
tags: ["tag1", "tag2"] # Optional
image: "/path/to/image.jpg" # Optional
lang: "en" # Optional, for bilingual content
```

### Characters

Character information is stored in `content/characters/` with the following frontmatter:

```yaml
title: "Character Name"
description: "Short description for SEO"
date: "2025-08-19"
slug: "character-slug"
name: "Character Name"
species: "Species"
birthday: "2020-05-15"
likes: ["item1", "item2"]
dislikes: ["item1", "item2"]
image: "/path/to/image.jpg" # Optional
lang: "en" # Optional, for bilingual content
```

### Pages

Static pages are stored in `content/pages/` with the following frontmatter:

```yaml
title: "Page Title"
description: "Short description for SEO"
slug: "page-slug"
lang: "en" # Optional, for bilingual content
```

## Processing Pipeline

1. **File Reading**: Files are read from the content directory using Node.js `fs` module
2. **Frontmatter Parsing**: `gray-matter` parses the YAML frontmatter and content
3. **Validation**: Custom validation functions ensure required fields are present
4. **MDX Integration**: Content is processed through MDX with custom remark plugins
5. **Data Access**: Utility functions provide access to content by type and slug

## Bilingual Content

Content can be provided in multiple languages:

1. Default content: `content/blog/post.md`
2. Language-specific content: `content/blog/en/post.md`, `content/blog/es/post.md`

The system will prioritize language-specific content when available.

## Usage

### Getting All Content

```typescript
import { getAllBlogPosts, getAllCharacters } from '@/lib/content';

const blogPosts = getAllBlogPosts('en'); // Get English blog posts
const characters = getAllCharacters('es'); // Get Spanish characters
```

### Getting Content by Slug

```typescript
import { getBlogPostBySlug, getCharacterBySlug } from '@/lib/content';

const post = getBlogPostBySlug('welcome', 'en'); // Get English welcome post
const character = getCharacterBySlug('luna', 'es'); // Get Spanish Luna character
```

### Validation

```typescript
import { validateBlogPostFrontmatter } from '@/lib/content-validation';

try {
  validateBlogPostFrontmatter(frontmatter, filePath);
  // Frontmatter is valid
} catch (error) {
  // Handle validation error
}
```