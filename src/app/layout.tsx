import { Providers } from './providers';
import { Poppins, Lato } from 'next/font/google';
import "./globals.css";
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Box } from '@chakra-ui/react';

const poppins = Poppins({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata = {
  title: 'Benilab Services - Agence Digitale au Bénin | Solutions Web & Marketing',
  description: 'Benilab Services, agence digitale béninoise spécialisée en développement web, marketing digital, design graphique. Accompagnement complet pour votre transformation digitale.',
  keywords: 'agence digitale bénin, développement web cotonou, marketing digital afrique, design graphique, transformation digitale',
  authors: [{ name: 'Benilab Services' }],
  creator: 'Benilab Services',
  publisher: 'Benilab Services',
  openGraph: {
    title: 'Benilab Services - Solutions Digitales Innovantes',
    description: 'Votre partenaire digital au Bénin pour tous vos projets web et marketing',
    url: 'https://benilabservices.com',
    siteName: 'Benilab Services',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Benilab Services - Agence Digitale au Bénin',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benilab Services - Agence Digitale au Bénin',
    description: 'Votre partenaire digital au Bénin pour tous vos projets web et marketing',
    images: ['/images/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${lato.variable}`}>
        <Providers>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Navbar />
            <Box as="main" flexGrow={1}>
              {children}
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
