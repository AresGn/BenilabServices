export interface Service3 {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
  pricing?: {
    starting: string;
    currency: string;
  };
  useCases?: string[];
  benefits?: string[];
  process?: string[];
  deliverables?: string[];
}
