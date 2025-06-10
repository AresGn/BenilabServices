// Métadonnées pour le SEO
export const metadata = {
  title: 'Nos Services - Benilab Services',
  description: 'Découvrez notre gamme complète de services digitaux : développement web, marketing digital, design graphique, création de contenu vidéo et community management.',
  keywords: 'services digitaux, développement web, marketing digital, design graphique, Benilab Services, Bénin',
};

import { services } from '../../data/services';
import ServicesPageClient from './ServicesPageClient';

export default function ServicesPage() {
  return <ServicesPageClient services={services} />;
}