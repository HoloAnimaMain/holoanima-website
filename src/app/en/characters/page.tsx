import Layout from '@/components/Layout';
import PageTemplate from '@/components/PageTemplate';
import { getAllCharacters } from '@/lib/content';
import Link from 'next/link';
import CharacterImage from '@/components/CharacterImage';

export default function CharactersPage() {
  const characters = getAllCharacters('en');
  
  return (
    <Layout>
      <PageTemplate
        title="Meet Our Characters"
        subtitle="Discover the beloved characters from HoloAnima's educational adventures, each with their own unique personality and lessons to share."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((character) => {
            const { frontmatter, slug } = character;
            return (
              <Link 
                key={slug} 
                href={`/en/characters/${slug}`}
                className="card group overflow-hidden"
              >
                <div className="p-4">
                  <CharacterImage 
                    src={frontmatter.image} 
                    alt={frontmatter.title} 
                    className="w-full h-48 rounded-lg mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {frontmatter.title}
                    </h3>
                    <p className="text-muted text-sm mb-3 line-clamp-2">
                      {frontmatter.description}
                    </p>
                    <div className="inline-block text-primary text-sm font-medium group-hover:underline">
                      Learn more →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </PageTemplate>
    </Layout>
  );
}