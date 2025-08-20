import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  language?: 'en' | 'es';
}

export default function Layout({ children, language = 'en' }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentLanguage={language} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer currentLanguage={language} />
    </div>
  );
}