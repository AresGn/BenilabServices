'use client';

import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Flex, Button } from '@chakra-ui/react';
import { FiBriefcase, FiTarget, FiHeart, FiUsers, FiZap, FiEye, FiArrowRight, FiAward, FiShield } from 'react-icons/fi'; // Icônes améliorées
import Link from 'next/link';

// Définition d'une interface pour les cartes de valeurs pour plus de clarté
interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <Box
    p={8}
    bg="white"
    borderRadius="xl"
    boxShadow="lg"
    transition="all 0.3s ease"
    _hover={{
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(0, 91, 153, 0.15)',
    }}
    textAlign="center"
    border="1px solid"
    borderColor="gray.100"
  >
    <Box
      w={16}
      h={16}
      mx="auto"
      mb={6}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="primary.50"
      borderRadius="full"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: '-2px',
        left: '-2px',
        right: '-2px',
        bottom: '-2px',
        borderRadius: 'full',
        background: 'linear-gradient(135deg, #005B99, #4DA8DA)',
        zIndex: -1,
      }}
    >
      <Icon as={icon} w={8} h={8} color="primary.500" />
    </Box>
    <Heading as="h4" size="lg" fontFamily="Poppins" fontWeight="600" color="primary.700" mb={4}>
      {title}
    </Heading>
    <Text fontFamily="Lato" color="gray.600" fontSize="md" lineHeight="1.6">
      {description}
    </Text>
  </Box>
);

export const AboutSection = () => {
  return (
    <Box as="section" bg="gray.50" py={{ base: 16, md: 20 }}>
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          {/* Titre de la section avec icône */}
          <Box textAlign="center" position="relative">
            <Box
              position="absolute"
              top="-20px"
              left="50%"
              transform="translateX(-50%)"
              w={12}
              h={12}
              bg="primary.500"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="lg"
            >
              <Icon as={FiUsers} w={6} h={6} color="white" />
            </Box>
            <Heading
              as="h2"
              size="2xl"
              fontFamily="Poppins"
              fontWeight="700"
              color="primary.700"
              mb={6}
              pt={8}
            >
              À Propos de Benilab Services
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              fontFamily="Lato"
              maxW="4xl"
              mx="auto"
              lineHeight="1.8"
            >
              Votre partenaire de confiance pour une transformation digitale réussie au Bénin et au-delà.
              Nous combinons expertise locale et standards internationaux pour donner vie à vos ambitions.
            </Text>
          </Box>

          {/* Présentation de l'entreprise avec carte améliorée */}
          <Box
            bg="white"
            borderRadius="2xl"
            p={{ base: 8, md: 12 }}
            boxShadow="xl"
            border="1px solid"
            borderColor="gray.100"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #005B99, #4DA8DA)',
            }}
          >
            <Flex direction={{ base: 'column', md: 'row' }} gap={10} align="center">
              <Box flex={1}>
                <Flex align="center" mb={6}>
                  <Icon as={FiBriefcase} w={8} h={8} color="primary.500" mr={4} />
                  <Heading as="h3" size="xl" fontFamily="Poppins" fontWeight="700" color="primary.700">
                    Qui Sommes-Nous ?
                  </Heading>
                </Flex>
                <Text fontFamily="Lato" color="gray.600" mb={6} fontSize="lg" lineHeight="1.7">
                  Benilab Services est une agence de services numériques dynamique basée au Bénin.
                  Notre force réside dans notre équipe pluridisciplinaire de talents passionnés : graphistes créatifs,
                  développeurs ingénieux, monteurs vidéo dynamiques, experts en tunnels de vente et marketeurs aguerris.
                  Nous sommes unis par une mission commune : vous accompagner vers le succès digital.
                </Text>
                <Text fontFamily="Lato" color="gray.600" fontSize="lg" lineHeight="1.7">
                  Nous comprenons les défis uniques auxquels les entrepreneurs et entreprises font face et nous nous engageons
                  à fournir des solutions sur mesure qui génèrent des résultats concrets.
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* Mission et Vision avec design amélioré */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box
              bg="white"
              borderRadius="2xl"
              p={10}
              boxShadow="xl"
              border="1px solid"
              borderColor="gray.100"
              position="relative"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '0 25px 50px rgba(0, 91, 153, 0.15)',
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #005B99, #4DA8DA)',
                borderTopRadius: '2xl',
              }}
            >
              <Box
                w={14}
                h={14}
                bg="primary.50"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={6}
                border="2px solid"
                borderColor="primary.200"
              >
                <Icon as={FiTarget} w={7} h={7} color="primary.500" />
              </Box>
              <Heading as="h3" size="xl" fontFamily="Poppins" fontWeight="700" color="primary.700" mb={6}>
                Notre Mission
              </Heading>
              <Text fontFamily="Lato" color="gray.600" fontSize="lg" lineHeight="1.7">
                Proposer des services numériques personnalisés et de qualité supérieure, en nous appuyant sur l&apos;expertise
                reconnue de nos talents pour aider concrètement nos clients à atteindre leurs objectifs business les plus ambitieux.
              </Text>
            </Box>

            <Box
              bg="white"
              borderRadius="2xl"
              p={10}
              boxShadow="xl"
              border="1px solid"
              borderColor="gray.100"
              position="relative"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '0 25px 50px rgba(0, 91, 153, 0.15)',
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #4DA8DA, #005B99)',
                borderTopRadius: '2xl',
              }}
            >
              <Box
                w={14}
                h={14}
                bg="secondary.50"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={6}
                border="2px solid"
                borderColor="secondary.200"
              >
                <Icon as={FiEye} w={7} h={7} color="secondary.500" />
              </Box>
              <Heading as="h3" size="xl" fontFamily="Poppins" fontWeight="700" color="primary.700" mb={6}>
                Notre Vision
              </Heading>
              <Text fontFamily="Lato" color="gray.600" fontSize="lg" lineHeight="1.7">
                Devenir la référence incontournable en matière de solutions digitales innovantes, accessibles et efficaces,
                spécifiquement adaptées aux besoins des entrepreneurs africains et au-delà.
              </Text>
            </Box>
          </SimpleGrid>

          {/* Valeurs Clés avec design amélioré */}
          <Box>
            <Box textAlign="center" mb={12}>
              <Heading
                as="h3"
                size="2xl"
                fontFamily="Poppins"
                fontWeight="700"
                color="primary.700"
                mb={4}
              >
                Nos Valeurs Fondamentales
              </Heading>
              <Text
                fontSize="lg"
                color="gray.600"
                fontFamily="Lato"
                maxW="3xl"
                mx="auto"
                lineHeight="1.6"
              >
                Ces valeurs guident chacune de nos actions et définissent notre approche unique du service client.
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={10}>
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
                icon={FiShield}
                title="Transparence Totale"
                description="Nous vous tenons informé en temps réel de l'avancement de vos projets."
              />
              <ValueCard
                icon={FiAward}
                title="Engagement & Fiabilité"
                description="Nous livrons exactement ce qui a été promis, dans les délais convenus, sans exception."
              />
            </SimpleGrid>
          </Box>

          {/* Bouton "En savoir plus" */}
          <Box textAlign="center" pt={8}>
            <Link href="/about" passHref>
              <Button
                size="lg"
                bg="button.400"
                color="white"
                fontFamily="Poppins"
                fontWeight="600"
                px={10}
                py={6}
                borderRadius="full"
                rightIcon={<Icon as={FiArrowRight} />}
                transition="all 0.3s ease"
                _hover={{
                  bg: 'button.500',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 25px rgba(56, 148, 208, 0.4)',
                }}
                _active={{
                  bg: 'button.600',
                  transform: 'translateY(0)',
                }}
                boxShadow="0 4px 15px rgba(56, 148, 208, 0.2)"
              >
                En savoir plus sur nous
              </Button>
            </Link>
          </Box>

        </VStack>
      </Container>
    </Box>
  );
};
