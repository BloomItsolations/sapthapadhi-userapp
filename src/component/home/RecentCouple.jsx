import React from 'react'
import RecentCoupleCard from './RecentCoupleCard';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const RecentCouple = () => {
  
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
        <Box sx={{  paddingInline: '5px',paddingBlock:'20px' }}>
          <Typography sx={{borderRadius: '0px 10px 0 10px', display:'flex', justifyContent:'center', border: '1px solid black', width:{ xs: 'auto', sm: '300px', md: '387px' },fontSize:{xs:'25px',md:"40px"},marginLeft:{xs:'0px',md:'64px'}, backgroundColor: '#f9f9f9',}}  variant="h4" component="div">RECENT COUPLES</Typography>
          <Box sx={{ maxWidth: { xs: '95%', md: '90%' }, overflow: 'hidden', padding:'30px', marginInline:'auto' }}>
          <Slider {...settings}>
            <RecentCoupleCard image="images/recentcouple.jpg" title="Nitya & Naveen" />
            <RecentCoupleCard image="images/recentcoupletwo.jpg" title="Nitya & Naveen" />
            <RecentCoupleCard image="images/recentcouple.jpg" title="Nitya & Naveen" />
          </Slider>
          </Box>
        </Box>
      );
    };
    
export default RecentCouple