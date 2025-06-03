'use client'

import { Box, Heading, Text, VStack, Image, BoxProps } from '@chakra-ui/react';

interface ServiceCardProps extends BoxProps {
  title: string;
  description: string;
  icon?: string;
}

const ServiceCard = ({ title, description, icon, ...rest }: ServiceCardProps) => {
  return (
    <Box
      p={6}
      borderRadius="lg"
      bg="white"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'lg',
      }}
      {...rest}
    >
      <VStack spacing={4} align="flex-start">
        {icon && (
          <Box
            w={16}
            h={16}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="primary.50"
            borderRadius="lg"
            p={3}
          >
            <Image
              src={icon}
              alt={`${title} icon`}
              w={10}
              h={10}
              objectFit="contain"
            />
          </Box>
        )}
        <Heading size="md" fontWeight="bold" color="primary.500">
          {title}
        </Heading>
        <Text color="gray.600">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default ServiceCard;
