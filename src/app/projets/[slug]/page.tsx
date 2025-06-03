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
  useColorModeValue 
} from '@chakra-ui/react';
import { FaArrowLeft, FaExternalLinkAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { projects } from '../../../data/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  // Attendre la résolution des paramètres
  const resolvedParams = await params;

  // Trouver le projet correspondant au slug
  const project = projects.find(p => p.id === resolvedParams.slug);
  
  if (!project) {
    notFound();
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'green';
      case 'in-progress':
        return 'yellow';
      case 'planned':
        return 'blue';
      default:
        return 'gray';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Terminé';
      case 'in-progress':
        return 'En cours';
      case 'planned':
        return 'Planifié';
      default:
        return 'Statut inconnu';
    }
  };

  return (
    <Box bg={bgColor} minH="100vh" pt={20}>
      <Container maxW="container.xl">
        <VStack spacing={{ base: '8', md: '12' }} alignItems="stretch">
          {/* Bouton retour */}
          <Button
            leftIcon={<FaArrowLeft />}
            variant="ghost"
            alignSelf="flex-start"
            onClick={() => window.history.back()}
            _hover={{ bg: "gray.100" }}
          >
            Retour aux projets
          </Button>

          {/* En-tête du projet */}
          <Box textAlign="center">
            <Badge
              colorScheme="blue"
              variant="subtle"
              mb={4}
              borderRadius="md"
              px={3}
              py={1}
              fontSize="sm"
            >
              {project.category}
            </Badge>
            
            <Heading 
              as="h1" 
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              color="primary.500"
              mb={4}
            >
              {project.title}
            </Heading>
            
            <Text 
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="800px"
              mx="auto"
              lineHeight="1.6"
            >
              {project.description}
            </Text>

            <HStack justify="center" spacing={4} mt={6}>
              <Badge
                colorScheme={getStatusColor(project.status)}
                variant="solid"
                borderRadius="full"
                px={3}
                py={1}
                fontSize="sm"
                display="flex"
                alignItems="center"
                gap={2}
              >
                <FaCalendarAlt />
                {getStatusText(project.status)}
              </Badge>
            </HStack>
          </Box>

          {/* Image principale */}
          <Box borderRadius="lg" overflow="hidden" boxShadow="xl">
            <Image
              src={project.image}
              alt={project.title}
              w="100%"
              h={{ base: "300px", md: "500px" }}
              objectFit="cover"
            />
          </Box>

          {/* Contenu principal */}
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
            {/* Description détaillée */}
            <Box gridColumn={{ base: "1", lg: "1 / 3" }}>
              <Heading as="h2" size="lg" color="primary.500" mb={4}>
                À propos du projet
              </Heading>
              <Text 
                fontSize="lg" 
                color="gray.700" 
                lineHeight="1.8"
                mb={6}
              >
                {project.longDescription}
              </Text>
              
              <Divider my={6} />
              
              {/* Fonctionnalités clés */}
              <Heading as="h3" size="md" color="primary.500" mb={4}>
                Fonctionnalités principales
              </Heading>
              <VStack align="stretch" spacing={2}>
                {/* Ici vous pourriez ajouter des fonctionnalités spécifiques au projet */}
                <Text color="gray.700" _before={{ content: '"✓ "', color: "green.500", fontWeight: "bold" }}>
                  Interface utilisateur intuitive et responsive
                </Text>
                <Text color="gray.700" _before={{ content: '"✓ "', color: "green.500", fontWeight: "bold" }}>
                  Architecture scalable et performante
                </Text>
                <Text color="gray.700" _before={{ content: '"✓ "', color: "green.500", fontWeight: "bold" }}>
                  Intégration d'APIs tierces
                </Text>
                <Text color="gray.700" _before={{ content: '"✓ "', color: "green.500", fontWeight: "bold" }}>
                  Optimisation SEO et performance
                </Text>
              </VStack>
            </Box>

            {/* Sidebar avec informations techniques */}
            <Box>
              <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
                <Heading as="h3" size="md" color="primary.500" mb={4}>
                  Technologies utilisées
                </Heading>
                <HStack spacing={2} flexWrap="wrap" mb={6}>
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      colorScheme="blue"
                      borderRadius="md"
                      px={2}
                      py={1}
                      fontSize="xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>

                <Divider my={4} />

                <Heading as="h4" size="sm" color="primary.500" mb={3}>
                  Informations du projet
                </Heading>
                <VStack align="stretch" spacing={2} fontSize="sm">
                  <HStack justify="space-between">
                    <Text color="gray.600">Catégorie :</Text>
                    <Text fontWeight="medium">{project.category}</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text color="gray.600">Statut :</Text>
                    <Badge colorScheme={getStatusColor(project.status)} variant="subtle">
                      {getStatusText(project.status)}
                    </Badge>
                  </HStack>
                </VStack>

                <Button
                  mt={6}
                  w="100%"
                  bg="#3894d0"
                  color="white"
                  _hover={{
                    bg: "#2980b9",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(56, 148, 208, 0.3)"
                  }}
                  rightIcon={<FaExternalLinkAlt />}
                  as="a"
                  href="/#contact"
                >
                  Projet similaire ?
                </Button>
              </Box>
            </Box>
          </SimpleGrid>

          {/* Call to Action final */}
          <Box textAlign="center" mt={12} p={8} bg="white" borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="lg" color="primary.500" mb={4}>
              Intéressé par un projet similaire ?
            </Heading>
            <Text color="gray.600" mb={6} maxW="600px" mx="auto">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons 
              vous aider à atteindre vos objectifs digitaux.
            </Text>
            <HStack justify="center" spacing={4}>
              <Button
                bg="#3894d0"
                color="white"
                size="lg"
                _hover={{
                  bg: "#2980b9",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(56, 148, 208, 0.3)"
                }}
                as="a"
                href="/#contact"
              >
                Démarrer mon projet
              </Button>
              <Button
                variant="outline"
                size="lg"
                borderColor="#3894d0"
                color="#3894d0"
                _hover={{
                  bg: "#3894d0",
                  color: "white"
                }}
                as="a"
                href="/projets"
              >
                Voir d'autres projets
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
