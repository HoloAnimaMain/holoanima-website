import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  const content = (
    <>
      {/* Hero Section */}
      <section className="bg-indigo-50 border-2 border-indigo-100 py-16 rounded-2xl mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
            Hey, this is <span className="text-indigo-600">HoloAnima!</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-800 mb-8 max-w-2xl mx-auto">
            Educational AI animation for children ages 3-15. Where AI innovation meets human creativity 
            to create magical learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com/@holoanima?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-8 py-4 text-lg font-medium"
            >
              Subscribe on YouTube
            </a>
            <Link
              href="/characters"
              className="btn bg-white text-indigo-600 border-2 border-indigo-200 px-8 py-4 text-lg font-medium hover:bg-indigo-50"
            >
              Meet Our Characters
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Discover Our World
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Explore our educational content designed to inspire and engage young minds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Videos Card */}
            <div className="card group overflow-hidden">
              <div className="p-6">
                <div className="w-full h-32 bg-gradient-to-br from-red-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Educational Videos</h3>
                <p className="text-muted mb-4">
                  Watch our AI-animated educational content on YouTube.
                </p>
                <Link
                  href="/videos"
                  className="text-primary font-medium group-hover:underline"
                >
                  Explore Videos →
                </Link>
              </div>
            </div>

            {/* Characters Card */}
            <div className="card group overflow-hidden">
              <div className="p-6">
                <div className="w-full h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🐭</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Meet Our Characters</h3>
                <p className="text-muted mb-4">
                  Discover Pip, Luna, Stella, and all our beloved characters.
                </p>
                <Link
                  href="/characters"
                  className="text-primary font-medium group-hover:underline"
                >
                  Meet Characters →
                </Link>
              </div>
            </div>

            {/* Blog Card */}
            <div className="card group overflow-hidden">
              <div className="p-6">
                <div className="w-full h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Educational Stories</h3>
                <p className="text-muted mb-4">
                  Read stories and insights from our educational adventures.
                </p>
                <Link
                  href="/blog"
                  className="text-primary font-medium group-hover:underline"
                >
                  Read Stories →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 rounded-2xl mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join the HoloAnima Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our YouTube channel and be part of our growing community of young learners and their families.
          </p>
          <a
            href="https://youtube.com/@holoanima?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-red-600 text-white px-8 py-4 text-lg font-medium hover:bg-red-700"
          >
            Subscribe Now
          </a>
        </div>
      </section>
    </>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="prose max-w-none">
          {content}
        </div>
      </div>
    </Layout>
  );
}