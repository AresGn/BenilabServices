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
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formValues.message.trim()) {
      newErrors.message = 'Le message est requis';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Message envoyé',
        description: 'Nous vous contacterons dans les plus brefs délais.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      // Réinitialiser le formulaire
      setFormValues({
        name: '',
        email: '',
        phone: '',
        message: '',
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
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Nom</FormLabel>
          <Input
            name="name"
            placeholder="Votre nom"
            value={formValues.name}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>

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

        <FormControl isInvalid={!!errors.message}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            placeholder="Votre message"
            value={formValues.message}
            onChange={handleChange}
            rows={5}
          />
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        </FormControl>

        <Button
          mt={4}
          colorScheme="primary"
          isLoading={isSubmitting}
          type="submit"
          w="full"
        >
          Envoyer
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactForm;
