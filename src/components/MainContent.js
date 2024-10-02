import React, { useRef, useEffect } from 'react';
import { Box, Text, Link, VStack, Flex, Image } from '@chakra-ui/react';
import Typed from 'typed.js';
import About from './About';
import FeaturedWork from './FeaturedWork';
import NetworkAnimation from './NetworkAnimation';

const MainContent = () => {
  const topSpacing = { base: "32", md: "40", lg: "48" };
  const animationSize = "280px";
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hey, I'm Kedar..."],
      typeSpeed: 60,
      startDelay: 1000,
      showCursor: true,
      cursorChar: '|',
      stopped: false,
      onComplete: (self) => {
        if (self.cursor) {
          self.cursor.style.display = 'inline-block';
        }
      }
    });

    // Destroying the instance on unmount to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box as="main" pt={topSpacing} pb={32}>
      <Box maxWidth="1600px" margin="0 auto" position="relative">
        <Box
          position="absolute"
          top={topSpacing}
          right="0"
          height={animationSize}
          pointerEvents="none"
        >
          <NetworkAnimation />
        </Box>
        <VStack spacing={40} alignItems="flex-start" width="100%">
          <Box width="65%">
            <Box height="60px" mb={6}> {/* Increased height for larger text */}
              <Text 
                as="h1" 
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} 
                fontWeight="extrabold" 
                lineHeight="2.2" 
                display="inline"
              >
                <span ref={el}></span>
              </Text>
            </Box>
            <Text fontSize="md" mb={6}>
              I am a software engineer from Nashville, Tennessee. I enjoy learning, building, and exploring new technologies. Currently at L3Harris Technologies. University of Tennessee alumnus.
            </Text>
            <Link href="mailto:your.email@example.com" color="rgb(220, 20, 60)" fontSize="sm">
              kedar.m.vyas@example.com
            </Link>
          </Box>

          <Flex width="100%" position="relative" mb={16}>
            <Box width="100%">
              <About />
            </Box>
            <Box
              width="250px"
              height="250px"
              bg="gray.200"
              borderRadius="md"
              position="absolute"
              right="-175px"
              top="100"
            >
              {/* Image placeholder */}
              <Image
                src="/path/to/your/image.jpg"
                alt="Your Name"
                objectFit="cover"
                width="100%"
                height="100%"
                fallback={<Box width="100%" height="100%" bg="gray.200" />}
              />
            </Box>
          </Flex>

          <FeaturedWork />
        </VStack>
      </Box>
    </Box>
  );
};

export default MainContent;