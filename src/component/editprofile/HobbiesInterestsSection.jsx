import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import axios from 'axios';

const HobbiesInterestsSection = ({ userDetails, userId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [hobbiesInterests, setHobbiesInterests] = useState('Not Specified');

  useEffect(() => {
    if (userDetails) {
      setHobbiesInterests(userDetails.Hobbies || 'Not Specified');
    }
  }, [userDetails]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setHobbiesInterests(e.target.value);
  };

  const handleSave = async () => {
    try {
      let formdata=new FormData();
      formdata.append('userId',userId);
      formdata.append('Hobbies',hobbiesInterests);
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
      console.error('Error updating hobbies and interests:', error);
    }
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
          Hobbies and Interests
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
          <TextField
            name="hobbiesInterests"
            label="Hobbies and Interests"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={hobbiesInterests}
            onChange={handleChange}
            sx={{ marginBottom: '20px' }}
          />
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
        <Typography variant="body1" sx={{ border: '1px solid #ccc', padding: '8px' }}>
          Hobbies and Interests: {hobbiesInterests}
        </Typography>
      )}
    </Box>
  );
};

export default HobbiesInterestsSection;
