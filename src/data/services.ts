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
  useCases?: string[];
  benefits?: string[];
  process?: string[];
  deliverables?: string[];
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
    },
    useCases: [
      'Site vitrine pour entreprise ou professionnel',
      'Boutique en ligne avec paiement intégré',
      'Plateforme de réservation en ligne',
      'Application mobile pour service client',
      'Portail web d\'entreprise avec gestion utilisateurs',
      'Blog professionnel avec système de gestion de contenu'
    ],
    benefits: [
      'Présence digitale professionnelle 24h/7j',
      'Augmentation de la visibilité et des ventes',
      'Automatisation des processus métier',
      'Amélioration de l\'expérience client',
      'Accès mobile pour vos clients',
      'Évolutivité selon vos besoins'
    ],
    process: [
      'Analyse des besoins et cahier des charges',
      'Conception UX/UI et maquettes',
      'Développement et intégration',
      'Tests et optimisations',
      'Mise en ligne et formation',
      'Maintenance et évolutions'
    ],
    deliverables: [
      'Site web ou application fonctionnelle',
      'Code source documenté',
      'Formation à l\'administration',
      'Documentation technique',
      'Certificat SSL et sécurisation',
      '3 mois de support inclus'
    ]
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
    },
    useCases: [
      'Lancement de produit avec campagne publicitaire',
      'Génération de leads qualifiés pour B2B',
      'Augmentation des ventes e-commerce',
      'Fidélisation client par email marketing',
      'Optimisation du taux de conversion',
      'Développement de la notoriété de marque'
    ],
    benefits: [
      'ROI mesurable et optimisé',
      'Ciblage précis de votre audience',
      'Automatisation des ventes',
      'Réduction du coût d\'acquisition client',
      'Amélioration de la conversion',
      'Données analytiques détaillées'
    ],
    process: [
      'Audit marketing et analyse concurrentielle',
      'Définition de la stratégie et objectifs',
      'Création des campagnes et contenus',
      'Lancement et monitoring en temps réel',
      'Optimisation continue des performances',
      'Reporting et recommandations'
    ],
    deliverables: [
      'Stratégie marketing documentée',
      'Campagnes publicitaires configurées',
      'Tunnels de vente opérationnels',
      'Tableaux de bord analytics',
      'Rapports de performance mensuels',
      'Formation aux outils marketing'
    ]
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
    },
    useCases: [
      'Création d\'identité visuelle pour startup',
      'Refonte de logo et charte graphique',
      'Supports marketing pour événement',
      'Packaging produit et étiquetage',
      'Visuels pour campagne publicitaire',
      'Matériel de communication corporate'
    ],
    benefits: [
      'Image de marque professionnelle et mémorable',
      'Cohérence visuelle sur tous supports',
      'Différenciation de la concurrence',
      'Augmentation de la reconnaissance de marque',
      'Communication visuelle efficace',
      'Supports marketing impactants'
    ],
    process: [
      'Brief créatif et analyse de la marque',
      'Recherche et inspiration créative',
      'Création de concepts et propositions',
      'Développement et affinement',
      'Finalisation et déclinaisons',
      'Livraison des fichiers sources'
    ],
    deliverables: [
      'Logo en plusieurs formats (AI, PNG, SVG)',
      'Charte graphique complète',
      'Supports de communication finalisés',
      'Fichiers sources modifiables',
      'Guide d\'utilisation de la marque',
      'Déclinaisons pour différents supports'
    ]
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
    },
    useCases: [
      'Vidéos promotionnelles pour réseaux sociaux',
      'Tutoriels et formations en ligne',
      'Présentation produit avec avatar IA',
      'Contenu viral pour TikTok et Instagram',
      'Vidéos explicatives pour services',
      'Témoignages clients et interviews'
    ],
    benefits: [
      'Engagement élevé sur les réseaux sociaux',
      'Communication claire et mémorable',
      'Augmentation du taux de conversion',
      'Contenu viral et partageable',
      'Formation et éducation efficaces',
      'Présence moderne et innovante'
    ],
    process: [
      'Brief créatif et scénarisation',
      'Collecte des ressources (images, vidéos, audio)',
      'Montage et post-production',
      'Ajout d\'effets et animations',
      'Révisions et ajustements',
      'Livraison dans les formats requis'
    ],
    deliverables: [
      'Vidéos finales en haute qualité',
      'Versions adaptées par plateforme',
      'Fichiers sources de montage',
      'Sous-titres et transcriptions',
      'Miniatures et visuels associés',
      'Guide d\'utilisation et diffusion'
    ]
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
    },
    useCases: [
      'Lancement de marque sur les réseaux sociaux',
      'Gestion quotidienne de communauté',
      'Campagnes d\'engagement et concours',
      'Service client via réseaux sociaux',
      'Influence marketing et partenariats',
      'Gestion de crise et e-réputation'
    ],
    benefits: [
      'Communauté engagée et fidèle',
      'Augmentation de la notoriété de marque',
      'Amélioration de l\'image de marque',
      'Génération de leads qualifiés',
      'Service client réactif 24h/7j',
      'Insights précieux sur votre audience'
    ],
    process: [
      'Audit des réseaux sociaux existants',
      'Définition de la stratégie éditoriale',
      'Création du planning de contenu',
      'Publication et animation quotidienne',
      'Monitoring et engagement communauté',
      'Analyse et optimisation continue'
    ],
    deliverables: [
      'Stratégie éditoriale documentée',
      'Planning de contenu mensuel',
      'Visuels et contenus créés',
      'Gestion quotidienne des comptes',
      'Rapports de performance mensuels',
      'Recommandations d\'optimisation'
    ]
  }
];