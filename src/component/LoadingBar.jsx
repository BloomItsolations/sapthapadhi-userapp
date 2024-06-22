import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const Overlay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999, // Ensure it overlays all content
}));

const LoadingSpinner = styled(CircularProgress)({
  color: '#51A22B', // Customize color as needed
  animation: 'spin 1s linear infinite',
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

const LoadingBar = () => {
  return (
    <Overlay>
      <LoadingSpinner />
    </Overlay>
  );
};

export default LoadingBar;
