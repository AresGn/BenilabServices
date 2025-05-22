'use client'

import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  HStack,
  Select,
  useToast,
  FormErrorMessage,
  Checkbox,
  Text,
  Link,
} from '@chakra-ui/react';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  deadline: string;
  description: string;
  termsAccepted: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  description?: string;
  termsAccepted?: string;
}

const PROJECT_TYPES = [
  'Site web vitrine',
  'Site e-commerce',
  'Application web',
  'Application mobile',
  'Refonte de site',
  'Maintenance',
  'Autre',
];

const BUDGET_RANGES = [
  'Moins de 1 000€',
  '1 000€ - 3 000€',
  '3 000€ - 5 000€',
  '5 000€ - 10 000€',
  'Plus de 10 000€',
  'À déterminer',
];

const QuotationForm = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    deadline: '',
    description: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formValues.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }
    
    if (!formValues.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = 'L&apos;email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Format d&apos;email invalide';
    }
    
    if (!formValues.projectType) {
      newErrors.projectType = 'Le type de projet est requis';
    }
    
    if (!formValues.description.trim()) {
      newErrors.description = 'La description du projet est requise';
    }
    
    if (!formValues.termsAccepted) {
      newErrors.termsAccepted = 'Vous devez accepter les conditions générales';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: checked,
    });
    
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Demande envoyée',
        description: 'Nous vous contacterons pour discuter de votre projet.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      // Réinitialiser le formulaire
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        deadline: '',
        description: '',
        termsAccepted: false,
      });
    } catch {
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue, veuillez réessayer.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box 
      as="form" 
      onSubmit={handleSubmit}
      bg="white"
      p={6}
      borderRadius="lg"
      boxShadow="md"
      w="100%"
    >
      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <FormControl isInvalid={!!errors.firstName}>
            <FormLabel>Prénom</FormLabel>
            <Input
              name="firstName"
              placeholder="Votre prénom"
              value={formValues.firstName}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.lastName}>
            <FormLabel>Nom</FormLabel>
            <Input
              name="lastName"
              placeholder="Votre nom"
              value={formValues.lastName}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.lastName}</FormErrorMessage>
          </FormControl>
        </HStack>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="Votre email"
            value={formValues.email}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Téléphone</FormLabel>
          <Input
            name="phone"
            placeholder="Votre numéro de téléphone"
            value={formValues.phone}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Entreprise (optionnel)</FormLabel>
          <Input
            name="company"
            placeholder="Nom de votre entreprise"
            value={formValues.company}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isInvalid={!!errors.projectType}>
          <FormLabel>Type de projet</FormLabel>
          <Select
            name="projectType"
            placeholder="Sélectionnez un type de projet"
            value={formValues.projectType}
            onChange={handleChange}
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors.projectType}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Budget estimé</FormLabel>
          <Select
            name="budget"
            placeholder="Sélectionnez une fourchette de budget"
            value={formValues.budget}
            onChange={handleChange}
          >
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Date de livraison souhaitée (optionnel)</FormLabel>
          <Input
            name="deadline"
            type="date"
            value={formValues.deadline}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <FormLabel>Description du projet</FormLabel>
          <Textarea
            name="description"
            placeholder="Décrivez votre projet en détail"
            value={formValues.description}
            onChange={handleChange}
            rows={5}
          />
          <FormErrorMessage>{errors.description}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.termsAccepted}>
          <Checkbox
            name="termsAccepted"
            isChecked={formValues.termsAccepted}
            onChange={handleCheckboxChange}
          >
            <Text fontSize="sm">
              J&apos;accepte les{' '}
              <Link color="primary.500" href="/conditions-generales">
                conditions générales
              </Link>
            </Text>
          </Checkbox>
          <FormErrorMessage>{errors.termsAccepted}</FormErrorMessage>
        </FormControl>

        <Button
          mt={4}
          colorScheme="primary"
          isLoading={isSubmitting}
          type="submit"
          w="full"
        >
          Demander un devis
        </Button>
      </VStack>
    </Box>
  );
};

export default QuotationForm;
