import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Benilab Services',
  description: 'Contactez Benilab Services pour vos projets digitaux. Notre équipe d\'experts vous accompagne dans votre transformation numérique au Bénin.',
  keywords: 'contact, Benilab Services, agence digitale, Bénin, Cotonou, devis, projet digital',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
