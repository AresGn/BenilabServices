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
      },
    },
  },
});

export default theme; 