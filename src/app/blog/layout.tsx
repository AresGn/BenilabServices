import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Actualités - Benilab Services',
  description: 'Découvrez nos articles sur les tendances digitales, les bonnes pratiques et les innovations qui façonnent l\'avenir du numérique en Afrique.',
  keywords: 'blog, actualités, digital, transformation digitale, Afrique, Bénin, tendances, innovation',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
