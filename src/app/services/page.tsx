// Métadonnées pour le SEO
export const metadata = {
  title: 'Nos Services - Benilab Services',
  description: 'Découvrez notre gamme complète de services digitaux : développement web, marketing digital, design graphique, création de contenu vidéo et community management.',
  keywords: 'services digitaux, développement web, marketing digital, design graphique, Benilab Services, Bénin',
};

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import { services } from '../../data/services';
import ServiceCard from '../../components/common/ServiceCard';

export default function ServicesPage() {
  return (
    <Box bg="gray.50" minH="100vh" pt={20}>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={12} align="stretch">
          {/* En-tête de la page */}
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              color="primary.600"
              fontFamily="Poppins"
            >
              Nos Services
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              maxW="800px"
              fontFamily="Lato"
              lineHeight="1.6"
            >
              Découvrez notre gamme complète de services digitaux conçus pour accompagner 
              votre entreprise dans sa transformation numérique. De la conception à la mise 
              en œuvre, nous vous offrons des solutions sur mesure adaptées à vos besoins.
            </Text>
          </VStack>

          {/* Grille des services */}
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            spacing={{ base: 6, md: 8 }}
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={`/services/${service.id}`}
              />
            ))}
          </SimpleGrid>

          {/* Section CTA */}
          <Box
            bg="primary.600"
            p={8}
            borderRadius="xl"
            color="white"
            textAlign="center"
            mt={12}
          >
            <VStack spacing={4}>
              <Heading as="h2" size="lg" fontFamily="Poppins">
                Besoin d'un service personnalisé ?
              </Heading>
              <Text fontSize="lg" fontFamily="Lato" maxW="600px">
                Chaque projet est unique. Contactez-nous pour discuter de vos besoins 
                spécifiques et obtenir une solution sur mesure.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}


