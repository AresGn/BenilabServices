'use client';

import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Flex } from '@chakra-ui/react';
import { FiBriefcase, FiTarget, FiHeart, FiUsers, FiZap, FiEye } from 'react-icons/fi'; // Exemples d'icônes

// Définition d'une interface pour les cartes de valeurs pour plus de clarté
interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <Flex 
    direction="column" 
    align="center" 
    p={6} 
    className="card card-hover" // Utilisation des classes CSS personnalisées
    textAlign="center"
  >
    <Icon as={icon} w={12} h={12} color="blue.500" mb={4} />
    <Heading as="h4" size="md" fontFamily="Poppins" fontWeight="500" color="blue.600" mb={2}>
      {title}
    </Heading>
    <Text fontFamily="Lato" color="gray.700">{description}</Text>
  </Flex>
);

export const AboutSection = () => {
  return (
    <Box as="section" bg="gray.50" className="section section-spacing">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          {/* Titre de la section */}
          <Box textAlign="center">
            <Heading as="h2" size="xl" className="section-title" color="blue.700" mb={4}>
              À Propos de Benilab Services
            </Heading>
            <Text fontSize="lg" color="gray.700" fontFamily="Lato" maxW="3xl" mx="auto">
              Votre partenaire de confiance pour une transformation digitale réussie au Bénin et au-delà.
              Nous combinons expertise locale et standards internationaux pour donner vie à vos ambitions.
            </Text>
          </Box>

          {/* Présentation de l'entreprise */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={10} align="center">
            <Box flex={1}>
              <Heading as="h3" size="lg" fontFamily="Poppins" fontWeight="700" color="blue.700" mb={4}>
                Qui Sommes-Nous ?
              </Heading>
              <Text fontFamily="Lato" color="gray.700" mb={4}>
                Benilab Services est une agence de services numériques dynamique basée au Bénin. 
                Notre force réside dans notre équipe pluridisciplinaire de talents passionnés : graphistes créatifs, 
                développeurs ingénieux, monteurs vidéo dynamiques, experts en tunnels de vente et marketeurs aguerris. 
                Nous sommes unis par une mission commune : vous accompagner vers le succès digital.
              </Text>
              <Text fontFamily="Lato" color="gray.700">
                Nous comprenons les défis uniques auxquels les entrepreneurs et entreprises font face et nous nous engageons 
                à fournir des solutions sur mesure qui génèrent des résultats concrets.
              </Text>
            </Box>
            {/* Vous pouvez ajouter une image illustrative ici si vous le souhaitez */}
            {/* <Box flex={1}>
              <Image src="/path/to/your/image.jpg" alt="Équipe Benilab Services" borderRadius="lg" boxShadow="lg" />
            </Box> */}
          </Flex>

          {/* Mission et Vision */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={10} align="stretch">
            <Box flex={1} className="card" p={8}> {/* Utilisation de la classe .card */}
              <Heading as="h3" size="lg" fontFamily="Poppins" fontWeight="700" color="blue.700" mb={4}>
                <Icon as={FiTarget} mr={2} verticalAlign="middle" />
                Notre Mission
              </Heading>
              <Text fontFamily="Lato" color="gray.700">
                Proposer des services numériques personnalisés et de qualité supérieure, en nous appuyant sur l&apos;expertise 
                reconnue de nos talents pour aider concrètement nos clients à atteindre leurs objectifs business les plus ambitieux.
              </Text>
            </Box>
            <Box flex={1} className="card" p={8}> {/* Utilisation de la classe .card */}
              <Heading as="h3" size="lg" fontFamily="Poppins" fontWeight="700" color="blue.700" mb={4}>
                <Icon as={FiEye} mr={2} verticalAlign="middle" />
                Notre Vision
              </Heading>
              <Text fontFamily="Lato" color="gray.700">
                Devenir la référence incontournable en matière de solutions digitales innovantes, accessibles et efficaces, 
                spécifiquement adaptées aux besoins des entrepreneurs africains et au-delà.
              </Text>
            </Box>
          </Flex>

          {/* Valeurs Clés */}
          <Box>
            <Heading as="h3" size="lg" fontFamily="Poppins" fontWeight="700" color="blue.700" mb={6} textAlign="center">
              Nos Valeurs Fondamentales
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
              <ValueCard 
                icon={FiBriefcase} 
                title="Qualité & Expertise" 
                description="Chaque projet bénéficie d'une approche rigoureuse et professionnelle, sans compromis sur l'excellence." 
              />
              <ValueCard 
                icon={FiUsers} 
                title="Écoute Active" 
                description="Nos solutions partent d'une compréhension profonde et authentique de vos besoins réels." 
              />
              <ValueCard 
                icon={FiHeart} 
                title="Créativité & Innovation" 
                description="Nous allions innovation technologique et esthétique visuelle pour des rendus uniques." 
              />
              <ValueCard 
                icon={FiZap} 
                title="Réactivité & Agilité" 
                description="Nous agissons rapidement tout en maintenant une qualité irréprochable à chaque étape." 
              />
              <ValueCard 
                icon={FiEye} // Peut-être une autre icône plus adaptée pour la Transparence ? (ex: FiShield, FiUnlock)
                title="Transparence Totale" 
                description="Nous vous tenons informé en temps réel de l'avancement de vos projets." 
              />
              <ValueCard 
                icon={FiTarget} // Peut-être une autre icône plus adaptée pour l'Engagement ? (ex: FiThumbsUp, FiAward)
                title="Engagement & Fiabilité" 
                description="Nous livrons exactement ce qui a été promis, dans les délais convenus, sans exception." 
              />
            </SimpleGrid>
          </Box>

        </VStack>
      </Container>
    </Box>
  );
};
