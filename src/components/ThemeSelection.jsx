import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const themes = [
  {
    name: "Fire",
    image: "fire-theme.jpg",
    description: "Fire represents passion, energy, and transformation. It is associated with courage and determination, bringing warmth and light to dark spaces. It signifies a fierce drive and a spark that ignites creativity and innovation. Fire is linked with purification and can transform, destroy, and renew. Those who choose the fire theme often embody an ambitious, daring spirit.",
    background: "linear-gradient(135deg, #ff512f, #dd2476)",
  },
  {
    name: "Water",
    image: "water-theme.jpg",
    description: "Water symbolizes life, renewal, and emotions. It is connected to peace, healing, and intuition, representing a flow that is adaptable and calming. Water nourishes, cleanses, and is essential for survival. It can be gentle like a stream or powerful like an ocean. People attracted to the water theme are often calm, reflective, and empathetic, embracing change with grace.",
    background: "linear-gradient(135deg, #36d1dc, #5b86e5)",
  },
  {
    name: "Air",
    image: "air-theme.jpg",
    description: "Air represents intellect, communication, and the breath of life. It is associated with freedom, inspiration, and the power of ideas. Air circulates and connects, clearing the path for new perspectives. It carries whispers of knowledge and fosters curiosity. The air theme suits those who are innovative, thoughtful, and expressive.",
    background: "linear-gradient(135deg, #b2fefa, #0ed2f7)",
  },
  {
    name: "Earth",
    image: "earth-theme.jpg",
    description: "Earth symbolizes stability, growth, and nature. It represents strength, nourishment, and the cycle of life, rooted in reality and grounded in perseverance. The earth is home and provides a foundation for all living things. It is for those who value endurance, practicality, and a connection to nature's beauty and resilience.",
    background: "linear-gradient(135deg, #7b920a, #add100)",
  },
  {
    name: "Space",
    image: "space-theme.jpg",
    description: "Space embodies the infinite, the unknown, and the limitless. It represents exploration, curiosity, and the mysteries of the cosmos. Space invites wonder and challenges us to look beyond the familiar. It symbolizes the vastness of possibilities and encourages the pursuit of dreams. Ideal for visionaries and explorers of the mind.",
    background: "linear-gradient(135deg, #2b5876, #4e4376)",
  },
];

const ThemeSelection = ({ onSelectTheme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + themes.length) % themes.length);
  };

  const currentTheme = themes[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #000428, #004e92)',
        position: 'relative',
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#fff',
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <Card
        sx={{
          width: { xs: '90%', sm: '75%', md: '60%' }, // Increased width
          height: 'auto', // Auto height for better content fit
          textAlign: 'center',
          background: currentTheme.background,
          color: '#fff',
          borderRadius: 4,
          padding: 4, // Increased padding
          boxShadow: '0 6px 15px rgba(0,0,0,0.5)',
          position: 'relative',
        }}
        onClick={() => onSelectTheme(currentTheme.name)}
      >
        <CardMedia
          component="img"
          height="250" // Increased height
          image={currentTheme.image}
          alt={`${currentTheme.name} theme`}
          sx={{ borderRadius: '4px' }}
        />
        <CardContent>
          <Typography 
            variant="h4" // Increased font size for theme name
            fontFamily="'Dancing Script', cursive"
            sx={{ mb: 2 }} // Margin bottom
          >
            {currentTheme.name}
          </Typography>
          <Typography 
            variant="body1" // Increased font size for description
            sx={{ 
              marginTop: 1, 
              fontSize: '1rem', // Increased font size
              lineHeight: 1.5,
              textAlign: 'justify', // Justify text
            }}
          >
            {currentTheme.description}
          </Typography>
        </CardContent>
      </Card>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#fff',
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default ThemeSelection;
