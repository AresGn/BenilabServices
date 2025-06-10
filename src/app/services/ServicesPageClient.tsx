'use client'

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
  HStack,
  Icon
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import ServiceCard from '../../components/common/ServiceCard';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesPageClientProps {
  services: Service[];
}

export default function ServicesPageClient({ services }: ServicesPageClientProps) {
  return (
    <Box bg="gray.50" minH="100vh" pt={20}>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={12} align="stretch">
          {/* En-tête de la page */}
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              color="primary.600"
              fontFamily="Poppins"
            >
              Nos Services
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              maxW="800px"
              fontFamily="Lato"
              lineHeight="1.6"
            >
              Découvrez notre gamme complète de services digitaux conçus pour accompagner 
              votre entreprise dans sa transformation numérique. De la conception à la mise 
              en œuvre, nous vous offrons des solutions sur mesure adaptées à vos besoins.
            </Text>
          </VStack>

          {/* Grille des services */}
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            spacing={{ base: 6, md: 8 }}
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={`/services/${service.id}`}
              />
            ))}
          </SimpleGrid>

          {/* Section CTA */}
          <Box
            bg="primary.600"
            p={8}
            borderRadius="xl"
            color="white"
            textAlign="center"
            mt={12}
            position="relative"
            overflow="hidden"
          >
            {/* Fond décoratif */}
            <Box
              position="absolute"
              top={0}
              right={0}
              w="150px"
              h="150px"
              bg="whiteAlpha.100"
              borderRadius="full"
              transform="translate(50%, -50%)"
            />
            <VStack spacing={6} position="relative" zIndex={1}>
              <Heading as="h2" size="lg" fontFamily="Poppins">
                Besoin d'un service personnalisé ?
              </Heading>
              <Text fontSize="lg" fontFamily="Lato" maxW="600px">
                Chaque projet est unique. Contactez-nous pour discuter de vos besoins
                spécifiques et obtenir une solution sur mesure.
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button
                    size="lg"
                    colorScheme="secondary"
                    leftIcon={<Icon as={FaEnvelope} />}
                    fontFamily="Poppins"
                    fontWeight="medium"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
                    }}
                    transition="all 0.2s ease"
                  >
                    Demander un devis
                  </Button>
                </Link>
                <Link href="/#contact" style={{ textDecoration: 'none' }}>
                  <Button
                    size="lg"
                    variant="outline"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={FaPhone} />}
                    fontFamily="Poppins"
                    fontWeight="medium"
                    borderColor="whiteAlpha.300"
                    _hover={{
                      bg: "whiteAlpha.200",
                      borderColor: "whiteAlpha.500",
                      transform: "translateY(-2px)"
                    }}
                    transition="all 0.2s ease"
                  >
                    Nous contacter
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </Box>

          {/* Espacement avant le footer */}
          <Box h={16} />
        </VStack>
      </Container>
    </Box>
  );
}
