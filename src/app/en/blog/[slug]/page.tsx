import Layout from '@/components/Layout';
import { getBlogPostBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import MdxContent from '@/components/MdxContent';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Try to get the blog post for the English language
  const post = getBlogPostBySlug(slug, 'en');
  
  // If no post is found, show 404
  if (!post) {
    notFound();
  }
  
  const translations = {
    en: {
      by: 'By',
      dateFormat: 'en-US'
    }
  };
  
  const t = translations.en;
  
  return (
    <Layout>
      <article className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.frontmatter.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span>{t.by} {post.frontmatter.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString(t.dateFormat, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="mx-2">•</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {post.frontmatter.category}
            </span>
          </div>
          <p className="text-xl text-gray-700 italic">
            {post.frontmatter.description}
          </p>
        </header>
        
        <div className="prose max-w-none">
          <MdxContent source={post.content} />
        </div>
      </article>
    </Layout>
  );
}

export async function generateStaticParams() {
  // This will be handled by the root blog post page
  return [];
}