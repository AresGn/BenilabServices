import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  StackProps,
  Button
} from '@chakra-ui/react';

export const HeroSection = () => {
  const stackProps: StackProps = {
    direction: { base: 'column', md: 'row' },
  };
  
  return (
    <Box bg="gray.50" position="relative" overflow="hidden">
      {/* Fond décoratif */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="primary.500"
        opacity={0.05}
        transform="skewY(-12deg)"
        transformOrigin="top left"
      />

      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          py={{ base: 20, md: 28 }}
          gap={{ base: 8, md: 10 }}
          {...stackProps}
        >
          <Stack flex={1} gap={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              fontFamily="Poppins"
            >
              <Text
                as={'span'}
                position={'relative'}
                color="primary.500"
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'secondary.100',
                  zIndex: -1,
                }}
              >
                Solutions Digitales
              </Text>
              <br />
              <Text as={'span'} color={'secondary.500'}>
                pour votre Succès
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'xl'} fontFamily="Lato">
              Benilab Services vous accompagne dans votre transformation digitale avec une équipe
              d&apos;experts passionnés. Du développement web au marketing digital, nous donnons vie
              à vos projets les plus ambitieux.
            </Text>
            <Stack
              gap={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                bg="#3894d0"
                color="white"
                size="lg"
                px={8}
                fontSize={'md'}
                rounded={'full'}
                _hover={{
                  bg: "#2980b9",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(56, 148, 208, 0.3)"
                }}
                _active={{
                  bg: "#1f6a9a",
                  transform: "translateY(0)"
                }}
                transition="all 0.3s ease"
                as="a"
                href="/#contact"
              >
                Démarrer un projet
              </Button>
              <Button
                borderColor="#3894d0"
                color="#3894d0"
                borderWidth="2px"
                size="lg"
                px={8}
                fontSize={'md'}
                rounded={'full'}
                variant="outline"
                _hover={{
                  bg: "#3894d0",
                  color: "white",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(56, 148, 208, 0.3)"
                }}
                _active={{
                  bg: "#2980b9",
                  transform: "translateY(0)"
                }}
                transition="all 0.3s ease"
                as="a"
                href="/services"
              >
                Découvrir nos services
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box
              position={'relative'}
              height={'300px'}
              width={'full'}
            >
              <Image
                alt={'Hero Image'}
                fit={'contain'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={'/images/hero/hero-illustration.svg'}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};
