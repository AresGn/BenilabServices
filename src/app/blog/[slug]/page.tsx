'use client'

import { notFound } from 'next/navigation';
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
import { getBlogPostBySlug, blogPosts } from '../../../data/blog';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  // Attendre la résolution des paramètres
  const resolvedParams = await params;

  // Trouver l'article correspondant au slug
  const post = getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Articles similaires (même catégorie, excluant l'article actuel)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

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
                    colorScheme="secondary"
                    alignSelf="flex-start"
                    px={3}
                    py={1}
                    borderRadius="full"
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
                  
                  <Text
                    fontSize="lg"
                    color="gray.600"
                    fontFamily="Lato"
                    lineHeight="1.6"
                  >
                    {post.excerpt}
                  </Text>
                </VStack>

                {/* Informations auteur et date */}
                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                  align={{ base: "flex-start", md: "center" }}
                  gap={4}
                  py={4}
                  borderY="1px"
                  borderColor="gray.200"
                >
                  <HStack spacing={4}>
                    <Avatar
                      size="md"
                      src={post.author.avatar}
                      name={post.author.name}
                    />
                    <VStack spacing={1} align="flex-start">
                      <Text fontWeight="semibold" color="primary.600">
                        {post.author.name}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        {post.author.role}
                      </Text>
                    </VStack>
                  </HStack>
                  
                  <HStack spacing={6} fontSize="sm" color="gray.500">
                    <HStack spacing={2}>
                      <Icon as={FaCalendarAlt} />
                      <Text>{formatDate(post.publishedAt)}</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={FaClock} />
                      <Text>{post.readTime} min de lecture</Text>
                    </HStack>
                  </HStack>
                </Flex>

                {/* Contenu de l'article */}
                <Box
                  className="blog-content"
                  sx={{
                    '& h2': {
                      fontSize: 'xl',
                      fontWeight: 'bold',
                      color: 'primary.600',
                      fontFamily: 'Poppins',
                      mt: 6,
                      mb: 4
                    },
                    '& h3': {
                      fontSize: 'lg',
                      fontWeight: 'semibold',
                      color: 'primary.600',
                      fontFamily: 'Poppins',
                      mt: 4,
                      mb: 3
                    },
                    '& p': {
                      fontSize: 'md',
                      lineHeight: '1.7',
                      color: 'gray.700',
                      fontFamily: 'Lato',
                      mb: 4
                    },
                    '& ul, & ol': {
                      pl: 6,
                      mb: 4
                    },
                    '& li': {
                      fontSize: 'md',
                      lineHeight: '1.6',
                      color: 'gray.700',
                      fontFamily: 'Lato',
                      mb: 2
                    }
                  }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <VStack spacing={4} align="stretch" pt={6} borderTop="1px" borderColor="gray.200">
                  <Text fontWeight="semibold" color="primary.600">
                    Tags :
                  </Text>
                  <Flex wrap="wrap" gap={2}>
                    {post.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        colorScheme="primary"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Flex>
                </VStack>

                {/* Partage social */}
                <VStack spacing={4} align="stretch" pt={6} borderTop="1px" borderColor="gray.200">
                  <Text fontWeight="semibold" color="primary.600">
                    Partager cet article :
                  </Text>
                  <HStack spacing={4}>
                    <Button
                      leftIcon={<FaTwitter />}
                      colorScheme="twitter"
                      size="sm"
                      variant="outline"
                    >
                      Twitter
                    </Button>
                    <Button
                      leftIcon={<FaFacebook />}
                      colorScheme="facebook"
                      size="sm"
                      variant="outline"
                    >
                      Facebook
                    </Button>
                    <Button
                      leftIcon={<FaLinkedin />}
                      colorScheme="linkedin"
                      size="sm"
                      variant="outline"
                    >
                      LinkedIn
                    </Button>
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </Box>

          {/* Articles similaires */}
          {relatedPosts.length > 0 && (
            <VStack spacing={6} align="stretch" mt={12}>
              <Heading as="h2" size="lg" color="primary.600" fontFamily="Poppins">
                Articles similaires
              </Heading>
              <HStack spacing={6} overflowX="auto" pb={4}>
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <Box
                      bg={cardBg}
                      borderRadius="lg"
                      overflow="hidden"
                      boxShadow="md"
                      minW="300px"
                      transition="transform 0.2s"
                      _hover={{ transform: 'translateY(-2px)' }}
                      cursor="pointer"
                    >
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        h="150px"
                        w="100%"
                        objectFit="cover"
                      />
                      <Box p={4}>
                        <VStack spacing={3} align="stretch">
                          <Badge
                            colorScheme="primary"
                            alignSelf="flex-start"
                            fontSize="xs"
                          >
                            {relatedPost.category}
                          </Badge>
                          <Heading
                            as="h3"
                            size="sm"
                            color="primary.600"
                            fontFamily="Poppins"
                            noOfLines={2}
                          >
                            {relatedPost.title}
                          </Heading>
                          <Text
                            fontSize="sm"
                            color="gray.600"
                            fontFamily="Lato"
                            noOfLines={2}
                          >
                            {relatedPost.excerpt}
                          </Text>
                        </VStack>
                      </Box>
                    </Box>
                  </Link>
                ))}
              </HStack>
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
  );
}

// Génération des métadonnées pour le SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Article non trouvé - Benilab Services',
    };
  }

  return {
    title: `${post.title} - Blog Benilab Services`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Génération des paramètres statiques pour les articles
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}
