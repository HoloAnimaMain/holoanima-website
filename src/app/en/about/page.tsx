import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout language="en">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            HoloAnima is an innovative educational platform that combines artificial intelligence with 
            human creativity to produce engaging, age-appropriate animated content for children.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            Our mission is to make learning fun and accessible for children ages 3-15 through high-quality 
            educational animations that spark curiosity and foster a love of learning.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-gray-600 mb-6">
            We leverage cutting-edge AI technology to create personalized learning experiences while 
            maintaining the warmth and creativity that only human storytelling can provide.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-6">
            Our diverse team includes educators, animators, AI specialists, and child development experts 
            who work together to ensure our content is both entertaining and educationally valuable.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Join Our Community</h3>
            <p className="text-blue-700 mb-4">
              Subscribe to our YouTube channel to stay updated with our latest educational content and 
              behind-the-scenes stories.
            </p>
            <a
              href="https://youtube.com/@holoanima?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}