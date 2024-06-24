import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import axios from 'axios';

const OwnWordsSection = ({ userId, userDetails }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (userDetails) {
      setDescription(userDetails.InmyownwordsClose || '');
    }
  }, [userDetails]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSave = async () => {
    try {
      // Create FormData object
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('InmyownwordsClose', description);

      // Perform POST request with FormData
      const response = await axios.post(
        `${process.env.REACT_APP_BaseURL}/app/updateUserProfile`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      setIsEditing(false);
    } catch (error) {
      console.error('Error updating description:', error);
    }
  };

  return (
    <Box
      id="ownWords"
      sx={{
        border: '1px solid #dadada',
        backgroundColor: '#ffffff',
        padding: '20px',
        marginTop: '10px'
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" sx={{ color: '#333' }}>
          In my own words
        </Typography>
        <Button
          onClick={handleEditToggle}
          sx={{
            cursor: 'pointer',
            color: '#ffffff',
            backgroundColor: '#3a90d2',
            backgroundImage:
              'url(https://imgs.bharatmatrimony.com/bmimgs/edit-prof-edit-icon.gif)',
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
        <Box>
          <TextField
            id="DESCRIPTION1"
            name="DESCRIPTION"
            label="Description"
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            value={description}
            onChange={handleChange}
            sx={{
              margin: '10px 0',
              background: '#FFF',
              border: '1px solid #cccccc'
            }}
          />
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ paddingTop: '10px' }}
          >
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
        </Box>
      ) : (
        <Typography variant="body1" sx={{ padding: '20px 0', wordWrap: 'break-word' }}>
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default OwnWordsSection;
