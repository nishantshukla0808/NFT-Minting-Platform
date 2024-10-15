import React, { useState, useEffect } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onComplete();
        }
        return prev + 10;
      });
    }, 500);
  }, []);

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <CircularProgress variant="determinate" value={progress} />
      <Typography variant="h6">Loading... {progress}%</Typography>
    </Box>
  );
};

export default LoadingScreen;
