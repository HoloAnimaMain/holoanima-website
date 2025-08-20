import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        
        <div className="max-w-3xl space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Where AI Innovation Meets Human Creativity
            </h2>
            <p className="text-gray-700 leading-relaxed">
              HoloAnima is an educational AI animation YouTube channel designed for children ages 3-15. 
              We combine cutting-edge artificial intelligence with human creativity to create engaging, 
              educational content that inspires young minds.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              We believe that learning should be fun, accessible, and inspiring. Through our AI-animated 
              characters and stories, we teach valuable life lessons, explore scientific concepts, and 
              encourage creativity in children around the world.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              Our unique approach combines the efficiency and innovation of AI technology with the warmth 
              and creativity that only human storytellers can provide. This hybrid method allows us to 
              create high-quality educational content that resonates with children and parents alike.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Join Our Community</h3>
            <p className="text-gray-700 mb-4">
              Subscribe to our YouTube channel to stay updated with our latest educational adventures!
            </p>
            <a
              href="https://youtube.com/@holoanima?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}