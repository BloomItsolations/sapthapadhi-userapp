import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CardMedia, MenuItem, Select, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import FilterListIcon from '@mui/icons-material/FilterList';
import axios from 'axios';
import swal from 'sweetalert';

const ProfileContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

const LeftSection = styled(Box)(({ theme }) => ({
    width: 'calc(30% - 10px)',
    borderRight: '1px dashed #ccc',
    paddingRight: '10px',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 1,
        top: '60px',
        left: 0,
        width: '100%',
        border: '1px solid #ccc',
        padding: '10px',
    },
}));

const RightSection = styled(Box)(({ theme }) => ({
    width: 'calc(70% - 10px)',
    paddingLeft: '10px',
    height: '83vh',
    overflowY: 'scroll',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        paddingLeft: 0,
        padding: '15px'
    },
}));

const ProfileCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#FBF7F7',
}));

const FilterButton = styled(Button)(({ theme }) => ({
    display: 'none',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        display: 'block',
    },
}));

const ApplyButton = styled(Button)(({ theme }) => ({
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
        display: 'block',
    },
}));


const BannerContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url('/images/Rectangle 158.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    color: 'white',
    textAlign: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        height: '30vh',
    },
  }));
  
  const JoinButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    border: '2px solid black',
    backgroundColor: 'transparent',
    color: 'white',
    padding: theme.spacing(1, 3),
    fontSize: '16px',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  }));

const profiles = [
    {
        id: 1,
        name: 'John Doe',
        image: '/images/profile1.jpg',
        gender: 'male',
        age: 25,
        religion: 'Christian',
        location: 'New York',
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: '/images/profile2.jpg',
        gender: 'female',
        age: 28,
        religion: 'Muslim',
        location: 'Los Angeles',
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: '/images/profile2.jpg',
        gender: 'female',
        age: 28,
        religion: 'Muslim',
        location: 'Los Angeles',
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: '/images/profile2.jpg',
        gender: 'female',
        age: 28,
        religion: 'Muslim',
        location: 'Los Angeles',
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: '/images/profile2.jpg',
        gender: 'female',
        age: 28,
        religion: 'Muslim',
        location: 'Los Angeles',
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: '/images/profile2.jpg',
        gender: 'female',
        age: 28,
        religion: 'Muslim',
        location: 'Los Angeles',
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: '/images/profile2.jpg',
        gender: 'female',
        age: 28,
        religion: 'Muslim',
        location: 'Los Angeles',
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: '/images/profile2.jpg',
        gender: 'male',
        age: 28,
        religion: 'Muslim',
        location: 'Los Angeles',
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: '/images/profile2.jpg',
        gender: 'female',
        age: 28,
        religion: 'Muslim',
        location: 'Los Angeles',
    },

];

const AllProfilesPage = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [filters, setFilters] = useState({
        gender: '',
        age: '',
        religion: '',
        location: '',
    });
    const [filteredProfiles, setFilteredProfiles] = useState(profiles);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const applyFilters = () => {
        let filtered = profiles;
        if (filters.gender) {
            filtered = filtered.filter(profile => profile.gender === filters.gender);
        }
        if (filters.age) {
            filtered = filtered.filter(profile => profile.age === parseInt(filters.age));
        }
        if (filters.religion) {
            filtered = filtered.filter(profile => profile.religion === filters.religion);
        }
        if (filters.location) {
            filtered = filtered.filter(profile => profile.location === filters.location);
        }
        setFilteredProfiles(filtered);
        setShowFilter(false);
    };

    const handleSendRequest = async (toUserId) => {
        const fromUserId = JSON.parse(localStorage.getItem('userdata'))?.userId;

        try {
            const response = await axios.post(`${process.env.REACT_APP_BaseURL}/app/sendrequest`, {
                fromUserId,
                toUserId,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Sended Request Resopnse",response)
            if (response.data) {
                swal('Success', 'Request sent successfully!', 'success');
            }
        } catch (error) {
            if (error.response) {
                swal('Error', error.response.data.message, 'error');
            } else {
                swal('Error', error.message, 'error');
            }
        }
    };


    return (
        <>
       
        {/* <BannerContainer> */}
      {/* <Typography variant="h2" sx={{ fontSize: { xs: '24px', sm: '36px', md: '48px' }, fontWeight: 'bold',marginTop:{sm:'20px',md:'120px'} }}>
        Lakhs Of Happy Marriages
      </Typography>
      <JoinButton>Join Now For Free</JoinButton> */}
    {/* </BannerContainer> */}
 
        
        <Box sx={{ width: '100%', maxWidth: '1250px', margin: '0 auto', }}>
            <FilterButton variant="contained" color="primary" onClick={() => setShowFilter(!showFilter)}>
                <FilterListIcon /> Filter
            </FilterButton>

            <ProfileContainer>
                <LeftSection sx={{ display: { xs: showFilter ? 'block' : 'none', sm: 'block' }, width: '30%', border: '1px solid gray', padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>Filter Profiles</Typography>
                    <Box mb={2}>
                        <Typography>I am looking for</Typography>
                        <Select fullWidth name="gender" value={filters.gender} onChange={handleFilterChange}>
                            <MenuItem value="">Any</MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </Box>
                    <Box mb={2}>
                        <Typography>Age</Typography>
                        <Select fullWidth name="age" value={filters.age} onChange={handleFilterChange}>
                            <MenuItem value="">Any</MenuItem>
                            <MenuItem value="25">25</MenuItem>
                            <MenuItem value="28">28</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                        </Select>
                    </Box>
                    <Box mb={2}>
                        <Typography>Religion</Typography>
                        <Select fullWidth name="religion" value={filters.religion} onChange={handleFilterChange}>
                            <MenuItem value="">Any</MenuItem>
                            <MenuItem value="Christian">Christian</MenuItem>
                            <MenuItem value="Muslim">Muslim</MenuItem>
                        </Select>
                    </Box>
                    <Box mb={2}>
                        <Typography>Location</Typography>
                        <Select fullWidth name="location" value={filters.location} onChange={handleFilterChange}>
                            <MenuItem value="">Any</MenuItem>
                            <MenuItem value="New York">New York</MenuItem>
                            <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                        </Select>
                    </Box>
                    <ApplyButton variant="contained" color="primary" fullWidth onClick={applyFilters}>
                        Apply
                    </ApplyButton>
                </LeftSection>

                <RightSection >
                    <Grid container spacing={2}>
                        {filteredProfiles.map((profile) => (
                            <div className='w-full h-auto lg:h-[210px] flex border-gray-500 border-[1px] items-center mt-5 ml-2 rounded-[10px] flex-col lg:flex-row'>
                                <div className='w-[90%] lg:w-[40%] h-[190px]'>
                                    <img src="/images/Rectangle 168 (1).jpg" className='p-[1px] w-[75%] h-[100%]' />
                                </div>
                                <div className='w-[90%] flex flex-col gap-3 justify-center lg:w-[60%]'>
                                    <h2 className='text-[15px] lg:text-[24px] font-medium font-sans  '>AISHA</h2>
                                    <div className='flex justify-around items-center '>
                                        <div className='w-[24%] lg:w-[20%]  bg-[#696B6D] rounded-md  text-[10px] font-normal flex justify-center items-center text-white'>B.sc</div>
                                        <div className='w-[24%] lg:w-[20%] bg-[#696B6D] rounded-md  text-[10px] font-normal flex justify-center items-center text-white'>IT profession</div>
                                        <div className='w-[24%] lg:w-[20%] bg-[#696B6D] rounded-md  text-[10px] font-normal flex justify-center items-center text-white'>29 Years Old</div>
                                        <div className='w-[24%] lg:w-[20%]  bg-[#696B6D] rounded-md  text-[10px] font-normal flex justify-center items-center text-white'>Height:155cms</div>
                                    </div>
                                    <div className='flex justify-around pb-2 lg:pb-0'>
                                        <button className='w-[24%] lg:w-[20%]  border-black border-[1px] rounded-md text-[10px] font-normal flex justify-center items-center hover:bg-black hover:text-white'>Chat now</button>
                                        <button className='w-[24%] lg:w-[20%]  border-black border-[1px] rounded-md text-[10px] font-normal flex justify-center items-center hover:bg-black hover:text-white'>whats app </button>
                                        <button className='w-[24%] lg:w-[20%]  border-black border-[1px] rounded-md text-[10px] font-normal flex justify-center items-center hover:bg-black hover:text-white'>Send interest</button>
                                        <button className='w-[24%] lg:w-[20%]  border-black border-[1px] rounded-md text-[10px] font-normal flex justify-center items-center hover:bg-black hover:text-white'>More Details</button>
                                    </div>
                                    <button onClick={()=>handleSendRequest(profile.id)} className='text-black border-black border-[1px] rounded-[10px] px-2 hover:bg-black hover:text-white py-1 font-serif '>Send Request</button>
                                </div>
                            </div>
                        ))}
                    </Grid>
                </RightSection>
            </ProfileContainer>
        </Box>
                        </>
    );
};

export default AllProfilesPage;
