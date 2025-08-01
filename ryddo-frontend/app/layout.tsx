import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Nunito } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import PartnersContactBar from '../components/layout/Footer/PartnersContactBar';
import NewsletterCTA from '../components/home/NewsletterCTA';
import { Providers } from './providers/provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'], // Add all weights you need: '400', '500', '600', etc.
  variable: '--font-nunito', // Create a CSS variable
  display: 'swap', // 'swap', 'block', or 'fallback' - 'swap' is good for most cases
});

export const metadata: Metadata = {
  title: 'Ryddo',
  description: 'Premium e-rides',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${nunito.variable} antialiased`}>
        <Providers>
          <div className='flex flex-col min-h-screen max-w-screen-8xl mx-auto'>
            <Header />

            <main className='flex-grow'>{children}</main>

            <NewsletterCTA />
            <Footer />

            <PartnersContactBar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
