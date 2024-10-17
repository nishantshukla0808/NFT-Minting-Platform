// src/components/Header.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        padding: 2,
        background: 'linear-gradient(to right, #000032, #001f4d)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '2px solid white',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Montserrat, sans-serif', 
          flex: 1,
          textAlign: 'left',
          fontWeight: '600', 
        }}
      >
        Minter
      </Typography>
    </Box>
  );
};

export default Header;
