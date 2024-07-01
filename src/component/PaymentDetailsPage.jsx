import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, Button, List, ListItem, ListItemText, FormControl, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const PaymentDetailsPage = ({ selectedPlan, showpaymentpopup, setShowpamentpopup }) => {
  const [bank, setBank] = useState('');
  const navigate=useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleBankChange = (event) => {
    setBank(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const PaymentContainer = styled(Box)(({ theme }) => ({
    minHeight: '80vh',
    padding: theme.spacing(3),
    width: '75%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      padding: theme.spacing(2),
    },
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
    marginTop: '20px',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  }));

  const BackButton = styled(IconButton)(({ theme }) => ({
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

  const handlePayment = async () => {
    try {
      let response = await axios.post('https://sapthapadhi.bloomitsolutions.co.in/app/buyPlan',{
        userId: 19,
        planId: selectedPlan.id,
        paidAmount: selectedPlan.price,
        paymentMethod: paymentMethod
      },
    {
      headers:{
        'Content-Type':'application/json'
      }
    });
     if(response.data){
      swal("Congratulations! ", response.data?.message, "success");
      navigate('/myprofile')
     }
    } catch (error) {
      const errorData = error.response.data;
      const errorMessage = errorData.match(/Error: (.*?)<br>/)[1];
      console.log("ErrorMessage",errorMessage);
      if(error.response){
        swal("Sorry! ",errorMessage, "error");
      }
     
    }
  };

  return (
    <>
      <PaymentContainer>
        <Card>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'blue', color: 'white' }}>
            <Typography variant="h5" component="div">
              {selectedPlan.title} Plan
            </Typography>
            <Typography variant="h6" sx={{ marginTop: '20px' }}>
              Price: ₹{selectedPlan.price}
            </Typography>
          </CardContent>
        </Card>
        <BackButton color="primary" onClick={()=>setShowpamentpopup(!showpaymentpopup)}>
          <ArrowBackIcon />
        </BackButton>
        <PaymentTitle variant="h6">Payment Page</PaymentTitle>
        <Header>
          <Typography variant="h6">Select Payment Method</Typography>
        </Header>
        <ImageContainer>
          <img src="/images/PhonePay.png" alt="Phone Pay" width="80" />
          <img src="/images/Googlepay.png" alt="Google Pay" width="80" />
          <img src="/images/paytm.png" alt="Paytm" width="80" />
          <img src="/images/paypal.png" alt="PayPal" width="80" />
        </ImageContainer>
        <FormControl component="fieldset" sx={{ mb: 2, width: '100%', marginTop: '40px' }}>
          <RadioGroup row value={paymentMethod} onChange={handlePaymentMethodChange}>
            <FormControlLabel value="upi" control={<Radio />} label="UPI ID" />
            <FormControlLabel value="netbanking" control={<Radio />} label="Net Banking" />
          </RadioGroup>
        </FormControl>
        <StyledButton variant="contained" onClick={handlePayment} disabled={!paymentMethod}>
          Proceed To Payment
        </StyledButton>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Plan Details</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Title" secondary={selectedPlan.title} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Description" secondary={selectedPlan.description} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Price" secondary={`₹${selectedPlan.price}`} />
            </ListItem>
            {selectedPlan.features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={feature.desc}
                  secondary={feature.value ? <CheckIcon color="success" /> : <CloseIcon color="error" />}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </PaymentContainer>
    </>
  );
};

export default PaymentDetailsPage;
