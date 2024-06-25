import React from 'react';
import { Box, Typography, Button, FormControl, FormControlLabel, RadioGroup, Radio, Select, MenuItem, InputLabel, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PaymentContainer = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  padding: theme.spacing(3),
  width:'75%',
  marginInline:'auto'
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: theme.spacing(7),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  width: '100%',
  fontSize: '16px',
  borderRadius: '10px',
  backgroundColor: '#007bff',
  marginTop:'20px',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
}));

const BackButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
}));

const PaymentTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  fontSize: '24px',
  fontWeight: '600',
  marginBottom: theme.spacing(2),
}));

const PaymentPage = () => {
  const [bank, setBank] = React.useState('');

  const handleBankChange = (event) => {
    setBank(event.target.value);
  };

  return (
    <PaymentContainer>
      <BackButton color="primary">
        <ArrowBackIcon />
      </BackButton>
      <PaymentTitle variant="h6">Payment Page</PaymentTitle>
      <Header>
        <Typography variant="h6">UPI Payment</Typography>
        <FormControl variant="outlined" size="medium" sx={{width:'150px'}}>
          <InputLabel>ICICI 1234</InputLabel>
          <Select value={bank} onChange={handleBankChange} label="ICICI 1234">
            <MenuItem value="ICICI 1234">ICICI 1234</MenuItem>
            <MenuItem value="SBI 5678">SBI 5678</MenuItem>
            <MenuItem value="HDFC 9101">HDFC 9101</MenuItem>
            <MenuItem value="HDFC 9101"><button>Add Bank Account</button></MenuItem>
          </Select>
        </FormControl>
      </Header>

      <ImageContainer>
        <img src="/images/PhonePay.png" alt="Phone Pay" width="80" />
        <img src="/images/Googlepay.png" alt="Google Pay" width="80" />
        <img src="/images/paytm.png" alt="Paytm" width="80" />
        <img src="/images/paypal.png" alt="PayPal" width="80" />
      </ImageContainer>

      <FormControl component="fieldset" sx={{ mb: 2, width: '100%', marginTop:'40px' }}>
        <RadioGroup row>
          <FormControlLabel value="upi" control={<Radio />} label="Enter UPI ID" />
          <FormControlLabel value="netbanking" control={<Radio />} label="Net Banking" />
          <FormControlLabel value="mandate" control={<Radio />} label="Pay Later With Mandate" />
        </RadioGroup>
      </FormControl>

      <StyledButton variant="contained">Proceed To Payment</StyledButton>
    </PaymentContainer>
  );
};

export default PaymentPage;
