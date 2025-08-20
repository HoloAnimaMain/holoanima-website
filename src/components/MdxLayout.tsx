'use client';

import Layout from '@/components/Layout';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 prose max-w-none">
        {children}
      </div>
    </Layout>
  );
}