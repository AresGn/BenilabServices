'use client';

import { Box, Container, VStack } from '@chakra-ui/react';
import { AboutHero } from '@/components/about/AboutHero';
import { StatisticsSection } from '@/components/about/StatisticsSection';
import { CompanyHistorySection } from '@/components/about/CompanyHistorySection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { TeamSection } from '@/components/about/TeamSection';
import { AboutCTA } from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <Box bg="gray.50" minH="100vh" pt={20}>
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          <AboutHero />
          <StatisticsSection />
          <CompanyHistorySection />
          <ValuesSection />
          <TeamSection />
          <AboutCTA />
        </VStack>
      </Container>
    </Box>
  );
}