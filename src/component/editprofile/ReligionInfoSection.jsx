import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import axios from 'axios';

const ReligionInfoSection = ({ user, userDetails, userId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    religion: '',
    caste: '',
    gothra: '',
    star: '',
    dosh: '',
    timeOfBirth: '',
    placeOfBirth: '',
  });

  useEffect(() => {
    if (userDetails) {
      setFormData({
        religion: userDetails.religion || '',
        caste: userDetails.caste ,
        gothra: userDetails.gothra || '',
        star: userDetails.star ,
        dosh: userDetails.haveDosh || 'No',
        timeOfBirth: userDetails.timeOfBirth || '',
        placeOfBirth: userDetails.placeOfBirth || ''
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
      let formdata=new FormData();
      formdata.append('userId',userId);
      formdata.append('religion',formData.religion);
      formdata.append('caste',userDetails.caste);
      formdata.append('subCaste',userDetails.subCaste);
      formdata.append('gothra',formData.gothra);
      formdata.append('star',userDetails.star);
      formdata.append('raasiMoonSign',userDetails.raasiMoonSign);
      formdata.append('haveDosh',formData.dosh);
      formdata.append('timeOfBirth',formData.timeOfBirth);
      formdata.append('placeOfBirth',formData.placeOfBirth);
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
        marginTop: '10px'
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ color: '#333' }}>
          Religion Information
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
                name="religion"
                label="Religion"
                variant="outlined"
                fullWidth
                value={formData.religion}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="caste"
                label="Caste "
                variant="outlined"
                fullWidth
                value={formData.caste}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="gothra"
                label="Gothra(m)"
                variant="outlined"
                fullWidth
                value={formData.gothra}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="star"
                label="Raasi"
                variant="outlined"
                fullWidth
                value={formData.star}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="dosh"
                label="Dosh"
                variant="outlined"
                fullWidth
                value={formData.dosh}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="timeOfBirth"
                label="Time of Birth"
                variant="outlined"
                fullWidth
                value={formData.timeOfBirth}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="placeOfBirth"
                label="Place of Birth"
                variant="outlined"
                fullWidth
                value={formData.placeOfBirth}
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
              Religion: {formData.religion}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Caste : {formData.caste}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Gothra(m): {formData.gothra}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Star / Raasi: {formData.starRaasi}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Dosh: {formData.dosh}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Time of Birth: {formData.timeOfBirth}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Place of Birth: {formData.placeOfBirth}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ReligionInfoSection;
