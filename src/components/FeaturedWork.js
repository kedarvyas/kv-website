import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const FeaturedWork = () => {
  const projects = [
    {
      title: 'FPL League Hub',
      description: 'Hub for Head-to-Head Leagues on Fantasy Premier League. Provides comprehensive statistics and analysis for fantasy football managers.',
      imageUrl: '/fpl-league-hub.jpg', 
      type: 'Web Application',
      technologies: ['React', 'Node.js', 'Python', 'FastAPI'],
      projectUrl: 'https://fpl-tacticos-leaguehub.netlify.app/'
    },
    {
      title: 'Project 2',
      description: 'Short description of Project 2',
      imageUrl: '/website-image.jpg',
      type: 'Mobile App',
      technologies: ['React Native', 'Firebase'],
      projectUrl: 'https://github.com/kedarvyas/kv-website'
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