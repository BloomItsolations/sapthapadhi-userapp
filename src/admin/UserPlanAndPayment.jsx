// AdminPage.js
import React from 'react';
import { Container, Typography, Grid, Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

// Random user data with plans and payments
const users = [
  { 
    id: 101,
    name: 'John Doe',
    email: 'john.doe@example.com',
    plans: [
      { id: 1, planName: 'Basic Plan', amount: 50, paymentDate: '2024-06-01' },
      { id: 2, planName: 'Premium Plan', amount: 100, paymentDate: '2024-06-10' }
    ]
  },
  { 
    id: 102,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    plans: [
      { id: 3, planName: 'Standard Plan', amount: 75, paymentDate: '2024-06-15' }
    ]
  },
  { 
    id: 102,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    plans: [
      { id: 3, planName: 'Standard Plan', amount: 75, paymentDate: '2024-06-15' }
    ]
  },
  { 
    id: 102,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    plans: [
      { id: 3, planName: 'Standard Plan', amount: 75, paymentDate: '2024-06-15' },
      { id: 3, planName: 'Standard Plan', amount: 75, paymentDate: '2024-06-15' },
      { id: 3, planName: 'Standard Plan', amount: 75, paymentDate: '2024-06-15' }
    ]
  }
  // Add more users as needed
];

const UserPlanAndPayment = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Plans and Payments
      </Typography>
      {users.map(user => (
        <Grid key={user.id} container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                User: {user.name} ({user.email})
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Plan Name</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Payment Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.plans.map(plan => (
                      <TableRow key={plan.id}>
                        <TableCell>{plan.id}</TableCell>
                        <TableCell>{plan.planName}</TableCell>
                        <TableCell>{plan.amount}</TableCell>
                        <TableCell>{plan.paymentDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default UserPlanAndPayment;
