import React from 'react';
import { Box, TextField, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, MenuItem, Select, InputLabel } from '@mui/material';
import { styled } from '@mui/system';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(to right, #f8fafc, #e0e7ff)',
  padding: theme.spacing(3),
}));

const InquiryContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: '15px',
  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  maxWidth: '600px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '10px',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5),
  width: '100%',
  fontSize: '16px',
  borderRadius: '10px',
  backgroundColor: '#333',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#555',
  },
}));

const RadioButtonGroup = styled(RadioGroup)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'center',
}));

const InquiryPage = () => {
  const [inquiryType, setInquiryType] = React.useState('');

  const handleInquiryTypeChange = (event) => {
    setInquiryType(event.target.value);
  };

  return (
    <PageContainer>
      <InquiryContainer>
        <Title>Inquiry Form</Title>
        <StyledTextField label="First Name" variant="outlined" />
        <StyledTextField label="Last Name" variant="outlined" />
        <StyledTextField label="Phone Number" variant="outlined" />
        <StyledTextField label="Email Address" variant="outlined" />
        <StyledTextField label="Occupation" variant="outlined" />

        <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
          <InputLabel>Inquiry Type</InputLabel>
          <Select value={inquiryType} onChange={handleInquiryTypeChange} label="Inquiry Type">
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Support">Support</MenuItem>
            <MenuItem value="Feedback">Feedback</MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset" sx={{ mb: 2, width: '100%' }}>
          <FormLabel component="legend" sx={{ textAlign: 'center', marginBottom: 1 }}>I am looking for a:</FormLabel>
          <RadioButtonGroup row>
            <FormControlLabel value="bride" control={<Radio />} label="Bride" />
            <FormControlLabel value="groom" control={<Radio />} label="Groom" />
          </RadioButtonGroup>
        </FormControl>

        <StyledTextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
        />

        <StyledButton variant="contained">Submit</StyledButton>
      </InquiryContainer>
    </PageContainer>
  );
};

export default InquiryPage;
