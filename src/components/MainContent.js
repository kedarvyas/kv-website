import React, { useState, useEffect } from 'react';
import { Box, Text, Link, VStack, Image, Flex, useMediaQuery } from '@chakra-ui/react';
import About from './About';
import NetworkAnimation from './NetworkAnimation';

const MainContent = () => {
  const [isMobile] = useMediaQuery("(max-width: 48em)");
  const [typedText, setTypedText] = useState('');
  const fullText = "Hey, I'm Kedar...";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prev) => {
        if (index < fullText.length) {
          index++;
          return fullText.slice(0, index);
        }
        clearInterval(intervalId);
        return prev;
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  const PhotoComponent = () => (
    <Box
      width="100%"
      maxWidth="256px"
      height="256px"
      position="relative"
      right={{ base: "-50px", md: "100px" }} 
      top={{ base: "25", md: "100px" }} 
      borderRadius="md"
      background="linear-gradient(180deg, rgb(220, 20, 60), rgb(0, 0, 0))"
      p="4px"
    >
      <Box
        position="absolute"
        top="4px"
        left="4px"
        right="4px"
        bottom="4px"
        borderRadius="md"
        overflow="hidden"
      >
        <Image
          src="/image.jpg"
          alt="Kedar Vyas"
          objectFit="cover"
          width="100%"
          height="100%"
          fallback={<Box width="100%" height="100%" bg="gray.200" />}
        />
      </Box>
    </Box>
  );

  const MainContentText = () => (
    <Box width={{ base: "100%", md: "70%" }} position="relative">
      <Box height={{ base: "50px", md: "75px" }} mb={4}>
        <Text
          as="h1"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="extrabold"
          lineHeight="2.2"
        >
          {typedText}
          <span style={{ opacity: 1, animation: 'blink 0.7s infinite' }}>|</span>
        </Text>
      </Box>
      <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
        I am a software engineer from Nashville, Tennessee. I enjoy learning, building, and exploring new technologies. Currently at L3Harris Technologies. University of Tennessee alumnus.
      </Text>
      <Link href="mailto:kedar.m.vyas@gmail.com" color="rgb(220, 20, 60)" fontSize={{ base: "xs", md: "sm" }}>
        kedar.m.vyas@gmail.com
      </Link>
    </Box>
  );

  return (
    <Box 
      maxWidth="1200px" 
      margin="0 auto" 
      px={{ base: 4, md: 12 }} 
      py={{ base: 32, md: 48 }}
    >
      {isMobile ? (
        <VStack spacing={16} alignItems="flex-start" width="100%">
          <Box 
          width="256px" 
          height="256px"
          position="relative"
          left="50px"
          >
            <NetworkAnimation />
          </Box>
          <MainContentText />
          <PhotoComponent />
          <Box mt={8}>
            <About />
          </Box>
        </VStack>
      ) : (
        <Flex direction="row" width="100%">
          <VStack spacing={48} alignItems="flex-start" width="60%">
            <MainContentText />
            <About />
          </VStack>
          <Flex 
            direction="column" 
            width="40%" 
            mt={-6}
            alignItems="flex-end"
            position="relative"
          >
            <Box 
              width="256px" 
              height="256px" 
              mb={32}
              position="relative"
              right="75px"
            >
              <NetworkAnimation />
            </Box>
            <PhotoComponent />
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default MainContent;
