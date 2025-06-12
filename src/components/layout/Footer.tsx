'use client';

import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  Image,
  Heading,
  Flex,
  Icon,
  Divider,
  VStack,
  HStack,
} from '@chakra-ui/react';
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import NextLink from 'next/link';

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Heading
      as="h4"
      size="md"
      fontWeight="600"
      mb={4}
      color="white"
      fontFamily="Poppins"
    >
      {children}
    </Heading>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="whiteAlpha.200"
      rounded="full"
      w={10}
      h={10}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="all 0.3s ease"
      _hover={{
        bg: 'secondary.400',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(77, 168, 218, 0.3)',
      }}
      color="white"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ContactInfo = ({
  icon,
  text,
  href
}: {
  icon: React.ElementType;
  text: string;
  href?: string;
}) => (
  <HStack spacing={3} align="center">
    <Icon as={icon} color="secondary.400" w={4} h={4} />
    {href ? (
      <Link
        href={href}
        color="gray.300"
        fontSize="sm"
        _hover={{ color: "secondary.400" }}
        isExternal
      >
        {text}
      </Link>
    ) : (
      <Text color="gray.300" fontSize="sm">
        {text}
      </Text>
    )}
  </HStack>
);

export const Footer = () => {
  return (
    <Box
      bg="primary.500"
      color="white"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #4DA8DA, #005B99)',
      }}
    >
      <Container maxW="container.xl" py={12}>
        <SimpleGrid
          templateColumns={{ base: '1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={10}
        >
          {/* Section Logo et Description */}
          <VStack align="flex-start" spacing={6}>
            <Box>
              <Image
                src="/images/logo/android-chrome-512x512.png"
                alt="Benilab Services Logo"
                h="50px"
                filter="brightness(0) invert(1)"
              />
            </Box>
            <Text
              fontSize="md"
              color="gray.300"
              lineHeight="1.6"
              maxW="300px"
              fontFamily="Lato"
            >
              Votre partenaire de confiance pour une transformation digitale réussie.
              Nous combinons expertise locale et standards internationaux.
            </Text>

            {/* Informations de contact */}
            <VStack align="flex-start" spacing={3}>
              <ContactInfo
                icon={FaEnvelope}
                text="contact@benilabservices.com"
                href="mailto:contact@benilabservices.com"
              />
              <ContactInfo
                icon={FaPhone}
                text="+229 XX XX XX XX"
                href="tel:+229XXXXXXXX"
              />
              <ContactInfo
                icon={FaMapMarkerAlt}
                text="Cotonou, Bénin"
              />
            </VStack>

            {/* Réseaux sociaux */}
            <HStack spacing={4}>
              <SocialButton label="Facebook" href="https://facebook.com/benilabservices">
                <FaFacebook />
              </SocialButton>
              <SocialButton label="LinkedIn" href="https://linkedin.com/company/benilabservices">
                <FaLinkedin />
              </SocialButton>
              <SocialButton label="Instagram" href="https://instagram.com/benilabservices">
                <FaInstagram />
              </SocialButton>
              <SocialButton label="YouTube" href="https://youtube.com/@benilabservices">
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Twitter" href="https://twitter.com/benilabservices">
                <FaTwitter />
              </SocialButton>
            </HStack>
          </VStack>

          {/* Section Services */}
          <VStack align="flex-start" spacing={4}>
            <ListHeader>Services</ListHeader>
            <VStack align="flex-start" spacing={3}>
              <Link
                as={NextLink}
                href="/services/web-development"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Développement Web
              </Link>
              <Link
                as={NextLink}
                href="/services/marketing-digital"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Marketing Digital
              </Link>
              <Link
                as={NextLink}
                href="/services/design-graphique"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Design Graphique
              </Link>
              <Link
                as={NextLink}
                href="/services/video-content"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Production Vidéo
              </Link>
              <Link
                as={NextLink}
                href="/services/community-management"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Community Management
              </Link>
            </VStack>
          </VStack>

          {/* Section Entreprise */}
          <VStack align="flex-start" spacing={4}>
            <ListHeader>Entreprise</ListHeader>
            <VStack align="flex-start" spacing={3}>
              <Link
                as={NextLink}
                href="/about"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                À propos
              </Link>
              <Link
                as={NextLink}
                href="/about#team"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Notre Équipe
              </Link>
              <Link
                as={NextLink}
                href="/projets"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Nos Projets
              </Link>
              <Link
                as={NextLink}
                href="/blog"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Blog
              </Link>
              <Link
                as={NextLink}
                href="/contact"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Contact
              </Link>
              <Link
                href="#"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Carrières
              </Link>
            </VStack>
          </VStack>

          {/* Section Support */}
          <VStack align="flex-start" spacing={4}>
            <ListHeader>Support</ListHeader>
            <VStack align="flex-start" spacing={3}>
              <Link
                href="#"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Centre d&apos;aide
              </Link>
              <Link
                as={NextLink}
                href="/faq"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                FAQ
              </Link>
              <Link
                href="/mentions-legales"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/conditions-utilisation"
                color="gray.300"
                fontSize="sm"
                _hover={{ color: "secondary.400" }}
                fontFamily="Lato"
              >
                Conditions d&apos;utilisation
              </Link>
            </VStack>
          </VStack>
        </SimpleGrid>

        {/* Divider et Copyright */}
        <Divider my={8} borderColor="whiteAlpha.300" />

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color="gray.300" fontFamily="Lato">
            © 2025 Benilab Services. Tous droits réservés
          </Text>
          <HStack spacing={6} fontSize="sm">
            <Link
              href="#"
              color="gray.300"
              _hover={{ color: "secondary.400" }}
              fontFamily="Lato"
            >
              Politique de cookies
            </Link>
            <Link
              href="/plan-du-site"
              color="gray.300"
              _hover={{ color: "secondary.400" }}
              fontFamily="Lato"
            >
              Plan du site
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
