import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  currentLanguage?: 'en' | 'es';
}

export default function Footer({ currentLanguage = 'en' }: FooterProps) {
  const socialLinks = [
    {
      name: 'YouTube',
      href: 'https://youtube.com/@holoanima',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@holoanima',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/holoanima',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.926 2.026-1.416 3.323-1.416s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/holoanima',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ];

  const legalLinks = [
    {
      name: currentLanguage === 'en' ? 'Privacy Policy' : 'Política de Privacidad',
      href: '/privacy',
    },
    {
      name: currentLanguage === 'en' ? 'Terms of Service' : 'Términos de Servicio',
      href: '/terms',
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/characters/HoloAnima_logo.jpeg" 
                alt="HoloAnima Logo" 
                width={40}
                height={40}
                className="h-10 w-auto rounded-lg"
              />
              <span className="ml-3 text-2xl font-bold text-foreground">
                HoloAnima
              </span>
            </div>
            <p className="text-muted text-sm">
              {currentLanguage === 'en' 
                ? 'Educational AI animation for children ages 3-15. Where AI innovation meets human creativity.'
                : 'Animación educativa con IA para niños de 3-15 años. Donde la innovación de IA se encuentra con la creatividad humana.'
              }
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {currentLanguage === 'en' ? 'Follow Us' : 'Síguenos'}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {currentLanguage === 'en' ? 'Stay Updated' : 'Mantente Actualizado'}
            </h3>
            <p className="text-muted text-sm">
              {currentLanguage === 'en' 
                ? 'Subscribe to our YouTube channel for the latest educational content!'
                : '¡Suscríbete a nuestro canal de YouTube para el contenido educativo más reciente!'
              }
            </p>
            <a
              href="https://youtube.com/@holoanima?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-block"
            >
              {currentLanguage === 'en' ? 'Subscribe Now' : 'Suscribirse Ahora'}
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted hover:text-foreground text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-muted text-sm">
              © {new Date().getFullYear()} HoloAnima. {currentLanguage === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}