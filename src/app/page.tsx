import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { Box } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* Vous pouvez ajouter d'autres sections ici si nécessaire */}
    </Box>
  );
}
