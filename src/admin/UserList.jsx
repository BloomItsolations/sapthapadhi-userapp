// UserProfilePage.js
import React from 'react';
import { Container, Grid, Paper, Typography, Avatar, Box } from '@mui/material';

const UserProfilePage = () => {
  // Dummy user data (replace with actual data)
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', avatar: '/path/to/avatar.jpg', dateOfBirth: '1990-01-01', maritalStatus: 'Single' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', avatar: '/path/to/avatar.jpg', dateOfBirth: '1995-05-15', maritalStatus: 'Married' }
    // Add more users as needed
  ];

  return (
    <Container>
      <Grid container spacing={3}>
        {users.map(user => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="200px">
                <Avatar src={user.avatar} sx={{ width: 100, height: 100, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {user.email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Date of Birth: {user.dateOfBirth}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Marital Status: {user.maritalStatus}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserProfilePage;
