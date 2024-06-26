// AddCouplePage.js
import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Card, CardContent, CardMedia, Box } from '@mui/material';

const AddCouplePage = () => {
  const [coupleData, setCoupleData] = useState({
    name: '',
    occasion: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCoupleData({ ...coupleData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCoupleData({ ...coupleData, image: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., save to database)
    console.log('Submitted data:', coupleData);
    // Clear form fields after submission
    setCoupleData({ name: '', occasion: '', image: null });
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: 2 }}>
      <Card sx={{ maxWidth: 400, width: '100%', '@media (min-width:600px)': { maxWidth: 600 } }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Add Couple Images and Details
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              sx={{ height: 300, objectFit: 'cover', marginBottom: 2 }}
              image={coupleData.image || '/placeholder-image.jpg'}
              alt="Couple Image"
            />
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Couple Name"
              name="name"
              value={coupleData.name}
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Enter couple's name"
              sx={{ width: '100%', height: 80, marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Occasion"
              name="occasion"
              value={coupleData.occasion}
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Enter occasion"
              sx={{ width: '100%', height: 80, marginBottom: 2 }}
            />
            <input
              accept="image/*"
              type="file"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              id="upload-image"
            />
            <label htmlFor="upload-image">
              <Button
                variant="contained"
                component="span"
                color="primary"
                fullWidth
                sx={{ marginBottom: 2 }}
              >
                Upload Image
              </Button>
            </label>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddCouplePage;
