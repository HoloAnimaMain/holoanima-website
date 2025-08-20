'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { detectLanguageFromPath, generateLanguagePath, getAlternateLanguage } from '@/lib/language';

interface HeaderProps {
  currentLanguage?: 'en' | 'es';
}

export default function Header({ currentLanguage = 'en' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detect the actual current language from the URL
  const actualCurrentLanguage = pathname ? detectLanguageFromPath(pathname).language : currentLanguage;

  const navigation = [
    { name: 'Home', href: '/', nameEs: 'Inicio' },
    { name: 'Videos', href: '/videos', nameEs: 'Videos' },
    { name: 'Blog', href: '/blog', nameEs: 'Blog' },
    { name: 'Characters', href: '/characters', nameEs: 'Personajes' },
    { name: 'About Us', href: '/about', nameEs: 'Acerca de' },
    { name: 'Contact', href: '/contact', nameEs: 'Contacto' },
  ];

  const toggleLanguage = () => {
    const newLanguage = getAlternateLanguage(actualCurrentLanguage);
    
    // Update the URL to reflect the new language
    if (pathname) {
      const { pathWithoutLanguage } = detectLanguageFromPath(pathname);
      const newPath = generateLanguagePath(pathWithoutLanguage, newLanguage);
      window.location.href = newPath;
    }
  };

  return (
    <header className="bg-card border-b border-border shadow-lg sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${actualCurrentLanguage}`} className="flex items-center">
              <Image 
                src="/characters/HoloAnima_logo.jpeg" 
                alt="HoloAnima Logo" 
                width={40}
                height={40}
                className="h-10 w-auto rounded-lg"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={generateLanguagePath(item.href, actualCurrentLanguage)}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-light"
              >
                {actualCurrentLanguage === 'en' ? item.name : item.nameEs}
              </Link>
            ))}
            
            {/* YouTube Channel Link */}
            <a
              href="https://youtube.com/@holoanima"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors flex items-center ml-2"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              YouTube
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium border border-border rounded-md transition-colors ml-2 hover:bg-light"
            >
              {actualCurrentLanguage === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-foreground hover:text-primary px-2 py-1 text-sm font-medium border border-border rounded-md hover:bg-light"
            >
              {actualCurrentLanguage === 'en' ? 'ES' : 'EN'}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary p-2 rounded-md hover:bg-light"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={generateLanguagePath(item.href, actualCurrentLanguage)}
                  className="text-foreground hover:text-primary hover:bg-light block px-3 py-2 text-base font-medium transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {actualCurrentLanguage === 'en' ? item.name : item.nameEs}
                </Link>
              ))}
              <a
                href="https://youtube.com/@holoanima"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white block px-3 py-2 text-base font-medium hover:bg-red-700 transition-colors rounded-md mx-3 mt-2 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                YouTube
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}