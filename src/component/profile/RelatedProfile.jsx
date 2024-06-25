import React from 'react'
import RelatedProfileCard from './RelatedProfileCard';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import PrevArrow from '../home/PrevArrow';
import NextArrow from '../home/NextArrow';

const RelatedProfile = () => {
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
    <Box sx={{ paddingInline: '5px', paddingBlock: '20px' }}>
      <h3 className='text-[25px] md:text-[30px] lg:text-[36px] font-normal font-serif ml-1 md:ml-3 lg:ml-16'>RELATED PROFILES</h3>

      <Box sx={{ maxWidth: { xs: '95%', md: '90%' }, overflow: 'hidden', padding: '30px', marginInline: 'auto' }}>
        <Slider {...settings}>
          <RelatedProfileCard image="/images/relatedprofile.jpg" title="Jack danial" />

          <RelatedProfileCard image="/images/relatedprofile.jpg" title="Jack danial" />
          <RelatedProfileCard image="/images/relatedprofile.jpg" title="Jack danial" />
        </Slider>
      </Box>
    </Box>
  )
}

export default RelatedProfile