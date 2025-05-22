'use client'

import { Box, Image, Heading, Text, VStack, HStack, Tag, Link, BoxProps } from '@chakra-ui/react';

interface ProjectCardProps extends BoxProps {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  link?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  tags = [], 
  link,
  ...rest 
}: ProjectCardProps) => {
  const content = (
    <>
      <Box h="200px" overflow="hidden">
        <Image
          src={imageUrl}
          alt={title}
          objectFit="cover"
          w="100%"
          h="100%"
          transition="transform 0.5s"
          _hover={{
            transform: 'scale(1.05)',
          }}
        />
      </Box>
      
      <VStack p={5} align="flex-start" spacing={3}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        
        <Text color="gray.600" noOfLines={3}>
          {description}
        </Text>
        
        {tags.length > 0 && (
          <HStack spacing={2} flexWrap="wrap">
            {tags.map((tag) => (
              <Tag key={tag} size="sm" colorScheme="primary" my={1}>
                {tag}
              </Tag>
            ))}
          </HStack>
        )}
      </VStack>
    </>
  );

  const cardProps = {
    borderRadius: "lg",
    overflow: "hidden",
    bg: "white",
    boxShadow: "md",
    transition: "all 0.3s",
    _hover: {
      transform: 'translateY(-5px)',
      boxShadow: 'lg',
    },
    ...rest
  };

  if (link) {
    return (
      <Link href={link} _hover={{ textDecoration: 'none' }}>
        <Box {...cardProps}>
          {content}
        </Box>
      </Link>
    );
  }

  return <Box {...cardProps}>{content}</Box>;
};

export default ProjectCard;
