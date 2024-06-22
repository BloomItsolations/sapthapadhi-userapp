import React from 'react';
import { Box, Typography, Grid, Container, Card, CardContent, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const ProfilePage = () => {
  const classes = useStyles();

  const personalInfo = {
    Name: 'John Doe',
    Age: '30',
    'Family Names': 'Doe Family',
    Height: '6 feet',
    'Date Of Birth': 'January 1, 1990',
    Degree: 'Bachelor of Science',
    Weight: '70 kg',
    Profession: 'Software Engineer',
    Religion: 'Christianity',
    Position: 'Senior Developer',
    Cast: 'N/A',
    'Sub Cast': 'N/A',
  };

  const contactInfo = {
    Phone: '+1 123-456-7890',
    WhatsApp: '+1 123-456-7890',
    Email: 'john.doe@example.com',
    City: 'New York',
  };

  const hobbies = {
    Hobbies: 'Reading, Traveling, Hiking, Photography',
  };

  return (
    <Container className={classes.container} sx={{ marginTop: '20px' }}>
      <Card className={classes.card}>
        <Typography className={classes.header} sx={{ fontSize:{sm:'15px',md:'20px',lg:'25px'}, fontFamily: 'sans-serif', fontWeight: '600' }}>PERSONAL INFORMATION</Typography>
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
        <Typography className={classes.header} sx={{fontSize:{sm:'15px',md:'20px',lg:'25px'}, fontFamily: 'sans-serif', fontWeight: '600' }}>CONTACT INFORMATION</Typography>
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
        <Typography className={classes.header} sx={{ fontSize:{sm:'15px',md:'20px',lg:'25px'}, fontFamily: 'sans-serif', fontWeight: '600' }}>HOBBIES</Typography>
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
