export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  technologies?: string[];
  pricing?: {
    starting: string;
    currency: string;
  };
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Développement web et mobile',
    description: 'Création de sites vitrines, e-commerce, blogs, plateformes sur mesure et applications mobiles natives/hybrides.',
    longDescription: 'Notre équipe de développeurs experts maîtrise les technologies web modernes pour créer des solutions digitales performantes et évolutives. Nous développons des sites vitrines professionnels, des plateformes e-commerce robustes, des blogs optimisés SEO, et des applications mobiles natives et hybrides.',
    icon: '/images/services/web-development.svg',
    features: [
      'Sites vitrines responsives',
      'Plateformes e-commerce complètes',
      'Applications web sur mesure',
      'Applications mobiles iOS/Android',
      'Optimisation SEO intégrée',
      'Maintenance et support technique'
    ],
    technologies: ['React', 'Next.js', 'Laravel', 'WordPress', 'React Native', 'Flutter'],
    pricing: {
      starting: '150 000',
      currency: 'FCFA'
    }
  },
  {
    id: 'marketing-digital',
    title: 'Marketing digital et stratégie commerciale',
    description: 'Campagnes publicitaires Meta/Google, tunnels de vente, automatisation marketing, emailing, CRM et audits de performance.',
    longDescription: 'Nous développons des stratégies marketing digitales complètes pour maximiser votre visibilité en ligne et optimiser vos conversions. Notre expertise couvre la publicité payante, l\'automatisation marketing, la gestion de CRM et l\'analyse de performance.',
    icon: '/images/services/marketing-digital.svg',
    features: [
      'Campagnes Facebook & Instagram Ads',
      'Google Ads et référencement payant',
      'Création de tunnels de vente',
      'Automatisation marketing',
      'Gestion CRM et emailing',
      'Audits et analyses de performance'
    ],
    technologies: ['Google Analytics', 'Facebook Business', 'Mailchimp', 'HubSpot', 'Zapier'],
    pricing: {
      starting: '75 000',
      currency: 'FCFA'
    }
  },
  {
    id: 'design-graphique',
    title: 'Design graphique et identité visuelle',
    description: 'Création de logos, branding, supports de communication (affiches, flyers, brochures) et visuels pour réseaux sociaux.',
    longDescription: 'Notre équipe créative conçoit des identités visuelles fortes et mémorables qui reflètent parfaitement votre marque. Nous créons tous vos supports de communication avec une approche cohérente et professionnelle.',
    icon: '/images/services/design-graphique.svg',
    features: [
      'Création de logos et identité visuelle',
      'Charte graphique complète',
      'Supports print (affiches, flyers, brochures)',
      'Visuels pour réseaux sociaux',
      'Packaging et étiquetage',
      'Refonte d\'image de marque'
    ],
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'Canva Pro'],
    pricing: {
      starting: '25 000',
      currency: 'FCFA'
    }
  },
  {
    id: 'video-content',
    title: 'Production vidéo et contenu multimédia',
    description: 'Montage vidéo (TikTok, YouTube, Reels), vidéos avec avatar IA, voix off, sous-titrage et animations explicatives.',
    longDescription: 'Nous produisons du contenu vidéo engageant et professionnel adapté à chaque plateforme. Notre expertise couvre le montage vidéo, la création d\'animations, l\'intégration d\'avatars IA et la production de contenu multimédia innovant.',
    icon: '/images/services/video-content.svg',
    features: [
      'Montage vidéo professionnel',
      'Contenu pour TikTok, YouTube, Reels',
      'Vidéos avec avatars IA',
      'Voix off et narration',
      'Sous-titrage multilingue',
      'Animations explicatives 2D/3D'
    ],
    technologies: ['Adobe Premiere Pro', 'After Effects', 'CapCut', 'DaVinci Resolve', 'Synthesia'],
    pricing: {
      starting: '15 000',
      currency: 'FCFA'
    }
  },
  {
    id: 'community-management',
    title: 'Community management et animation digitale',
    description: 'Gestion de pages (Facebook, Instagram, TikTok), stratégies éditoriales, animation communautaire et rapports de performance.',
    longDescription: 'Nous gérons et animons vos communautés sur les réseaux sociaux avec des stratégies éditoriales personnalisées. Notre approche combine créativité, engagement authentique et analyse de performance pour développer votre présence digitale.',
    icon: '/images/services/community-management.svg',
    features: [
      'Gestion complète des réseaux sociaux',
      'Création de contenu engageant',
      'Stratégies éditoriales personnalisées',
      'Animation de communauté',
      'Modération et service client',
      'Rapports de performance détaillés'
    ],
    technologies: ['Meta Business Suite', 'Hootsuite', 'Buffer', 'Canva', 'Google Analytics'],
    pricing: {
      starting: '50 000',
      currency: 'FCFA'
    }
  }
];