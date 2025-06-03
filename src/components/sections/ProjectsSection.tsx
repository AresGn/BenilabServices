import { Box, Container, VStack } from '@chakra-ui/react';
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
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                technologies={project.technologies}
                status={project.status}
              />
            ))}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
