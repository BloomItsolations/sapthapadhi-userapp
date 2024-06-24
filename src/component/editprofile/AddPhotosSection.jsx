import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const AddPhotosSection = ({setOpenPopup}) => {
  return (
    <Box
      id="right_TrustBadge"
      sx={{
        width: '250px',
        backgroundColor: '#ffffff',
        border: '1px solid #cccccc',
        display: 'block',
        padding: '10px'
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ padding: '10px' }}>
        <Box sx={{ textAlign: 'center', width: '75px', padding: '10px 0' }}>
          <img src="https://imgs.bharatmatrimony.com/bmimgs/syspop-imgs/add-photo-edit-avatar.png" width="40" alt="Add Photos" />
        </Box>
        <Box sx={{ textAlign: 'left', width: '175px', paddingLeft: '10px' }} >
        <Typography variant="h6" component="div" sx={{ lineHeight: '1.2', paddingTop: '5px' }}>
            Add Photos
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: '1.2' }}>
            Photos are the first <br />things members look for <br />in a profile.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', paddingTop: '10px' }}>
        <Button 
          variant="contained"
          color="primary"
          onClick={() => setOpenPopup(true)}
         
          sx={{
            backgroundColor: '#007bff',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Add Photos Now <span>►</span>
        </Button>
      </Box>
    </Box>
  );
};

export default AddPhotosSection;
