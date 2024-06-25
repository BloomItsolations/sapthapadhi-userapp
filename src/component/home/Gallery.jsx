import React from 'react';
import { Container, Grid, Card, CardMedia, CardActionArea, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'Gallery';
const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
  media: `${PREFIX}-media`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(4),
  },
  [`& .${classes.card}`]: {
    margin: theme.spacing(2),
    overflow: 'hidden',
    '&:hover': {
      '& $media': {
        transform: 'scale(1.1)',
      },
    },
  },
  [`& .${classes.media}`]: {
    height: 200,
    transition: 'transform 0.3s ease',
  },
}));

const images = [
  'images/galleryone.jpg',
  'images/gallerytwo.jpg',
  'images/gallerythree.jpg',
  'images/galleryfour.jpg',
  'images/galleryfifth.jpg',
  'images/gallerysix.jpg',
];

const Gallery = () => {
  return (
    <Root className={classes.root}>
              <Typography sx={{borderRadius: '0px 10px 0 10px', display:'flex', justifyContent:'center', border: '1px solid black', width:{ xs: 'auto', sm: '300px', md: '387px' },fontSize:{xs:'25px',md:"40px"}, marginLeft:{ xs: '0px', sm: '30px', md: '60px' }, backgroundColor: '#f9f9f9',}}  variant="h4" component="div">PHOTO GALLERY</Typography>

      <Container>
        <Grid container spacing={4} sx={{marginTop:'25px',}}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title={`Image ${index + 1}`}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default Gallery;
