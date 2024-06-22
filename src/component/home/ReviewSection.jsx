// src/components/ReviewSection.jsx
import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReviewCard from './ReviewCard';

const PREFIX = 'ReviewSection';
const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  moreButton: `${PREFIX}-moreButton`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(4),
  },
  [`& .${classes.title}`]: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  [`& .${classes.moreButton}`]: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
  },
}));

const reviews = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    profilePicture: 'https://via.placeholder.com/150',
    name: 'John Doe',
    profession: 'Chef',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    profilePicture: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    profession: 'Nutritionist',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    profilePicture: 'https://via.placeholder.com/150',
    name: 'Mark Johnson',
    profession: 'Food Blogger',
  },
];

const ReviewSection = () => {
  return (
    <Root className={classes.root}>
      <Container>
        <Typography
          sx={{
            borderRadius: '0px 10px 0 10px',
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid black',
            width: { xs: 'auto', sm: '300px', md: '387px' },
            fontSize: { xs: '25px', md: '40px' },
            backgroundColor: '#f9f9f9',
          }}
          variant="h4"
          component="div"
        >
          REVIEWS
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: '20px' }}>
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ReviewCard review={review} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.moreButton}>
          <Button variant="contained" color="inherit" href="/more-reviews">
            More...
          </Button>
        </div>
      </Container>
    </Root>
  );
};

export default ReviewSection;
