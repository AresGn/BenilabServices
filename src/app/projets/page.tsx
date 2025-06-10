'use client'

import { useState } from 'react';
import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  Text, 
  SimpleGrid, 
  Button, 
  HStack,
  Badge,
  useColorModeValue 
} from '@chakra-ui/react';
import { FaFilter } from 'react-icons/fa';
import ProjectCard from '../../components/common/ProjectCard';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  
  // Extraire toutes les catégories uniques
  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];
  
  // Filtrer les projets selon la catégorie sélectionnée
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Box bg={bgColor} minH="100vh" pt={20}>
      <Container maxW="container.xl">
        <VStack spacing={{ base: '8', md: '12' }} alignItems="center">
          {/* En-tête de la page */}
          <Box textAlign="center" maxW="800px">
            <Heading 
              as="h1" 
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              color="primary.500"
              mb={4}
            >
              Nos Projets
            </Heading>
            <Text 
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              lineHeight="1.6"
            >
              Découvrez notre portfolio complet de réalisations digitales. 
              Chaque projet témoigne de notre expertise et de notre capacité 
              à transformer les idées en solutions concrètes et performantes.
            </Text>
          </Box>

          {/* Filtres par catégorie */}
          <Box w="100%">
            <HStack 
              spacing={2} 
              justify="center" 
              wrap="wrap" 
              mb={8}
              align="center"
            >
              <FaFilter color="gray.500" />
              <Text fontSize="sm" color="gray.500" mr={4}>
                Filtrer par catégorie :
              </Text>
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={selectedCategory === category ? "solid" : "outline"}
                  colorScheme={selectedCategory === category ? "blue" : "gray"}
                  onClick={() => setSelectedCategory(category)}
                  borderRadius="full"
                  px={4}
                  py={2}
                  fontSize="xs"
                  fontWeight="medium"
                  transition="all 0.2s"
                  _hover={{
                    transform: "translateY(-1px)",
                    boxShadow: "sm"
                  }}
                >
                  {category === 'all' ? 'Tous les projets' : category}
                  <Badge 
                    ml={2} 
                    colorScheme={selectedCategory === category ? "white" : "blue"}
                    variant="subtle"
                    borderRadius="full"
                    fontSize="xs"
                  >
                    {category === 'all' ? projects.length : projects.filter(p => p.category === category).length}
                  </Badge>
                </Button>
              ))}
            </HStack>
          </Box>

          {/* Grille des projets */}
          <Box w="100%">
            <Text 
              fontSize="lg" 
              color="gray.600" 
              mb={6}
              textAlign="center"
            >
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} 
              {selectedCategory !== 'all' && ` dans la catégorie "${selectedCategory}"`}
            </Text>
            
            <SimpleGrid 
              columns={{ base: 1, md: 2, lg: 3 }} 
              spacing={{ base: 6, md: 8 }}
              w="100%"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                  technologies={project.technologies}
                  status={project.status}
                  link={`/projets/${project.id}`}
                />
              ))}
            </SimpleGrid>
          </Box>

          {/* Call to Action */}
          <Box textAlign="center" mt={12} p={8} bg="white" borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="lg" color="primary.500" mb={4}>
              Vous avez un projet en tête ?
            </Heading>
            <Text color="gray.600" mb={6} maxW="600px" mx="auto">
              Rejoignez nos clients satisfaits et donnez vie à vos idées avec notre expertise.
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </Text>
            <Button
              bg="#3894d0"
              color="white"
              size="lg"
              px={8}
              py={6}
              fontSize="md"
              fontWeight="medium"
              _hover={{
                bg: "#2980b9",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(56, 148, 208, 0.3)"
              }}
              _active={{
                bg: "#1f6a9a",
                transform: "translateY(0)"
              }}
              transition="all 0.3s ease"
              as="a"
              href="/#contact"
            >
              Démarrer mon projet
            </Button>
          </Box>

          {/* Espacement avant le footer */}
          <Box h={16} />
        </VStack>
      </Container>
    </Box>
  );
}
