import { Box, Typography } from '@mui/material';
import React from 'react'
import Slider from 'react-slick';
import BestOneCard from './BestOneCard';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const BestOne = () => {
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
    <Box sx={{    paddingInline: '5px',paddingBlock:'20px'}}>
    <Typography sx={{borderRadius: '0px 10px 0 10px', display:'flex', justifyContent:'center', marginLeft:{xs:'0px',md:'64px'}, border: '1px solid black', width:{ xs: 'auto', sm: '300px', md: '526px' },fontSize:{xs:'25px',md:"40px"}, backgroundColor: '#f9f9f9',}}  variant="h4" component="div">CATCH UP THE BEST ONE</Typography>
    <Box sx={{ maxWidth: { xs: '95%', md: '90%' }, overflow: 'hidden', padding:'30px', marginInline:'auto' }}>
    <Slider {...settings}>
      <BestOneCard image="images/Rectangle 145 (1).jpg" title="Jack danial"/>
      <BestOneCard image="images/Rectangle 146.jpg" title="Jack danial"/>
      <BestOneCard image="images/Rectangle 147.jpg" title="Jack danial"/>
    </Slider>
    </Box>
  </Box>
  )
}

export default BestOne