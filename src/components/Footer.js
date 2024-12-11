import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      py={4}
      textAlign="center"
      borderTop="1px solid"
      borderColor="gray.100"
    >
      <Text
        fontSize="sm"
        fontFamily="mono"
        color="gray.600"
        letterSpacing="wide"
      >
        built on earth by a human
      </Text>
    </Box>
  );
};

export default Footer;