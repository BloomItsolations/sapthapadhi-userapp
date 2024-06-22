import React from 'react';
import { Button } from '@mui/material';

const PaytmPaymentButton = ({ amount, onSuccess, onError }) => {
  const handlePayment = () => {
    // Replace with actual Paytm payment API integration code
    // This is a placeholder, actual integration will involve API calls, etc.
    console.log('Initiating Paytm payment...');
    // Simulate success for demonstration
    setTimeout(() => {
      onSuccess();
    }, 2000);
  };

  return (
    <Button variant="contained" color="primary" onClick={handlePayment}>
      Pay with Paytm - ₹{amount}
    </Button>
  );
};

export default PaytmPaymentButton;
