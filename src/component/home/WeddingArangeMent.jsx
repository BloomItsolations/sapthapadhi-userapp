import { Box, Typography } from '@mui/material';
import React from 'react'
import Slider from 'react-slick';
import WeddingArangeMentCard from './WeddingArangeMentCard';

const WeddingArangeMent = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,   
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
  
  
    return (
      <Box sx={{  padding: '20px'}}>
        <Typography sx={{borderRadius: '0px 10px 0 10px', display:'flex',marginLeft:{ xs: '0px', sm: '30px', md: '50px' }, justifyContent:'center', border: '1px solid black', width:{ xs: 'auto', sm: '350px', md: '560px' },fontSize:{xs:'20px',md:"40px"}, backgroundColor: '#f9f9f9',}}  variant="h4" component="div">WEDDING ARRANGEMENTS</Typography>
        <Box sx={{ maxWidth: { xs: '95%', md: '90%' }, overflow: 'hidden', padding:'30px', marginInline:'auto' }}>
        <Slider {...settings}>
          <WeddingArangeMentCard image="images/weddingarrangement.jpg" title="WEDDING ARRANGEMENTS"  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."/>
          <WeddingArangeMentCard image="images/weddingarangementtwo.jpg" title="WEDDING ARRANGEMENTS" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."/>
          <WeddingArangeMentCard image="images/weddingarangementthree.jpg" title="WEDDING ARRANGEMENTS" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."/>
        </Slider>
        </Box>
      </Box>
    );
  };
  

export default WeddingArangeMent