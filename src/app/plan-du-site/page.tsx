"use client";

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Link,
  Icon,
  HStack,
} from '@chakra-ui/react';
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaProjectDiagram,
  FaBlog,
  FaEnvelope,
  FaFileAlt,
  FaShieldAlt,
  FaGavel,
  FaSitemap
} from 'react-icons/fa';
import type { IconType } from 'react-icons';
import NextLink from 'next/link';

// Définir les clés valides pour les icônes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const iconNames = [
  'FaHome',
  'FaInfoCircle',
  'FaCogs',
  'FaProjectDiagram',
  'FaBlog',
  'FaEnvelope',
  'FaFileAlt',
  'FaShieldAlt',
  'FaGavel',
  'FaSitemap',
] as const;
type IconName = typeof iconNames[number];

const iconMap: Record<IconName, IconType> = {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaProjectDiagram,
  FaBlog,
  FaEnvelope,
  FaFileAlt,
  FaShieldAlt,
  FaGavel,
  FaSitemap
};

export default function PlanDuSitePage() {
  const bgColor = 'gray.50';
  const cardBg = 'white';

  const siteStructure: Array<{
    title: string;
    icon: IconName;
    color: string;
    links: Array<{ name: string; url: string; description: string }>;
  }> = [
    {
      title: 'Pages principales',
      icon: 'FaHome',
      color: 'primary.500',
      links: [
        { name: 'Accueil', url: '/', description: 'Page d\'accueil avec présentation de nos services' },
        { name: 'À propos', url: '/about', description: 'Notre histoire, notre équipe et nos valeurs' },
        { name: 'Services', url: '/services', description: 'Tous nos services digitaux' },
        { name: 'Projets', url: '/projets', description: 'Portfolio de nos réalisations' },
        { name: 'Blog', url: '/blog', description: 'Articles et actualités digitales' },
        { name: 'Contact', url: '/contact', description: 'Formulaire de contact et coordonnées' },
      ]
    },
    {
      title: 'Services détaillés',
      icon: 'FaCogs',
      color: 'secondary.500',
      links: [
        { name: 'Développement Web', url: '/services/web-development', description: 'Sites web et applications' },
        { name: 'Marketing Digital', url: '/services/marketing-digital', description: 'Stratégies marketing en ligne' },
        { name: 'Design Graphique', url: '/services/design-graphique', description: 'Identité visuelle et design' },
        { name: 'Création Vidéo', url: '/services/video-content', description: 'Contenu vidéo professionnel' },
        { name: 'Community Management', url: '/services/community-management', description: 'Gestion des réseaux sociaux' },
      ]
    },
    {
      title: 'Projets',
      icon: 'FaProjectDiagram',
      color: 'primary.500',
      links: [
        { name: 'AgriBoost', url: '/projets/agriboost', description: 'Plateforme agricole intelligente' },
        { name: 'Pre2Excel', url: '/projets/pre2excel', description: 'Outil de conversion de données' },
        { name: 'School SMS', url: '/projets/school-sms', description: 'Système de gestion scolaire' },
        { name: 'SmartTutor', url: '/projets/smarttutor', description: 'Plateforme d\'apprentissage en ligne' },
      ]
    },
    {
      title: 'Blog & Actualités',
      icon: 'FaBlog',
      color: 'secondary.500',
      links: [
        { name: 'Tous les articles', url: '/blog', description: 'Derniers articles et actualités' },
        { name: 'Transformation Digitale', url: '/blog?category=Transformation%20Digitale', description: 'Articles sur la transformation digitale' },
        { name: 'Design', url: '/blog?category=Design', description: 'Tendances et conseils design' },
        { name: 'SEO', url: '/blog?category=SEO', description: 'Optimisation pour les moteurs de recherche' },
        { name: 'E-commerce', url: '/blog?category=E-commerce', description: 'Commerce électronique et vente en ligne' },
      ]
    },
    {
      title: 'Pages légales',
      icon: 'FaGavel',
      color: 'gray.500',
      links: [
        { name: 'Mentions légales', url: '/mentions-legales', description: 'Informations légales de l\'entreprise' },
        { name: 'Politique de confidentialité', url: '/politique-confidentialite', description: 'Protection des données personnelles' },
        { name: 'Conditions d\'utilisation', url: '/conditions-utilisation', description: 'Conditions générales d\'utilisation' },
        { name: 'Plan du site', url: '/plan-du-site', description: 'Architecture complète du site' },
      ]
    }
  ];

  return (
    <Box bg={bgColor} minH="100vh" pt={20}>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={12} align="stretch">
          {/* En-tête */}
          <VStack spacing={6} textAlign="center">
            <Icon as={iconMap['FaSitemap']} boxSize={16} color="primary.500" />
            <Heading
              as="h1"
              size="2xl"
              color="primary.600"
              fontFamily="Poppins"
            >
              Plan du Site
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              maxW="800px"
              fontFamily="Lato"
              lineHeight="1.6"
            >
              Découvrez l&apos;architecture complète de notre site web. 
              Trouvez facilement toutes les pages et sections disponibles.
            </Text>
          </VStack>

          {/* Structure du site */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
            {siteStructure.map((section, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={6}
                borderRadius="xl"
                boxShadow="lg"
                border="1px"
                borderColor="gray.200"
              >
                <VStack spacing={6} align="stretch">
                  {/* En-tête de section */}
                  <HStack spacing={4}>
                    <Icon
                      as={iconMap[section.icon]}
                      boxSize={8}
                      color={section.color}
                    />
                    <Heading
                      as="h2"
                      size="lg"
                      color="primary.600"
                      fontFamily="Poppins"
                    >
                      {section.title}
                    </Heading>
                  </HStack>

                  {/* Liste des liens */}
                  <VStack spacing={4} align="stretch">
                    {section.links.map((link, linkIndex) => (
                      <Box
                        key={linkIndex}
                        p={4}
                        borderRadius="lg"
                        bg="gray.50"
                        transition="all 0.2s"
                        _hover={{
                          bg: "gray.100",
                          transform: 'translateY(-1px)'
                        }}
                      >
                        <NextLink href={link.url} passHref>
                          <Link
                            display="block"
                            _hover={{ textDecoration: 'none' }}
                          >
                            <VStack spacing={2} align="stretch">
                              <Text
                                fontWeight="semibold"
                                color="primary.600"
                                fontFamily="Poppins"
                                fontSize="md"
                              >
                                {link.name}
                              </Text>
                              <Text
                                fontSize="sm"
                                color="gray.600"
                                fontFamily="Lato"
                                lineHeight="1.4"
                              >
                                {link.description}
                              </Text>
                              <Text
                                fontSize="xs"
                                color="gray.400"
                                fontFamily="mono"
                              >
                                {link.url}
                              </Text>
                            </VStack>
                          </Link>
                        </NextLink>
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Statistiques du site */}
          <Box
            bg="primary.600"
            p={8}
            borderRadius="xl"
            color="white"
            textAlign="center"
          >
            <VStack spacing={6}>
              <Heading as="h2" size="lg" fontFamily="Poppins">
                Statistiques du site
              </Heading>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" fontFamily="Poppins">
                    25+
                  </Text>
                  <Text fontSize="sm" fontFamily="Lato">
                    Pages disponibles
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" fontFamily="Poppins">
                    5
                  </Text>
                  <Text fontSize="sm" fontFamily="Lato">
                    Services principaux
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" fontFamily="Poppins">
                    10+
                  </Text>
                  <Text fontSize="sm" fontFamily="Lato">
                    Projets présentés
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" fontFamily="Poppins">
                    4
                  </Text>
                  <Text fontSize="sm" fontFamily="Lato">
                    Articles de blog
                  </Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Navigation rapide */}
          <Box
            bg={cardBg}
            p={8}
            borderRadius="xl"
            boxShadow="lg"
            textAlign="center"
          >
            <VStack spacing={6}>
              <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins">
                Navigation rapide
              </Heading>
              <Text color="gray.600" fontFamily="Lato" maxW="600px">
                Accédez rapidement aux sections les plus importantes de notre site
              </Text>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                <NextLink href="/" passHref>
                  <Link
                    bg="primary.500"
                    color="white"
                    px={6}
                    py={3}
                    borderRadius="lg"
                    fontWeight="semibold"
                    _hover={{ bg: 'primary.600', textDecoration: 'none' }}
                  >
                    Accueil
                  </Link>
                </NextLink>
                <NextLink href="/services" passHref>
                  <Link
                    bg="secondary.500"
                    color="white"
                    px={6}
                    py={3}
                    borderRadius="lg"
                    fontWeight="semibold"
                    _hover={{ bg: 'secondary.600', textDecoration: 'none' }}
                  >
                    Services
                  </Link>
                </NextLink>
                <NextLink href="/projets" passHref>
                  <Link
                    bg="primary.500"
                    color="white"
                    px={6}
                    py={3}
                    borderRadius="lg"
                    fontWeight="semibold"
                    _hover={{ bg: 'primary.600', textDecoration: 'none' }}
                  >
                    Projets
                  </Link>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <Link
                    bg="secondary.500"
                    color="white"
                    px={6}
                    py={3}
                    borderRadius="lg"
                    fontWeight="semibold"
                    _hover={{ bg: 'secondary.600', textDecoration: 'none' }}
                  >
                    Contact
                  </Link>
                </NextLink>
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Espacement avant le footer */}
          <Box h={16} />
        </VStack>
      </Container>
    </Box>
  );
}
