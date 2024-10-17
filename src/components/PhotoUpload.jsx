import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const PhotoUpload = ({ onUploadComplete }) => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!file) {
      setError('Please upload a file.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email.');
      return;
    }

    setError(''); 
    onUploadComplete(file, email);
  };

  return (
    <Box
      sx={{
        padding: 2,
        background: 'linear-gradient(to right, #000032, #001f4d)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        fullWidth
        sx={{ marginBottom: 2, background: 'white' }}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2, background: 'white' }}
        error={!!error} 
        helperText={error && error} 
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default PhotoUpload;
