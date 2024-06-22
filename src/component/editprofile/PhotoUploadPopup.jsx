import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const PhotoUploadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddPhoto = () => {
    setIsOpen(true);
   
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#FFF',
            width: "800px",
            border: '1px solid #d2d2d2',
            borderRadius: "8px",
            padding: '20px 30px',
            zIndex: 9999,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#50ad2b', textAlign: 'center', marginBottom: 2 }}>
            Add Your Photo
          </Typography>

          <Box sx={{ textAlign: 'center', paddingBottom: 2 }}>
            <img
              src="https://imgs.bharatmatrimony.com/bmimgs/inter-phadd-male-icon.png"
              width={124}
              height={128}
              alt="Add Photos Now"
              style={{ display: 'inline-block' }}
            />
          </Box>

          <Typography variant="body1" sx={{ textAlign: 'center', paddingBottom: 2 }}>
            Within 15 MB of size, jpg / gif / png / bmp
          </Typography>

          <Button
            variant="contained"
            sx={{ marginTop: 2, backgroundColor: '#ff7805', borderRadius: '6px', fontSize: '16px', '&:hover': { backgroundColor: '#d46302' } }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      )}

      {isOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            zIndex: 9998,
          }}
          onClick={handleClose}
        />
      )}

      <Button
        variant="contained"
        sx={{ backgroundColor: '#ff7805', borderRadius: '6px', fontSize: '16px', '&:hover': { backgroundColor: '#d46302' } }}
        onClick={handleAddPhoto}
      >
        Add Photo
      </Button>
    </>
  );
};

export default PhotoUploadPopup;
