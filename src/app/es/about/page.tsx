import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout language="es">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Acerca de Nosotros</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            HoloAnima es una plataforma educativa innovadora que combina inteligencia artificial con 
            creatividad humana para producir contenido animado atractivo y apropiado para niños de todas las edades.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
          <p className="text-gray-600 mb-6">
            Nuestra misión es hacer que el aprendizaje sea divertido y accesible para niños de 3 a 15 años 
            a través de animaciones educativas de alta calidad que despierten la curiosidad y fomenten el 
            amor por el aprendizaje.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestro Enfoque</h2>
          <p className="text-gray-600 mb-6">
            Aprovechamos tecnología de vanguardia de inteligencia artificial para crear experiencias de 
            aprendizaje personalizadas manteniendo la calidez y creatividad que solo puede proporcionar 
            la narración humana.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conoce a Nuestro Equipo</h2>
          <p className="text-gray-600 mb-6">
            Nuestro equipo diverso incluye educadores, animadores, especialistas en IA y expertos en 
            desarrollo infantil que trabajan juntos para garantizar que nuestro contenido sea tanto 
            entretenido como educativo.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Únete a Nuestra Comunidad</h3>
            <p className="text-blue-700 mb-4">
              Suscríbete a nuestro canal de YouTube para mantenerte actualizado con nuestro último 
              contenido educativo e historias detrás de escena.
            </p>
            <a
              href="https://youtube.com/@holoanima?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Suscríbete en YouTube
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}