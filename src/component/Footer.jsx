// Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        color: 'text.primary',
        py: 3,
        boxShadow: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Matrimony
            </Typography>
            <Typography variant="body2">
              Connecting hearts and souls for a lifetime of happiness.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="none">
              Home
            </Link><br/>
            <Link href="/about" color="inherit" underline="none">
              About Us
            </Link><br/>
            <Link href="/contact" color="inherit" underline="none">
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Facebook
            </Link><br/>
            <Link href="#" color="inherit" underline="none">
              Twitter
            </Link><br/>
            <Link href="#" color="inherit" underline="none">
              Instagram
            </Link>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={5} pb={2}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Matrimony. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
