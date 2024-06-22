import React, { useState, useEffect } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

const EditDialog = ({ open, onClose, onSave, currentValues }) => {
    const [newValues, setNewValues] = useState(currentValues);
     
    useEffect(() =>{
        setNewValues(currentValues);
    },[currentValues, open]); 
     useEffect(()=>{
      console.log("newValues",newValues);
     },[currentValues])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        onSave(newValues);

        console.log("Api calling ",newValues);
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edit Preferences</DialogTitle>
            <DialogContent>
                {currentValues && Object.entries(currentValues).map(([key, value]) => (
                    <Box key={key} marginBottom="16px">
                        <Typography variant="body1">{key}</Typography>
                       <input
                            name={key}
                            value={newValues ?  newValues[key] : ''}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </Box>
                ))}
            </DialogContent>
             <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditDialog;
