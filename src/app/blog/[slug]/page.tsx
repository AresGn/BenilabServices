import { notFound } from 'next/navigation';
import { getBlogPostBySlug, blogPosts } from '../../../data/blog';
import BlogPostPageClient from './BlogPostPageClient';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Attendre la résolution des paramètres
  const resolvedParams = await params;

  // Trouver l'article correspondant au slug
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Articles similaires (même catégorie, excluant l'article actuel)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return <BlogPostPageClient post={post} relatedPosts={relatedPosts} />;
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
