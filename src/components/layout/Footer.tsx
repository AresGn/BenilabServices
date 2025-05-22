'use client';

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="primary.600">
      {children}
    </Text>
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
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image
                src="/images/logo/android-chrome-512x512.png"
                alt="Benilab Services Logo"
                h="40px"
              />
            </Box>
            <Text fontSize={'sm'}>
              © 2025 Benilab Services. Tous droits réservés
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'#'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'#'}>
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Link href={'#'}>Développement Web</Link>
            <Link href={'#'}>Marketing Digital</Link>
            <Link href={'#'}>Design UX/UI</Link>
            <Link href={'#'}>Conseil Digital</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Entreprise</ListHeader>
            <Link href={'#'}>À propos</Link>
            <Link href={'#'}>Carrières</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Blog</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Centre d&apos;aide</Link>
            <Link href={'#'}>Mentions légales</Link>
            <Link href={'#'}>Politique de confidentialité</Link>
            <Link href={'#'}>Conditions d&apos;utilisation</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
