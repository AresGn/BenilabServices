'use client';

import { Box, Heading, Text, Icon } from '@chakra-ui/react';

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ElementType;
}

export const StatCard = ({ number, label, icon }: StatCardProps) => (
  <Box
    textAlign="center"
    p={6}
    bg="white"
    borderRadius="xl"
    boxShadow="md"
    border="1px solid"
    borderColor="gray.100"
    transition="all 0.3s ease"
    _hover={{
      transform: 'translateY(-3px)',
      boxShadow: 'lg',
    }}
  >
    <Icon as={icon} w={8} h={8} color="primary.500" mx="auto" mb={4} />
    <Heading as="h3" size="2xl" color="primary.600" fontFamily="Poppins" mb={2}>
      {number}
    </Heading>
    <Text color="gray.600" fontFamily="Lato" fontSize="sm" fontWeight="medium">
      {label}
    </Text>
  </Box>
);
