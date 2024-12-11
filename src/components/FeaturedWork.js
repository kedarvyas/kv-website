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
      title: 'Personal Portfolio',
      description: 'Modern, responsive portfolio website featuring interactive particle animations, smooth transitions, and dynamic content rendering. Built with React and Chakra UI for a seamless user experience across all devices.',
      imageUrl: '/website-image.jpg',
      type: 'Webpage',
      technologies: ['React', 'Chakra UI', 'Three.js'],
      projectUrl: 'https://github.com/kedarvyas/kv-website'
    },
    {
      title: 'Habit Tracker',
      description: 'Simple, responsive habit tracker scaled for web and mobile.',
      imageUrl: '/habits-tracker.jpg',
      type: 'Webpage',
      technologies: ['React', 'Shadcn/UI'],
      projectUrl: 'https://habitstrackerkv.netlify.app/'
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