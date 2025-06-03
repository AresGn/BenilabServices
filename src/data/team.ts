export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  skills: string[];
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Benjamin Agbodjan',
    role: 'Fondateur & Directeur Technique',
    department: 'Direction',
    bio: 'Passionné de technologie et d\'innovation, Benjamin dirige l\'équipe technique avec plus de 8 ans d\'expérience dans le développement web et mobile.',
    skills: ['Leadership', 'Stratégie Digitale', 'Développement Full-Stack', 'Gestion de Projet'],
    image: '/images/team/placeholder-team.svg'
  },
  {
    id: 'member-2',
    name: 'Sarah Koffi',
    role: 'Lead Developer',
    department: 'Développement et Tech',
    bio: 'Experte en développement web moderne, Sarah maîtrise les dernières technologies pour créer des solutions performantes et évolutives.',
    skills: ['React', 'Next.js', 'Laravel', 'Node.js', 'MongoDB'],
    image: '/images/team/placeholder-team.svg'
  },
  {
    id: 'member-3',
    name: 'David Mensah',
    role: 'Designer Graphique Senior',
    department: 'Design et Multimédia',
    bio: 'Créatif passionné, David conçoit des identités visuelles fortes et des interfaces utilisateur intuitives qui marquent les esprits.',
    skills: ['UI/UX Design', 'Adobe Creative Suite', 'Figma', 'Branding', 'Illustration'],
    image: '/images/team/placeholder-team.svg'
  },
  {
    id: 'member-4',
    name: 'Aminata Diallo',
    role: 'Responsable Marketing Digital',
    department: 'Marketing Digital',
    bio: 'Stratège marketing expérimentée, Aminata développe des campagnes digitales qui génèrent des résultats mesurables pour nos clients.',
    skills: ['Google Ads', 'Facebook Ads', 'SEO/SEA', 'Analytics', 'Automation Marketing'],
    image: '/images/team/placeholder-team.svg'
  },
  {
    id: 'member-5',
    name: 'Kofi Asante',
    role: 'Monteur Vidéo & Motion Designer',
    department: 'Design et Multimédia',
    bio: 'Spécialiste du contenu vidéo, Kofi crée des vidéos engageantes et des animations qui captivent l\'audience sur toutes les plateformes.',
    skills: ['Adobe Premiere Pro', 'After Effects', 'Motion Graphics', 'TikTok Content', 'YouTube'],
    image: '/images/team/placeholder-team.svg'
  },
  {
    id: 'member-6',
    name: 'Fatou Ouedraogo',
    role: 'Community Manager',
    department: 'Marketing Digital',
    bio: 'Experte en animation de communautés, Fatou gère les réseaux sociaux avec créativité et engagement pour développer la présence digitale.',
    skills: ['Community Management', 'Content Creation', 'Social Media Strategy', 'Copywriting'],
    image: '/images/team/placeholder-team.svg'
  }
];