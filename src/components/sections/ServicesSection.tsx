'use client'

import { Box, Container, SimpleGrid, VStack } from '@chakra-ui/react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';
import { services } from '../../data/services';

export const ServicesSection = () => {
  return (
    <Box as="section" id="services" py={{ base: '12', md: '20' }} bg={'gray.50'}>
      <Container maxW="container.xl">
        <VStack spacing={{ base: '8', md: '12' }} alignItems="center">
          <SectionTitle
            title="Nos Services"
            subtitle="Un portfolio complet pour accompagner votre transformation digitale."
          />
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: '8', md: '10' }}>
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
          {/* Optionnel : Bouton pour voir tous les services si la liste est longue */}
          {/* <Button variant="primary" size="lg" mt={8}>
            Découvrir tous nos services
          </Button> */}
        </VStack>
      </Container>
    </Box>
  );
};
