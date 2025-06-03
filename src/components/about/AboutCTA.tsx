'use client';

import { Box, Heading, Text, Button, HStack } from '@chakra-ui/react';
import Link from 'next/link';

export const AboutCTA = () => {
  return (
    <Box
      bg="primary.500"
      borderRadius="2xl"
      p={{ base: 8, md: 12 }}
      textAlign="center"
      color="white"
    >
      <Heading as="h2" size="xl" mb={6} fontFamily="Poppins">
        Prêt à Démarrer Votre Projet ?
      </Heading>
      <Text fontSize="lg" mb={8} opacity={0.9} maxW="2xl" mx="auto" fontFamily="Lato">
        Discutons de vos besoins et découvrons ensemble comment nous pouvons 
        transformer vos idées en solutions digitales performantes.
      </Text>
      <HStack spacing={4} justify="center" flexWrap="wrap">
        <Link href="/#contact" passHref>
          <Button
            size="lg"
            bg="white"
            color="primary.500"
            fontFamily="Poppins"
            fontWeight="600"
            px={8}
            _hover={{
              bg: 'gray.100',
              transform: 'translateY(-2px)',
            }}
          >
            Nous Contacter
          </Button>
        </Link>
        <Link href="/#projects" passHref>
          <Button
            size="lg"
            variant="outline"
            borderColor="white"
            color="white"
            fontFamily="Poppins"
            fontWeight="600"
            px={8}
            _hover={{
              bg: 'whiteAlpha.200',
              transform: 'translateY(-2px)',
            }}
          >
            Voir Nos Projets
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};
