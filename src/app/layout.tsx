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
  title: 'Benilab Services',
  description: 'Services numériques pour les entrepreneurs au Bénin',
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
