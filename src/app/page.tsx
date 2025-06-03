import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { TeamSection } from '../components/sections/TeamSection';
import { MethodologySection } from '../components/sections/MethodologySection';
import { OffersSection } from '../components/sections/OffersSection';
import { ContactSection } from '../components/sections/ContactSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import { Box } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <MethodologySection />
      <TestimonialsSection />
      <OffersSection />
      <ContactSection />
      {/* Vous pouvez ajouter d'autres sections ici si nécessaire */}
    </Box>
  );
}
