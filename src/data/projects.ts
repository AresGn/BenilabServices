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
];