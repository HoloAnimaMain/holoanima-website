'use client';

import { useRouter } from 'next/navigation';
import { Character } from '@/types/content';
import CharacterImage from '@/components/CharacterImage';

interface CharacterDetailProps {
  character: Character;
  language: 'en' | 'es';
  content: React.ReactNode;
}

export default function CharacterDetail({ character, language, content }: CharacterDetailProps) {
  const { frontmatter } = character;
  const router = useRouter();
  
  const isEnglish = language === 'en';
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => router.back()}
            className="btn flex items-center text-foreground hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            {isEnglish ? 'Back to Characters' : 'Volver a Personajes'}
          </button>
        </div>
        
        <div className="card">
          <div className="md:flex">
            <div className="md:w-2/5 p-6 flex flex-col items-center">
              <CharacterImage 
                src={frontmatter.image} 
                alt={frontmatter.title} 
                className="w-full h-80 rounded-lg"
              />
              <div className="mt-6 text-center">
                <h1 className="text-3xl font-bold text-foreground mb-2">{frontmatter.title}</h1>
                <p className="text-muted text-lg">{frontmatter.species}</p>
              </div>
            </div>
            
            <div className="md:w-3/5 p-6 border-l border-border">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {isEnglish ? 'About' : 'Acerca de'}
                </h2>
                <p className="text-foreground text-lg">{frontmatter.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-light p-4 rounded-lg">
                  <h3 className="font-bold text-foreground text-lg mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {isEnglish ? 'Likes' : 'Le gusta'}
                  </h3>
                  <ul className="space-y-2">
                    {frontmatter.likes.map((like, index) => (
                      <li key={index} className="text-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {like}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-light p-4 rounded-lg">
                  <h3 className="font-bold text-foreground text-lg mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {isEnglish ? 'Dislikes' : 'No le gusta'}
                  </h3>
                  <ul className="space-y-2">
                    {frontmatter.dislikes.map((dislike, index) => (
                      <li key={index} className="text-foreground flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {dislike}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-light p-4 rounded-lg">
                <h3 className="font-bold text-foreground text-lg mb-3">
                  {isEnglish ? 'Birthday' : 'Cumpleaños'}
                </h3>
                <p className="text-foreground">
                  {new Date(frontmatter.birthday).toLocaleDateString(
                    isEnglish ? 'en-US' : 'es-ES', 
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }
                  )}
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-border">
            <div className="prose max-w-none text-foreground">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}