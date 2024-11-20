import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const FeaturedWork = () => {
  const projects = [
    {
      title: 'FPL League Hub',
      description: 'Hub for Head-to-Head Leagues on Fantasy Premier League. Provides comprehensive statistics and analysis for fantasy football managers.',
      imageUrl: '/api/placeholder/800/600', // Using placeholder for now
      type: 'Web Application',
      technologies: ['React', 'Node.js', 'Python', 'FastAPI'],
      projectUrl: '#'
    },
    {
      title: 'Project 2',
      description: 'Short description of Project 2',
      imageUrl: '/api/placeholder/800/600', // Using placeholder for now
      type: 'Mobile App',
      technologies: ['React Native', 'Firebase'],
      projectUrl: '#'
    },
  ];

  return (
    <Box as="section" py={8} px={4} maxWidth="1200px" mx="auto">
      <Heading as="h2" size="lg" mb={8}>
        projects.
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={8}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturedWork;