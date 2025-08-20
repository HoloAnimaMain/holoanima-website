import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for API routes, static files, and known assets
  if (
    pathname.includes('.') || // static files
    pathname.includes('_next') || // Next.js internals
    pathname.includes('api') || // API routes
    pathname.includes('favicon') || // favicon
    pathname.includes('robots') || // robots.txt
    pathname.includes('sitemap') // sitemap.xml
  ) {
    return NextResponse.next();
  }
  
  // Check if the path already has a language prefix
  const hasLanguagePrefix = pathname.startsWith('/en') || pathname.startsWith('/es');
  
  // If no language prefix, redirect to default language (English)
  if (!hasLanguagePrefix) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }
  
  // Continue with the request
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};