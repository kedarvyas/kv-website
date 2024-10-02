import React from 'react';
import { Box, Heading, Text, SimpleGrid, Flex, Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const HighlightRed = ({ children }) => (
  <Text as="span" color="rgb(220, 20, 60)" fontWeight="bold" display="inline">
    {children}
  </Text>
);

const HighlightGray = ({ children }) => (
  <Text as="span" color="gray.700" fontWeight="bold" display="inline">
    {children}
  </Text>
);

const About = () => {
  const technologies = [
    "Python", "Java", "React.js", "C++", 
    "TypeScript+", "HTML & CSS", // Add or remove technologies as needed
  ];

  return (
    <Box as="section" py={12} width="60%">
      <Heading as="h2" size="lg" mb={6}>
        about me.
      </Heading>
      <Box>
        <Text fontSize="md" mb={4}>
          I am a passionate <HighlightGray>Software Engineer</HighlightGray> with 2 years of experience. 
          Currently at <HighlightRed>L3Harris Technologies</HighlightRed> working on the <HighlightRed>'program_name'</HighlightRed> team for the <HighlightGray>U.S. Space Force's GMASS</HighlightGray> contract. 
          Previously on <HighlightRed>GBOSS</HighlightRed> for the <HighlightGray>USSF's MOSSAIC</HighlightGray> program.
        </Text>

        <Heading as="h3" size="md" mb={4}>
          tech I have been working with:
        </Heading>
        <SimpleGrid columns={2} spacing={4}>
          {technologies.map((tech, index) => (
            <Flex key={index} alignItems="center">
              <Icon 
                as={ChevronRightIcon} 
                color="rgb(220, 20, 60)" 
                w={5} 
                h={5} 
                mr={2}
              />
              <Text fontSize="md">{tech}</Text>
            </Flex>
          ))}
        </SimpleGrid>

        <Text fontSize="md" py={8} mb={2}>
          When I'm not coding, you can find me exploring new technologies, contributing to open-source 
          projects, or enjoying the great outdoors. I believe in continuous learning and always strive 
          to improve my skills and knowledge in the ever-evolving world of technology.
        </Text>
        
      </Box>
    </Box>
  );
};

export default About;