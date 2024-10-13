import React, { useState } from 'react';
import { Box, Flex, Text, Link, Button, IconButton, VStack, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 48em)");
  const [btnRef] = useState(React.useRef());

  const handleHireMe = () => {
    window.location.href = "mailto:kedar.m.vyas@gmail.com";
  };

  const MenuItems = ({ isMobile }) => (
    <>
      <Link 
        href="https://github.com/kedarvyas" 
        fontSize={{ base: "xl", md: "lg" }} 
        fontWeight={900} 
        fontFamily="Arial, Helvetica, sans-serif"  
        target="_blank" 
        rel="noopener noreferrer"
        mb={isMobile ? 6 : 0}
        onClick={isMobile ? onClose : undefined}
      >
        github
      </Link>
      <Link 
        href="https://www.linkedin.com/in/kedarvyas/" 
        fontSize={{ base: "xl", md: "lg" }} 
        fontWeight={900} 
        fontFamily="Arial, Helvetica, sans-serif" 
        target="_blank" 
        rel="noopener noreferrer"
        mb={isMobile ? 6 : 0}
        onClick={isMobile ? onClose : undefined}
      >
        linkedin
      </Link>
      {isMobile ? (
        <Button 
          onClick={handleHireMe}
          size="lg"
          fontWeight="800"
          fontFamily="Arial, Helvetica, sans-serif"
          colorScheme="red"
          variant="solid"
          width="full"
        >
          hire me
        </Button>
      ) : (
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
      )}
    </>
  );

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      bg="white"
      borderBottom="1px solid black"
      boxShadow="0 1px 2px rgba(0,0,0,0.1)"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1150px"
        margin="0 auto"
        py={3.5}
        px={4}
      >
        <Text           
          fontSize={{ base: "xl", md: "xl" }} 
          fontWeight={900} 
          fontFamily="Arial, Helvetica, sans-serif">
          {isMobile ? "kv" : "kedar vyas"}
        </Text>
        {isMobile ? (
          <IconButton
            ref={btnRef}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
            aria-label="Open menu"
          />
        ) : (
          <Flex alignItems="center" justifyContent="space-between" width="400px">
            <MenuItems isMobile={false} />
          </Flex>
        )}
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerBody pt={16}>
            <VStack spacing={6} align="stretch">
              <MenuItems isMobile={true} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;