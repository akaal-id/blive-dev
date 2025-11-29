import React from 'react';
import { GlobalProviders } from './global';
import './globals.css';
import { Hanken_Grotesk, Poppins } from 'next/font/google';

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

export const metadata = {
  title: 'BLive | NEIGHBOTS WANTED',
  description:
    'A community coliving home for creators, nomads, and slow travellers in Bali.',
  icons: {
    icon: '/icons/onlyb.png',
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
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
