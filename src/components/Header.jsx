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
          flex: 1,
          textAlign: 'left',
          fontWeight: '600', // Increase font weight
          fontSize: '2.5rem', // Adjust font size for a logo-like appearance
          fontFamily: '"Kumar One", serif', // Directly apply the Kumar One font
        }}
      >
        Mini Minter 
      </Typography>
    </Box>
  );
};

export default Header;
