'use client'

import { Box, Heading, Text, VStack, Image, BoxProps, Button } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

interface ServiceCardProps extends BoxProps {
  title: string;
  description: string;
  icon?: string;
  link?: string;
}

const ServiceCard = ({ title, description, icon, link, ...rest }: ServiceCardProps) => {
  return (
    <Box
      p={6}
      borderRadius="lg"
      bg="white"
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
      cursor="pointer"
      {...rest}
    >
      <VStack spacing={4} align="flex-start" h="100%">
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
              loading="lazy"
            />
          </Box>
        )}
        <Heading
          size="md"
          fontWeight="bold"
          color="primary.600"
          fontFamily="Poppins"
          lineHeight="1.3"
        >
          {title}
        </Heading>
        <Text
          color="gray.600"
          fontFamily="Lato"
          flex="1"
          lineHeight="1.6"
          fontSize="sm"
        >
          {description}
        </Text>

        {/* Bouton En savoir plus */}
        {link && (
          <Box w="100%" mt="auto">
            <Link href={link} style={{ width: '100%', display: 'block' }}>
              <Button
                size="md"
                variant="outline"
                colorScheme="primary"
                rightIcon={<FaArrowRight />}
                w="100%"
                fontFamily="Poppins"
                fontWeight="medium"
                borderColor="primary.200"
                color="primary.600"
                _hover={{
                  bg: "primary.500",
                  color: "white",
                  borderColor: "primary.500",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                }}
                _active={{
                  transform: "translateY(0px)",
                }}
                transition="all 0.2s ease"
              >
                En savoir plus
              </Button>
            </Link>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default ServiceCard;
