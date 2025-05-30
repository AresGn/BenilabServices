import { Box, Container, Heading, SimpleGrid, Text, Stack, Button, Card, CardHeader, CardBody, Flex } from '@chakra-ui/react';

interface OfferCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
}

const OfferCard = ({ title, description, features, buttonText, buttonLink }: OfferCardProps) => (
  <Card
    bg="white"
    boxShadow="lg"
    borderRadius="md"
    overflow="hidden"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    _hover={{
      boxShadow: "xl",
      transform: "translateY(-5px)",
      transition: "all 0.3s ease-in-out",
    }}
  >
    <CardHeader>
      <Heading as="h4" size="md" color="primary.600" textAlign="center">
        {title}
      </Heading>
    </CardHeader>
    <CardBody flex="1" display="flex" flexDirection="column">
      <Text fontSize="md" color="gray.600" mb={4}>
        {description}
      </Text>
      <Stack as="ul" spacing={2} mb={6} flex="1">
        {features.map((feature, index) => (
          <Flex as="li" key={index} alignItems="center">
            {/* You can add an icon here if needed */}
            <Text fontSize="sm" color="gray.700">
              {feature}
            </Text>
          </Flex>
        ))}
      </Stack>
      <Button variant="primary" size="md" w="full" as="a" href={buttonLink}>
        {buttonText}
      </Button>
    </CardBody>
  </Card>
);

const offers = [
  {
    title: 'Pack Lancement Startup',
    description: 'Accompagnement digital pour les entrepreneurs en début d\'activité.',
    features: [
      'Création site vitrine',
      'Stratégie réseaux sociaux initiaux',
      'Emailing de base',
      'Conseils personnalisés',
    ],
    buttonText: 'Découvrir le pack',
    buttonLink: '#contact', // Replace with actual link
  },
  {
    title: 'Pack Visibilité Réseaux Sociaux',
    description: 'Optimisez votre présence en ligne avec une gestion experte.',
    features: [
      'Gestion pages Facebook/Instagram/TikTok',
      'Création de contenu visuel',
      'Stratégie éditoriale',
      'Rapports d\'analyse',
    ],
    buttonText: 'Boostez votre visibilité',
    buttonLink: '#contact', // Replace with actual link
  },
  {
    title: 'Pack Site + Tunnel de Vente',
    description: 'Combinez une présence web forte et une stratégie commerciale optimisée.',
    features: [
      'Site web professionnel',
      'Construction tunnel de vente',
      'Automatisation marketing',
      'Gestion CRM',
    ],
    buttonText: 'Transformer vos prospects',
    buttonLink: '#contact', // Replace with actual link
  },
  {
    title: 'Abonnement Community Management',
    description: 'Animation et engagement continus de vos communautés en ligne.',
    features: [
      'Gestion quotidienne',
      'Création de posts',
      'Interaction avec la communauté',
      'Veille concurrentielle',
    ],
    buttonText: 'Gérer ma communauté',
    buttonLink: '#contact', // Replace with actual link
  },
  {
    title: 'Forfait Mensuel Vidéo TikTok',
    description: 'Contenu vidéo court et dynamique pour percer sur TikTok.',
    features: [
      'Montage vidéo professionnel',
      'Création vidéos IA/Avatar',
      'Voix off et sous-titres',
      'Adaptation aux tendances',
    ],
    buttonText: 'Créer mes vidéos TikTok',
    buttonLink: '#contact', // Replace with actual link
  },
];

export const OffersSection = () => {
  return (
    <Box as="section" id="offers" py={16} bg="white">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" textAlign="center" mb={12} color="primary.700">
          Nos Offres Packagées
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {offers.map((offer, index) => (
            <OfferCard
              key={index}
              title={offer.title}
              description={offer.description}
              features={offer.features}
              buttonText={offer.buttonText}
              buttonLink={offer.buttonLink}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}; 