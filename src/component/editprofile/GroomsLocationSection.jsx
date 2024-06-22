import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';

const GroomsLocationSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    country: 'India',
    city: 'Purnia',
    state: 'Bihar',
    citizenship: 'India',
    ancestralOrigin: 'Bihar'
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Logic to save the updated form data
    console.log('Form data saved:', formData);
    setIsEditing(false); // Close edit mode after saving
  };

  return (
    <Box
      className="boxbtmline"
      sx={{
        border: '1px solid #dadada',
        backgroundColor: '#ffffff',
        padding: '20px',
        marginBottom: '20px'
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ color: '#333' }}>
          Groom's Location
        </Typography>
        <Button
          onClick={handleEditToggle}
          sx={{
            cursor: 'pointer',
            color: '#ffffff',
            backgroundColor: '#3a90d2',
            backgroundImage: 'url(https://imgs.bharatmatrimony.com/bmimgs/edit-prof-edit-icon.gif)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left 3px center',
            padding: '3px 8px 3px 16px',
            display: 'inline-block'
          }}
        >
          {isEditing ? 'Close' : 'Edit'}
        </Button>
      </Box>
      {isEditing ? (
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="country"
                label="Country"
                variant="outlined"
                fullWidth
                value={formData.country}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="city"
                label="City"
                variant="outlined"
                fullWidth
                value={formData.city}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="state"
                label="State"
                variant="outlined"
                fullWidth
                value={formData.state}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="citizenship"
                label="Citizenship"
                variant="outlined"
                fullWidth
                value={formData.citizenship}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="ancestralOrigin"
                label="Ancestral Origin"
                variant="outlined"
                fullWidth
                value={formData.ancestralOrigin}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: '#f58320',
                borderRadius: '5px',
                padding: '6px 10px',
                fontSize: '14px',
                marginRight: '10px'
              }}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: '#fff',
                borderRadius: '5px',
                padding: '6px 10px',
                fontSize: '14px',
                color: '#777',
                border: '1px solid #e4e4e4'
              }}
              onClick={handleEditToggle}
            >
              Cancel
            </Button>
          </Box>
        </form>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Country: {formData.country}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              City: {formData.city}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              State: {formData.state}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Citizenship: {formData.citizenship}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Ancestral Origin: {formData.ancestralOrigin}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default GroomsLocationSection;
