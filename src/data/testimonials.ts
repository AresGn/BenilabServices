export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  project?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Koffi Mensah',
    role: 'Directeur Général',
    company: 'AgroTech Solutions',
    content: 'Benilab Services a transformé notre vision en réalité avec Agriboost. Leur expertise technique et leur compréhension du secteur agricole africain sont remarquables. Le résultat dépasse nos attentes.',
    rating: 5,
    project: 'Agriboost'
  },
  {
    id: 'testimonial-2',
    name: 'Marie Adjovi',
    role: 'Fondatrice',
    company: 'EduConnect Bénin',
    content: 'L\'équipe de Benilab Services a créé une plateforme e-learning exceptionnelle pour Pre2Excel. Leur approche professionnelle et leur réactivité ont fait toute la différence dans notre projet.',
    rating: 5,
    project: 'Pre2Excel'
  },
  {
    id: 'testimonial-3',
    name: 'Jean-Baptiste Koudou',
    role: 'Entrepreneur',
    company: 'SmartEdu',
    content: 'SmartTutor a révolutionné notre façon de connecter parents et enseignants. L\'application développée par Benilab Services est intuitive, performante et répond parfaitement à nos besoins.',
    rating: 5,
    project: 'SmartTutor'
  },
  {
    id: 'testimonial-4',
    name: 'Fatou Diallo',
    role: 'Directrice Marketing',
    company: 'TechStart Africa',
    content: 'Grâce à Benilab Services, notre présence digitale a été complètement transformée. Leur expertise en marketing digital et community management a multiplié notre engagement par 3.',
    rating: 5
  },
  {
    id: 'testimonial-5',
    name: 'Amadou Traoré',
    role: 'CEO',
    company: 'InnovSchool',
    content: 'School SMS a simplifié notre communication avec les parents. Le système développé par Benilab Services est fiable, facile à utiliser et nous fait gagner un temps précieux.',
    rating: 5,
    project: 'School SMS'
  },
  {
    id: 'testimonial-6',
    name: 'Aïcha Ouattara',
    role: 'Responsable Communication',
    company: 'Digital Bénin',
    content: 'L\'identité visuelle créée par Benilab Services reflète parfaitement nos valeurs. Leur créativité et leur professionnalisme ont donné une nouvelle dimension à notre marque.',
    rating: 5
  }
];