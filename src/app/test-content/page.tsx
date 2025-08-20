import { getAllBlogPosts } from '@/lib/content';
import MdxContent from '@/components/MdxContent';

export default function TestContentPage() {
  const posts = getAllBlogPosts();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Content System Test</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
      {posts.length > 0 ? (
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.slug} className="border p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{post.frontmatter.title}</h3>
              <p className="text-gray-600">{post.frontmatter.description}</p>
              <p className="text-sm text-gray-500">
                Published: {new Date(post.frontmatter.date).toLocaleDateString()}
              </p>
              <div className="mt-4 prose max-w-none">
                <MdxContent source={post.content} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No blog posts found.</p>
      )}
    </div>
  );
}