import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';

const FamilyDetailsSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    familyValues: 'Traditional',
    fathersOccupation: 'Not Specified',
    familyType: 'Nuclear',
    mothersOccupation: 'Not Specified',
    familyStatus: 'Upper middle class',
    numberOfBrothers: 'Add No of Brothers',
    numberOfSisters: 'Add No of Sisters',
    familyLocation: 'Not Specified'
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
          Family Details
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
                name="familyValues"
                label="Family Values"
                variant="outlined"
                fullWidth
                value={formData.familyValues}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="fathersOccupation"
                label="Father's Occupation"
                variant="outlined"
                fullWidth
                value={formData.fathersOccupation}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="familyType"
                label="Family Type"
                variant="outlined"
                fullWidth
                value={formData.familyType}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="mothersOccupation"
                label="Mother's Occupation"
                variant="outlined"
                fullWidth
                value={formData.mothersOccupation}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="familyStatus"
                label="Family Status"
                variant="outlined"
                fullWidth
                value={formData.familyStatus}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="numberOfBrothers"
                label="No of Brother(s)"
                variant="outlined"
                fullWidth
                value={formData.numberOfBrothers}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="numberOfSisters"
                label="No of Sister(s)"
                variant="outlined"
                fullWidth
                value={formData.numberOfSisters}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="familyLocation"
                label="Family Location"
                variant="outlined"
                fullWidth
                value={formData.familyLocation}
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
              Family Values: {formData.familyValues}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Father's Occupation: {formData.fathersOccupation}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Family Type: {formData.familyType}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Mother's Occupation: {formData.mothersOccupation}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Family Status: {formData.familyStatus}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              No of Brother(s): {formData.numberOfBrothers}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              No of Sister(s): {formData.numberOfSisters}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Family Location: {formData.familyLocation}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default FamilyDetailsSection;
