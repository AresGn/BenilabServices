'use client';

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Image,
  Badge,
  HStack,
  Icon,
  Link,
  Flex,
} from '@chakra-ui/react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { teamMembers } from '../../data/team';

export const TeamSection = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box as="section" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          {/* En-tête de section */}
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h2"
              size="2xl"
              color="primary.600"
              fontFamily="Poppins"
            >
              Notre Équipe
            </Heading>
            <Text
              fontSize="xl"
              color={textColor}
              maxW="800px"
              fontFamily="Lato"
              lineHeight="1.6"
            >
              Rencontrez les experts passionnés qui donnent vie à vos projets digitaux. 
              Notre équipe multidisciplinaire combine créativité, expertise technique et 
              vision stratégique pour vous accompagner vers le succès.
            </Text>
          </VStack>

          {/* Grille des membres de l'équipe */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {teamMembers.map((member) => (
              <Box
                key={member.id}
                bg={cardBg}
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '2xl'
                }}
              >
                {/* Photo du membre */}
                <Box position="relative" overflow="hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    w="100%"
                    h="280px"
                    objectFit="cover"
                    transition="transform 0.3s"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                  <Box
                    position="absolute"
                    top={4}
                    right={4}
                    bg="primary.600"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="semibold"
                  >
                    {member.department}
                  </Box>
                </Box>

                {/* Informations du membre */}
                <Box p={6}>
                  <VStack spacing={4} align="stretch">
                    {/* Nom et poste */}
                    <VStack spacing={2} align="stretch">
                      <Heading
                        as="h3"
                        size="lg"
                        color="primary.600"
                        fontFamily="Poppins"
                      >
                        {member.name}
                      </Heading>
                      <Text
                        fontSize="md"
                        fontWeight="semibold"
                        color="secondary.500"
                        fontFamily="Lato"
                      >
                        {member.role}
                      </Text>
                    </VStack>

                    {/* Bio */}
                    <Text
                      fontSize="sm"
                      color={textColor}
                      fontFamily="Lato"
                      lineHeight="1.6"
                      noOfLines={4}
                    >
                      {member.bio}
                    </Text>

                    {/* Compétences */}
                    <VStack spacing={3} align="stretch">
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="primary.600"
                        fontFamily="Poppins"
                      >
                        Compétences clés :
                      </Text>
                      <Flex wrap="wrap" gap={2}>
                        {member.skills.slice(0, 4).map((skill, index) => (
                          <Badge
                            key={index}
                            colorScheme="primary"
                            variant="subtle"
                            fontSize="xs"
                            px={2}
                            py={1}
                            borderRadius="md"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {member.skills.length > 4 && (
                          <Badge
                            colorScheme="gray"
                            variant="subtle"
                            fontSize="xs"
                            px={2}
                            py={1}
                            borderRadius="md"
                          >
                            +{member.skills.length - 4}
                          </Badge>
                        )}
                      </Flex>
                    </VStack>

                    {/* Réseaux sociaux */}
                    {member.social && (
                      <HStack spacing={3} pt={2}>
                        {member.social.linkedin && (
                          <Link
                            href={member.social.linkedin}
                            isExternal
                            color="primary.500"
                            _hover={{ color: 'primary.600' }}
                          >
                            <Icon as={FaLinkedin} boxSize={5} />
                          </Link>
                        )}
                        {member.social.twitter && (
                          <Link
                            href={member.social.twitter}
                            isExternal
                            color="primary.500"
                            _hover={{ color: 'primary.600' }}
                          >
                            <Icon as={FaTwitter} boxSize={5} />
                          </Link>
                        )}
                        {member.social.github && (
                          <Link
                            href={member.social.github}
                            isExternal
                            color="primary.500"
                            _hover={{ color: 'primary.600' }}
                          >
                            <Icon as={FaGithub} boxSize={5} />
                          </Link>
                        )}
                      </HStack>
                    )}
                  </VStack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          {/* Section CTA équipe */}
          <Box
            bg="primary.600"
            p={8}
            borderRadius="xl"
            color="white"
            textAlign="center"
            mt={8}
          >
            <VStack spacing={4}>
              <Heading as="h3" size="lg" fontFamily="Poppins">
                Rejoignez notre équipe !
              </Heading>
              <Text fontSize="lg" fontFamily="Lato" maxW="600px">
                Nous sommes toujours à la recherche de talents passionnés pour 
                renforcer notre équipe. Découvrez nos opportunités de carrière.
              </Text>
              <HStack spacing={4} mt={4}>
                <Link
                  href="/contact"
                  bg="secondary.500"
                  color="white"
                  px={6}
                  py={3}
                  borderRadius="lg"
                  fontWeight="semibold"
                  _hover={{ 
                    bg: 'secondary.600', 
                    textDecoration: 'none',
                    transform: 'translateY(-2px)'
                  }}
                  transition="all 0.2s"
                >
                  Nous contacter
                </Link>
                <Link
                  href="mailto:careers@benilabservices.com"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  px={6}
                  py={3}
                  borderRadius="lg"
                  fontWeight="semibold"
                  _hover={{ 
                    bg: 'whiteAlpha.200',
                    textDecoration: 'none',
                    transform: 'translateY(-2px)'
                  }}
                  transition="all 0.2s"
                >
                  Envoyer CV
                </Link>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
