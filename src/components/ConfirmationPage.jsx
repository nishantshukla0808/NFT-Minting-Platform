import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const ConfirmationPage = ({ imageUrl }) => {
  const handleShare = (platform) => {
    const postText = encodeURIComponent("Created my first NFT through this platform!");
    const platformUrl = encodeURIComponent("https://yourplatformurl.com");
    const hashtags = encodeURIComponent("NFT #Blockchain");

    switch (platform) {
        case 'linkedin':
            const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${platformUrl}&title=${postText}&summary=${postText}&source=ACM Student Chapter`;
            window.open(linkedinUrl, '_blank');
            break;

        case 'twitter':
            const twitterUrl = `https://twitter.com/intent/tweet?text=${postText}&url=${platformUrl}&hashtags=${hashtags}`;
            window.open(twitterUrl, '_blank');
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
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        background: 'linear-gradient(to right, #000032, #001f4d)', 
      }}
    >
  
      <img
        src={imageUrl}
        alt="Edited Preview"
        style={{ width: '80%', maxWidth: '600px', marginBottom: '20px' }}
      />
      <Box>
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
