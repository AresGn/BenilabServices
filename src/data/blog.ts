export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio: string;
  };
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'transformation-digitale-entreprises-benin',
    title: 'La transformation digitale des entreprises au Bénin : enjeux et opportunités',
    excerpt: 'Découvrez comment les entreprises béninoises peuvent tirer parti de la transformation digitale pour accélérer leur croissance et rester compétitives.',
    content: `
      <p>La transformation digitale représente aujourd'hui un enjeu majeur pour les entreprises béninoises. Dans un contexte économique en pleine mutation, l'adoption des technologies numériques devient un facteur clé de compétitivité.</p>
      
      <h2>Les défis de la digitalisation au Bénin</h2>
      <p>Les entreprises béninoises font face à plusieurs défis dans leur processus de digitalisation :</p>
      <ul>
        <li>Manque de compétences techniques internes</li>
        <li>Résistance au changement</li>
        <li>Investissements technologiques importants</li>
        <li>Infrastructure numérique en développement</li>
      </ul>
      
      <h2>Les opportunités à saisir</h2>
      <p>Malgré ces défis, la transformation digitale offre de nombreuses opportunités :</p>
      <ul>
        <li>Amélioration de l'efficacité opérationnelle</li>
        <li>Accès à de nouveaux marchés</li>
        <li>Optimisation de la relation client</li>
        <li>Réduction des coûts</li>
      </ul>
      
      <h2>Comment Benilab Services accompagne cette transformation</h2>
      <p>Chez Benilab Services, nous comprenons les spécificités du marché béninois et proposons des solutions adaptées pour accompagner les entreprises dans leur transformation digitale.</p>
    `,
    author: {
      name: 'Équipe Benilab',
      avatar: '/images/team/team-avatar.jpg',
      role: 'Experts en transformation digitale',
      bio: "L'équipe Benilab accompagne les entreprises béninoises dans leur transformation digitale avec expertise et passion."
    },
    publishedAt: '2025-01-15',
    readTime: 8,
    category: 'Transformation Digitale',
    tags: ['Digital', 'Entreprise', 'Bénin', 'Innovation'],
    image: '/images/blog/transformation-digitale-benin.jpg',
    featured: true
  },
  {
    id: 'tendances-web-design-2025',
    title: 'Les tendances du web design en 2025 : ce qu\'il faut retenir',
    excerpt: 'Explorez les dernières tendances en matière de design web qui façonneront l\'expérience utilisateur en 2025.',
    content: `
      <p>Le web design évolue constamment, et 2025 apporte son lot de nouvelles tendances qui redéfinissent l'expérience utilisateur.</p>
      
      <h2>1. Design minimaliste et épuré</h2>
      <p>La simplicité reste au cœur des préoccupations des designers. Un design épuré permet une meilleure lisibilité et une navigation intuitive.</p>
      
      <h2>2. Animations micro-interactives</h2>
      <p>Les micro-animations améliorent l'engagement utilisateur en rendant l'interface plus vivante et interactive.</p>
      
      <h2>3. Mode sombre par défaut</h2>
      <p>De plus en plus de sites adoptent le mode sombre comme option par défaut, réduisant la fatigue oculaire des utilisateurs.</p>
      
      <h2>4. Typographie expressive</h2>
      <p>Les polices personnalisées et expressives deviennent un élément clé de l'identité visuelle des marques.</p>
    `,
    author: {
      name: 'Équipe Design',
      avatar: '/images/team/design-team.jpg',
      role: 'Designers UI/UX',
      bio: "L'équipe Design de Benilab est spécialisée dans la création d'expériences utilisateur innovantes et modernes."
    },
    publishedAt: '2025-01-10',
    readTime: 6,
    category: 'Design',
    tags: ['Web Design', 'UX/UI', 'Tendances', '2025'],
    image: '/images/blog/web-design-trends-2025.jpg',
    featured: false
  },
  {
    id: 'seo-local-entreprises-africaines',
    title: 'SEO local : comment optimiser sa visibilité pour les entreprises africaines',
    excerpt: 'Découvrez les stratégies SEO spécifiques aux entreprises africaines pour améliorer leur visibilité locale.',
    content: `
      <p>Le référencement local est crucial pour les entreprises africaines qui souhaitent attirer une clientèle de proximité.</p>
      
      <h2>L'importance du SEO local en Afrique</h2>
      <p>Avec l'augmentation de l'utilisation des smartphones, les recherches locales représentent une part importante du trafic web en Afrique.</p>
      
      <h2>Stratégies SEO adaptées au contexte africain</h2>
      <ul>
        <li>Optimisation pour les langues locales</li>
        <li>Création de contenu culturellement pertinent</li>
        <li>Utilisation des réseaux sociaux populaires localement</li>
        <li>Partenariats avec des influenceurs locaux</li>
      </ul>
      
      <h2>Outils et techniques recommandés</h2>
      <p>Nous recommandons l'utilisation d'outils adaptés au marché africain et la mise en place de stratégies de contenu localisées.</p>
    `,
    author: {
      name: 'Expert SEO',
      avatar: '/images/team/seo-expert.jpg',
      role: 'Spécialiste SEO',
      bio: "Expert SEO passionné par l'optimisation de la visibilité des entreprises africaines sur le web."
    },
    publishedAt: '2025-01-05',
    readTime: 10,
    category: 'SEO',
    tags: ['SEO', 'Local', 'Afrique', 'Marketing Digital'],
    image: '/images/blog/seo-local-afrique.jpg',
    featured: false
  },
  {
    id: 'e-commerce-mobile-afrique',
    title: 'L\'essor du e-commerce mobile en Afrique : opportunités et défis',
    excerpt: 'Analyse des tendances du commerce électronique mobile sur le continent africain et des opportunités pour les entreprises.',
    content: `
      <p>Le e-commerce mobile connaît une croissance exceptionnelle en Afrique, portée par l'adoption massive des smartphones.</p>
      
      <h2>Chiffres clés du m-commerce en Afrique</h2>
      <p>Les statistiques montrent une progression constante des achats via mobile, avec des taux de croissance supérieurs à la moyenne mondiale.</p>
      
      <h2>Facteurs de succès</h2>
      <ul>
        <li>Interface mobile optimisée</li>
        <li>Méthodes de paiement locales</li>
        <li>Livraison adaptée aux infrastructures</li>
        <li>Service client multicanal</li>
      </ul>
      
      <h2>Défis à relever</h2>
      <p>Malgré les opportunités, plusieurs défis persistent : connectivité, confiance des consommateurs, logistique.</p>
    `,
    author: {
      name: 'Analyste E-commerce',
      avatar: '/images/team/ecommerce-analyst.jpg',
      role: 'Expert E-commerce',
      bio: "Analyste spécialisé dans le e-commerce africain et les tendances du marché digital."
    },
    publishedAt: '2024-12-28',
    readTime: 7,
    category: 'E-commerce',
    tags: ['E-commerce', 'Mobile', 'Afrique', 'Tendances'],
    image: '/images/blog/ecommerce-mobile-afrique.jpg',
    featured: false
  }
];

export const blogCategories = [
  'Tous',
  'Transformation Digitale',
  'Design',
  'SEO',
  'E-commerce',
  'Marketing Digital',
  'Développement Web'
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'Tous') return blogPosts;
  return blogPosts.filter(post => post.category === category);
}
