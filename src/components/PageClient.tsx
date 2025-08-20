'use client';

import Layout from '@/components/Layout';

interface PageClientProps {
  title: string;
  content: React.ReactNode;
}

export default function PageClient({ title, content }: PageClientProps) {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
        <div className="prose max-w-none">
          {content}
        </div>
      </div>
    </Layout>
  );
}