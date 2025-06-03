'use client';

import { Box, Heading, Text, Icon, Flex, VStack } from '@chakra-ui/react';

interface DetailedValueProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

export const DetailedValueCard = ({ icon, title, description, details }: DetailedValueProps) => (
  <Box
    p={8}
    bg="white"
    borderRadius="xl"
    boxShadow="lg"
    border="1px solid"
    borderColor="gray.100"
    transition="all 0.3s ease"
    _hover={{
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 40px rgba(0, 91, 153, 0.15)',
    }}
  >
    <Flex align="center" mb={6}>
      <Box
        w={12}
        h={12}
        bg="primary.50"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr={4}
      >
        <Icon as={icon} w={6} h={6} color="primary.500" />
      </Box>
      <Heading as="h3" size="lg" color="primary.700" fontFamily="Poppins">
        {title}
      </Heading>
    </Flex>
    <Text color="gray.600" mb={6} fontSize="lg" lineHeight="1.6" fontFamily="Lato">
      {description}
    </Text>
    <VStack align="stretch" spacing={2}>
      {details.map((detail, index) => (
        <Flex key={index} align="center">
          <Box w={2} h={2} bg="primary.400" borderRadius="full" mr={3} />
          <Text color="gray.600" fontSize="sm" fontFamily="Lato">
            {detail}
          </Text>
        </Flex>
      ))}
    </VStack>
  </Box>
);
