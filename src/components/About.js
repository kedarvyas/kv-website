import React from 'react';
import { Box, Heading, Text, SimpleGrid, Flex, Icon, useMediaQuery, useColorMode } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const HighlightRed = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Text as="span" color={colorMode === 'dark' ? '#BB86FC' : 'rgb(220, 20, 60)'} fontWeight="bold" display="inline">
      {children}
    </Text>
  );
};

const HighlightGray = ({ children }) => (
  <Text as="span" color="gray.700" fontWeight="bold" display="inline">
    {children}
  </Text>
);

const About = () => {
  const [isMobile] = useMediaQuery("(max-width: 48em)");
  const { colorMode } = useColorMode();

  const technologies = [
    "Python", "Java", "React.js", "C++",
    "TypeScript", "HTML & CSS", 
  ];

  return (
    <Box as="section" width={{ base: "100%", md: "70%" }} >
      <Heading as="h2" size={{ base: "lg", md: "lg" }} mb={{ base: 4, md: 6 }}>
        about me.
      </Heading>
      <Box>
        <Text fontSize={{ base: "sm", md: "md" }} mb={{ base: 4, md: 6 }}>
          I am a passionate <HighlightGray>Software Engineer</HighlightGray> with 3 years of experience.
          Currently at <HighlightRed>L3Harris Technologies</HighlightRed> working on the <HighlightRed>Advanced Tracking and Launch Analysis System (ATLAS)</HighlightRed> team for the <HighlightGray>Space Command and Control (Space C2)</HighlightGray> effort.
          Previously on the <HighlightGray>USSF's </HighlightGray><HighlightRed>GMASS</HighlightRed> and <HighlightRed>MOSSAIC</HighlightRed> programs.
        </Text>

        <Heading as="h3" size={{ base: "sm", md: "md" }} mb={{ base: 3, md: 4 }}>
          tech I have been working with:
        </Heading>
        <SimpleGrid columns={isMobile ? 2 : 3} spacing={{ base: 2, md: 4 }} mb={{ base: 6, md: 8 }}>
          {technologies.map((tech, index) => (
            <Flex key={index} alignItems="center">
              <Icon
                as={ChevronRightIcon}
                color={colorMode === 'dark' ? '#BB86FC' : 'rgb(220, 20, 60)'}
                w={{ base: 4, md: 5 }}
                h={{ base: 4, md: 5 }}
                mr={2}
              />
              <Text fontSize={{ base: "sm", md: "md" }}>{tech}</Text>
            </Flex>
          ))}
        </SimpleGrid>

        <Text fontSize={{ base: "sm", md: "md" }} mb={2}>
          When I'm not coding, you can find me exploring new technologies and building innovative software solutions. 
          I believe in continuous learning and always strive to improve my skills and knowledge in the ever-evolving world of technology. 
          Outside of work, I'm passionate about staying active through weight-lifting, playing soccer, snowboarding, and hiking. 
        </Text>
      </Box>
    </Box>
  );
};

export default About;