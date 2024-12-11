import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import FractalParticleBackground from './components/FractalParticleBackground';

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
          as="main"
          pt="60px"
          height="calc(100vh - 60px)"
          overflowY="auto"
          css={{
            '&': {
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            },
          }}
        >
          <MainContent />
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;