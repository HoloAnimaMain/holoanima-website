import Link from 'next/link';
import Layout from '@/components/Layout';

export default function HomePage() {
  const content = (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 rounded-2xl mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bienvenido a <span className="text-primary">HoloAnima</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto">
            Animación educativa con IA para niños de 3-15 años. Donde la innovación de IA se encuentra 
            con la creatividad humana para crear experiencias de aprendizaje mágicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com/@holoanima?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-8 py-4 text-lg font-medium"
            >
              Suscríbete en YouTube
            </a>
            <Link
              href="/es/characters"
              className="btn bg-card border border-border px-8 py-4 text-lg font-medium hover:bg-card-hover"
            >
              Conoce a Nuestros Personajes
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Descubre Nuestro Mundo
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Explora nuestro contenido educativo diseñado para inspirar y entretener a mentes jóvenes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Videos Card */}
            <Link 
              href="/es/videos"
              className="card group overflow-hidden"
            >
              <div className="p-6">
                <div className="w-full h-32 bg-gradient-to-br from-red-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Videos Educativos</h3>
                <p className="text-muted mb-4">
                  Mira nuestro contenido educativo animado con IA en YouTube.
                </p>
                <div className="inline-block text-primary text-sm font-medium group-hover:underline">
                  Explorar Videos →
                </div>
              </div>
            </Link>

            {/* Characters Card */}
            <Link 
              href="/es/characters"
              className="card group overflow-hidden"
            >
              <div className="p-6">
                <div className="w-full h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🐭</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Conoce a Nuestros Personajes</h3>
                <p className="text-muted mb-4">
                  Descubre a Pip, Luna, Stella y todos nuestros queridos personajes.
                </p>
                <div className="inline-block text-primary text-sm font-medium group-hover:underline">
                  Conocer Personajes →
                </div>
              </div>
            </Link>

            {/* Blog Card */}
            <Link 
              href="/es/blog"
              className="card group overflow-hidden"
            >
              <div className="p-6">
                <div className="w-full h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="h-12 w-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Historias Educativas</h3>
                <p className="text-muted mb-4">
                  Lee historias y conocimientos de nuestras aventuras educativas.
                </p>
                <div className="inline-block text-primary text-sm font-medium group-hover:underline">
                  Leer Historias →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 rounded-2xl mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Únete a la Comunidad de HoloAnima
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro canal de YouTube y sé parte de nuestra creciente comunidad de jóvenes 
            estudiantes y sus familias.
          </p>
          <a
            href="https://youtube.com/@holoanima?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-red-600 text-white px-8 py-4 text-lg font-medium hover:bg-red-700"
          >
            Suscríbete Ahora
          </a>
        </div>
      </section>
    </>
  );

  return (
    <Layout language="es">
      <div className="container mx-auto px-4 py-8">
        <div className="prose max-w-none">
          {content}
        </div>
      </div>
    </Layout>
  );
}