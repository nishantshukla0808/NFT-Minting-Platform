import React from 'react';
import { CircularProgress, Box, Typography, keyframes } from '@mui/material';

const fadeInOut = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: 2,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #000032, #001f4d)', 
      }}
    >
      <CircularProgress />
      <Typography
        variant="h6"
        sx={{
          marginTop: 2,
          animation: `${fadeInOut} 2s infinite`,
          color: 'white', // Set text color to white
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
