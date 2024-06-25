import React, { useEffect, useState } from 'react';
import NextArrow from '../home/NextArrow';
import PrevArrow from '../home/PrevArrow';
import { Box, Typography, Grid, Button, Avatar } from '@mui/material';
import Slider from 'react-slick';
import RecommendedProfile from './RecommendedProfile';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [recommend,setRecommended]=useState([]);
  useEffect(() => {
    fetchMatches();
    recommendedFetch(); 
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BaseURL}/app/matches/2`);
      console.log("Response", response.data);

      setMatches(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const recommendedFetch=async ()=>{
    try {
      setIsLoading(true);
       const response=await axios.get(`${process.env.REACT_APP_BaseURL}/app/recommendedProfiles/2`);
       setRecommended(response.data);
       setIsLoading(false);
    } catch (error) {
      console.log("Error",error);
      setIsLoading(false);
    }
  }

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
        {/* Pending verification section */}
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
            <Link to={'/editprofile'} className='bg-[#e06506] px-4 py-2 rounded-[10px] text-white hover:bg-[#ad5c1d]'>
              Verify Profile
            </Link>
          </Grid>
        </Grid>

        {/* Recommended profiles section */}
        <h1 className='text-[28px] mt-4 ml-4 font-sans font-medium text-black'>Your Journey So Far</h1>
        <Box sx={{ paddingInline: '5px', paddingBlock: '10px' }}>
          <Typography sx={{ marginLeft: { xs: '0px', md: '10px' }, marginTop: '20px', fontSize: { xs: '25px', md: "28px" } }} variant="h4" component="div">Recommended Profile</Typography>
          <Box sx={{ maxWidth: { xs: '95%', md: '95%' }, overflow: 'hidden', padding: '20px', marginInline: 'auto', marginTop: '20px' }}>
            <Slider {...settings}>
               {
              recommend.map((value)=>(
                <RecommendedProfile
                  key={value.id}
                  image={value.profilePhoto ? `https://sapthapadhi.bloomitsolutions.co.in/${value.profilePhoto[0].path}` : 'https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png'}
                  age={value.age}
                  height={value.height}
                />))
              }
  
            </Slider>
          </Box>
        </Box>

        {/* Total matches section */}
        <Box sx={{ paddingInline: '5px', paddingBlock: '5px' }}>
          <Typography sx={{ marginLeft: { xs: '0px', md: '14px' }, width: { xs: 'auto', sm: '300px', md: '526px' }, fontSize: { xs: '25px', md: "28px" }, marginTop: '20px' }} variant="h4" component="div">Total Matches</Typography>
          <p className='text-black font-sans text-[20px] font-normal ml-5'>Members who match your partner preferences</p>
          <Box sx={{ maxWidth: { xs: '95%', md: '95%' }, marginTop: '10px', overflow: 'hidden', padding: '20px', marginInline: 'auto' }}>
            <Slider {...settings}>
              {matches.map(match => (
                <RecommendedProfile
                  key={match.id}
                  image={match.profilePhoto ? `https://sapthapadhi.bloomitsolutions.co.in/${match.profilePhoto[0].path}` : 'https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png'}
                  age={match.age}
                  height={match.height}
                />))}
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
  );
}

export default UserDashboard;
