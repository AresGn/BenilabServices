'use client'

import { Heading, Text, VStack, StackProps } from '@chakra-ui/react';

interface SectionTitleProps extends StackProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  titleColor?: string;
  subtitleColor?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  titleColor = 'primary.500',
  subtitleColor = 'gray.600',
  ...rest
}: SectionTitleProps) => {
  return (
    <VStack 
      spacing={3} 
      align={align} 
      textAlign={align}
      w="100%"
      mb={8}
      {...rest}
    >
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        fontWeight="bold"
        color={titleColor}
      >
        {title}
      </Heading>
      
      {subtitle && (
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color={subtitleColor}
          maxW="800px"
        >
          {subtitle}
        </Text>
      )}
    </VStack>
  );
};

export default SectionTitle;
