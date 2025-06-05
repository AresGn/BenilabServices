import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Divider,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export default function ConditionsUtilisationPage() {
  const bgColor = 'gray.50';
  const cardBg = 'white';

  return (
    <Box bg={bgColor} minH="100vh" pt={20}>
      <Container maxW="container.lg" py={12}>
        <Box bg={cardBg} p={8} borderRadius="xl" boxShadow="lg">
          <VStack spacing={8} align="stretch">
            <VStack spacing={4} textAlign="center">
              <Heading
                as="h1"
                size="2xl"
                color="primary.600"
                fontFamily="Poppins"
              >
                Conditions d'Utilisation
              </Heading>
              <Text
                fontSize="lg"
                color="gray.600"
                fontFamily="Lato"
              >
                Conditions générales d'utilisation de nos services
              </Text>
            </VStack>

            <Divider />

            <VStack spacing={6} align="stretch">
              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  1. Objet
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités 
                  et conditions d'utilisation du site web www.benilabservices.com ainsi que des services proposés 
                  par Benilab Services.
                </Text>
                <Text fontFamily="Lato" lineHeight="1.6" mt={3}>
                  L'utilisation du site implique l'acceptation pleine et entière des présentes conditions générales 
                  d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  2. Accès au site
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Le site www.benilabservices.com est accessible gratuitement en tout lieu à tout utilisateur 
                  ayant un accès à Internet. Tous les frais supportés par l'utilisateur pour accéder au service 
                  (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
                </Text>
                <Text fontFamily="Lato" lineHeight="1.6" mt={3}>
                  Benilab Services se réserve le droit de modifier, suspendre ou interrompre l'accès au site 
                  à tout moment et sans préavis pour des raisons de maintenance, de mise à jour ou pour toute 
                  autre raison jugée nécessaire.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  3. Services proposés
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6" mb={3}>
                  Benilab Services propose les services suivants :
                </Text>
                <UnorderedList spacing={2} fontFamily="Lato">
                  <ListItem>Développement web et mobile</ListItem>
                  <ListItem>Marketing digital</ListItem>
                  <ListItem>Design graphique et identité visuelle</ListItem>
                  <ListItem>Création de contenu vidéo</ListItem>
                  <ListItem>Community management</ListItem>
                  <ListItem>Conseil en transformation digitale</ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  4. Utilisation du site
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6" mb={3}>
                  L'utilisateur s'engage à utiliser le site de manière conforme à sa destination et s'interdit notamment :
                </Text>
                <UnorderedList spacing={2} fontFamily="Lato">
                  <ListItem>D'utiliser le site à des fins illégales ou non autorisées</ListItem>
                  <ListItem>De porter atteinte aux droits de propriété intellectuelle de Benilab Services</ListItem>
                  <ListItem>De diffuser des contenus illicites, diffamatoires ou portant atteinte aux bonnes mœurs</ListItem>
                  <ListItem>De perturber le fonctionnement du site ou d'en compromettre la sécurité</ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  5. Propriété intellectuelle
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  L'ensemble des éléments du site (textes, images, vidéos, logos, icônes, etc.) sont protégés 
                  par les droits de propriété intellectuelle et appartiennent à Benilab Services ou à ses 
                  partenaires. Toute reproduction, représentation, modification, publication, adaptation de 
                  tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  6. Responsabilité
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Benilab Services s'efforce de fournir des informations aussi précises que possible sur le site. 
                  Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences 
                  dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui 
                  fournissent ces informations.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  7. Données personnelles
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Le traitement des données personnelles collectées sur le site est régi par notre politique 
                  de confidentialité, accessible à l'adresse : /politique-confidentialite
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  8. Droit applicable et juridiction
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Les présentes conditions générales d'utilisation sont soumises au droit béninois. 
                  En cas de litige, les tribunaux de Cotonou seront seuls compétents.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  9. Contact
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Pour toute question concernant ces conditions d'utilisation, vous pouvez nous contacter :
                </Text>
                <VStack spacing={2} align="stretch" fontFamily="Lato" mt={3}>
                  <Text>• Email : contact@benilabservices.com</Text>
                  <Text>• Téléphone : +229 XX XX XX XX</Text>
                  <Text>• Adresse : Benilab Services, Cotonou, Bénin</Text>
                </VStack>
              </Box>

              <Divider />

              <Text fontSize="sm" color="gray.500" textAlign="center" fontFamily="Lato">
                Dernière mise à jour : Janvier 2025
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

// Métadonnées pour le SEO
export const metadata = {
  title: 'Conditions d\'Utilisation - Benilab Services',
  description: 'Conditions générales d\'utilisation des services de Benilab Services, agence digitale au Bénin.',
  robots: 'noindex, nofollow',
};
