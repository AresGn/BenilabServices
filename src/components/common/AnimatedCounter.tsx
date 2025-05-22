'use client'

import { useState, useEffect, CSSProperties } from 'react';
import { Box, Text, BoxProps } from '@chakra-ui/react';

interface AnimatedCounterProps extends BoxProps {
  value: number;
  fontSize?: string;
  color?: string;
  incrementColor?: string;
  decrementColor?: string;
  includeDecimals?: boolean;
  decimalPrecision?: number;
  includeCommas?: boolean;
  containerStyles?: CSSProperties;
  digitStyles?: CSSProperties;
}

const AnimatedCounter = ({
  value,
  fontSize = '18px',
  color = 'black',
  incrementColor = '#32cd32',
  decrementColor = '#fe6862',
  includeDecimals = true,
  decimalPrecision = 2,
  includeCommas = false,
  containerStyles = {},
  digitStyles = {},
  ...rest
}: AnimatedCounterProps) => {
  const [prevValue, setPrevValue] = useState(value);
  const [animationDirection, setAnimationDirection] = useState<'none' | 'up' | 'down'>('none');

  useEffect(() => {
    if (value !== prevValue) {
      setAnimationDirection(value > prevValue ? 'up' : 'down');
      const timer = setTimeout(() => {
        setPrevValue(value);
        setAnimationDirection('none');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  const formatValue = (val: number) => {
    const precision = Math.pow(10, decimalPrecision);
    const formattedValue = includeDecimals 
      ? Math.round(val * precision) / precision 
      : Math.round(val);
    
    if (includeCommas) {
      return formattedValue.toLocaleString(undefined, {
        minimumFractionDigits: includeDecimals ? decimalPrecision : 0,
        maximumFractionDigits: includeDecimals ? decimalPrecision : 0
      });
    }
    
    return formattedValue.toFixed(includeDecimals ? decimalPrecision : 0);
  };

  return (
    <Box
      position="relative"
      style={containerStyles}
      {...rest}
    >
      <Text
        fontSize={fontSize}
        color={color}
        fontWeight="bold"
        position="relative"
        display="inline-block"
        style={digitStyles}
        transition="transform 0.8s, opacity 0.8s"
        transform={animationDirection === 'none' ? 'translateY(0)' : 
          animationDirection === 'up' ? 'translateY(-30px)' : 'translateY(30px)'}
        opacity={animationDirection === 'none' ? 1 : 0}
      >
        {formatValue(value)}
      </Text>
      
      {animationDirection !== 'none' && (
        <Text
          fontSize={fontSize}
          color={animationDirection === 'up' ? incrementColor : decrementColor}
          fontWeight="bold"
          position="absolute"
          left="0"
          top="0"
          style={digitStyles}
          transition="transform 0.8s, opacity 0.8s"
          transform={animationDirection === 'up' ? 'translateY(0)' : 'translateY(0)'}
          opacity={1}
        >
          {formatValue(prevValue)}
        </Text>
      )}
    </Box>
  );
};

export default AnimatedCounter;
