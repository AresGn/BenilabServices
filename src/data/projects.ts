export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export const projects: Project[] = [
  {
    id: 'agriboost',
    title: 'Agriboost',
    description: 'Accélérateur digital spécialement conçu pour les agripreneurs africains.',
    longDescription: 'Plateforme complète d\'accompagnement des entrepreneurs agricoles avec outils de gestion, formation et mise en réseau. Agriboost révolutionne l\'agriculture africaine en digitalisant les processus et en connectant les acteurs du secteur.',
    image: '/images/projects/agriboost-preview.png',
    category: 'Plateforme Web',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'API REST'],
    status: 'completed',
  },
  {
    id: 'pre2excel',
    title: 'Pre2Excel',
    description: 'Plateforme éducative complète pour l\'apprentissage d\'Excel.',
    longDescription: 'Solution e-learning innovante proposant des cours interactifs, exercices pratiques et certifications pour maîtriser Excel. Interface intuitive avec suivi de progression et communauté d\'apprenants.',
    image: '/images/projects/pre2excel-preview.jpg',
    category: 'E-learning',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    status: 'completed',
  },
  {
    id: 'smarttutor',
    title: 'SmartTutor',
    description: 'Révolutionne la mise en relation entre parents et enseignants.',
    longDescription: 'Application mobile et web facilitant la communication entre parents et professeurs particuliers. Système de géolocalisation, planning intégré, paiements sécurisés et évaluations en temps réel.',
    image: '/images/projects/smarttutor-preview.jpg',
    category: 'Application Mobile',
    technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps API'],
    status: 'completed',
  },
  {
    id: 'school-sms',
    title: 'School SMS',
    description: 'Automatise l\'envoi d\'informations scolaires par SMS.',
    longDescription: 'Système de communication automatisé pour établissements scolaires. Envoi de notifications aux parents (notes, absences, événements), gestion des contacts et statistiques détaillées.',
    image: '/images/projects/school-sms-preview.jpg',
    category: 'Système de Gestion',
    technologies: ['PHP', 'MySQL', 'API SMS', 'Bootstrap'],
    status: 'completed',
  },
  {
    id: 'scales-ai',
    title: 'Scales AI',
    description: 'Accompagnement structuré en entrepreneuriat numérique avec intelligence artificielle.',
    longDescription: 'Plateforme d\'accompagnement entrepreneurial utilisant l\'IA pour personnaliser les parcours de formation et fournir des conseils adaptés à chaque entrepreneur selon son secteur et ses objectifs.',
    image: '/images/projects/scales-ai-preview.jpg',
    category: 'Intelligence Artificielle',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    status: 'in-progress',
  },
  {
    id: 'africswift',
    title: 'AfricSwift',
    description: 'Facilite les transferts d\'argent transfrontaliers en Afrique.',
    longDescription: 'Solution fintech révolutionnaire pour les transferts d\'argent rapides et sécurisés entre pays africains. Interface simple, frais réduits et conformité réglementaire complète.',
    image: '/images/projects/africswift-preview.jpg',
    category: 'Fintech',
    technologies: ['Node.js', 'React Native', 'Blockchain', 'MongoDB'],
    status: 'completed',
  },
  {
    id: 'excel-mastery-ai',
    title: 'Excel Mastery AI',
    description: 'Formation Excel assistée par intelligence artificielle.',
    longDescription: 'Plateforme d\'apprentissage d\'Excel révolutionnaire utilisant l\'IA pour adapter le contenu au niveau de chaque apprenant et proposer des exercices personnalisés en temps réel.',
    image: '/images/projects/excel-mastery-ai-preview.jpg',
    category: 'EdTech',
    technologies: ['React', 'Python', 'OpenAI API', 'PostgreSQL'],
    status: 'completed',
  },
  {
    id: 'tutor-ai',
    title: 'Tutor AI',
    description: 'Assistant pédagogique intelligent pour l\'éducation personnalisée.',
    longDescription: 'Assistant virtuel utilisant l\'intelligence artificielle pour fournir un soutien scolaire personnalisé, des explications adaptées et un suivi pédagogique intelligent.',
    image: '/images/projects/tutor-ai-preview.jpg',
    category: 'EdTech',
    technologies: ['Python', 'NLP', 'React', 'TensorFlow'],
    status: 'in-progress',
  },
  {
    id: 'startup-boost-africa',
    title: 'Startup Boost Africa',
    description: 'Plateforme complète de suivi, formation et mentorat pour entrepreneurs africains.',
    longDescription: 'Écosystème complet pour accompagner les startups africaines : formation, mentorat, mise en réseau, suivi de performance et accès au financement. Une solution tout-en-un pour l\'entrepreneuriat en Afrique.',
    image: '/images/projects/startup-boost-africa-preview.jpg',
    category: 'Plateforme Entrepreneuriale',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    status: 'planned',
  },
];