'use client';

import { Box, Heading, Text, Icon, Flex } from '@chakra-ui/react';
import { FiGlobe } from 'react-icons/fi';

export const CompanyHistorySection = () => {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      p={{ base: 8, md: 12 }}
      boxShadow="xl"
      border="1px solid"
      borderColor="gray.100"
    >
      <Flex align="center" mb={8}>
        <Icon as={FiGlobe} w={8} h={8} color="primary.500" mr={4} />
        <Heading as="h2" size="xl" color="primary.700" fontFamily="Poppins">
          Notre Histoire
        </Heading>
      </Flex>
      <Text color="gray.600" fontSize="lg" lineHeight="1.8" mb={6} fontFamily="Lato">
        Fondée avec la vision de démocratiser l'accès aux technologies numériques en Afrique, 
        Benilab Services est née de la passion de créateurs et d'innovateurs déterminés à faire 
        la différence dans l'écosystème digital africain.
      </Text>
      <Text color="gray.600" fontSize="lg" lineHeight="1.8" mb={6} fontFamily="Lato">
        Depuis nos débuts, nous avons accompagné des dizaines d'entrepreneurs et d'entreprises 
        dans leur transformation digitale, en combinant expertise technique internationale et 
        compréhension profonde du marché local.
      </Text>
      <Text color="gray.600" fontSize="lg" lineHeight="1.8" fontFamily="Lato">
        Aujourd'hui, nous continuons d'innover et d'évoluer pour rester à la pointe des 
        technologies émergentes, tout en gardant notre engagement premier : votre succès.
      </Text>
    </Box>
  );
};
