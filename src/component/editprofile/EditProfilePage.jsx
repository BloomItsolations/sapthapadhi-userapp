import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, TextField, Button, useMediaQuery, useTheme } from '@mui/material';
import EditProfile from './EditProfile';
import UpdateAdvancedBio from './UpdateAdvanceBio';
import UpdateJobEducation from './UpdateJobEducation';
import UpdateSocialMedia from './UpdateSocialMedia';

const EditProfilePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const renderTabContent = () => {
    switch (tabIndex) {
      case 0:
        return <EditProfile />;
      case 1:
        return <UpdateAdvancedBio />;
      case 2:
        return <UpdateJobEducation />;
      case 3:
        return <UpdateSocialMedia />;
     
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: 960, width: '100%' }}>
        <Tabs 
          value={tabIndex} 
          onChange={handleTabChange} 
          variant={isMobile ? 'scrollable' : 'standard'} 
          scrollButtons="auto"
          centered={!isMobile}
        >
          <Tab label="Edit Profile" />
          <Tab label="Advanced Bio" />
          <Tab label="Job & Education" />
          <Tab label="Social Media" />
        </Tabs>
        <Box sx={{ p: 3 }}>
          {renderTabContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfilePage;
