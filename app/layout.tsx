import React, { Suspense } from 'react';
import { GlobalProviders } from './global';
import './globals.css';
import { Hanken_Grotesk, Poppins } from 'next/font/google';
import Footer from '@/src/components/Footer/Footer';
import { Metadata } from 'next';
import MetaPixel from '@/src/components/MetaPixel/MetaPixel';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'BLive | Neighbors Wanted',
    template: '%s | BLive'
  },
  description: 'A community coliving home for creators, nomads, and slow travellers in Canggu, Bali. Experience Flow Living with workspaces, community events, and modern amenities.',
  keywords: ['coliving bali', 'digital nomad housing', 'canggu coliving', 'bali long term rental', 'community housing bali', 'coworking bali', 'slow travel bali'],
  authors: [{ name: 'BLive' }],
  creator: 'BLive',
  publisher: 'BLive',
  metadataBase: new URL('https://blive.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BLive | Neighbors Wanted',
    description: 'A community coliving home for creators, nomads, and slow travellers in Canggu, Bali.',
    url: 'https://blive.id',
    siteName: 'BLive',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/image (5) 1.png', // Using the hero image as OG image
        width: 1200,
        height: 630,
        alt: 'BLive Coliving Community in Bali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLive | Neighbors Wanted',
    description: 'A community coliving home for creators, nomads, and slow travellers in Canggu, Bali.',
    images: ['/images/image (5) 1.png'],
  },
  icons: {
    icon: '/icons/onlyb.png',
    shortcut: '/icons/onlyb.png',
    apple: '/icons/onlyb.png',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hanken.variable} ${poppins.variable}`}>
      <body className="min-h-screen antialiased bg-white text-dark-silver">
        <GlobalProviders>
          <Suspense fallback={null}>
            <MetaPixel />
          </Suspense>
          {children}
          <Footer />
        </GlobalProviders>
      </body>
    </html>
  );
}
