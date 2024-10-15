import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const ConfirmationPage = ({ editedImage, onShare }) => {
  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <img src={editedImage} alt="Edited Preview" style={{ width: '80%' }} />
      <Box sx={{ marginTop: 2 }}>
        <IconButton onClick={() => onShare('instagram')}>
          <Instagram />
        </IconButton>
        <IconButton onClick={() => onShare('linkedin')}>
          <LinkedIn />
        </IconButton>
        <IconButton onClick={() => onShare('twitter')}>
          <Twitter />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ConfirmationPage;
