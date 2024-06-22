import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Grid, CircularProgress } from '@mui/material';
import swal from 'sweetalert';
import axios from 'axios';
import LoadingBar from '../LoadingBar';

const UpdateSocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState({
    whatsapp: '',
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    linkedin: '',
  });

  const [loading, setLoading] = useState(false);
 
  let userId=JSON.parse(localStorage.getItem('userdata'))?.userId;
  const handleChange = (e) => {
    setSocialMedia({ ...socialMedia, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
        const response = await axios.post(`${process.env.REACT_APP_BaseURL}/app/addbioData`, {
            id: userId,
            whatsapp:socialMedia.whatsapp,
            facebook:socialMedia.facebook,
            instagram:socialMedia.instagram,
            twitter:socialMedia.twitter,
            youtube:socialMedia.youtube,
            LinkedIn:socialMedia.linkedin,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.data) {
            swal('Done', response.data.message, 'success');
        }
    } catch (error) {
        if (error.response) {
            swal(error.response.data.message, error.response.data.message, "error");
        } else {
            swal('Error', 'Something went wrong. Please try again.', 'error');
        }
    } finally {
        setLoading(false);
    }
};


  return (
   <>
    {loading && <LoadingBar/>}
      <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Update Social Media
        </Typography>
      </Box>
      
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mb: 2 },
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="WhatsApp"
              name="whatsapp"
              value={socialMedia.whatsapp}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Facebook"
              name="facebook"
              value={socialMedia.facebook}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Instagram"
              name="instagram"
              value={socialMedia.instagram}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Twitter"
              name="twitter"
              value={socialMedia.twitter}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="YouTube"
              name="youtube"
              value={socialMedia.youtube}
              onChange={handleChange}
              fullWidth
              
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="LinkedIn"
              name="linkedin"
              value={socialMedia.linkedin}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ mt: 2 }}>
          Save Changes
        </Button>
      </Box>
    </Container>
   </>
  );
};

export default UpdateSocialMedia;
