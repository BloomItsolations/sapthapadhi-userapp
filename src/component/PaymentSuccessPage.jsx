import React from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const { plan } = useParams();

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Payment Successful!
      </Typography>
      <Typography variant="body1">
        Thank you for purchasing the {plan} plan.
      </Typography>
    </Container>
  );
};

export default PaymentSuccessPage;
