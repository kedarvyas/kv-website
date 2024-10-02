import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import FractalParticleBackground from './components/FractalParticleBackground';
import NetworkAnimation from './components/NetworkAnimation';

function App() {
  return (
    <ChakraProvider>
      <Box position="relative" minHeight="100vh">
        <FractalParticleBackground />
        <Header />
        <Flex maxWidth="1100px" margin="0 auto" position="relative">
          <Box flex="1" pr="320px"> {/* Adjust padding to prevent overlap */}
            <MainContent />
          </Box>
          <NetworkAnimation />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;