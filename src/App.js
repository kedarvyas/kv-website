import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import FractalParticleBackground from './components/FractalParticleBackground';
import NetworkAnimation from './components/NetworkAnimation';

function App() {
  return (
    <ChakraProvider>
      <Box
        position="relative"
        minHeight="100vh"
        overflow="hidden"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgb(220, 20, 60)',
            borderRadius: '24px',
          },
        }}
      >
        <FractalParticleBackground />
        <Header />
        <Box
          pt="60px" 
          height="100vh"
          overflowY="auto"
          css={{
            '&': {
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            },
          }}
        >
          <Flex maxWidth="1100px" margin="0 auto" position="relative">
            <Box flex="1" pr="320px"> 
              <MainContent />
            </Box>
            <NetworkAnimation />
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;