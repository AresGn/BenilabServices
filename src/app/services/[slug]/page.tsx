import { notFound } from 'next/navigation';
import { services } from '../../../data/services';
import ServicePageClient from './ServicePageClient';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  // Attendre la résolution des paramètres
  const resolvedParams = await params;

  // Trouver le service correspondant au slug
  const service = services.find(s => s.id === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}

// Génération des métadonnées pour le SEO
export async function generateMetadata({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = services.find(s => s.id === resolvedParams.slug);
  
  if (!service) {
    return {
      title: 'Service non trouvé - Benilab Services',
    };
  }

  return {
    title: `${service.title} - Benilab Services`,
    description: service.longDescription,
    keywords: `${service.title}, ${service.technologies?.join(', ') || ''}, Benilab Services, Bénin`,
  };
}

// Génération des paramètres statiques pour les services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}
