import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';

const BasicDetailsSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Shubham Kumar',
    bodyType: '',
    age: '23 Years',
    physicalStatus: 'Normal',
    height: '5 Ft 4 In / 163 Cms',
    weight: '',
    motherTongue: 'Hindi',
    maritalStatus: 'Never Married',
    eatingHabits: '',
    drinkingHabits: '',
    smokingHabits: ''
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
        marginBottom: '20px',
       marginTop:'15px'
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ color: '#333' }}>
          Basic Details
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
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="age"
                label="Age"
                variant="outlined"
                fullWidth
                value={formData.age}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="physicalStatus"
                label="Physical Status"
                variant="outlined"
                fullWidth
                value={formData.physicalStatus}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="height"
                label="Height"
                variant="outlined"
                fullWidth
                value={formData.height}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="motherTongue"
                label="Mother Tongue"
                variant="outlined"
                fullWidth
                value={formData.motherTongue}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="maritalStatus"
                label="Marital Status"
                variant="outlined"
                fullWidth
                value={formData.maritalStatus}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="bodyType"
                label="Body Type"
                variant="outlined"
                fullWidth
                value={formData.bodyType}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="weight"
                label="Weight"
                variant="outlined"
                fullWidth
                value={formData.weight}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="eatingHabits"
                label="Eating Habits"
                variant="outlined"
                fullWidth
                value={formData.eatingHabits}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="drinkingHabits"
                label="Drinking Habits"
                variant="outlined"
                fullWidth
                value={formData.drinkingHabits}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="smokingHabits"
                label="Smoking Habits"
                variant="outlined"
                fullWidth
                value={formData.smokingHabits}
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
              Profile created for : My Self
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Name: {formData.name}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Age: {formData.age}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Physical Status: {formData.physicalStatus}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Height: {formData.height}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Mother Tongue: {formData.motherTongue}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Marital Status: {formData.maritalStatus}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Body Type: {formData.bodyType}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Weight: {formData.weight}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Eating Habits: {formData.eatingHabits}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Drinking Habits: {formData.drinkingHabits}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Smoking Habits: {formData.smokingHabits}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default BasicDetailsSection;
