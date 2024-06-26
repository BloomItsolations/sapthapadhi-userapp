// AdminBannerUploadPage.js
import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AdminBannerUploadPage = () => {
  const [clientBanners, setClientBanners] = useState([]);

  const handleBannerChange = (e) => {
    const files = Array.from(e.target.files);
    const uploadedBanners = files.map(file => URL.createObjectURL(file));
    setClientBanners([...clientBanners, ...uploadedBanners]);
  };

  const handleBannerUpload = () => {
    console.log('Uploaded Client Banners:', clientBanners);
    setClientBanners([]);
  };

  const handleRemoveBanner = (index) => {
    const updatedBanners = [...clientBanners];
    updatedBanners.splice(index, 1);
    setClientBanners(updatedBanners);
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: 2 }}>
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Admin Banner Upload for Clients
          </Typography>
          <Grid container spacing={2}>
            {clientBanners.map((banner, index) => (
              <Grid key={index} item xs={12} sm={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={banner}
                    alt={`Client Banner ${index + 1}`}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <IconButton
                      color="secondary"
                      onClick={() => handleRemoveBanner(index)}
                      sx={{ position: 'absolute', top: 0, right: 0 }}
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
                <input
                  accept="image/*"
                  type="file"
                  onChange={handleBannerChange}
                  multiple
                  style={{ display: 'none' }}
                  id="upload-banners"
                />
                <label htmlFor="upload-banners">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    fullWidth
                    startIcon={<AddCircleOutlineIcon />}
                    sx={{ height: '100%' }}
                  >
                    Add Banner
                  </Button>
                </label>
              </Box>
            </Grid>
          </Grid>
          {clientBanners.length > 0 && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleBannerUpload}
              sx={{ mt: 2 }}
            >
              Upload Banners
            </Button>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default AdminBannerUploadPage;
