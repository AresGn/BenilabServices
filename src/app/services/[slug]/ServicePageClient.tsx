'use client'

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Image,
  Badge,
  HStack,
  SimpleGrid,
  Button,
  Icon,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaCode,
  FaRocket,
  FaUsers,
  FaBullseye,
  FaCogs,
  FaGift,
  FaClipboardList,
  FaStar,
  FaLightbulb
} from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
  pricing?: {
    starting: string;
    currency: string;
  };
  useCases?: string[];
  benefits?: string[];
  process?: string[];
  deliverables?: string[];
}

interface ServicePageClientProps {
  service: Service;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const tabs = [
    { label: 'Fonctionnalités', shortLabel: 'Fonctions', icon: FaCheckCircle },
    { label: 'Cas d\'usage', shortLabel: 'Cas', icon: FaBullseye },
    { label: 'Avantages', shortLabel: 'Avantages', icon: FaStar },
    { label: 'Processus', shortLabel: 'Processus', icon: FaCogs },
    { label: 'Livrables', shortLabel: 'Livrables', icon: FaGift }
  ];

  return (
    <Box bg="gray.50" minH="100vh" pt={20}>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Bouton retour */}
          <Link href="/services">
            <Button
              leftIcon={<FaArrowLeft />}
              variant="ghost"
              colorScheme="primary"
              alignSelf="flex-start"
              fontFamily="Poppins"
              _hover={{ bg: "primary.50" }}
            >
              Retour aux services
            </Button>
          </Link>

          {/* En-tête du service */}
          <Box bg="white" p={8} borderRadius="xl" boxShadow="lg" position="relative" overflow="hidden">
            {/* Fond décoratif */}
            <Box
              position="absolute"
              top={0}
              right={0}
              w="200px"
              h="200px"
              bg="primary.50"
              borderRadius="full"
              transform="translate(50%, -50%)"
              opacity={0.5}
            />
            <VStack spacing={6} align="center" textAlign="center" position="relative" zIndex={1}>
              <Image
                src={service.icon}
                alt={service.title}
                boxSize="100px"
                objectFit="contain"
                filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
              />
              <VStack spacing={4}>
                <Heading
                  as="h1"
                  size="2xl"
                  color="primary.600"
                  fontFamily="Poppins"
                  textAlign="center"
                >
                  {service.title}
                </Heading>
                <Text
                  fontSize="xl"
                  color="gray.600"
                  maxW="700px"
                  fontFamily="Lato"
                  lineHeight="1.6"
                >
                  {service.longDescription}
                </Text>
              </VStack>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                {service.pricing && (
                  <Badge
                    colorScheme="secondary"
                    fontSize="md"
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontFamily="Poppins"
                  >
                    À partir de {service.pricing.starting} {service.pricing.currency}
                  </Badge>
                )}
                <Badge
                  colorScheme="primary"
                  variant="outline"
                  fontSize="sm"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontFamily="Poppins"
                >
                  Service professionnel
                </Badge>
              </HStack>
            </VStack>
          </Box>

          {/* Contenu détaillé avec onglets */}
          <Box bg="white" borderRadius="xl" boxShadow="lg" overflow="hidden">
            {isMobile ? (
              // Version mobile avec menu déroulant
              <Box>
                <Box bg="white" px={4} py={4} borderBottom="2px solid" borderColor="gray.100">
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      w="100%"
                      justifyContent="space-between"
                      fontFamily="Poppins"
                      fontWeight="medium"
                      color="primary.600"
                      bg="gray.50"
                      _hover={{ bg: "gray.100" }}
                      _active={{ bg: "gray.100" }}
                      size="lg"
                    >
                      <HStack spacing={2}>
                        <Icon as={tabs[activeTab].icon} />
                        <Text>{tabs[activeTab].label}</Text>
                      </HStack>
                    </MenuButton>
                    <MenuList zIndex={1000}>
                      {tabs.map((tab, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => setActiveTab(index)}
                          bg={activeTab === index ? "primary.50" : "white"}
                          color={activeTab === index ? "primary.600" : "gray.700"}
                          _hover={{ bg: "primary.50", color: "primary.600" }}
                          fontFamily="Poppins"
                        >
                          <HStack spacing={3}>
                            <Icon as={tab.icon} />
                            <Text>{tab.label}</Text>
                          </HStack>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </Box>
              </Box>
            ) : (
              // Version desktop avec onglets classiques
              <Tabs variant="line" colorScheme="primary" isLazy index={activeTab} onChange={setActiveTab}>
                <TabList
                  bg="white"
                  px={8}
                  py={4}
                  borderBottom="2px solid"
                  borderColor="gray.100"
                >
                  {tabs.map((tab, index) => (
                    <Tab
                      key={index}
                      fontFamily="Poppins"
                      fontWeight="medium"
                      color="gray.600"
                      fontSize="md"
                      px={6}
                      py={3}
                      _selected={{
                        color: "primary.600",
                        borderColor: "primary.500",
                        borderBottomWidth: "3px",
                        fontWeight: "semibold"
                      }}
                      _hover={{
                        color: "primary.500",
                        bg: "primary.50"
                      }}
                      _focus={{
                        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
                      }}
                      transition="all 0.2s ease"
                    >
                      <Icon as={tab.icon} mr={2} boxSize={5} />
                      {tab.label}
                    </Tab>
                  ))}
                </TabList>
              </Tabs>
            )}

            {/* Contenu des onglets */}
            <Box p={{ base: 4, md: 8 }} bg="gray.50">
              {/* Onglet Fonctionnalités */}
              {activeTab === 0 && (
                <VStack spacing={8} align="stretch">
                  <HStack spacing={4}>
                    <Icon as={FaCheckCircle} color="primary.500" boxSize={8} />
                    <VStack align="flex-start" spacing={1}>
                      <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins">
                        Fonctionnalités incluses
                      </Heading>
                      <Text color="gray.600" fontFamily="Lato" fontSize="md">
                        Découvrez tout ce qui est inclus dans ce service
                      </Text>
                    </VStack>
                  </HStack>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {service.features.map((feature, index) => (
                      <Box
                        key={index}
                        p={6}
                        bg="white"
                        borderRadius="xl"
                        boxShadow="sm"
                        border="1px solid"
                        borderColor="gray.200"
                        _hover={{
                          boxShadow: "md",
                          transform: "translateY(-2px)",
                          borderColor: "primary.200"
                        }}
                        transition="all 0.2s ease"
                      >
                        <HStack spacing={4} align="flex-start">
                          <Icon
                            as={FaCheckCircle}
                            color="primary.500"
                            boxSize={5}
                            mt={1}
                            flexShrink={0}
                          />
                          <Text
                            fontFamily="Lato"
                            fontWeight="medium"
                            color="gray.700"
                            fontSize="md"
                            lineHeight="1.6"
                          >
                            {feature}
                          </Text>
                        </HStack>
                      </Box>
                    ))}
                  </SimpleGrid>

                  {/* Technologies */}
                  {service.technologies && service.technologies.length > 0 && (
                    <Box mt={4}>
                      <HStack spacing={4} mb={6}>
                        <Icon as={FaCode} color="primary.500" boxSize={7} />
                        <VStack align="flex-start" spacing={1}>
                          <Heading as="h3" size="md" color="primary.600" fontFamily="Poppins">
                            Technologies utilisées
                          </Heading>
                          <Text color="gray.600" fontFamily="Lato" fontSize="sm">
                            Outils et frameworks que nous maîtrisons
                          </Text>
                        </VStack>
                      </HStack>
                      <Flex wrap="wrap" gap={3}>
                        {service.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            bg="primary.100"
                            color="primary.700"
                            px={4}
                            py={2}
                            borderRadius="full"
                            fontFamily="Poppins"
                            fontSize="sm"
                            fontWeight="medium"
                            border="1px solid"
                            borderColor="primary.200"
                            _hover={{
                              bg: "primary.200",
                              transform: "translateY(-1px)"
                            }}
                            transition="all 0.2s ease"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </Flex>
                    </Box>
                  )}
                </VStack>
              )}

              {/* Onglet Cas d'usage */}
              {activeTab === 1 && (
                <VStack spacing={8} align="stretch">
                  <HStack spacing={4}>
                    <Icon as={FaBullseye} color="primary.500" boxSize={{ base: 6, md: 8 }} />
                    <VStack align="flex-start" spacing={1}>
                      <Heading as="h2" size={{ base: "md", md: "lg" }} color="primary.600" fontFamily="Poppins">
                        Cas d'usage typiques
                      </Heading>
                      <Text color="gray.600" fontFamily="Lato" fontSize={{ base: "sm", md: "md" }}>
                        Découvrez comment ce service peut s'adapter à vos besoins spécifiques
                      </Text>
                    </VStack>
                  </HStack>

                  {service.useCases && service.useCases.length > 0 ? (
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                      {service.useCases.map((useCase, index) => (
                      <Box
                        key={index}
                        p={6}
                        bg="white"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.200"
                        boxShadow="sm"
                        _hover={{
                          boxShadow: "md",
                          transform: "translateY(-2px)",
                          borderColor: "primary.200"
                        }}
                        transition="all 0.2s ease"
                      >
                        <HStack spacing={4} align="flex-start">
                          <Icon
                            as={FaLightbulb}
                            color="primary.500"
                            boxSize={6}
                            mt={1}
                            flexShrink={0}
                          />
                          <Text
                            fontFamily="Lato"
                            fontWeight="medium"
                            color="gray.700"
                            fontSize="md"
                            lineHeight="1.6"
                          >
                            {useCase}
                          </Text>
                        </HStack>
                      </Box>
                      ))}
                    </SimpleGrid>
                  ) : (
                    <Box
                      p={8}
                      bg="white"
                      borderRadius="xl"
                      textAlign="center"
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <Text color="gray.500" fontStyle="italic" fontSize="lg">
                        Cas d'usage en cours de rédaction...
                      </Text>
                    </Box>
                  )}
                </VStack>
              )}

              {/* Onglet Avantages */}
              {activeTab === 2 && (
                <VStack spacing={8} align="stretch">
                  <HStack spacing={4}>
                    <Icon as={FaStar} color="primary.500" boxSize={{ base: 6, md: 8 }} />
                    <VStack align="flex-start" spacing={1}>
                      <Heading as="h2" size={{ base: "md", md: "lg" }} color="primary.600" fontFamily="Poppins">
                        Avantages pour votre entreprise
                      </Heading>
                      <Text color="gray.600" fontFamily="Lato" fontSize={{ base: "sm", md: "md" }}>
                        Les bénéfices concrets que vous obtiendrez avec ce service
                      </Text>
                    </VStack>
                  </HStack>

                  {service.benefits && service.benefits.length > 0 ? (
                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
                      {service.benefits.map((benefit, index) => (
                      <GridItem key={index}>
                        <Box
                          p={6}
                          bg="white"
                          borderRadius="xl"
                          border="1px solid"
                          borderColor="gray.200"
                          h="100%"
                          boxShadow="sm"
                          _hover={{
                            boxShadow: "md",
                            transform: "translateY(-2px)",
                            borderColor: "primary.200"
                          }}
                          transition="all 0.2s ease"
                        >
                          <HStack spacing={4} align="flex-start">
                            <Icon
                              as={FaStar}
                              color="primary.500"
                              boxSize={6}
                              mt={1}
                              flexShrink={0}
                            />
                            <Text
                              fontFamily="Lato"
                              fontWeight="medium"
                              color="gray.700"
                              fontSize="md"
                              lineHeight="1.6"
                            >
                              {benefit}
                            </Text>
                          </HStack>
                        </Box>
                      </GridItem>
                      ))}
                    </Grid>
                  ) : (
                    <Box
                      p={8}
                      bg="white"
                      borderRadius="xl"
                      textAlign="center"
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <Text color="gray.500" fontStyle="italic" fontSize="lg">
                        Avantages en cours de rédaction...
                      </Text>
                    </Box>
                  )}
                </VStack>
              )}

              {/* Onglet Processus */}
              {activeTab === 3 && (
                <VStack spacing={8} align="stretch">
                  <HStack spacing={4}>
                    <Icon as={FaCogs} color="primary.500" boxSize={{ base: 6, md: 8 }} />
                    <VStack align="flex-start" spacing={1}>
                      <Heading as="h2" size={{ base: "md", md: "lg" }} color="primary.600" fontFamily="Poppins">
                        Notre processus de travail
                      </Heading>
                      <Text color="gray.600" fontFamily="Lato" fontSize={{ base: "sm", md: "md" }}>
                        Découvrez comment nous procédons étape par étape
                      </Text>
                    </VStack>
                  </HStack>

                  {service.process && service.process.length > 0 ? (
                    <VStack spacing={6} align="stretch">
                      {service.process.map((step, index) => (
                      <Box
                        key={index}
                        p={6}
                        bg="white"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.200"
                        boxShadow="sm"
                        _hover={{
                          boxShadow: "md",
                          transform: "translateY(-2px)",
                          borderColor: "primary.200"
                        }}
                        transition="all 0.2s ease"
                      >
                        <HStack spacing={6} align="flex-start">
                          <Box
                            minW="50px"
                            h="50px"
                            bg="primary.500"
                            color="white"
                            borderRadius="full"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontWeight="bold"
                            fontFamily="Poppins"
                            fontSize="lg"
                            flexShrink={0}
                            boxShadow="0 4px 12px rgba(59, 130, 246, 0.3)"
                          >
                            {index + 1}
                          </Box>
                          <VStack align="flex-start" spacing={2} flex="1">
                            <Text
                              fontFamily="Lato"
                              fontWeight="medium"
                              color="gray.700"
                              fontSize="md"
                              lineHeight="1.6"
                            >
                              {step}
                            </Text>
                          </VStack>
                        </HStack>
                      </Box>
                      ))}
                    </VStack>
                  ) : (
                    <Box
                      p={8}
                      bg="white"
                      borderRadius="xl"
                      textAlign="center"
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <Text color="gray.500" fontStyle="italic" fontSize="lg">
                        Processus en cours de rédaction...
                      </Text>
                    </Box>
                  )}
                </VStack>
              )}

              {/* Onglet Livrables */}
              {activeTab === 4 && (
                <VStack spacing={8} align="stretch">
                  <HStack spacing={4}>
                    <Icon as={FaGift} color="primary.500" boxSize={{ base: 6, md: 8 }} />
                    <VStack align="flex-start" spacing={1}>
                      <Heading as="h2" size={{ base: "md", md: "lg" }} color="primary.600" fontFamily="Poppins">
                        Ce que vous recevrez
                      </Heading>
                      <Text color="gray.600" fontFamily="Lato" fontSize={{ base: "sm", md: "md" }}>
                        Tous les éléments livrés à la fin du projet
                      </Text>
                    </VStack>
                  </HStack>

                  {service.deliverables && service.deliverables.length > 0 ? (
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                      {service.deliverables.map((deliverable, index) => (
                      <Box
                        key={index}
                        p={6}
                        bg="white"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.200"
                        boxShadow="sm"
                        _hover={{
                          boxShadow: "md",
                          transform: "translateY(-2px)",
                          borderColor: "primary.200"
                        }}
                        transition="all 0.2s ease"
                      >
                        <HStack spacing={4} align="flex-start">
                          <Icon
                            as={FaGift}
                            color="primary.500"
                            boxSize={6}
                            mt={1}
                            flexShrink={0}
                          />
                          <Text
                            fontFamily="Lato"
                            fontWeight="medium"
                            color="gray.700"
                            fontSize="md"
                            lineHeight="1.6"
                          >
                            {deliverable}
                          </Text>
                        </HStack>
                      </Box>
                      ))}
                    </SimpleGrid>
                  ) : (
                    <Box
                      p={8}
                      bg="white"
                      borderRadius="xl"
                      textAlign="center"
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <Text color="gray.500" fontStyle="italic" fontSize="lg">
                        Livrables en cours de rédaction...
                      </Text>
                    </Box>
                  )}
                </VStack>
              )}
            </Box>
          </Box>

          {/* Section tarification et CTA */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
            {/* Tarification */}
            <Box bg="white" p={8} borderRadius="xl" boxShadow="lg">
              <VStack spacing={6} align="stretch">
                <HStack spacing={3}>
                  <Icon as={FaClipboardList} color="primary.500" boxSize={6} />
                  <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins">
                    Tarification
                  </Heading>
                </HStack>
                {service.pricing ? (
                  <Box
                    p={8}
                    bg="gradient-to-br from-primary.50 to-primary.100"
                    borderRadius="xl"
                    textAlign="center"
                    border="1px solid"
                    borderColor="primary.200"
                  >
                    <VStack spacing={4}>
                      <Text fontSize="4xl" fontWeight="bold" color="primary.700" fontFamily="Poppins">
                        {service.pricing.starting} {service.pricing.currency}
                      </Text>
                      <Text color="gray.700" fontFamily="Lato" fontSize="lg" fontWeight="medium">
                        Prix de départ pour ce service
                      </Text>
                      <Badge
                        colorScheme="green"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="medium"
                      >
                        Devis personnalisé gratuit
                      </Badge>
                    </VStack>
                  </Box>
                ) : (
                  <Box
                    p={8}
                    bg="gradient-to-br from-primary.50 to-primary.100"
                    borderRadius="xl"
                    textAlign="center"
                    border="1px solid"
                    borderColor="primary.200"
                  >
                    <VStack spacing={4}>
                      <Text fontSize="3xl" fontWeight="bold" color="primary.700" fontFamily="Poppins">
                        Sur devis
                      </Text>
                      <Text color="gray.700" fontFamily="Lato" fontSize="lg" fontWeight="medium">
                        Tarification personnalisée selon vos besoins
                      </Text>
                      <Badge
                        colorScheme="green"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="medium"
                      >
                        Consultation gratuite
                      </Badge>
                    </VStack>
                  </Box>
                )}
                <VStack spacing={4} align="stretch">
                  <HStack spacing={3}>
                    <Icon as={FaCheckCircle} color="green.500" boxSize={4} />
                    <Text fontSize="md" color="gray.700" fontFamily="Lato" fontWeight="medium">
                      Consultation initiale gratuite
                    </Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={FaCheckCircle} color="green.500" boxSize={4} />
                    <Text fontSize="md" color="gray.700" fontFamily="Lato" fontWeight="medium">
                      Devis détaillé sous 48h
                    </Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={FaCheckCircle} color="green.500" boxSize={4} />
                    <Text fontSize="md" color="gray.700" fontFamily="Lato" fontWeight="medium">
                      Paiement échelonné possible
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </Box>

            {/* Call to Action */}
            <Box bg="primary.600" p={8} borderRadius="xl" color="white" position="relative" overflow="hidden">
              {/* Fond décoratif */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100px"
                h="100px"
                bg="whiteAlpha.200"
                borderRadius="full"
                transform="translate(-50%, -50%)"
              />
              <VStack spacing={6} position="relative" zIndex={1}>
                <Icon as={FaRocket} boxSize={12} color="secondary.400" />
                <VStack spacing={3} textAlign="center">
                  <Heading as="h2" size="xl" fontFamily="Poppins">
                    Prêt à démarrer votre projet ?
                  </Heading>
                  <Text fontSize="lg" fontFamily="Lato" maxW="400px">
                    Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
                  </Text>
                </VStack>
                <VStack spacing={4} w="100%">
                  <Link href="/contact" style={{ width: '100%' }}>
                    <Button
                      size="lg"
                      colorScheme="secondary"
                      leftIcon={<FaUsers />}
                      w="100%"
                      fontFamily="Poppins"
                      fontWeight="medium"
                    >
                      Demander un devis gratuit
                    </Button>
                  </Link>
                  <Link href="/#contact" style={{ width: '100%' }}>
                    <Button
                      size="lg"
                      variant="outline"
                      colorScheme="whiteAlpha"
                      leftIcon={<FaExternalLinkAlt />}
                      w="100%"
                      fontFamily="Poppins"
                      fontWeight="medium"
                    >
                      Nous contacter
                    </Button>
                  </Link>
                </VStack>
              </VStack>
            </Box>
          </SimpleGrid>

          {/* Espacement avant le footer */}
          <Box h={16} />
        </VStack>
      </Container>
    </Box>
  );
}
