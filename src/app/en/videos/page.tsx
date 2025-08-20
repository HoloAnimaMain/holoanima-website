import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { getYouTubeVideos } from '@/lib/youtube';
import { Video } from '@/types/content';

export default async function VideosPage() {
  const videos: Video[] = await getYouTubeVideos('en', 12);

  return (
    <Layout language="en">
      <div className="container mx-auto px-4 py-8">
        <div className="prose max-w-none">
          {/* Header Section */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Videos</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Explore our collection of educational AI-animated videos designed to inspire and engage young minds.
            </p>
          </section>

          {/* Videos Grid */}
          {videos.length > 0 ? (
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="card group overflow-hidden">
                    <div className="p-6">
                      <div className="w-full aspect-video bg-gradient-to-br from-red-100 to-pink-100 rounded-lg mb-4 overflow-hidden">
                        <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                          <Image 
                            src={video.thumbnailUrl} 
                            alt={video.title}
                            width={320}
                            height={180}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </Link>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                          {video.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted mb-3">
                        {new Date(video.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <p className="text-muted mb-4 line-clamp-3">
                        {video.description}
                      </p>
                      <Link
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium group-hover:underline"
                      >
                        Watch Video →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <section className="text-center py-12">
              <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-lg p-8 max-w-2xl mx-auto">
                <svg className="h-16 w-16 text-red-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <h3 className="text-2xl font-bold text-foreground mb-2">Videos Coming Soon</h3>
                <p className="text-muted mb-6">
                  We&apos;re working on creating amazing educational content. Check back soon for our latest videos!
                </p>
                <a
                  href="https://youtube.com/@holoanima?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3"
                >
                  Subscribe on YouTube
                </a>
              </div>
            </section>
          )}

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-12 rounded-2xl mt-12 text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4">Never Miss a Video</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Subscribe to our YouTube channel and be the first to watch our newest educational content.
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
        </div>
      </div>
    </Layout>
  );
}