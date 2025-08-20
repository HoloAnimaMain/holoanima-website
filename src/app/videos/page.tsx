import Layout from '@/components/Layout';

export default function VideosPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Videos</h1>
        <p className="text-gray-600 mb-8">
          Discover our collection of educational AI-animated videos for children.
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Visit Our YouTube Channel
          </h2>
          <p className="text-blue-700 mb-4">
            Watch all our latest educational content on YouTube!
          </p>
          <a
            href="https://youtube.com/@holoanima"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </Layout>
  );
}