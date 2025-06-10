import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Divider,
} from '@chakra-ui/react';

export default function MentionsLegalesPage() {
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
                Mentions Légales
              </Heading>
              <Text
                fontSize="lg"
                color="gray.600"
                fontFamily="Lato"
              >
                Informations légales concernant Benilab Services
              </Text>
            </VStack>

            <Divider />

            <VStack spacing={6} align="stretch">
              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  1. Informations sur l'entreprise
                </Heading>
                <VStack spacing={3} align="stretch" fontFamily="Lato">
                  <Text><strong>Dénomination sociale :</strong> Benilab Services</Text>
                  <Text><strong>Forme juridique :</strong> [À compléter selon le statut juridique]</Text>
                  <Text><strong>Siège social :</strong> Cotonou, Bénin</Text>
                  <Text><strong>Numéro d'identification :</strong> [À compléter]</Text>
                  <Text><strong>Email :</strong> contact@benilabservices.com</Text>
                  <Text><strong>Téléphone :</strong> +229 XX XX XX XX</Text>
                </VStack>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  2. Directeur de publication
                </Heading>
                <VStack spacing={3} align="stretch" fontFamily="Lato">
                  <Text><strong>Nom :</strong> [Nom du directeur de publication]</Text>
                  <Text><strong>Qualité :</strong> Gérant / Directeur Général</Text>
                  <Text><strong>Email :</strong> direction@benilabservices.com</Text>
                </VStack>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  3. Hébergement du site
                </Heading>
                <VStack spacing={3} align="stretch" fontFamily="Lato">
                  <Text><strong>Hébergeur :</strong> [Nom de l'hébergeur]</Text>
                  <Text><strong>Adresse :</strong> [Adresse de l'hébergeur]</Text>
                  <Text><strong>Téléphone :</strong> [Téléphone de l'hébergeur]</Text>
                </VStack>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  4. Propriété intellectuelle
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  L'ensemble de ce site relève de la législation béninoise et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                  les documents téléchargeables et les représentations iconographiques et photographiques.
                </Text>
                <Text fontFamily="Lato" lineHeight="1.6" mt={3}>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  5. Responsabilité
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est 
                  périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                  ou des lacunes. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                  merci de bien vouloir le signaler par email à l'adresse contact@benilabservices.com en décrivant 
                  le problème de la manière la plus précise possible.
                </Text>
                <Text fontFamily="Lato" lineHeight="1.6" mt={3}>
                  Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule 
                  responsabilité. En conséquence, Benilab Services ne saurait être tenu responsable d'un 
                  quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données 
                  consécutives au téléchargement.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  6. Liens hypertextes
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Les sites internet de tiers auxquels il est fait référence sur ce site ne sont pas sous le 
                  contrôle de Benilab Services. En conséquence, Benilab Services n'assume aucune responsabilité 
                  quant au contenu de ces sites. Les risques liés à l'utilisation de ces sites incombent 
                  pleinement à l'utilisateur.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  7. Droit applicable et juridiction compétente
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Tout litige en relation avec l'utilisation du site www.benilabservices.com est soumis au 
                  droit béninois. Il est fait attribution exclusive de juridiction aux tribunaux compétents 
                  de Cotonou.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  8. Contact
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </Text>
                <VStack spacing={2} align="stretch" fontFamily="Lato" mt={3}>
                  <Text>• Par email : contact@benilabservices.com</Text>
                  <Text>• Par téléphone : +229 XX XX XX XX</Text>
                  <Text>• Par courrier : Benilab Services, Cotonou, Bénin</Text>
                </VStack>
              </Box>

              <Divider />

              <Text fontSize="sm" color="gray.500" textAlign="center" fontFamily="Lato">
                Dernière mise à jour : Janvier 2025
              </Text>
            </VStack>
          </VStack>
        </Box>

        {/* Espacement avant le footer */}
        <Box h={16} />
      </Container>
    </Box>
  );
}

// Métadonnées pour le SEO
export const metadata = {
  title: 'Mentions Légales - Benilab Services',
  description: 'Mentions légales de Benilab Services, agence digitale au Bénin. Informations légales et conditions d\'utilisation.',
  robots: 'noindex, nofollow',
};
