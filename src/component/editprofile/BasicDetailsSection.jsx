import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import axios from 'axios';

const BasicDetailsSection = ({user,userDetails, userId}) => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    bodyType: '',
    age: '',
    physicalStatus: '',
    height: '',
    weight: '',
    motherTongue: '',
    maritalStatus: '',
    eatingHabits: '',
    drinkingHabits: '',
    smokingHabits: ''
  });
  useEffect(()=>{
      setFormData({...formData,firstName:user.firstName,lastName:user.lastName,bodyType:userDetails.bodyType,age:userDetails.age,physicalStatus:userDetails.physicalStatus,height:userDetails.height,weight:userDetails.weight,motherTongue:userDetails.motherTongue,maritalStatus:userDetails.maritalStatus,eatingHabits:userDetails.eatingHabits,drinkingHabits:userDetails.drinkingHabits,smokingHabits:userDetails.smokingHabits})
  },[userDetails])
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
      // Create FormData object
      const formdata = new FormData();
      formdata.append('userId', userId);
      formdata.append('firstName', formData.firstName);
      formdata.append('lastName', formData.lastName);
      formdata.append('bodyType', formData.bodyType);
      formdata.append('age', formData.age);
      formdata.append('physicalStatus', formData.physicalStatus);
      formdata.append('height', formData.height);
      formdata.append('weight', formData.weight);
      formdata.append('motherTongue', formData.motherTongue);
      formdata.append('maritalStatus', formData.maritalStatus);
      formdata.append('eatingHabits', formData.eatingHabits);
      formdata.append('drinkingHabits', formData.drinkingHabits);
      formdata.append('smokingHabits', formData.smokingHabits);

      await axios.post(`${process.env.REACT_APP_BaseURL}/app/updateUserProfile`, formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Exit edit mode after successful submission
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
                name="firstName"
                label="firstName"
                variant="outlined"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                name="lastName"
                label="lastName"
                variant="outlined"
                fullWidth
                value={formData.lastName}
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
              Profile created for : {userDetails.profileCreatedFor ? userDetails.profileCreatedFor : "My Self"}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              First Name: {formData.firstName}
            </Typography>
            <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
              Last Name: {formData.lastName}
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
