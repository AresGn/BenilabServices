'use client'

import { Box, Image, Heading, Text, VStack, HStack, Tag, Badge, Link, BoxProps } from '@chakra-ui/react';

interface ProjectCardProps extends BoxProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  category,
  technologies,
  status,
  link,
  ...rest
}: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'green';
      case 'in-progress':
        return 'yellow';
      case 'planned':
        return 'blue';
      default:
        return 'gray';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Terminé';
      case 'in-progress':
        return 'En cours';
      case 'planned':
        return 'Planifié';
      default:
        return 'Statut inconnu';
    }
  };
  const content = (
    <>
      <Box h="200px" overflow="hidden" position="relative">
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          w="100%"
          h="100%"
          transition="transform 0.5s"
          _hover={{
            transform: 'scale(1.05)',
          }}
        />
        <Badge
          position="absolute"
          top={3}
          right={3}
          colorScheme={getStatusColor(status)}
          variant="solid"
          borderRadius="full"
          px={3}
          py={1}
          fontSize="xs"
          fontWeight="bold"
        >
          {getStatusText(status)}
        </Badge>
      </Box>

      <VStack p={5} align="flex-start" spacing={3}>
        <Badge
          alignSelf="flex-start"
          colorScheme="blue"
          variant="subtle"
          borderRadius="md"
          px={2}
          py={1}
          fontSize="xs"
        >
          {category}
        </Badge>

        <Heading as="h3" size="md" color="primary.500">
          {title}
        </Heading>

        <Text color="gray.600" noOfLines={3}>
          {description}
        </Text>

        {technologies.length > 0 && (
          <VStack align="flex-start" spacing={2} w="100%">
            <Text fontSize="xs" color="gray.500" fontWeight="medium">
              Technologies :
            </Text>
            <HStack spacing={1} flexWrap="wrap">
              {technologies.slice(0, 3).map((tech) => (
                <Tag key={tech} size="sm" colorScheme="gray" variant="outline">
                  {tech}
                </Tag>
              ))}
              {technologies.length > 3 && (
                <Tag size="sm" colorScheme="gray" variant="outline">
                  +{technologies.length - 3}
                </Tag>
              )}
            </HStack>
          </VStack>
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
