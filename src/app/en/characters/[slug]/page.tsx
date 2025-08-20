import { getAllCharacters, getCharacterBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import CharacterDetail from '@/components/CharacterDetail';
import { Character } from '@/types/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

// Custom components for MDX
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl font-semibold mt-5 mb-3" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mb-4" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc pl-5 mb-4" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="list-decimal pl-5 mb-4" {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="mb-1" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-blue-600 hover:underline" {...props} />
  ),
};

interface CharacterPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { slug } = await params;
  // Since this page is in the /en path, we'll use English
  const language = 'en';
  const character = getCharacterBySlug(slug, language);
  
  if (!character) {
    notFound();
  }
  
  const { content } = character;
  
  return (
    <Layout>
      <CharacterDetail 
        character={character as Character} 
        language={language} 
        content={
          <MDXRemote
            source={content}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        } 
      />
    </Layout>
  );
}

// Generate static paths for all characters
export async function generateStaticParams() {
  const characters = getAllCharacters();
  
  return characters.map((character) => ({
    slug: character.slug,
  }));
}