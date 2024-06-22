import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography, Container, Grid } from '@mui/material';
import axios from 'axios';
import swal from 'sweetalert';
import LoadingBar from '../LoadingBar';

const genders = ['Male', 'Female', 'Other'];
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
const casts = ['Cast1', 'Cast2', 'Cast3'];

const UpdateAdvancedBio = () => {
  const [bio, setBio] = useState({
    gender: '',
    city: '',
    dob: '',
    age: '',
    height: '',
    weight: '',
    fatherName: '',
    motherName: '',
    cast: '',
    subCast: '',
    address: '',
    hobbies:''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setBio({ ...bio, [e.target.name]: e.target.value });
  };
  let userId=JSON.parse(localStorage.getItem('userdata')).userId;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
        const response = await axios.post(`${process.env.REACT_APP_BaseURL}/app/addbioData`, {
            id: userId,
            gender: bio.gender,
            city: bio.city,
            dateOfBirth: bio.dob,
            age: bio.age,
            height: bio.height,
            weight: bio.weight,
            fatherName:bio.fatherName,
            motherName:bio.motherName,
            cast:bio.cast,
            subCast:bio.subCast,
            address:bio.address,
            hobbies:bio.hobbies
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
         console.log("Response from addvance bio",response)
        if (response.data) {
            swal('Done', response.data.message, 'success');
        }
    } catch (error) {
        if (error.response) {
            swal(error.response.data.message, error.response.data.message, "error");
        } else {
            swal('Error', 'Something went wrong. Please try again.', 'error');
        }
    } finally {
        setLoading(false);
    }
};

  return (
    <>
    {loading && <LoadingBar/>}
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Update Advanced Bio
        </Typography>
      </Box>
     
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mb: 2 },
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Gender"
              name="gender"
              value={bio.gender}
              onChange={handleChange}
              fullWidth
              
            >
              {genders.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="City"
              name="city"
              value={bio.city}
              onChange={handleChange}
              fullWidth
              
            >
              {cities.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              value={bio.dob}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Age"
              name="age"
              value={bio.age}
              onChange={handleChange}
              fullWidth

            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Height"
              name="height"
              value={bio.height}
              onChange={handleChange}
              fullWidth

            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Weight"
              name="weight"
              value={bio.weight}
              onChange={handleChange}
              fullWidth
              
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Father's Name"
              name="fatherName"
              value={bio.fatherName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Mother's Name"
              name="motherName"
              value={bio.motherName}
              onChange={handleChange}
              fullWidth
              
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Cast"
              name="cast"
              value={bio.cast}
              onChange={handleChange}
              fullWidth
              
            >
              {casts.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Sub Cast"
              name="subCast"
              value={bio.subCast}
              onChange={handleChange}
              fullWidth
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={bio.address}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Hobbies "
              name="hobbies"
              value={bio.hobbies}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ mt: 2 }}>
          Save Changes
        </Button>
      </Box>
    </Container>
    </>
  );
};

export default UpdateAdvancedBio;
