import React from 'react';
import { Box, Heading, SimpleGrid, Image, Text, VStack } from '@chakra-ui/react';

const FeaturedWork = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Short description of Project 1',
      imageUrl: '/path/to/project1-image.jpg',
    },
    {
      title: 'Project 2',
      description: 'Short description of Project 2',
      imageUrl: '/path/to/project2-image.jpg',
    },

  ];

  return (
    <Box as="section" py={2}>
      <Heading as="h2" size="lg" mb={8}>
        projects.
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={8}>
        {projects.map((project, index) => (
          <Box key={index} borderWidth={1} borderRadius="lg" overflow="hidden">
            <Image src={project.imageUrl} alt={project.title} />
            <VStack p={4} alignItems="flex-start">
              <Heading as="h3" size="md">{project.title}</Heading>
              <Text>{project.description}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturedWork;