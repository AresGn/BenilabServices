'use client'

import { Box, Heading, Text, VStack, Icon, BoxProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface ServiceCardProps extends BoxProps {
  title: string;
  description: string;
  icon?: IconType;
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
          <Icon
            as={icon}
            boxSize={10}
            color="primary.500"
          />
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
