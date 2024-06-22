import React from 'react'
import SuccessStoryCard from './SuccessStoryCard';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const SuccessStories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,   
        slidesToShow: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
    <Box sx={{   paddingInline: '5px',paddingBlock:'20px'}}>
      <Typography sx={{borderRadius: '0px 10px 0 10px', display:'flex', justifyContent:'center', border: '1px solid black', marginLeft:{xs:'0px',md:'64px'}, width:{ xs: 'auto', sm: '300px', md: '387px' }, fontSize:{xs:'25px',md:"40px"}, backgroundColor: '#f9f9f9',}} variant="h4" component="div">SUCCESS  STORIES</Typography>
      <Box sx={{ maxWidth: { xs: '95%', md: '90%' }, overflow: 'hidden', padding:'30px', marginInline:'auto' }}>
      <Slider {...settings}>
        <SuccessStoryCard image="images/Rectangle 148.jpg" title="Nayani & Nayan" />
        <SuccessStoryCard image="images/Rectangle 149.jpg" title="Nayani & Nayan" />
        <SuccessStoryCard image="images/Rectangle 150.jpg" title="Nayani & Nayan" />
      </Slider>
      </Box>
    </Box>
  )
}

export default SuccessStories