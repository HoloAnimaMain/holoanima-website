import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content';
import MdxContent from '@/components/MdxContent';

export default async function DebugPage() {
  const posts = getAllBlogPosts();
  const englishPosts = getAllBlogPosts('en');
  const spanishPosts = getAllBlogPosts('es');
  
  const welcomePostEn = getBlogPostBySlug('welcome', 'en');
  const welcomePostEs = getBlogPostBySlug('welcome', 'es');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Content Debug Page</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">All Posts (Default)</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          {JSON.stringify(posts, null, 2)}
        </pre>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">English Posts</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          {JSON.stringify(englishPosts, null, 2)}
        </pre>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Spanish Posts</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          {JSON.stringify(spanishPosts, null, 2)}
        </pre>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome Post (EN) Content</h2>
        {welcomePostEn ? (
          <div className="border p-4 rounded">
            <MdxContent source={welcomePostEn.content} />
          </div>
        ) : (
          <p>Welcome post not found</p>
        )}
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome Post (ES) Content</h2>
        {welcomePostEs ? (
          <div className="border p-4 rounded">
            <MdxContent source={welcomePostEs.content} />
          </div>
        ) : (
          <p>Welcome post not found</p>
        )}
      </div>
    </div>
  );
}