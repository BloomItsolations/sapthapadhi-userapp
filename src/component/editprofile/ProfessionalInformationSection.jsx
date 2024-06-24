import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import axios from 'axios';

const ProfessionalInformationSection = ({ userDetails, userId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    education: '',
    educationDetail: '',
    college: 'Not Specified',
    employedIn: '',
    occupation: '',
    occupationDetail: 'Not Specified',
    organization: 'Not Specified',
    annualIncome: ''
  });

  useEffect(() => {
    if (userDetails) {
      setFormData({
        education: userDetails.HighestEducation || '',
        educationDetail: userDetails.educationInDetail || 'Not Specified',
        college: userDetails.College || 'Not Specified',
        employedIn: userDetails.EmployedIn || 'Not Specified',
        occupation: userDetails.Occupation || 'Not Specified',
        occupationDetail: userDetails.OccupationInDetail || 'Not Specified',
        organization: userDetails.Organization || 'Not Specified',
        annualIncome: userDetails.AnnualIncome || ''
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
      formdata.append('HighestEducation', formData.education);
      formdata.append('educationInDetail', formData.educationDetail);
      formdata.append('College', formData.college);
      formdata.append('EmployedIn', formData.employedIn);
      formdata.append('Occupation', formData.occupation);
      formdata.append('OccupationInDetail', formData.occupationDetail);
      formdata.append('Organization', formData.organization);
      formdata.append('AnnualIncome', formData.annualIncome);
  
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
          Professional Information
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
                name="education"
                label="Education"
                variant="outlined"
                fullWidth
                value={formData.education}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="educationDetail"
                label="Education in Detail"
                variant="outlined"
                fullWidth
                value={formData.educationDetail}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="college"
                label="College / Institution"
                variant="outlined"
                fullWidth
                value={formData.college}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="employedIn"
                label="Employed in"
                variant="outlined"
                fullWidth
                value={formData.employedIn}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="occupation"
                label="Occupation"
                variant="outlined"
                fullWidth
                value={formData.occupation}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="occupationDetail"
                label="Occupation in Detail"
                variant="outlined"
                fullWidth
                value={formData.occupationDetail}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="organization"
                label="Organization"
                variant="outlined"
                fullWidth
                value={formData.organization}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="annualIncome"
                label="Annual Income"
                variant="outlined"
                fullWidth
                value={formData.annualIncome}
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
              Education: {formData.education}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Education in Detail: {formData.educationDetail}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              College / Institution: {formData.college}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Employed in: {formData.employedIn}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Occupation: {formData.occupation}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Occupation in Detail: {formData.occupationDetail}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Organization: {formData.organization}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Annual Income: {formData.annualIncome}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProfessionalInformationSection;
