import React from 'react';
import { Box, Heading, Text, Button as ChakraButton } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box textAlign="center" py={20} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, primary.400, secondary.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="2xl" mt={3} mb={2} fontFamily="Poppins">
        Page non trouvée
      </Text>
      <Text color={'gray.500'} mb={6} fontFamily="Lato">
        La page que vous recherchez ne semble pas exister.
      </Text>

      <Link href="/" passHref>
        <ChakraButton
          colorScheme="primary"
          bgGradient="linear(to-r, primary.500, secondary.500, primary.600)"
          color="white"
          variant="solid"
          px={8}
          py={6}
          rounded="lg"
          fontFamily="Poppins"
          _hover={{
            bgGradient: 'linear(to-r, primary.600, secondary.600, primary.700)',
          }}
        >
          Retour à l&apos;accueil
        </ChakraButton>
      </Link>
    </Box>
  );
} 
