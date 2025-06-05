// Métadonnées pour le SEO
export const metadata = {
  title: 'Contact - Benilab Services',
  description: 'Contactez Benilab Services pour vos projets digitaux. Notre équipe d\'experts vous accompagne dans votre transformation numérique au Bénin.',
  keywords: 'contact, Benilab Services, agence digitale, Bénin, Cotonou, devis, projet digital',
};

'use client';

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  HStack,
  Icon,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaPaperPlane
} from 'react-icons/fa';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    newsletter: false,
  });

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const toast = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: 'Message envoyé !',
        description: 'Nous vous répondrons dans les plus brefs délais.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Reset du formulaire
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        newsletter: false,
      });
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue. Veuillez réessayer.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Adresse',
      details: ['Cotonou, Bénin', 'Quartier Fidjrossè'],
      color: 'primary.500'
    },
    {
      icon: FaPhone,
      title: 'Téléphone',
      details: ['+229 XX XX XX XX', '+229 XX XX XX XX'],
      color: 'secondary.500'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['contact@benilabservices.com', 'info@benilabservices.com'],
      color: 'primary.500'
    },
    {
      icon: FaClock,
      title: 'Horaires',
      details: ['Lun - Ven: 8h - 18h', 'Sam: 9h - 13h'],
      color: 'secondary.500'
    }
  ];

  return (
    <Box bg={bgColor} minH="100vh" pt={20}>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={12} align="stretch">
          {/* En-tête */}
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              color="primary.600"
              fontFamily="Poppins"
            >
              Contactez-nous
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              maxW="800px"
              fontFamily="Lato"
              lineHeight="1.6"
            >
              Vous avez un projet en tête ? Une question sur nos services ? 
              N'hésitez pas à nous contacter. Notre équipe est là pour vous accompagner 
              dans votre transformation digitale.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
            {/* Informations de contact */}
            <VStack spacing={8} align="stretch">
              <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins">
                Nos coordonnées
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    bg={cardBg}
                    p={6}
                    borderRadius="xl"
                    boxShadow="md"
                  >
                    <VStack spacing={4} align="center" textAlign="center">
                      <Icon
                        as={info.icon}
                        boxSize={8}
                        color={info.color}
                      />
                      <VStack spacing={2}>
                        <Heading
                          as="h3"
                          size="md"
                          color="primary.600"
                          fontFamily="Poppins"
                        >
                          {info.title}
                        </Heading>
                        {info.details.map((detail, idx) => (
                          <Text
                            key={idx}
                            color="gray.600"
                            fontFamily="Lato"
                            fontSize="sm"
                          >
                            {detail}
                          </Text>
                        ))}
                      </VStack>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>

              {/* Réseaux sociaux */}
              <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
                <VStack spacing={4}>
                  <Heading
                    as="h3"
                    size="md"
                    color="primary.600"
                    fontFamily="Poppins"
                  >
                    Suivez-nous
                  </Heading>
                  <HStack spacing={4}>
                    <Button
                      as="a"
                      href="#"
                      leftIcon={<FaWhatsapp />}
                      colorScheme="whatsapp"
                      variant="outline"
                      size="sm"
                    >
                      WhatsApp
                    </Button>
                    <Button
                      as="a"
                      href="#"
                      leftIcon={<FaLinkedin />}
                      colorScheme="linkedin"
                      variant="outline"
                      size="sm"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      as="a"
                      href="#"
                      leftIcon={<FaFacebook />}
                      colorScheme="facebook"
                      variant="outline"
                      size="sm"
                    >
                      Facebook
                    </Button>
                  </HStack>
                </VStack>
              </Box>
            </VStack>

            {/* Formulaire de contact */}
            <Box bg={cardBg} p={8} borderRadius="xl" boxShadow="lg">
              <VStack spacing={6} align="stretch">
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins">
                  Envoyez-nous un message
                </Heading>
                
                <Box as="form" onSubmit={handleSubmit}>
                  <VStack spacing={6}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
                      <FormControl isRequired>
                        <FormLabel>Prénom</FormLabel>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Votre prénom"
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Nom</FormLabel>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Votre nom"
                        />
                      </FormControl>
                    </SimpleGrid>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre@email.com"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Téléphone</FormLabel>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+229 XX XX XX XX"
                        />
                      </FormControl>
                    </SimpleGrid>

                    <FormControl>
                      <FormLabel>Entreprise</FormLabel>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nom de votre entreprise"
                      />
                    </FormControl>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
                      <FormControl isRequired>
                        <FormLabel>Service souhaité</FormLabel>
                        <Select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          placeholder="Sélectionnez un service"
                        >
                          <option value="web-development">Développement Web</option>
                          <option value="marketing-digital">Marketing Digital</option>
                          <option value="design-graphique">Design Graphique</option>
                          <option value="video-content">Création Vidéo</option>
                          <option value="community-management">Community Management</option>
                          <option value="autre">Autre</option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Budget estimé</FormLabel>
                        <Select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          placeholder="Sélectionnez votre budget"
                        >
                          <option value="moins-500k">Moins de 500 000 FCFA</option>
                          <option value="500k-1m">500 000 - 1 000 000 FCFA</option>
                          <option value="1m-2m">1 000 000 - 2 000 000 FCFA</option>
                          <option value="plus-2m">Plus de 2 000 000 FCFA</option>
                        </Select>
                      </FormControl>
                    </SimpleGrid>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Décrivez votre projet ou votre demande..."
                        rows={5}
                      />
                    </FormControl>

                    <Checkbox
                      name="newsletter"
                      isChecked={formData.newsletter}
                      onChange={handleInputChange}
                    >
                      Je souhaite recevoir la newsletter de Benilab Services
                    </Checkbox>

                    <Button
                      type="submit"
                      colorScheme="primary"
                      size="lg"
                      w="100%"
                      leftIcon={<FaPaperPlane />}
                      isLoading={isSubmitting}
                      loadingText="Envoi en cours..."
                    >
                      Envoyer le message
                    </Button>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>

          {/* CTA supplémentaire */}
          <Box
            bg="primary.600"
            p={8}
            borderRadius="xl"
            color="white"
            textAlign="center"
          >
            <VStack spacing={4}>
              <Heading as="h2" size="lg" fontFamily="Poppins">
                Besoin d'une réponse rapide ?
              </Heading>
              <Text fontSize="lg" fontFamily="Lato" maxW="600px">
                Pour une réponse immédiate, contactez-nous directement par WhatsApp 
                ou appelez-nous pendant nos heures d'ouverture.
              </Text>
              <HStack spacing={4}>
                <Button
                  as="a"
                  href="https://wa.me/229XXXXXXXX"
                  leftIcon={<FaWhatsapp />}
                  colorScheme="whatsapp"
                  size="lg"
                >
                  WhatsApp
                </Button>
                <Button
                  as="a"
                  href="tel:+229XXXXXXXX"
                  leftIcon={<FaPhone />}
                  variant="outline"
                  colorScheme="whiteAlpha"
                  size="lg"
                >
                  Appeler
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}


