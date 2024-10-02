import React from 'react';
import { Box, Flex, Text, Link, Button } from '@chakra-ui/react';

const Header = () => {
  const handleHireMe = () => {
    window.location.href = "mailto:your.email@example.com";
  };

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      bg="white"
      borderBottom="1px solid black"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1150px"
        margin="0 auto"
        py={3.5}
        px={8}
      >
        <Text           
          fontSize={{ base: "lg", md: "xl" }} 
          fontWeight={900} 
          fontFamily="Arial, Helvetica, sans-serif">
          kedar vyas
        </Text>
        <Flex alignItems="center" justifyContent="space-between" width="400px">
          <Link 
            href="https://github.com/kedarvyas" 
            fontSize={{ base: "lg", md: "xl" }} 
            fontWeight={900} 
            fontFamily="Arial, Helvetica, sans-serif"  
            target="_blank" 
            rel="noopener noreferrer"
          >
            github
          </Link>
          <Link 
            href="https://www.linkedin.com/in/kedarvyas/" 
            fontSize={{ base: "lg", md: "xl" }} 
            fontWeight={900} 
            fontFamily="Arial, Helvetica, sans-serif" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            linkedin
          </Link>
          <Box position="relative" role="group">
            <Button 
              size="sm" 
              fontSize="md"
              fontWeight="800"
              fontFamily="Arial, Helvetica, sans-serif"
              variant="outline" 
              borderColor="rgb(220, 20, 60)" 
              color="rgb(220, 20, 60)" 
              bg="white"
              borderRadius="0"
              px={6}
              py={2}
              height="auto"
              position="relative"
              zIndex={2}
              onClick={handleHireMe}
              _hover={{
                bg: "white"
              }}
            >
              hire me
            </Button>
            <Box
              position="absolute"
              top="4px"
              left="4px"
              right="-4px"
              bottom="-4px"
              bg="rgb(220, 20, 60)"
              zIndex={1}
              transition="all 0.2s ease"
              _groupHover={{
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                opacity: 0
              }}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;