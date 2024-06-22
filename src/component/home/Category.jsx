import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import CategoryCard from './CategoryCard';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';


const Category = () => {
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
    <Box sx={{ paddingInline: '5px',paddingBlock:'20px'}}>
      <Typography
        sx={{
          borderRadius: '0px 10px 0 10px',
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid black',
          width: { xs: 'auto', sm: '300px', md: '387px' },
          fontSize: { xs: '25px', md: "40px" },
          backgroundColor: '#f9f9f9',
          marginLeft:{xs:'0px',md:'64px'}
        }}
        variant="h4"
        component="div"
      >
        CATEGORIES
      </Typography>
      <Box sx={{ maxWidth: { xs: '95%', md: '92%' }, overflow: 'hidden', padding: '30px', marginInline: 'auto' }}>
        <Slider {...settings}>
          <CategoryCard image="images/Rectangle 145 (1).jpg" title="Wedding Page" />
          <CategoryCard image="images/Rectangle 146.jpg" title="All Services" />
          <CategoryCard image="images/Rectangle 147.jpg" title="Join Now" />
        </Slider>
      </Box>
    </Box>
  );
};

export default Category;
