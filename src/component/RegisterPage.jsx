import React, { useState } from 'react';
import { Container, Box, TextField, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Select, MenuItem, Button, Checkbox, FormGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import LoadingBar from './LoadingBar';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const PREFIX = 'RegisterPage';
const classes = {
  root: `${PREFIX}-root`,
  formContainer: `${PREFIX}-formContainer`,
  form: `${PREFIX}-form`,
  input: `${PREFIX}-input`,
  submitButton: `${PREFIX}-submitButton`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    backgroundImage: "url('/images/register.svg')",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  [`& .${classes.formContainer}`]: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    maxWidth: '700px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    }, 
  },
  [`& .${classes.form}`]: {
    display: 'flex',
    flexDirection: 'column',
  },
  [`& .${classes.input}`]: {
    marginBottom: theme.spacing(2),
    borderRadius: '0px 10px 0 10px',
    border: '1px solid black',
    outline: 'none',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: '0px 10px 0 10px',
        border: '1px solid black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
        outline: 'none'
      },
    },
  },
  [`& .${classes.submitButton}`]: {
    marginTop: theme.spacing(2),
  },
}));

const RegisterPage = () => {
   const navigate=useNavigate();
  const [isLoading,setIsLoading]=useState(false);
  const [popou,setPopup]=useState(false);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    lookingFor: '',
    dateOfBirth: '',
    religion: '',
    country: '',
    email: '',
    mobile: '',
    password: '',
    notRobot: false,
  });
     

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_BaseURL}/auth/user/create`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        lookingFor: formData.lookingFor,
        dateOfBirth: formData.dateOfBirth,
        religion: formData.religion,
        country: formData.country,
        email: formData.email,
        phone: formData.mobile,
        password: formData.password,
        otp: ""
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("response",response);
      if(response.data){
        swal("Sorry! ", response?.data.message, "success");
        navigate('/login');
      }
     
    } catch (error) {
      console.error("There was a problem with the fetch operation", "error");
      console.log("Error",error);
      if(error.response){
        swal("Sorry! ", error.response.data.message, "error");
      }
      else{
        swal("Sorry! ", error.message, "error");
      }

    }
    finally{
      setIsLoading(false);
    }
  };
  

  return (
    <>
   {isLoading && <LoadingBar/>}
    <Root className={classes.root}>
      <Container maxWidth="lg" className={classes.formContainer}>
      <Box sx={{ padding: '10px' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: {
            xs: '20px', 
            sm: '25px', 
            md: '30px', 
            lg: '35px', 
            xl: '40px', 
          },
        }}
      >
        Lets Set Up Your Account While We Find Matches For You
      </Typography>
    </Box>

        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            className={classes.input}
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            className={classes.input}
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            variant="outlined"
            fullWidth
            className={classes.input}
            InputLabelProps={{ shrink: true }}
            value={formData.dateOfBirth}
            onChange={handleChange}
            sx={{ marginTop: '15px' }}
          />
          <FormControl variant="outlined" fullWidth className={classes.input}>
            <Select
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select Religion
              </MenuItem>
              <MenuItem value="hindu">Hindu</MenuItem>
              <MenuItem value="muslim">Muslim</MenuItem>
              <MenuItem value="christian">Christian</MenuItem>
              <MenuItem value="sikh">Sikh</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth className={classes.input}>
            <Select
              name="country"
              value={formData.country}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select Country
              </MenuItem>
              <MenuItem value="india">India</MenuItem>
              <MenuItem value="usa">USA</MenuItem>
              <MenuItem value="uk">UK</MenuItem>
              <MenuItem value="canada">Canada</MenuItem>
              <MenuItem value="australia">Australia</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth className={classes.input}>
            <Select
              name="lookingFor"
              value={formData.lookingFor}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Looking For
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            className={classes.input}
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Mobile No"
            name="mobile"
            type="tel"
            variant="outlined"
            fullWidth
            className={classes.input}
            value={formData.mobile}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            className={classes.input}
            value={formData.password}
            onChange={handleChange}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="notRobot"
                  checked={formData.notRobot}
                  onChange={handleChange}
                />
              }
              label="I am not a robot"
            />
          </FormGroup>
          <Typography variant="body2" gutterBottom>
            By providing my contact details, I agree to receive communications from Sapthapadhi.com. I understand, I will be able to unsubscribe at any time.
          </Typography>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Root>
    </>
  );
};

export default RegisterPage;
