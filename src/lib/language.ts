/**
 * Detects the current language from the URL path
 * @param pathname The current URL pathname
 * @returns The detected language ('en' or 'es') and the path without the language prefix
 */
export function detectLanguageFromPath(pathname: string): { 
  language: 'en' | 'es'; 
  pathWithoutLanguage: string 
} {
  // Remove trailing slashes and ensure we have a clean path
  const cleanPathname = pathname.replace(/\/$/, '') || '/';
  
  // Check if the path starts with a language prefix
  if (cleanPathname.startsWith('/en/')) {
    return {
      language: 'en',
      pathWithoutLanguage: cleanPathname.substring(3) || '/'
    };
  }
  
  if (cleanPathname.startsWith('/es/')) {
    return {
      language: 'es',
      pathWithoutLanguage: cleanPathname.substring(3) || '/'
    };
  }
  
  // Check for exact matches (homepage)
  if (cleanPathname === '/en') {
    return {
      language: 'en',
      pathWithoutLanguage: '/'
    };
  }
  
  if (cleanPathname === '/es') {
    return {
      language: 'es',
      pathWithoutLanguage: '/'
    };
  }
  
  // Default to English if no language prefix is found
  return {
    language: 'en',
    pathWithoutLanguage: cleanPathname
  };
}

/**
 * Generates a language-specific URL
 * @param path The base path
 * @param language The language code
 * @returns The language-specific URL
 */
export function generateLanguagePath(path: string, language: 'en' | 'es'): string {
  // Ensure path starts with a slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Remove trailing slash if present (except for root)
  const normalizedPath = cleanPath === '/' ? '' : cleanPath.replace(/\/$/, '');
  
  // Special handling for root path
  if (normalizedPath === '') {
    return `/${language}`;
  }
  
  return `/${language}${normalizedPath}`;
}

/**
 * Gets the alternate language
 * @param language The current language
 * @returns The alternate language
 */
export function getAlternateLanguage(language: 'en' | 'es'): 'en' | 'es' {
  return language === 'en' ? 'es' : 'en';
}