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
      
        <GenuineProfilesCard title="Genuine profiles" imageUrl="images/genuineprofile.svg"   paragraph="Contact genuine profiles with 100% verified mobile"/>
        <GenuineProfilesCard title="Most trusted" imageUrl="images/genuineprofiletwo.svg"   paragraph="The most trusted wedding matrimony brand lorem"/>
      </Box>
    </div>
  );
};

export default GenuineProfiles;
