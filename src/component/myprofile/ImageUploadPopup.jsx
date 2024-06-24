import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon from Material-UI

const ImageUploadPopup = ({ open, onClose, onUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleRemoveFile = (fileToRemove) => {
    const updatedFiles = selectedFiles.filter((file) => file !== fileToRemove);
    setSelectedFiles(updatedFiles);
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      onUpload(selectedFiles);
      setSelectedFiles([]); // Reset selected files
      onClose(); // Close the dialog after upload
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>
        <Typography variant="h6">Upload Profile Pictures</Typography>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <input
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={handleFileChange}
          multiple
          style={{ display: 'none' }}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="outlined"
            component="span"
            startIcon={<PhotoCameraIcon />}
            fullWidth
            sx={{ textTransform: 'none', mt: 2 }}
          >
            Select Images
          </Button>
        </label>
        {selectedFiles.length > 0 && (
          <div>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Selected files:
            </Typography>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>
                  {file.name}{' '}
                  <IconButton
                    onClick={() => handleRemoveFile(file)}
                    size="small"
                    sx={{ ml: 1 }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button onClick={handleUpload} color="primary" variant="contained">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageUploadPopup;
