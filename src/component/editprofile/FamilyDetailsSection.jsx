import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import axios from 'axios';

const FamilyDetailsSection = ({ userDetails, userId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    familyValues: '',
    fathersOccupation: 'Not Specified',
    familyType: '',
    mothersOccupation: 'Not Specified',
    familyStatus: '',
    numberOfBrothers: 'Add No of Brothers',
    numberOfSisters: 'Add No of Sisters',
    familyLocation: 'Not Specified'
  });

  useEffect(() => {
    // Populate formData with userDetails on component mount
    if (userDetails) {
      setFormData({
        familyValues: userDetails.FamilyValue || 'Traditional',
        fathersOccupation: userDetails.FatherOccupation || 'Not Specified',
        familyType: userDetails.FamilyType || 'Nuclear',
        mothersOccupation: userDetails.MothersOccupation || 'Not Specified',
        familyStatus: userDetails.FamilyStatus || 'Upper middle class',
        numberOfBrothers: userDetails.NoofBrothers || 'Add No of Brothers',
        numberOfSisters: userDetails.NoofSisters || 'Add No of Sisters',
        familyLocation: userDetails.FamilyLocation || 'Not Specified'
      });
    }
  }, [userDetails]);

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

  const handleSave = async () => {
    try {
      const formdata = new FormData();
      formdata.append('userId', userId);
      formdata.append('FamilyValue', formData.familyValues);
      formdata.append('FatherOccupation', formData.fathersOccupation);
      formdata.append('FamilyType', formData.familyType);
      formdata.append('MothersOccupation', formData.mothersOccupation);
      formdata.append('FamilyStatus', formData.familyStatus);
      formdata.append('NoofBrothers', formData.numberOfBrothers);
      formdata.append('NoofSisters', formData.numberOfSisters);
      formdata.append('FamilyLocation', formData.familyLocation);
  
      const response = await axios.post(
        `${process.env.REACT_APP_BaseURL}/app/updateUserProfile`,
        formdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
  
      setIsEditing(false); 
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  
  return (
    <Box
      className="boxbtmline"
      sx={{
        border: '1px solid #dadada',
        backgroundColor: '#ffffff',
        padding: '20px',
        marginBottom: '20px',
        marginTop: '15px'
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
