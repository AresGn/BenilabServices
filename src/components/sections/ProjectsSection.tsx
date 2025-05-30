import { Box, Container, Heading, SimpleGrid, Text, Stack } from '@chakra-ui/react';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => (
  <Stack
    p={6}
    bg="white"
    boxShadow="lg"
    borderRadius="md"
    spacing={3}
    _hover={{
      boxShadow: "xl",
      transform: "translateY(-5px)",
      transition: "all 0.3s ease-in-out",
    }}
  >
    <Heading as="h4" size="md" color="primary.500">
      {title}
    </Heading>
    <Text fontSize="md" color="gray.600">
      {description}
    </Text>
  </Stack>
);

const projects = [
  {
    title: 'Agriboost',
    description: 'Accélérateur digital spécifiquement conçu pour les agripreneurs.',
  },
  {
    title: 'Pre2Excel',
    description: 'Plateforme éducative complète pour l\'apprentissage d\'Excel.',
  },
  {
    title: 'SmartTutor',
    description: 'Révolutionne la mise en relation entre parents et enseignants.',
  },
  {
    title: 'School SMS',
    description: 'Automatise l\'envoi d\'informations scolaires par SMS.',
  },
  {
    title: 'Scales AI',
    description: 'Propose un accompagnement structuré en entrepreneuriat numérique.',
  },
  {
    title: 'AfricSwift',
    description: 'Facilite les transferts d\'argent transfrontaliers.',
  },
  {
    title: 'Excel Mastery AI',
    description: 'Exploite l\'intelligence artificielle pour l\'éducation.',
  },
  {
    title: 'Tutor AI',
    description: 'Exploite l\'intelligence artificielle pour l\'éducation.',
  },
  {
    title: 'Startup Boost Africa',
    description: 'Offre une plateforme complète de suivi, formation et mentorat pour les porteurs de projets ambitieux.',
  },
];

export const ProjectsSection = () => {
  return (
    <Box as="section" id="projects" py={16} bg="gray.50">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" textAlign="center" mb={12} color="primary.700">
          Nos Projets Phares
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
