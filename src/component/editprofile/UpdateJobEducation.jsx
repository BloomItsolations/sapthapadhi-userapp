import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography, Container, Grid } from '@mui/material';
import axios from 'axios';
import swal from 'sweetalert';
import LoadingBar from '../LoadingBar';

const jobTypes = ['Full-time', 'Part-time', 'Internship', 'Freelance', 'Contract'];

const UpdateJobEducation = () => {
  const [jobEducation, setJobEducation] = useState({
    jobType: '',
    companyName: '',
    salary: '',
    jobExperience: '',
    school: '',
    college: '',
    degree: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setJobEducation({ ...jobEducation, [e.target.name]: e.target.value });
  };
   let userId=JSON.parse(localStorage.getItem('userdata')).userId;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const response = await axios.post(`${process.env.REACT_APP_BaseURL}/app/addbioData`, {
            id: userId,
            jobType: jobEducation.jobType,
            companyName: jobEducation.companyName,
            salary: jobEducation.salary,
            jobTotalExperience: jobEducation.jobExperience,
            school: jobEducation.school,
            college: jobEducation.college,
            degree:jobEducation.degree
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
         console.log("Response from Update Jon Education",response)
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
          Update Job & Education
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
          <Grid item xs={12}>
            <TextField
              select
              label="Job Type"
              name="jobType"
              value={jobEducation.jobType}
              onChange={handleChange}
              fullWidth
            >
              {jobTypes.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Company Name"
              name="companyName"
              value={jobEducation.companyName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Salary"
              name="salary"
              value={jobEducation.salary}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Job Experience"
              name="jobExperience"
              value={jobEducation.jobExperience}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="School"
              name="school"
              value={jobEducation.school}
              onChange={handleChange}
              fullWidth
              
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="College"
              name="college"
              value={jobEducation.college}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Degree"
              name="degree"
              value={jobEducation.degree}
              onChange={handleChange}
              fullWidth
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

export default UpdateJobEducation;
