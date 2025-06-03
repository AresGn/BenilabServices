'use client';

import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Stack, Icon } from '@chakra-ui/react';
import { FaLightbulb, FaFileAlt, FaHandsHelping, FaRocket } from 'react-icons/fa';

interface StepCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const StepCard = ({ icon, title, description }: StepCardProps) => (
  <Stack
    p={6}
    bg="white"
    boxShadow="lg"
    borderRadius="md"
    spacing={3}
    alignItems="center"
    textAlign="center"
  >
    <Icon as={icon} w={10} h={10} color="secondary.500" />
    <Heading as="h4" size="md" color="primary.500">
      {title}
    </Heading>
    <Text fontSize="md" color="gray.600">
      {description}
    </Text>
  </Stack>
);

const methodologySteps = [
  {
    icon: FaLightbulb,
    title: 'Diagnostic et Échange',
    description: 'Compréhension approfondie de vos besoins, objectifs et contraintes.',
  },
  {
    icon: FaFileAlt,
    title: 'Proposition de Solution',
    description: 'Offre claire, sur mesure, avec devis, calendrier et livrables précis.',
  },
  {
    icon: FaHandsHelping,
    title: 'Mise en Œuvre Collaborative',
    description: 'Implication du client à chaque étape critique pour une parfaite adéquation.',
  },
  {
    icon: FaRocket,
    title: 'Livraison et Accompagnement',
    description: 'Livraison du projet et accompagnement post-mise en ligne.',
  },
];

export const MethodologySection = () => {
  return (
    <Box as="section" id="methodology" py={16} bg="white">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" textAlign="center" mb={12} color="primary.700">
          Notre Méthodologie de Travail
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {methodologySteps.map((step, index) => (
            <StepCard key={index} icon={step.icon} title={step.title} description={step.description} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};