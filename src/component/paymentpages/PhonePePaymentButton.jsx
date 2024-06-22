import React from 'react';
import { Button } from '@mui/material';

const PhonePePaymentButton = ({ amount, onSuccess, onError }) => {
  const handlePayment = () => {
    // Replace with actual PhonePe payment API integration code
    // This is a placeholder, actual integration will involve API calls, etc.
    console.log('Initiating PhonePe payment...');
    // Simulate success for demonstration
    setTimeout(() => {
      onSuccess();
    }, 2000);
  };

  return (
    <Button variant="contained" color="primary" onClick={handlePayment}>
      Pay with PhonePe - ₹{amount}
    </Button>
  );
};

export default PhonePePaymentButton;
