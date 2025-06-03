'use client';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { FiBriefcase, FiClock, FiUsers, FiAward } from 'react-icons/fi';
import { StatCard } from './StatCard';

interface StatData {
  number: string;
  label: string;
  icon: React.ElementType;
}

export const StatisticsSection = () => {
  const stats: StatData[] = [
    { number: "50+", label: "Projets Réalisés", icon: FiBriefcase },
    { number: "3+", label: "Années d'Expérience", icon: FiClock },
    { number: "40+", label: "Clients Satisfaits", icon: FiUsers },
    { number: "100%", label: "Projets Livrés", icon: FiAward },
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
        Nos Réalisations en Chiffres
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            number={stat.number}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
