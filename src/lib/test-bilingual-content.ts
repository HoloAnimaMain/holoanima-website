import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content';

// Test bilingual content processing
console.log('Testing bilingual content processing...');

try {
  // Test English content
  const englishPosts = getAllBlogPosts('en');
  console.log(`Found ${englishPosts.length} English blog posts`);
  
  if (englishPosts.length > 0) {
    const firstPost = englishPosts[0];
    console.log(`First English post: ${firstPost.frontmatter.title}`);
    console.log(`Language: ${firstPost.frontmatter.lang || 'default'}`);
  }
  
  // Test Spanish content
  const spanishPosts = getAllBlogPosts('es');
  console.log(`Found ${spanishPosts.length} Spanish blog posts`);
  
  if (spanishPosts.length > 0) {
    const firstSpanishPost = spanishPosts[0];
    console.log(`First Spanish post: ${firstSpanishPost.frontmatter.title}`);
    console.log(`Language: ${firstSpanishPost.frontmatter.lang || 'default'}`);
  }
  
  // Test getting specific posts by slug
  const englishWelcome = getBlogPostBySlug('welcome', 'en');
  const spanishWelcome = getBlogPostBySlug('welcome', 'es');
  
  if (englishWelcome) {
    console.log(`English welcome post title: ${englishWelcome.frontmatter.title}`);
  }
  
  if (spanishWelcome) {
    console.log(`Spanish welcome post title: ${spanishWelcome.frontmatter.title}`);
  }
  
  console.log('Bilingual content processing test passed!');
} catch (error) {
  console.error('Bilingual content processing test failed:', error);
}