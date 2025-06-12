import { Box, Container, VStack, Button } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import { projects } from '../../data/projects';

export const ProjectsSection = () => {
  return (
    <Box as="section" id="projects" py={{ base: '12', md: '20' }} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={{ base: '8', md: '12' }} alignItems="center">
          <SectionTitle
            title="Nos Projets Phares"
            subtitle="Découvrez quelques-unes de nos réalisations qui témoignent de notre expertise et de notre capacité d'innovation."
          />
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)"
            }}
            gap={{ base: 6, md: 8 }}
            w="100%"
          >
            {projects.slice(0, 4).map((project) => (
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
          </Box>

          {/* Bouton Explorer plus */}
          <Box textAlign="center" mt={8}>
            <Button
              variant="outline"
              size="lg"
              px={8}
              py={6}
              fontSize="md"
              fontWeight="medium"
              borderColor="primary.500"
              color="primary.500"
              _hover={{
                bg: "primary.500",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(0, 91, 153, 0.3)"
              }}
              _active={{
                transform: "translateY(0)"
              }}
              transition="all 0.3s ease"
              rightIcon={<FaArrowRight />}
              as="a"
              href="/projets"
            >
              Explorer tous nos projets
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
