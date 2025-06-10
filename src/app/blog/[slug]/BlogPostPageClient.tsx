'use client'

import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  Text, 
  Image, 
  Badge, 
  HStack,
  Button,
  Divider,
  useColorModeValue,
  Avatar,
  Icon,
  Flex
} from '@chakra-ui/react';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaShare, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
}

interface BlogPostPageClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostPageClient({ post, relatedPosts }: BlogPostPageClientProps) {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Box bg={bgColor} minH="100vh" pt={20}>
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Bouton retour */}
          <Link href="/blog">
            <Button
              leftIcon={<FaArrowLeft />}
              variant="ghost"
              colorScheme="primary"
              alignSelf="flex-start"
            >
              Retour au blog
            </Button>
          </Link>

          {/* Article principal */}
          <Box bg={cardBg} borderRadius="xl" overflow="hidden" boxShadow="lg">
            {/* Image de couverture */}
            <Image
              src={post.image}
              alt={post.title}
              w="100%"
              h={{ base: "250px", md: "400px" }}
              objectFit="cover"
            />
            
            {/* Contenu de l'article */}
            <Box p={{ base: 6, md: 8 }}>
              <VStack spacing={6} align="stretch">
                {/* Métadonnées */}
                <VStack spacing={4} align="stretch">
                  <Badge
                    colorScheme="primary"
                    variant="subtle"
                    alignSelf="flex-start"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                  >
                    {post.category}
                  </Badge>
                  
                  <Heading
                    as="h1"
                    size={{ base: "xl", md: "2xl" }}
                    color="primary.600"
                    fontFamily="Poppins"
                    lineHeight="1.2"
                  >
                    {post.title}
                  </Heading>
                  
                  <HStack spacing={6} flexWrap="wrap">
                    <HStack spacing={2}>
                      <Icon as={FaCalendarAlt} color="gray.500" />
                      <Text fontSize="sm" color="gray.600">
                        {formatDate(post.publishedAt)}
                      </Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={FaClock} color="gray.500" />
                      <Text fontSize="sm" color="gray.600">
                        {post.readTime} min de lecture
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>

                <Divider />

                {/* Auteur */}
                <HStack spacing={4}>
                  <Avatar
                    src={post.author.avatar}
                    name={post.author.name}
                    size="md"
                  />
                  <VStack align="flex-start" spacing={1}>
                    <Text fontWeight="bold" color="primary.600">
                      {post.author.name}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {post.author.bio}
                    </Text>
                  </VStack>
                </HStack>

                <Divider />

                {/* Contenu de l'article */}
                <Box>
                  <Text
                    fontSize="lg"
                    lineHeight="1.8"
                    color="gray.700"
                    fontFamily="Lato"
                    whiteSpace="pre-line"
                  >
                    {post.content}
                  </Text>
                </Box>

                <Divider />

                {/* Tags */}
                <Box>
                  <Text fontWeight="bold" mb={3} color="primary.600">
                    Tags :
                  </Text>
                  <Flex wrap="wrap" gap={2}>
                    {post.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        colorScheme="gray"
                        variant="outline"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="sm"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </Flex>
                </Box>

                {/* Partage social */}
                <Box>
                  <Text fontWeight="bold" mb={3} color="primary.600">
                    <Icon as={FaShare} mr={2} />
                    Partager cet article :
                  </Text>
                  <HStack spacing={3}>
                    <Button
                      size="sm"
                      colorScheme="twitter"
                      leftIcon={<FaTwitter />}
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    >
                      Twitter
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="facebook"
                      leftIcon={<FaFacebook />}
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    >
                      Facebook
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="linkedin"
                      leftIcon={<FaLinkedin />}
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    >
                      LinkedIn
                    </Button>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </Box>

          {/* Articles similaires */}
          {relatedPosts.length > 0 && (
            <Box bg={cardBg} p={8} borderRadius="xl" boxShadow="lg">
              <VStack spacing={6} align="stretch">
                <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins">
                  Articles similaires
                </Heading>
                <VStack spacing={4} align="stretch">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                      <Box
                        p={4}
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.200"
                        _hover={{
                          borderColor: "primary.300",
                          transform: "translateY(-2px)",
                          boxShadow: "md"
                        }}
                        transition="all 0.2s"
                        cursor="pointer"
                      >
                        <HStack spacing={4} align="flex-start">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            boxSize="80px"
                            objectFit="cover"
                            borderRadius="md"
                          />
                          <VStack align="flex-start" spacing={2} flex="1">
                            <Text
                              fontWeight="bold"
                              color="primary.600"
                              fontSize="md"
                              lineHeight="1.3"
                              noOfLines={2}
                            >
                              {relatedPost.title}
                            </Text>
                            <Text
                              fontSize="sm"
                              color="gray.600"
                              noOfLines={2}
                            >
                              {relatedPost.excerpt}
                            </Text>
                            <HStack spacing={4} fontSize="xs" color="gray.500">
                              <Text>{formatDate(relatedPost.publishedAt)}</Text>
                              <Text>{relatedPost.readTime} min</Text>
                            </HStack>
                          </VStack>
                        </HStack>
                      </Box>
                    </Link>
                  ))}
                </VStack>
              </VStack>
            </Box>
          )}

          {/* Espacement avant le footer */}
          <Box h={8} />
        </VStack>
      </Container>
    </Box>
  );
}
