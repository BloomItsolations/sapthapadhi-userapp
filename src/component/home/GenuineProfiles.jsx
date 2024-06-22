import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import GenuineProfilesCard from './GenuineProfilesCard';

const GenuineProfiles = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className='w-[100%] md:w-[95%] lg:w-[85%] mx-auto'>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, padding: 2 }}>
      
        <GenuineProfilesCard title="Genuine profiles" imageUrl="images/genuine-people-vs-fake-infographic-lifehack-8-58232133a6a34__880-removebg-preview 1.svg"   paragraph="Contact genuine profiles with 100% verified mobile"/>
        <GenuineProfilesCard title="Most trusted" imageUrl="images/genuine-people-vs-fake-infographic-lifehack-7-5823213246255__880-removebg-preview 2.svg"   paragraph="The most trusted wedding matrimony brand lorem"/>
      </Box>
    </div>
  );
};

export default GenuineProfiles;
