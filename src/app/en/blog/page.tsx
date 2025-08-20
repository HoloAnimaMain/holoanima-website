import Layout from '@/components/Layout';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/content';

export default function BlogPage() {
  // Get blog posts for the English language
  const posts = getAllBlogPosts('en');
  
  const translations = {
    en: {
      title: 'Blog',
      description: 'Educational stories and insights from the world of HoloAnima.',
      readMore: 'Read more',
      comingSoon: 'Coming Soon',
      comingSoonDescription: 'Our blog posts will be available here soon. Stay tuned for educational content and behind-the-scenes stories!',
      dateFormat: 'en-US'
    }
  };
  
  const t = translations.en;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{t.title}</h1>
        <p className="text-gray-600 mb-8">{t.description}</p>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/en/blog/${post.slug}`}
                className="block bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.frontmatter.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.frontmatter.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {new Date(post.frontmatter.date).toLocaleDateString(t.dateFormat)}
                    </span>
                    <span className="text-sm font-medium text-blue-600">
                      {t.readMore}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {t.comingSoon}
            </h2>
            <p className="text-gray-700">
              {t.comingSoonDescription}
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}