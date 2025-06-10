'use client';

// Note: Les métadonnées sont maintenant gérées dans layout.tsx ou via generateMetadata
// car cette page utilise 'use client' pour les hooks React

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  HStack,
  Button,
  Image,
  Badge,
  Flex,
  Avatar,
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';
import { blogPosts, blogCategories, getPostsByCategory, getFeaturedPosts } from '../../data/blog';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  
  const filteredPosts = getPostsByCategory(selectedCategory);
  const featuredPosts = getFeaturedPosts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Box bg={bgColor} minH="100vh" pt={20}>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={12} align="stretch">
          {/* En-tête */}
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              color="primary.600"
              fontFamily="Poppins"
            >
              Blog & Actualités
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              maxW="800px"
              fontFamily="Lato"
              lineHeight="1.6"
            >
              Découvrez nos derniers articles sur les tendances digitales, 
              les bonnes pratiques et les innovations qui façonnent l'avenir 
              du numérique en Afrique.
            </Text>
          </VStack>

          {/* Articles en vedette */}
          {featuredPosts.length > 0 && (
            <VStack spacing={6} align="stretch">
              <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins">
                Articles en vedette
              </Heading>
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
                {featuredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <Box
                      bg={cardBg}
                      borderRadius="xl"
                      overflow="hidden"
                      boxShadow="lg"
                      transition="transform 0.2s"
                      _hover={{ transform: 'translateY(-4px)' }}
                      cursor="pointer"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        h="200px"
                        w="100%"
                        objectFit="cover"
                      />
                      <Box p={6}>
                        <VStack spacing={4} align="stretch">
                          <Badge
                            colorScheme="secondary"
                            alignSelf="flex-start"
                            px={3}
                            py={1}
                            borderRadius="full"
                          >
                            {post.category}
                          </Badge>
                          <Heading
                            as="h3"
                            size="md"
                            color="primary.600"
                            fontFamily="Poppins"
                            noOfLines={2}
                          >
                            {post.title}
                          </Heading>
                          <Text
                            color="gray.600"
                            fontFamily="Lato"
                            noOfLines={3}
                          >
                            {post.excerpt}
                          </Text>
                          <HStack spacing={4} fontSize="sm" color="gray.500">
                            <HStack spacing={1}>
                              <Icon as={FaCalendarAlt} />
                              <Text>{formatDate(post.publishedAt)}</Text>
                            </HStack>
                            <HStack spacing={1}>
                              <Icon as={FaClock} />
                              <Text>{post.readTime} min</Text>
                            </HStack>
                          </HStack>
                        </VStack>
                      </Box>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </VStack>
          )}

          {/* Filtres par catégorie */}
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins">
              Tous les articles
            </Heading>
            <Flex wrap="wrap" gap={3}>
              {blogCategories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={selectedCategory === category ? 'solid' : 'outline'}
                  colorScheme="primary"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </Flex>
          </VStack>

          {/* Grille des articles */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Box
                  bg={cardBg}
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="md"
                  transition="all 0.2s"
                  _hover={{ 
                    transform: 'translateY(-4px)',
                    boxShadow: 'xl'
                  }}
                  cursor="pointer"
                  h="100%"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    h="180px"
                    w="100%"
                    objectFit="cover"
                  />
                  <Box p={6}>
                    <VStack spacing={4} align="stretch" h="100%">
                      <Badge
                        colorScheme="primary"
                        alignSelf="flex-start"
                        px={2}
                        py={1}
                        borderRadius="md"
                        fontSize="xs"
                      >
                        {post.category}
                      </Badge>
                      <Heading
                        as="h3"
                        size="sm"
                        color="primary.600"
                        fontFamily="Poppins"
                        noOfLines={2}
                        flex="1"
                      >
                        {post.title}
                      </Heading>
                      <Text
                        color="gray.600"
                        fontFamily="Lato"
                        fontSize="sm"
                        noOfLines={3}
                        flex="1"
                      >
                        {post.excerpt}
                      </Text>
                      <VStack spacing={3} align="stretch">
                        <HStack spacing={3}>
                          <Avatar
                            size="xs"
                            src={post.author.avatar}
                            name={post.author.name}
                          />
                          <Text fontSize="xs" color="gray.500">
                            {post.author.name}
                          </Text>
                        </HStack>
                        <HStack spacing={4} fontSize="xs" color="gray.500">
                          <HStack spacing={1}>
                            <Icon as={FaCalendarAlt} />
                            <Text>{formatDate(post.publishedAt)}</Text>
                          </HStack>
                          <HStack spacing={1}>
                            <Icon as={FaClock} />
                            <Text>{post.readTime} min</Text>
                          </HStack>
                        </HStack>
                      </VStack>
                    </VStack>
                  </Box>
                </Box>
              </Link>
            ))}
          </SimpleGrid>

          {/* CTA Newsletter */}
          <Box
            bg="primary.600"
            p={8}
            borderRadius="xl"
            color="white"
            textAlign="center"
            mt={12}
          >
            <VStack spacing={4}>
              <Heading as="h2" size="lg" fontFamily="Poppins">
                Restez informé de nos dernières actualités
              </Heading>
              <Text fontSize="lg" fontFamily="Lato" maxW="600px">
                Abonnez-vous à notre newsletter pour recevoir nos derniers articles 
                et conseils directement dans votre boîte mail.
              </Text>
              <Button
                size="lg"
                colorScheme="secondary"
                mt={4}
              >
                S'abonner à la newsletter
              </Button>
            </VStack>
          </Box>

          {/* Espacement avant le footer */}
          <Box h={16} />
        </VStack>
      </Container>
    </Box>
  );
}


