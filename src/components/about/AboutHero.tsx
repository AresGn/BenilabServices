'use client';

import { Box, Heading, Text, Button, Badge } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export const AboutHero = () => {
  return (
    <>
      {/* Bouton retour */}
      <Link href="/" passHref>
        <Button
          leftIcon={<FiArrowLeft />}
          variant="ghost"
          alignSelf="flex-start"
          _hover={{ bg: "gray.100" }}
          fontFamily="Poppins"
        >
          Retour à l'accueil
        </Button>
      </Link>

      {/* En-tête de la page */}
      <Box textAlign="center">
        <Badge
          colorScheme="blue"
          variant="subtle"
          mb={4}
          borderRadius="md"
          px={4}
          py={2}
          fontSize="sm"
          fontWeight="medium"
        >
          À Propos
        </Badge>
        <Heading 
          as="h1" 
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          color="primary.700"
          mb={6}
          fontFamily="Poppins"
        >
          Découvrez Benilab Services
        </Heading>
        <Text 
          fontSize={{ base: 'lg', md: 'xl' }}
          color="gray.600"
          maxW="4xl"
          mx="auto"
          lineHeight="1.8"
          fontFamily="Lato"
        >
          Une agence digitale passionnée, dédiée à transformer vos idées en solutions numériques 
          innovantes qui génèrent des résultats concrets pour votre business.
        </Text>
      </Box>
    </>
  );
};
