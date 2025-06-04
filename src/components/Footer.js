import React from 'react';
import { Box, Text, useColorMode } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="footer"
      width="100%"
      py={4}
      textAlign="center"
      borderTop="1px solid"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
    >
      <Text
        fontSize="sm"
        fontFamily="mono"
        color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
        letterSpacing="wide"
      >
        built on earth by a human
      </Text>
    </Box>
  );
};

export default Footer;