export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  workingHours: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
    tiktok: string;
  };
}

export const contactInfo: ContactInfo = {
  email: 'contact@benilabservices.com',
  phone: '+229 XX XX XX XX',
  address: 'Cotonou, Bénin',
  city: 'Cotonou',
  country: 'Bénin',
  workingHours: 'Lundi - Vendredi : 8h00 - 18h00',
  socialMedia: {
    facebook: 'https://facebook.com/benilabservices',
    instagram: 'https://instagram.com/benilabservices',
    linkedin: 'https://linkedin.com/company/benilabservices',
    tiktok: 'https://tiktok.com/@benilabservices'
  }
};

export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: {
    amount: string;
    currency: string;
    period?: string;
  };
  popular?: boolean;
  category: 'startup' | 'business' | 'enterprise';
}

export const servicePackages: ServicePackage[] = [
  {
    id: 'pack-startup',
    name: 'Pack Lancement Startup',
    description: 'Idéal pour les entrepreneurs qui démarrent leur aventure digitale',
    features: [
      'Site vitrine responsive (5 pages)',
      'Logo et identité visuelle',
      'Hébergement 1 an inclus',
      'Formation à la gestion du site',
      'Support technique 3 mois'
    ],
    price: {
      amount: '350 000',
      currency: 'FCFA'
    },
    category: 'startup',
    popular: true
  },
  {
    id: 'pack-social-media',
    name: 'Pack Visibilité Réseaux Sociaux',
    description: 'Boostez votre présence sur les réseaux sociaux',
    features: [
      'Gestion 3 réseaux sociaux',
      'Création de contenu (20 posts/mois)',
      'Stratégie éditoriale personnalisée',
      'Rapports de performance mensuels',
      'Community management'
    ],
    price: {
      amount: '150 000',
      currency: 'FCFA',
      period: 'mois'
    },
    category: 'business'
  },
  {
    id: 'pack-ecommerce',
    name: 'Pack Site + Tunnel de Vente',
    description: 'Solution complète pour vendre en ligne efficacement',
    features: [
      'Site e-commerce complet',
      'Tunnel de vente optimisé',
      'Intégration paiement mobile',
      'Formation e-commerce',
      'Support technique 6 mois'
    ],
    price: {
      amount: '750 000',
      currency: 'FCFA'
    },
    category: 'business',
    popular: true
  },
  {
    id: 'pack-community',
    name: 'Abonnement Community Management',
    description: 'Gestion professionnelle de vos communautés en ligne',
    features: [
      'Animation quotidienne',
      'Création de contenu viral',
      'Gestion des interactions',
      'Stratégie de croissance',
      'Reporting détaillé'
    ],
    price: {
      amount: '200 000',
      currency: 'FCFA',
      period: 'mois'
    },
    category: 'business'
  },
  {
    id: 'pack-video-tiktok',
    name: 'Forfait Mensuel Vidéo TikTok',
    description: 'Contenu vidéo professionnel pour TikTok et Reels',
    features: [
      '15 vidéos courtes par mois',
      'Montage professionnel',
      'Effets et transitions',
      'Optimisation pour chaque plateforme',
      'Calendrier de publication'
    ],
    price: {
      amount: '100 000',
      currency: 'FCFA',
      period: 'mois'
    },
    category: 'startup'
  }
];