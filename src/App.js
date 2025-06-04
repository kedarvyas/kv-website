import React from 'react';
import { ChakraProvider, Box, extendTheme, ColorModeScript } from '@chakra-ui/react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import FractalParticleBackground from './components/FractalParticleBackground';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#18181b' : 'white',
        color: props.colorMode === 'dark' ? 'gray.100' : '##BB86FC',
      },
    }),
  },
  colors: {
    brand: {
      500: 'rgb(220, 20, 60)',
    },
    gray: {
      900: '#18181b',
      800: '#27272a',
      700: '#3f3f46',
      600: '#52525b',
      100: '#e4e4e7',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
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