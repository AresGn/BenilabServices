'use client';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { FiBriefcase, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { DetailedValueCard } from './DetailedValueCard';

interface ValueData {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

export const ValuesSection = () => {
  const detailedValues: ValueData[] = [
    {
      icon: FiBriefcase,
      title: "Excellence Technique",
      description: "Notre engagement envers la qualité se traduit par des standards techniques élevés et une veille technologique constante.",
      details: [
        "Utilisation des dernières technologies et frameworks",
        "Code propre et maintenable selon les meilleures pratiques",
        "Tests rigoureux et assurance qualité",
        "Documentation complète de tous nos projets"
      ]
    },
    {
      icon: FiUsers,
      title: "Approche Collaborative",
      description: "Nous croyons en la co-création avec nos clients pour des solutions qui répondent parfaitement à leurs besoins.",
      details: [
        "Ateliers de conception participative",
        "Communication transparente et régulière",
        "Feedback continu et itérations rapides",
        "Formation et accompagnement des équipes"
      ]
    },
    {
      icon: FiTrendingUp,
      title: "Innovation Continue",
      description: "Nous restons à la pointe de l'innovation pour offrir des solutions modernes et performantes.",
      details: [
        "Recherche et développement constant",
        "Adoption des nouvelles technologies",
        "Méthodes agiles et design thinking",
        "Solutions sur mesure et créatives"
      ]
    }
  ];

  return (
    <Box>
      <Heading 
        as="h2" 
        size="xl" 
        textAlign="center" 
        mb={10} 
        color="primary.700"
        fontFamily="Poppins"
      >
        Ce Qui Nous Distingue
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
        {detailedValues.map((value, index) => (
          <DetailedValueCard 
            key={index}
            icon={value.icon}
            title={value.title}
            description={value.description}
            details={value.details}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
