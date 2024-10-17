import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const ConfirmationPage = ({ editedImage }) => {
  // Function to create the share links
  const handleShare = (platform) => {
    const text = encodeURIComponent("By ACM student chapter");
    const hashtags = encodeURIComponent("#NFT");

    let url;

    switch (platform) {
      case 'instagram':
        alert("Please copy the link and paste it in Instagram to share.");
        break;

      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(editedImage)}&title=${text}&summary=${text}&source=ACM Student Chapter`;
        window.open(url, '_blank');
        break;

      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(editedImage)}&hashtags=${hashtags}`;
        window.open(url, '_blank');
        break;

      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: 2,
        minHeight: '100vh',
        display: 'flex', // Use flexbox for centering
        flexDirection: 'column',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        background: 'linear-gradient(to right, #000032, #001f4d)', 
      }}
    >
      <img src={editedImage} alt="Edited Preview" style={{ width: '80%', maxWidth: '600px', marginBottom: '20px' }} />
      <Box>
        <IconButton onClick={() => handleShare('instagram')}>
          <Instagram sx={{ color: 'white' }} />
        </IconButton>
        <IconButton onClick={() => handleShare('linkedin')}>
          <LinkedIn sx={{ color: 'white' }} />
        </IconButton>
        <IconButton onClick={() => handleShare('twitter')}>
          <Twitter sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ConfirmationPage;
