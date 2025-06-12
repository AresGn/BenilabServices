'use client';

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Badge,
  HStack
} from '@chakra-ui/react';
import { FaQuestionCircle, FaLightbulb, FaHandshake, FaClock } from 'react-icons/fa';

const faqData = [
  {
    category: 'Services',
    icon: FaLightbulb,
    color: 'blue',
    questions: [
      {
        question: 'Quels types de services proposez-vous ?',
        answer: 'Nous proposons une gamme complète de services digitaux : développement web et mobile, marketing digital, design graphique, production vidéo et community management. Chaque service est adapté aux besoins spécifiques de votre entreprise.'
      },
      {
        question: 'Travaillez-vous avec des entreprises de toutes tailles ?',
        answer: 'Oui, nous accompagnons aussi bien les startups que les PME et grandes entreprises. Nos solutions sont scalables et s\'adaptent à votre budget et à vos objectifs.'
      },
      {
        question: 'Proposez-vous des solutions sur mesure ?',
        answer: 'Absolument ! Nous privilégions toujours une approche personnalisée. Chaque projet commence par une analyse approfondie de vos besoins pour créer une solution parfaitement adaptée.'
      }
    ]
  },
  {
    category: 'Processus',
    icon: FaClock,
    color: 'green',
    questions: [
      {
        question: 'Comment se déroule un projet type ?',
        answer: 'Notre processus comprend 6 étapes : analyse des besoins, conception, développement, tests, mise en ligne et maintenance. Nous vous tenons informé à chaque étape avec des points réguliers.'
      },
      {
        question: 'Quels sont vos délais de livraison ?',
        answer: 'Les délais varient selon la complexité du projet. Un site vitrine prend généralement 2-4 semaines, une application web 6-12 semaines. Nous établissons un planning précis lors du devis.'
      },
      {
        question: 'Puis-je suivre l\'avancement de mon projet ?',
        answer: 'Oui, nous utilisons des outils de gestion de projet collaboratifs et organisons des points d\'étape réguliers. Vous avez une visibilité complète sur l\'avancement.'
      }
    ]
  },
  {
    category: 'Tarification',
    icon: FaHandshake,
    color: 'purple',
    questions: [
      {
        question: 'Comment calculez-vous vos tarifs ?',
        answer: 'Nos tarifs sont basés sur la complexité du projet, les technologies utilisées et le temps de développement estimé. Nous proposons toujours un devis détaillé et transparent.'
      },
      {
        question: 'Proposez-vous des facilités de paiement ?',
        answer: 'Oui, nous proposons un paiement échelonné : 30% à la signature, 40% à mi-parcours et 30% à la livraison. Des arrangements spéciaux peuvent être discutés selon votre situation.'
      },
      {
        question: 'Y a-t-il des frais cachés ?',
        answer: 'Non, nos devis sont transparents et incluent tous les coûts. Les seuls frais supplémentaires possibles sont les modifications majeures en cours de projet, toujours validées avec vous.'
      }
    ]
  },
  {
    category: 'Support',
    icon: FaQuestionCircle,
    color: 'orange',
    questions: [
      {
        question: 'Proposez-vous une maintenance après livraison ?',
        answer: 'Oui, nous incluons 3 mois de support gratuit avec chaque projet. Nous proposons ensuite des contrats de maintenance adaptés à vos besoins.'
      },
      {
        question: 'Comment puis-je vous contacter en cas de problème ?',
        answer: 'Nous sommes disponibles par email, téléphone et WhatsApp. Notre équipe support répond généralement sous 24h en jours ouvrés.'
      },
      {
        question: 'Formez-vous les utilisateurs ?',
        answer: 'Oui, nous proposons des formations pour que vous puissiez utiliser et administrer votre solution en autonomie. La formation est incluse dans nos prestations.'
      }
    ]
  }
];

export default function FAQPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box bg={bgColor} minH="100vh" pt={20}>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={12} align="stretch">
          {/* En-tête */}
          <VStack spacing={6} textAlign="center">
            <Icon as={FaQuestionCircle} boxSize={16} color="primary.500" />
            <Heading
              as="h1"
              size="2xl"
              color="primary.600"
              fontFamily="Poppins"
            >
              Questions Fréquemment Posées
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              maxW="800px"
              fontFamily="Lato"
              lineHeight="1.6"
            >
              Trouvez rapidement les réponses à vos questions sur nos services, 
              notre processus de travail et nos conditions.
            </Text>
          </VStack>

          {/* Grille des catégories */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
            {faqData.map((category, categoryIndex) => (
              <Box
                key={categoryIndex}
                bg="white"
                borderRadius="xl"
                boxShadow="lg"
                overflow="hidden"
                border="1px solid"
                borderColor="gray.200"
              >
                {/* En-tête de catégorie */}
                <Box bg={`${category.color}.50`} p={6} borderBottom="1px solid" borderColor="gray.200">
                  <HStack spacing={4}>
                    <Icon as={category.icon} boxSize={8} color={`${category.color}.500`} />
                    <VStack align="flex-start" spacing={1}>
                      <Heading as="h2" size="lg" color={`${category.color}.600`} fontFamily="Poppins">
                        {category.category}
                      </Heading>
                      <Badge colorScheme={category.color} variant="subtle">
                        {category.questions.length} question{category.questions.length > 1 ? 's' : ''}
                      </Badge>
                    </VStack>
                  </HStack>
                </Box>

                {/* Questions de la catégorie */}
                <Box p={6}>
                  <Accordion allowMultiple>
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} border="none" mb={4}>
                        <AccordionButton
                          p={4}
                          bg="gray.50"
                          borderRadius="lg"
                          _hover={{ bg: "gray.100" }}
                          _expanded={{ bg: `${category.color}.50`, color: `${category.color}.700` }}
                          transition="all 0.2s"
                        >
                          <Box flex="1" textAlign="left">
                            <Text fontWeight="medium" fontFamily="Poppins">
                              {faq.question}
                            </Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel p={4} pt={6}>
                          <Text
                            color="gray.700"
                            lineHeight="1.6"
                            fontFamily="Lato"
                          >
                            {faq.answer}
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          {/* Section contact */}
          <Box
            bg="primary.600"
            color="white"
            p={8}
            borderRadius="xl"
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              right={0}
              w="200px"
              h="200px"
              bg="whiteAlpha.200"
              borderRadius="full"
              transform="translate(50%, -50%)"
            />
            <VStack spacing={6} position="relative" zIndex={1}>
              <Heading as="h2" size="xl" fontFamily="Poppins">
                Vous ne trouvez pas votre réponse ?
              </Heading>
              <Text fontSize="lg" fontFamily="Lato" maxW="600px">
                Notre équipe est là pour répondre à toutes vos questions spécifiques. 
                N'hésitez pas à nous contacter pour un échange personnalisé.
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Box
                  as="a"
                  href="/contact"
                  bg="secondary.400"
                  color="white"
                  px={6}
                  py={3}
                  borderRadius="lg"
                  fontWeight="medium"
                  _hover={{ bg: "secondary.500", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  Nous contacter
                </Box>
                <Box
                  as="a"
                  href="mailto:contact@benilabservices.com"
                  bg="whiteAlpha.200"
                  color="white"
                  px={6}
                  py={3}
                  borderRadius="lg"
                  fontWeight="medium"
                  _hover={{ bg: "whiteAlpha.300", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  Envoyer un email
                </Box>
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
