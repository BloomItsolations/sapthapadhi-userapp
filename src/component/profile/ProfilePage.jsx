import React from 'react';
import { Box, Typography, Grid, Container, Card, CardContent, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoadingSpinner from './LoadingSpinner';

const useStyles = styled((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    maxWidth: 800,
    width: '100%',
    padding: theme.spacing(4),
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
    marginBottom: theme.spacing(3),
  },
  header: {
    fontFamily: 'Yeseva One',
    fontSize: '32px',
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  label: {
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 500,
    color: '#333',
    marginBottom: theme.spacing(1),
  },
  value: {
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 400,
    color: '#555',
    marginBottom: theme.spacing(2),
  },
}));

const ProfilePage = ({ userDetails, loading }) => {
  const classes = useStyles();

  if (loading) {
    return <LoadingSpinner />; // Placeholder for loading indicator, implement LoadingSpinner component
  }

  if (!userDetails || !userDetails.user || !userDetails.userDetails) {
    return <div>Error: User details not found</div>; // Handle case where userDetails is empty or API fetch fails
  }

  const { user, userDetails: userExtended } = userDetails;

  const personalInfo = {
    Name: `${user.firstName} ${user.lastName}`,
    Age: userExtended.age,
    'Family Names': userExtended.familyNames,
    Height: userExtended.height,
    'Date Of Birth': userExtended.dateOfBirth,
    Degree: userExtended.highestEducation,
    Weight: userExtended.weight,
    Profession: userExtended.occupation,
    Religion: userExtended.religion,
    Position: userExtended.occupationInDetail,
    Cast: userExtended.caste || 'N/A',
    'Sub Cast': userExtended.subCaste || 'N/A',
  };

  const contactInfo = {
    Phone: user.phone,
    WhatsApp: user.phone, // Assuming WhatsApp uses the same phone number as regular phone
    Email: user.email,
    City: userExtended.residingCityDistrict,
  };

  const hobbies = {
    Hobbies: userExtended.hobbies || 'N/A',
  };

  return (
    <Container className={classes.container} sx={{ marginTop: '20px' }}>
      <Card className={classes.card}>
        <Typography className={classes.header}>PERSONAL INFORMATION</Typography>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            {Object.entries(personalInfo).map(([label, value]) => (
              <Grid item xs={12} sm={6} key={label}>
                <div className='flex gap-2'>
                  <Typography className={classes.label}>{label}:</Typography>
                  <Typography className={classes.value}>{value}</Typography>
                </div>
                <Divider />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <Typography className={classes.header}>CONTACT INFORMATION</Typography>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            {Object.entries(contactInfo).map(([label, value]) => (
              <Grid item xs={12} sm={6} key={label}>
                <div className='flex gap-2'>
                  <Typography className={classes.label}>{label}:</Typography>
                  <Typography className={classes.value}>{value}</Typography>
                </div>
                <Divider />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <Typography className={classes.header}>HOBBIES</Typography>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            {Object.entries(hobbies).map(([label, value]) => (
              <Grid item xs={12} key={label}>
                <div className='flex gap-2'>
                  <Typography className={classes.label}>{label}:</Typography>
                  <Typography className={classes.value}>{value}</Typography>
                </div>
                <Divider />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfilePage;
