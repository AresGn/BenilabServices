'use client'

import {
  Box,
  Container,
  VStack,
  SimpleGrid,
  Image,
  Heading,
  Text,
  HStack,
  Badge,
  useColorModeValue
} from '@chakra-ui/react';
import SectionTitle from '../common/SectionTitle';
import { teamMembers } from '../../data/team';

interface TeamCardProps {
  name: string;
  role: string;
  department: string;
  bio: string;
  skills: string[];
  image: string;
}

const TeamCard = ({ name, role, department, bio, skills, image }: TeamCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      border="1px"
      borderColor={borderColor}
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
    >
      {/* Photo du membre */}
      <Box position="relative" overflow="hidden">
        <Image
          src={image}
          alt={name}
          w="100%"
          h="250px"
          objectFit="cover"
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.05)' }}
        />
        <Badge
          position="absolute"
          top={3}
          left={3}
          colorScheme="blue"
          variant="solid"
          borderRadius="md"
          px={3}
          py={1}
          fontSize="xs"
          fontWeight="bold"
        >
          {department}
        </Badge>
      </Box>

      {/* Informations du membre */}
      <VStack p={6} align="stretch" spacing={4}>
        <VStack align="stretch" spacing={2}>
          <Heading
            as="h3"
            size="md"
            color="primary.500"
            fontWeight="bold"
            lineHeight="1.2"
          >
            {name}
          </Heading>

          <Text
            color="secondary.500"
            fontSize="sm"
            fontWeight="medium"
          >
            {role}
          </Text>

          <Text
            color="gray.600"
            fontSize="sm"
            lineHeight="1.5"
            noOfLines={3}
          >
            {bio}
          </Text>
        </VStack>

        {/* Compétences */}
        <Box>
          <Text fontSize="xs" color="gray.500" mb={2} fontWeight="medium">
            Compétences :
          </Text>
          <HStack spacing={1} flexWrap="wrap">
            {skills.slice(0, 3).map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                colorScheme="gray"
                fontSize="xs"
                borderRadius="md"
                px={2}
                py={1}
              >
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <Badge
                variant="outline"
                colorScheme="gray"
                fontSize="xs"
                borderRadius="md"
                px={2}
                py={1}
              >
                +{skills.length - 3}
              </Badge>
            )}
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export const TeamSection = () => {
  return (
    <Box as="section" id="team" py={{ base: '12', md: '20' }} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={{ base: '8', md: '12' }} alignItems="center">
          <SectionTitle
            title="Notre Équipe"
            subtitle="Rencontrez les experts passionnés qui donnent vie à vos projets digitaux avec créativité et professionnalisme."
          />
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 6, md: 8 }}
            w="100%"
          >
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                department={member.department}
                bio={member.bio}
                skills={member.skills}
                image={member.image}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};