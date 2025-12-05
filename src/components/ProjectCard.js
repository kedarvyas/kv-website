import React from 'react';
import { Box, Heading, Text, VStack, HStack, Tag, Link, Image, useColorMode } from '@chakra-ui/react';

const ProjectCard = ({ project }) => {
  const { title, description, type, technologies, projectUrl, imageUrl, imagePosition = 'center' } = project;
  const { colorMode } = useColorMode();

  return (
    <Box
      role="group"
      position="relative"
      overflow="hidden"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
      transition="all 0.3s"
      _hover={{ boxShadow: 'lg' }}
    >
      {/* Project Image Container */}
      <Box position="relative" h="64" overflow="hidden">
        <Image
          src={imageUrl}
          alt={title}
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition={imagePosition}
          transition="transform 0.3s"
          _groupHover={{ transform: 'scale(1.05)' }}
          fallback={<Box width="100%" height="100%" bg="gray.200" />}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.400"
          opacity="0"
          transition="opacity 0.3s"
          _groupHover={{ opacity: 1 }}
        />
      </Box>

      {/* Content Container */}
      <VStack p={6} spacing={4} align="stretch">
        {/* Project Type and Link */}
        <HStack justify="space-between" align="center">
          <Tag
            size="md"
            variant="subtle"
            colorScheme="gray"
            bg={colorMode === 'dark' ? 'gray.700' : undefined}
            color={colorMode === 'dark' ? 'gray.200' : undefined}
          >
            {type}
          </Tag>
          <Link
            href={projectUrl}
            color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
            fontSize="sm"
            _hover={{ color: colorMode === 'dark' ? 'gray.200' : 'gray.700' }}
            isExternal
          >
            View Project →
          </Link>
        </HStack>

        {/* Project Title */}
        <Heading size="md" color={colorMode === 'dark' ? 'gray.100' : 'gray.900'}>
          {title}
        </Heading>

        {/* Project Description */}
        <Text color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} lineHeight="tall">
          {description}
        </Text>

        {/* Technologies Used */}
        <HStack wrap="wrap" spacing={2} pt={2}>
          {technologies?.map((tech, index) => (
            <Tag
              key={index}
              size="sm"
              variant="subtle"
              colorScheme={getColorScheme(index)}
            >
              {tech}
            </Tag>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

// Helper function to alternate tag colors
const getColorScheme = (index) => {
  const schemes = ['blue', 'green', 'purple', 'red', 'teal'];
  return schemes[index % schemes.length];
};

export default ProjectCard;