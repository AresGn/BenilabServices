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

export default function PolitiqueConfidentialitePage() {
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
                Politique de Confidentialité
              </Heading>
              <Text
                fontSize="lg"
                color="gray.600"
                fontFamily="Lato"
              >
                Protection et traitement de vos données personnelles
              </Text>
            </VStack>

            <Divider />

            <VStack spacing={6} align="stretch">
              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  1. Introduction
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Benilab Services s'engage à protéger la confidentialité et la sécurité de vos données personnelles. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et 
                  protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services.
                </Text>
                <Text fontFamily="Lato" lineHeight="1.6" mt={3}>
                  En utilisant notre site web ou nos services, vous acceptez les pratiques décrites dans cette 
                  politique de confidentialité.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  2. Données collectées
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6" mb={3}>
                  Nous pouvons collecter les types de données personnelles suivants :
                </Text>
                <UnorderedList spacing={2} fontFamily="Lato">
                  <ListItem>Informations d'identification : nom, prénom, adresse email, numéro de téléphone</ListItem>
                  <ListItem>Informations professionnelles : nom de l'entreprise, poste, secteur d'activité</ListItem>
                  <ListItem>Données de navigation : adresse IP, type de navigateur, pages visitées, durée de visite</ListItem>
                  <ListItem>Informations de contact : messages envoyés via nos formulaires de contact</ListItem>
                  <ListItem>Préférences : choix de communication, centres d'intérêt</ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  3. Finalités du traitement
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6" mb={3}>
                  Nous utilisons vos données personnelles pour :
                </Text>
                <UnorderedList spacing={2} fontFamily="Lato">
                  <ListItem>Répondre à vos demandes et fournir nos services</ListItem>
                  <ListItem>Améliorer notre site web et nos services</ListItem>
                  <ListItem>Vous envoyer des informations sur nos services (avec votre consentement)</ListItem>
                  <ListItem>Respecter nos obligations légales et réglementaires</ListItem>
                  <ListItem>Analyser l'utilisation de notre site web pour l'optimiser</ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  4. Base légale du traitement
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6" mb={3}>
                  Le traitement de vos données personnelles est basé sur :
                </Text>
                <UnorderedList spacing={2} fontFamily="Lato">
                  <ListItem>Votre consentement explicite pour l'envoi de communications marketing</ListItem>
                  <ListItem>L'exécution d'un contrat ou de mesures précontractuelles</ListItem>
                  <ListItem>Nos intérêts légitimes pour améliorer nos services</ListItem>
                  <ListItem>Le respect d'obligations légales</ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  5. Partage des données
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
                  sauf dans les cas suivants :
                </Text>
                <UnorderedList spacing={2} fontFamily="Lato" mt={3}>
                  <ListItem>Avec votre consentement explicite</ListItem>
                  <ListItem>Avec nos prestataires de services (hébergement, analytics) sous contrat de confidentialité</ListItem>
                  <ListItem>Pour respecter une obligation légale ou une décision de justice</ListItem>
                  <ListItem>Pour protéger nos droits, notre sécurité ou celle d'autrui</ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  6. Sécurité des données
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger 
                  vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, 
                  la divulgation, l'altération ou la destruction.
                </Text>
                <Text fontFamily="Lato" lineHeight="1.6" mt={3}>
                  Ces mesures incluent le chiffrement des données, l'accès restreint aux données personnelles, 
                  la formation de notre personnel et la surveillance régulière de nos systèmes.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  7. Conservation des données
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités 
                  pour lesquelles elles ont été collectées, ou selon les exigences légales applicables.
                </Text>
                <UnorderedList spacing={2} fontFamily="Lato" mt={3}>
                  <ListItem>Données de contact : 3 ans après le dernier contact</ListItem>
                  <ListItem>Données de navigation : 13 mois maximum</ListItem>
                  <ListItem>Données contractuelles : durée du contrat + 5 ans</ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  8. Vos droits
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6" mb={3}>
                  Vous disposez des droits suivants concernant vos données personnelles :
                </Text>
                <UnorderedList spacing={2} fontFamily="Lato">
                  <ListItem>Droit d'accès : obtenir une copie de vos données personnelles</ListItem>
                  <ListItem>Droit de rectification : corriger des données inexactes ou incomplètes</ListItem>
                  <ListItem>Droit à l'effacement : demander la suppression de vos données</ListItem>
                  <ListItem>Droit à la limitation : restreindre le traitement de vos données</ListItem>
                  <ListItem>Droit à la portabilité : recevoir vos données dans un format structuré</ListItem>
                  <ListItem>Droit d'opposition : vous opposer au traitement de vos données</ListItem>
                  <ListItem>Droit de retrait du consentement : retirer votre consentement à tout moment</ListItem>
                </UnorderedList>
                <Text fontFamily="Lato" lineHeight="1.6" mt={3}>
                  Pour exercer ces droits, contactez-nous à : privacy@benilabservices.com
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  9. Cookies
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                  Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut 
                  affecter certaines fonctionnalités du site.
                </Text>
                <Text fontFamily="Lato" lineHeight="1.6" mt={3}>
                  Pour plus d'informations sur notre utilisation des cookies, consultez notre 
                  politique de cookies.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  10. Modifications
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                  Les modifications seront publiées sur cette page avec une date de mise à jour. 
                  Nous vous encourageons à consulter régulièrement cette page.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins" mb={4}>
                  11. Contact
                </Heading>
                <Text fontFamily="Lato" lineHeight="1.6">
                  Pour toute question concernant cette politique de confidentialité ou le traitement 
                  de vos données personnelles, contactez-nous :
                </Text>
                <VStack spacing={2} align="stretch" fontFamily="Lato" mt={3}>
                  <Text>• Email : privacy@benilabservices.com</Text>
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

        {/* Espacement avant le footer */}
        <Box h={16} />
      </Container>
    </Box>
  );
}

// Métadonnées pour le SEO
export const metadata = {
  title: 'Politique de Confidentialité - Benilab Services',
  description: 'Politique de confidentialité de Benilab Services. Protection et traitement de vos données personnelles.',
  robots: 'noindex, nofollow',
};
