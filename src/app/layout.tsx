import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HoloAnima - Educational AI Animation for Children',
  description: 'Educational AI animation for children ages 3-15. Where AI innovation meets human creativity to create magical learning experiences.',
  keywords: ['educational videos', 'children animation', 'AI animation', 'kids learning', 'educational content'],
  authors: [{ name: 'HoloAnima' }],
  creator: 'HoloAnima',
  publisher: 'HoloAnima',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://holoanima.com',
    title: 'HoloAnima - Educational AI Animation for Children',
    description: 'Educational AI animation for children ages 3-15. Where AI innovation meets human creativity.',
    siteName: 'HoloAnima',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HoloAnima - Educational AI Animation for Children',
    description: 'Educational AI animation for children ages 3-15. Where AI innovation meets human creativity.',
    creator: '@holoanima',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/characters/HoloAnima_logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <div>{children}</div>
      </body>
    </html>
  );
}
