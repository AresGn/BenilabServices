'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure as useChakraDisclosure,
  Stack,
  Container,
  Image,
  Link,
  StackProps,
  IconButtonProps,
  Button
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const Links = [
  { name: 'Services', href: '/services' },
  { name: 'Projets', href: '/projets' },
  { name: 'À propos', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const NavLink = ({ children, href }: { children: string; href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    href={href}
    fontSize={'md'}
    fontFamily={'Poppins'}
    fontWeight={'500'}
    color={'primary.500'}
    _hover={{
      color: 'secondary.500',
      textDecoration: 'none',
    }}
    transition={'all 0.3s'}
  >
    {children}
  </Link>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useChakraDisclosure();

  // Props types avec des attributs typés correctement
  const stackProps: StackProps = {
    alignItems: 'center',
    direction: 'row',
  };
  
  const iconButtonProps: IconButtonProps = {
    'aria-label': 'Open Menu',
    size: 'md',
    display: { md: 'none' },
    onClick: isOpen ? onClose : onOpen,
  };

  return (
    <Box as="nav" bg={'white'} boxShadow={'sm'} position="sticky" top={0} zIndex={1000}>
      <Container maxW={'container.xl'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            {...iconButtonProps}
          >
            <HamburgerIcon />
          </IconButton>
          
          <HStack {...stackProps}>
            <Box>
              <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="Benilab Services"
                  h="40px"
                  w="auto"
                  cursor="pointer"
                  _hover={{ opacity: 0.8 }}
                  transition="opacity 0.2s"
                />
              </Link>
            </Box>
            <HStack as={'nav'} display={{ base: 'none', md: 'flex' }} gap={4}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Button
              as={NextLink}
              href="/contact"
              colorScheme="primary"
              variant="outline"
              size="md"
              mr={4}
              display={{ base: 'none', md: 'inline-flex' }}
              _hover={{ textDecoration: 'none' }}
            >
              Demander un devis
            </Button>
            <Button
              as={NextLink}
              href="/contact"
              colorScheme="primary"
              size="md"
              display={{ base: 'none', md: 'inline-flex' }}
              _hover={{ textDecoration: 'none' }}
            >
              Nous contacter
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} gap={4}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
              <Button
                as={NextLink}
                href="/contact"
                variant="outline"
                w="full"
                _hover={{ textDecoration: 'none' }}
              >
                Demander un devis
              </Button>
              <Button
                as={NextLink}
                href="/contact"
                variant="primary"
                w="full"
                _hover={{ textDecoration: 'none' }}
              >
                Nous contacter
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}; 