import React from 'react'
import NextArrow from '../home/NextArrow';
import PrevArrow from '../home/PrevArrow';
import { Box, Typography, Grid, Button, Avatar } from '@mui/material';
import Slider from 'react-slick';
import RecommendedProfile from './RecommendedProfile';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 5,
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
    <>
      <div className=' h-[85vh] overflow-y-scroll pb-6'>
        <Grid container sx={{ border: '#ffcf77 2px solid', marginTop: '20px', padding: '10px', width: '98%', borderRadius: '15px', marginInline: 'auto', display: 'flex', alignItems: 'center' }}>
          <Grid item xs={1.1} >
            <VerifiedUserIcon />
          </Grid>
          <Grid item xs={8.9} >
            <Typography variant="body1" sx={{ color: '#e06506' }}>
              Your profile is pending verification! Verify now to get better responses
            </Typography>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'right' }}>
            <Button variant="contained" sx={{ backgroundColor: '#e06506' }}>
              Verify Profile
            </Button>
          </Grid>
        </Grid>
        <h1 className='text-[28px] mt-4 ml-4 font-sans font-medium text-black'>Your Journey So Far</h1>
        <div className="bg-[#f3e8f5] flex justify-around w-[330px] items-center rounded-[15px] ml-3 mt-4">
          <div className='flex flex-col items-center'>
            <h1 className='text-[40px] font-sans font-medium mb-0 pb-0'>1</h1>
            <p className='text-[30px] font-sans font-normal mt-0 pt-0'>Viewed You</p>
          </div>
          <div>
            <Avatar alt="avatar-image" className="profile-journey" src={"https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"} />

          </div>
        </div>

        <Box sx={{ paddingInline: '5px', paddingBlock: '10px' }}>
          <Typography sx={{ marginLeft: { xs: '0px', md: '10px' }, marginTop: '20px', fontSize: { xs: '25px', md: "28px" } }} variant="h4" component="div">Recommended Profile</Typography>
          <Box sx={{ maxWidth: { xs: '95%', md: '95%' }, overflow: 'hidden', padding: '20px', marginInline: 'auto', marginTop: '20px' }}>
            <Slider {...settings}>
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2022/12/18/21/H11732737_inaFx_07681_TL_MH.jpg" age="22 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/14/21/H13463137_lavdU_501_TL_MH.jpg" age="34 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2022/12/18/21/H11732737_inaFx_07681_TL_MH.jpg" age="Jack danial" height="4.5" />

              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/18/20/H13476311_JiMlE_809_TL_MH.jpg" age="54 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2022/12/18/21/H11732737_inaFx_07681_TL_MH.jpg" age="12 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/14/21/H13463137_lavdU_501_TL_MH.jpg" age="54 Yrs" height="4.5" />

              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2022/12/18/21/H11732737_inaFx_07681_TL_MH.jpg" age="32 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/18/20/H13476311_JiMlE_809_TL_MH.jpg" age="22 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2022/12/18/21/H11732737_inaFx_07681_TL_MH.jpg" age="43 Yrs" height="4.5" />

            </Slider>
          </Box>
        </Box>

        <Box sx={{ paddingInline: '5px', paddingBlock: '5px' }}>
          <Typography sx={{ marginLeft: { xs: '0px', md: '14px' }, width: { xs: 'auto', sm: '300px', md: '526px' }, fontSize: { xs: '25px', md: "28px" }, marginTop: '20px' }} variant="h4" component="div">Total Matches</Typography>
          <p className='text-black font-sans text-[20px] font-normal ml-5'>Members who match your partner preferences</p>
          <Box sx={{ maxWidth: { xs: '95%', md: '95%' }, marginTop: '10px', overflow: 'hidden', padding: '20px', marginInline: 'auto' }}>
            <Slider {...settings}>
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/18/20/H13476311_JiMlE_809_TL_MH.jpg" age="22 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/18/20/H13476311_JiMlE_809_TL_MH.jpg" age="34 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/18/20/H13476311_JiMlE_809_TL_MH.jpg" age="Jack danial" height="4.5" />

              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/18/20/H13476311_JiMlE_809_TL_MH.jpg" age="54 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/18/20/H13476311_JiMlE_809_TL_MH.jpg" age="12 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/18/20/H13476311_JiMlE_809_TL_MH.jpg" age="54 Yrs" height="4.5" />

              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/18/20/H13476311_JiMlE_809_TL_MH.jpg" age="32 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/18/20/H13476311_JiMlE_809_TL_MH.jpg" age="22 Yrs" height="4.5" />
              <RecommendedProfile image="https://h-imgs.matrimonycdn.com/photos/2024/06/18/20/H13476311_JiMlE_809_TL_MH.jpg" age="43 Yrs" height="4.5" />

            </Slider>
          </Box>
        </Box>
        <h2 className='text-[28px] font-sans font-medium text-black ml-4'>Enrich Your Profile</h2>
        <p className="text-[15px] font-sans font-normal text-black ml-4">Add below details to let prospects know more about you and get higher responses</p>

        <div>
        <div className="w-40% h-200px ml-3 mt-1"
         style={{ 
           backgroundImage: 'url("https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/add-photo-male.png")',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover',
           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
           borderRadius: '8px',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
           padding: '16px'
         }}
    >
      <h2 className="text-xl font-semibold mb-4">Add Your Details </h2>
      <p className="text-center text-gray-600 mb-6">Add More Details to enhance your profile visibility.</p>
      <Link to="" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none">
        Add Details
      </Link>
    </div>
  
       </div>

    </div>

    </>
  )
}

export default UserDashboard