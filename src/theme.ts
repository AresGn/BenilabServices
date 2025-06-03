import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#e6f0f7',
      100: '#c0d9ea',
      200: '#97c1dd',
      300: '#6da9cf',
      400: '#4a91c2',
      500: '#005B99', // Bleu Benilab
      600: '#004e80',
      700: '#003e67',
      800: '#002f4e',
      900: '#001f34',
    },
    secondary: {
      50: '#e9f5fd',
      100: '#c6e4f9',
      200: '#9fd3f4',
      300: '#77c1ef',
      400: '#4DA8DA', // Bleu Clair
      500: '#3b97d3',
      600: '#2d77a8',
      700: '#215a7e',
      800: '#143c54',
      900: '#071e2a',
    },
    gray: {
      50: '#F5F6FA', // Gris Clair
      800: '#2D3748', // Gris Foncé
    },
    accent: {
      yellow: '#FFC107',
      green: '#28A745',
    },
    button: {
      50: '#e8f4fd',
      100: '#c4e1f9',
      200: '#9dcef4',
      300: '#75bbef',
      400: '#3894d0', // Couleur bouton personnalisée
      500: '#2980b9',
      600: '#1f6a9a',
      700: '#15547b',
      800: '#0b3e5c',
      900: '#01283d',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Lato, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 'lg',
        transition: 'all 0.3s ease',
      },
      variants: {
        primary: {
          bg: 'button.400',
          color: 'white',
          _hover: {
            bg: 'button.500',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(56, 148, 208, 0.3)',
          },
          _active: {
            bg: 'button.600',
            transform: 'translateY(0)',
          },
        },
        outline: {
          borderColor: 'button.400',
          color: 'button.400',
          borderWidth: '2px',
          _hover: {
            bg: 'button.400',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(56, 148, 208, 0.3)',
          },
          _active: {
            bg: 'button.500',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
});

export default theme; 