import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

import FireTemplate from '../assets/Fire.png';
import AirTemplate from '../assets/Air.png';
import WaterTemplate from '../assets/Water.png';
import SpaceTemplate from '../assets/Space.png';
import EarthTemplate from '../assets/Earth.png';
import axios from "axios";
import LoadingScreen from './LoadingScreen';
import ConfirmationPage from "./ConfirmationPage";

const StyledButton = styled(Button)(() => ({
  background: 'linear-gradient(135deg, #36d1dc, #5b86e5)',
  color: '#fff',
  fontWeight: 'bold',
  '&:hover': {
    background: 'linear-gradient(135deg, #5b86e5, #36d1dc)',
  },
}));

const PhotoUpload = ({ selectedTheme }) => {
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [photoError, setPhotoError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [finalBase64, setFinalBase64] = useState('');
  const canvasRef = useRef(null);
  const [templateImage, setTemplateImage] = useState(null);
  const [finalImgUrl,setFinalImgUrl] = useState('');
  // console.log(selectedTheme);
 
  const templateCoords = {
    x1: 254, y1: 254,
    x2: 824, y2: 824
  };

  useEffect(() => {
    const loadTemplateImage = () => {
      let imgSrc;

      switch (selectedTheme) {
        case 'Fire':
          imgSrc = FireTemplate;
          break;
        case 'Air':
          imgSrc = AirTemplate;
          break;
        case 'Water':
          imgSrc = WaterTemplate;
          break;
        case 'Space':
          imgSrc = SpaceTemplate;
          break;
        case 'Earth':
          imgSrc = EarthTemplate;
          break;
        default:
          console.error('Invalid theme selected');
          return;
      }

      const img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        setTemplateImage(img);
        drawTemplate(img);
      };
      img.onerror = () => {
        console.error("Error loading template image.");
      };
    };

    loadTemplateImage();
  }, [selectedTheme]);

  const drawTemplate = (templateImage) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = templateImage.width;
      canvas.height = templateImage.height;
      ctx.drawImage(templateImage, 0, 0);
    } else {
      console.error("Canvas reference is null.");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const validFormats = ['image/jpeg', 'image/jpg', 'image/png'];

    if (file) {
      if (validFormats.includes(file.type)) {
        setPhoto(file);
        setPhotoError(''); 
      } else {
        setPhotoError('Please upload a valid image (jpg, jpeg, png).');
        setPhoto(null); 
      }
    }
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Please provide a valid email address.');
      return; 
    }

    if (photo && templateImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64String = e.target.result;
        const img = new Image();
        
        img.onload = () => {
          const canvas = canvasRef.current;

          if (!canvas) {
            console.error("Canvas reference is null.");
            return;
          }

          const ctx = canvas.getContext('2d');

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(templateImage, 0, 0);
         
          ctx.drawImage(img, templateCoords.x1, templateCoords.y1, 
                        templateCoords.x2 - templateCoords.x1, 
                        templateCoords.y2 - templateCoords.y1);
          
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7); 
          setFinalBase64(compressedBase64);
          imageToUrl(compressedBase64);
        };
        
        img.src = base64String;
      };
      
      reader.readAsDataURL(photo);
    } else {
      alert('Please provide a valid email and photo.');
    }
  };

  const imageToUrl = async (base64Data) => {
    console.log("Compressed Base64 Data length: ", base64Data);
    setLoading(true);

    try {
      const response = await axios.post('https://nft-mint-back.vercel.app/api/v1/image/geturl', {
        base64Data: base64Data,
      });
  
      // console.log("Response from first API: ", response.data);
      
      const { imageUrl } = response.data;
      setFinalImgUrl(imageUrl);
      const secondResponse = await axios.post('https://nft-mint-back.vercel.app/api/v1/mint/NFT', {
        imageUrl: imageUrl,
        recipientEmail: email
      });
      
      // console.log("Response from second API: ", secondResponse.data);
      
      setShowConfirmation(true);
    } catch (error) {
      console.error("Error making the API calls: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingScreen />; 
  }

  if (showConfirmation) {
    return <ConfirmationPage imageUrl={finalImgUrl} />;
  }

  return (
    <Box
      sx={{
        padding: 4,
        background: 'linear-gradient(to right, #001f4d, #003b73)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ textAlign: 'center', marginBottom: 3, color: 'white', fontFamily: 'Montserrat, sans-serif', }}
      >
        Upload Photo & Provide Email
      </Typography>

      <TextField
        type="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        required
        error={!!emailError}
        helperText={emailError}
        sx={{
          marginBottom: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", 
            },
            "&:hover fieldset": {
              borderColor: "black", 
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", 
            },
          },
          "& .MuiInputLabel-root": {
            color: "white", 
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white", 
          },
          "& .MuiFormHelperText-root": {
            color: "white", 
          },
          "& .MuiInputBase-input": {
            color: "white", 
          },
        }}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        style={{ display: 'none' }}
        id="photo-upload-input"
      />
      <label htmlFor="photo-upload-input">
        <StyledButton component="span" variant="contained">
          Choose Photo
        </StyledButton>
      </label>

      {photo && (
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1,color:"white" }}>
          {photo.name}
        </Typography>
      )}
      {photoError && (
        <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
          {photoError}
        </Typography>
      )}

      <StyledButton onClick={handleSubmit} variant="contained" sx={{ marginTop: 3 }}>
        Submit
      </StyledButton>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </Box>
  );
};

export default PhotoUpload;
