import React from 'react';
import { Button } from '@mui/material';

const GooglePayPaymentButton = ({ amount, onSuccess, onError }) => {
  const handlePayment = () => {
    // Replace with actual Google Pay payment API integration code
    // This is a placeholder, actual integration will involve API calls, etc.
    console.log('Initiating Google Pay payment...');
    // Simulate success for demonstration
    setTimeout(() => {
      onSuccess();
    }, 2000);
  };

  return (
    <Button variant="contained" color="primary" onClick={handlePayment}>
      Pay with Google Pay - ₹{amount}
    </Button>
  );
};

export default GooglePayPaymentButton;
