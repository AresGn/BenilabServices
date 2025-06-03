'use client';

import React from 'react';
import { Box, Container, Heading, Text, Stack, SimpleGrid, Icon, Link } from '@chakra-ui/react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { MultiStepContactForm } from './MultiStepContactForm';
import { contactInfo } from '../../data/contact';

interface ContactInfoProps {
  icon: React.ElementType;
  text: string;
  link?: string;
}

const ContactInfo = ({ icon, text, link }: ContactInfoProps) => (
  <Stack direction="row" spacing={3} alignItems="center">
    <Icon as={icon} color="secondary.500" w={6} h={6} />
    {link ? (
      <Link href={link} fontSize="md" color="gray.700" _hover={{ color: "secondary.500", textDecoration: "underline" }} isExternal>
        {text}
      </Link>
    ) : (
      <Text fontSize="md" color="gray.700">
        {text}
      </Text>
    )}
  </Stack>
);

export const ContactSection = () => {
  return (
    <Box as="section" id="contact" py={16} bg="primary.50">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" textAlign="center" mb={12} color="primary.700">
          Nous Contacter
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} maxW="container.xl" mx="auto">
          {/* Colonne gauche : Formulaire multi-étapes */}
          <MultiStepContactForm />

          {/* Colonne droite : Informations de contact */}
          <Stack spacing={8} alignItems={{ base: "center", md: "flex-start" }} justifyContent="center" h="100%">
            <Box>
              <Text fontSize="lg" color="gray.600" mb={4} textAlign={{ base: "center", md: "left" }}>
                Nos coordonnées :
              </Text>
              <Stack spacing={4}>
                <ContactInfo
                  icon={FaEnvelope}
                  text={contactInfo.email}
                  link={`mailto:${contactInfo.email}`}
                />
                <ContactInfo
                  icon={FaPhone}
                  text={contactInfo.phone}
                  link={`tel:${contactInfo.phone}`}
                />
                <ContactInfo
                  icon={FaMapMarkerAlt}
                  text={`${contactInfo.address}, ${contactInfo.city}, ${contactInfo.country}`}
                />
                <ContactInfo
                  icon={FaClock}
                  text={contactInfo.workingHours}
                />
              </Stack>
            </Box>

            <Box>
              <Text fontSize="lg" color="gray.600" mb={4} textAlign={{ base: "center", md: "left" }}>
                Retrouvez-nous sur les réseaux sociaux :
              </Text>
              <Stack direction="row" spacing={4} justifyContent={{ base: "center", md: "flex-start" }}>
                <Link href={contactInfo.socialMedia.facebook} isExternal>
                  <Icon as={FaFacebook} w={8} h={8} color="gray.600" _hover={{ color: "secondary.500" }} />
                </Link>
                <Link href={contactInfo.socialMedia.instagram} isExternal>
                  <Icon as={FaInstagram} w={8} h={8} color="gray.600" _hover={{ color: "secondary.500" }} />
                </Link>
                <Link href={contactInfo.socialMedia.linkedin} isExternal>
                  <Icon as={FaLinkedin} w={8} h={8} color="gray.600" _hover={{ color: "secondary.500" }} />
                </Link>
                <Link href={contactInfo.socialMedia.tiktok} isExternal>
                  <Icon as={FaTiktok} w={8} h={8} color="gray.600" _hover={{ color: "secondary.500" }} />
                </Link>
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
