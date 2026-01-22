import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const FeaturedWork = () => {
  const projects = [
    {
      title: 'Sanctum',
      description: 'A B2B SaaS member check-in platform for organizations. Members use the mobile app to check in via QR codes, while staff manage attendance, families, and donations through a comprehensive web dashboard.',
      imageUrl: '/sanctum-mockup.png',
      type: 'Full-Stack Application',
      technologies: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
      projectUrl: 'https://sanctumapp.vercel.app/'
    },
    {
      title: 'Pulse Finance',
      description: 'A native iOS personal finance tracker that helps users monitor their financial health by connecting bank accounts, tracking transactions, and analyzing spending patterns in real-time.',
      imageUrl: '/pulse.jpg',
      type: 'iOS App',
      technologies: ['SwiftUI', 'SwiftData', 'Firebase', 'Plaid API'],
      projectUrl: 'https://github.com/kedarvyas/PulseFinance'
    },
    {
      title: 'InfiWiki',
      description: 'An infinite-scroll Wikipedia reader that lets you discover and read random Wikipedia articles endlessly. Search for topics, filter by categories, or keep scrolling through a curated stream of knowledge.',
      imageUrl: '/infiwiki.jpg',
      imagePosition: 'top',
      type: 'Web Application',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'TanStack Query', 'Tailwind CSS'],
      projectUrl: 'https://infiwiki.netlify.app/'
    },
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
    {
      title: 'Fractal Generator',
      description: 'React and WebGL application that runs various fractals in real-time',
      imageUrl: '/fractal-generator.jpg',
      type: 'React App',
      technologies: ['React', 'WebGL', 'Shadcn/UI'],
      projectUrl: 'https://github.com/kedarvyas/FractalGenerator'
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