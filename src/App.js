import React, { createContext, useState, useContext } from 'react';
import { ChakraProvider, Box, extendTheme, ColorModeScript } from '@chakra-ui/react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import FractalParticleBackground from './components/FractalParticleBackground';

// Create theme context
const ThemeModeContext = createContext();

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    return { themeMode: 'light', setThemeMode: () => {} };
  }
  return context;
};

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
    minimal: {
      bg: '#f5f1ea',
      text: '#2d2d2d',
      accent: '#7a9b76',
      border: '#d4cfc4',
    },
  },
});

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const getScrollbarColor = () => {
    if (themeMode === 'minimal') return '#7a9b76';
    if (themeMode === 'dark') return '#BB86FC';
    return 'rgb(220, 20, 60)';
  };

  const getBackgroundColor = () => {
    if (themeMode === 'minimal') return '#f5f1ea';
    if (themeMode === 'dark') return '#18181b';
    return 'white';
  };

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Box
          position="relative"
          minHeight="100vh"
          overflow="hidden"
          bg={getBackgroundColor()}
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: getScrollbarColor(),
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
    </ThemeModeContext.Provider>
  );
}

export default App;