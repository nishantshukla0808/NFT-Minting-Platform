import React from 'react';
import { Box, Typography, keyframes } from '@mui/material';
import loadingGif from '../assets/loading.gif'; 
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
      <img src={loadingGif} alt="Loading..." style={{ width: '150px', height: '150px' }} />
      <Typography
        variant="h6"
        sx={{
          marginTop: 2,
          animation: `${fadeInOut} 2s infinite`,
          color: 'white', 
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
