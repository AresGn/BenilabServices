'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Progress,
  Stack,
  Text,
  Textarea,
  RadioGroup,
  Radio,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

const questions = [
  {
    label: 'Votre prénom et nom',
    placeholder: 'Entrez votre prénom et nom',
    type: 'text',
    name: 'fullName',
  },
  {
    label: 'Votre numéro de téléphone',
    placeholder: 'Ex: +229 99 99 99 99',
    type: 'tel',
    name: 'phone',
  },
  {
    label: 'Votre adresse email',
    placeholder: 'Ex: vous@email.com',
    type: 'email',
    name: 'email',
  },
  {
    label: 'Que faites-vous ?',
    placeholder: 'Dites-nous en quelques mots votre activité ou métier',
    type: 'textarea',
    name: 'activity',
  },
  {
    label: 'Le nom de votre entreprise ou activité',
    placeholder: 'Nom de votre entreprise ou activité',
    type: 'text',
    name: 'company',
  },
  {
    label: 'Comment préférez-vous qu\'on vous contacte ?',
    type: 'radio',
    name: 'contactMethod',
    options: ['Meet', 'SMS', 'Appel direct', 'Whatsapp'],
  },
  {
    label: 'Quand souhaitez-vous être recontacté ?',
    type: 'radio',
    name: 'contactTime',
    options: ['Dans un mois', 'Je suis flexible', 'Cette semaine', 'Autre'],
  },
  {
    label: 'À quels moments êtes-vous le plus disponible ?',
    type: 'radio',
    name: 'availability',
    options: ['Matin (8h-12h)', 'Après-midi (12h-18h)', 'Soir (18h-21h)', 'Week-end'],
  },
  {
    label: 'Avez-vous déjà un site web ?',
    type: 'radio',
    name: 'hasWebsite',
    options: ['Non, jamais eu', 'Oui, mais il ne me convient plus', 'Aucune idée si j\'en ai besoin ou pas'],
  },
  {
    label: 'Comment avez-vous entendu parler de nous ?',
    type: 'radio',
    name: 'referral',
    options: ['Bouche à oreille', 'Réseaux sociaux', 'Recherche Google', 'Autre'],
  },
  {
    label: 'Un dernier mot ou une question ?',
    placeholder: 'Votre message (optionnel)',
    type: 'textarea',
    name: 'message',
    optional: true,
  },
];

export const MultiStepContactForm = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<any>({});
  const isLastStep = step === questions.length - 1;
  const isFirstStep = step === 0;
  const current = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  // Couleurs du thème (adapté light/dark)
  const inputBg = useColorModeValue('gray.50', 'gray.800');
  const inputText = useColorModeValue('primary.700', 'white');
  const inputPlaceholder = useColorModeValue('primary.400', 'gray.400');
  const borderColor = useColorModeValue('primary.200', 'primary.600');
  const focusColor = useColorModeValue('primary.500', 'primary.300');
  const labelColor = useColorModeValue('primary.700', 'primary.200');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [current.name]: e.target.value });
  };

  const handleRadio = (val: string) => {
    setForm({ ...form, [current.name]: val });
  };

  const handleNext = () => {
    if (!isLastStep) setStep((s) => s + 1);
  };
  const handlePrev = () => {
    if (!isFirstStep) setStep((s) => s - 1);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: envoyer les données (API, email, etc.)
    alert('Formulaire envoyé !');
  };

  return (
    <Box bg="white" p={{ base: 4, md: 8 }} borderRadius="lg" boxShadow="lg" w="full">
      <Text fontSize="lg" color={labelColor} fontWeight="bold" mb={4}>
        Vous avez un projet (ou juste une idée) ? On vous propose un rendez-vous de 30 minutes pour en discuter.<br />
        <span style={{ color: '#666', fontWeight: 400 }}>
          Pas de jargon, pas d&apos;engagement. Juste une première étape vers une solution digitale qui vous ressemble.
        </span>
      </Text>
      <Progress value={progress} size="sm" colorScheme="primary" mb={6} borderRadius="full" />
      <Text color="gray.600" fontSize="sm" mb={2} textAlign="right">
        Question {step + 1} sur {questions.length}
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <Box>
            <Heading as="h3" size="md" color={labelColor} mb={2}>
              {step + 1}. {current.label}
            </Heading>
            {current.type === 'text' || current.type === 'email' || current.type === 'tel' ? (
              <Input
                type={current.type}
                placeholder={current.placeholder}
                value={form[current.name] || ''}
                onChange={handleChange}
                size="lg"
                bg={inputBg}
                color={inputText}
                borderColor={borderColor}
                _placeholder={{ color: inputPlaceholder, opacity: 1 }}
                _focus={{ borderColor: focusColor, boxShadow: `0 0 0 1px var(--chakra-colors-primary-500)` }}
                fontWeight="500"
              />
            ) : null}
            {current.type === 'textarea' ? (
              <Textarea
                placeholder={current.placeholder}
                value={form[current.name] || ''}
                onChange={handleChange}
                size="lg"
                bg={inputBg}
                color={inputText}
                borderColor={borderColor}
                _placeholder={{ color: inputPlaceholder, opacity: 1 }}
                _focus={{ borderColor: focusColor, boxShadow: `0 0 0 1px var(--chakra-colors-primary-500)` }}
                rows={4}
                fontWeight="500"
              />
            ) : null}
            {current.type === 'radio' && current.options ? (
              <RadioGroup
                value={form[current.name] || ''}
                onChange={handleRadio}
                colorScheme="primary"
                mt={2}
              >
                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={2}>
                  {current.options.map((opt: string) => (
                    <Radio key={opt} value={opt} bg={inputBg} p={2} borderRadius="md" color={inputText} _checked={{ bg: 'primary.100', borderColor: 'primary.500', color: 'primary.700' }}>
                      {opt}
                    </Radio>
                  ))}
                </SimpleGrid>
              </RadioGroup>
            ) : null}
          </Box>
          <Flex justify="space-between" align="center">
            <Button
              onClick={handlePrev}
              isDisabled={isFirstStep}
              variant="ghost"
              colorScheme="primary"
              color={labelColor}
            >
              Précédent
            </Button>
            {isLastStep ? (
              <Button type="submit" colorScheme="primary" size="lg">
                Envoyer
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                colorScheme="primary"
                size="lg"
                isDisabled={!form[current.name] && !current.optional}
              >
                Continuer
              </Button>
            )}
          </Flex>
        </Stack>
      </form>
    </Box>
  );
}; 