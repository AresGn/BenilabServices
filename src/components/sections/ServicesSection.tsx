'use client'

import { Box, Container, SimpleGrid, VStack } from '@chakra-ui/react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';
// import { Button } from '../ui/Button'; // Commenté car non utilisé pour l'instant

// Icônes de react-icons (exemples, à remplacer par les icônes appropriées)
import { FaCode, FaChartLine, FaPaintBrush, FaVideo, FaUsers } from 'react-icons/fa';

const services = [
  {
    title: 'Développement web et mobile',
    description: 'Création de sites vitrines, e-commerce, blogs, plateformes sur mesure et applications mobiles natives/hybrides.',
    icon: FaCode, // À remplacer par une icône plus spécifique si besoin
  },
  {
    title: 'Marketing digital et stratégie commerciale',
    description: 'Campagnes publicitaires Meta/Google, tunnels de vente, automatisation marketing, emailing, CRM et audits de performance.',
    icon: FaChartLine, // À remplacer par une icône plus spécifique si besoin
  },
  {
    title: 'Design graphique et identité visuelle',
    description: 'Création de logos, branding, supports de communication (affiches, flyers, brochures) et visuels pour réseaux sociaux.',
    icon: FaPaintBrush, // À remplacer par une icône plus spécifique si besoin
  },
  {
    title: 'Production vidéo et contenu multimédia',
    description: 'Montage vidéo (TikTok, YouTube, Reels), vidéos avec avatar IA, voix off, sous-titrage et animations explicatives.',
    icon: FaVideo, // À remplacer par une icône plus spécifique si besoin
  },
  {
    title: 'Community management et animation digitale',
    description: 'Gestion de pages (Facebook, Instagram, TikTok), stratégies éditoriales, animation communautaire et rapports de performance.',
    icon: FaUsers, // À remplacer par une icône plus spécifique si besoin
  },
];

export const ServicesSection = () => {
  return (
    <Box py={{ base: '12', md: '20' }} bg={'gray.50'}>
      <Container maxW="container.xl">
        <VStack spacing={{ base: '8', md: '12' }} alignItems="center">
          <SectionTitle
            title="Nos Services"
            subtitle="Un portfolio complet pour accompagner votre transformation digitale."
          />
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: '8', md: '10' }}>
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </SimpleGrid>
          {/* Optionnel : Bouton pour voir tous les services si la liste est longue */}
          {/* <Button variant="primary" size="lg" mt={8}>
            Découvrir tous nos services
          </Button> */}
        </VStack>
      </Container>
    </Box>
  );
};
