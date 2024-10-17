import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const PhotoUpload = ({ onUploadComplete }) => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    // Simulate upload process
    onUploadComplete(file, email);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default PhotoUpload;
