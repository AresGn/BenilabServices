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
                variant="primary"
                size="lg"
                px={8}
                fontSize={'md'}
                rounded={'full'}
              >
                Démarrer un projet
              </Button>
              <Button
                variant="outline"
                size="lg"
                px={8}
                fontSize={'md'}
                rounded={'full'}
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
