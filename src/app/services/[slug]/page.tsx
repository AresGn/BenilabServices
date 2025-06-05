'use client'

import { notFound } from 'next/navigation';
import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  Text, 
  Image, 
  Badge, 
  HStack,
  SimpleGrid,
  Button,
  Divider,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Icon,
  Flex
} from '@chakra-ui/react';
import { FaArrowLeft, FaExternalLinkAlt, FaCheckCircle, FaCode, FaRocket, FaUsers } from 'react-icons/fa';
import { services } from '../../../data/services';
import Link from 'next/link';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  // Attendre la résolution des paramètres
  const resolvedParams = await params;

  // Trouver le service correspondant au slug
  const service = services.find(s => s.id === resolvedParams.slug);
  
  if (!service) {
    notFound();
  }

  return (
    <Box bg={bgColor} minH="100vh" pt={20}>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Bouton retour */}
          <Link href="/#services">
            <Button
              leftIcon={<FaArrowLeft />}
              variant="ghost"
              colorScheme="primary"
              alignSelf="flex-start"
            >
              Retour aux services
            </Button>
          </Link>

          {/* En-tête du service */}
          <Box bg={cardBg} p={8} borderRadius="xl" boxShadow="lg">
            <VStack spacing={6} align="center" textAlign="center">
              <Image
                src={service.icon}
                alt={service.title}
                boxSize="80px"
                objectFit="contain"
              />
              <VStack spacing={3}>
                <Heading
                  as="h1"
                  size="2xl"
                  color="primary.600"
                  fontFamily="Poppins"
                >
                  {service.title}
                </Heading>
                <Text
                  fontSize="xl"
                  color="gray.600"
                  maxW="600px"
                  fontFamily="Lato"
                >
                  {service.longDescription}
                </Text>
              </VStack>
              <Badge
                colorScheme="secondary"
                fontSize="md"
                px={4}
                py={2}
                borderRadius="full"
              >
                À partir de {service.pricing.starting} {service.pricing.currency}
              </Badge>
            </VStack>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
            {/* Fonctionnalités */}
            <Box bg={cardBg} p={8} borderRadius="xl" boxShadow="lg">
              <VStack spacing={6} align="stretch">
                <HStack spacing={3}>
                  <Icon as={FaCheckCircle} color="secondary.500" boxSize={6} />
                  <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins">
                    Fonctionnalités incluses
                  </Heading>
                </HStack>
                <List spacing={3}>
                  {service.features.map((feature, index) => (
                    <ListItem key={index} display="flex" alignItems="center">
                      <ListIcon as={FaCheckCircle} color="secondary.500" />
                      <Text fontFamily="Lato">{feature}</Text>
                    </ListItem>
                  ))}
                </List>
              </VStack>
            </Box>

            {/* Technologies */}
            <Box bg={cardBg} p={8} borderRadius="xl" boxShadow="lg">
              <VStack spacing={6} align="stretch">
                <HStack spacing={3}>
                  <Icon as={FaCode} color="primary.500" boxSize={6} />
                  <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins">
                    Technologies utilisées
                  </Heading>
                </HStack>
                <SimpleGrid columns={2} spacing={3}>
                  {service.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      colorScheme="primary"
                      variant="subtle"
                      p={2}
                      textAlign="center"
                      borderRadius="md"
                    >
                      {tech}
                    </Badge>
                  ))}
                </SimpleGrid>
              </VStack>
            </Box>
          </SimpleGrid>

          {/* Call to Action */}
          <Box bg="primary.600" p={8} borderRadius="xl" color="white" textAlign="center">
            <VStack spacing={6}>
              <Icon as={FaRocket} boxSize={12} color="secondary.400" />
              <VStack spacing={3}>
                <Heading as="h2" size="xl" fontFamily="Poppins">
                  Prêt à démarrer votre projet ?
                </Heading>
                <Text fontSize="lg" fontFamily="Lato" maxW="600px">
                  Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
                </Text>
              </VStack>
              <HStack spacing={4}>
                <Link href="/contact">
                  <Button
                    size="lg"
                    colorScheme="secondary"
                    leftIcon={<FaUsers />}
                  >
                    Demander un devis
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    colorScheme="whiteAlpha"
                    leftIcon={<FaExternalLinkAlt />}
                  >
                    Nous contacter
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
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
    keywords: `${service.title}, ${service.technologies.join(', ')}, Benilab Services, Bénin`,
  };
}

// Génération des paramètres statiques pour les services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}
