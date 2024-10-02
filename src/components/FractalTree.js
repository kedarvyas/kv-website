import React from 'react';
import { Box } from '@chakra-ui/react';

const FractalTree = () => {
  return (
    <Box width="300px" height="300px">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50,90)">
          <path d="M0,0 L0,-30" stroke="black" strokeWidth="0.5" />
          <g transform="translate(0,-30) rotate(-30)">
            <path d="M0,0 L0,-20" stroke="black" strokeWidth="0.5" />
            <g transform="translate(0,-20) rotate(-30)">
              <path d="M0,0 L0,-10" stroke="black" strokeWidth="0.5" />
            </g>
            <g transform="translate(0,-20) rotate(30)">
              <path d="M0,0 L0,-10" stroke="black" strokeWidth="0.5" />
            </g>
          </g>
          <g transform="translate(0,-30) rotate(30)">
            <path d="M0,0 L0,-20" stroke="black" strokeWidth="0.5" />
            <g transform="translate(0,-20) rotate(-30)">
              <path d="M0,0 L0,-10" stroke="black" strokeWidth="0.5" />
            </g>
            <g transform="translate(0,-20) rotate(30)">
              <path d="M0,0 L0,-10" stroke="black" strokeWidth="0.5" />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
};

export default FractalTree;