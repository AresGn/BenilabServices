import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

interface CustomButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children?: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, ...props }: CustomButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: 'primary.500',
          color: 'white',
          _hover: { bg: 'secondary.500' },
        };
      case 'secondary':
        return {
          bg: 'secondary.500',
          color: 'white',
          _hover: { opacity: 0.9 },
        };
      case 'outline':
        return {
          bg: 'transparent',
          border: '2px solid',
          borderColor: 'primary.500',
          color: 'primary.500',
          _hover: { bg: 'primary.500', color: 'white' },
        };
      default:
        return {};
    }
  };

  return (
    <ChakraButton
      px="6"
      py="2"
      rounded="lg"
      fontFamily="Poppins"
      fontWeight="500"
      transition="all 0.3s"
      {...getVariantStyles()}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
