'use client'

import { Image, Box, BoxProps } from '@chakra-ui/react';

interface LogoProps extends BoxProps {
  height?: string | number;
}

const Logo = ({ height = '40px', ...rest }: LogoProps) => {
  return (
    <Box {...rest}>
      <Image
        src="/images/logo/logo.jpeg"
        alt="Benilab Services"
        h={height}
        w="auto"
      />
    </Box>
  );
};

export default Logo;
