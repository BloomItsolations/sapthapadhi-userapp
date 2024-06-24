import React, { useState } from 'react';
import { Box, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import RequestUserPage from './RequestUserPage';
import RequestAcceptedUserPage from './RequestAcceptedUserPage';
import DeniedRequestsPage from './DeniedRequestsPage';


const InterestedUser = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  let userId=JSON.parse(localStorage.getItem('userdata'))?.userId;
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const renderTabContent = () => {
    switch (tabIndex) {
      case 0:
        return <RequestUserPage userId={userId}/>
      case 1:
        return <RequestAcceptedUserPage userId={userId}/>
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
          <Tab label="New Requests" />
          <Tab label="Accept Requests" />

        </Tabs>
        <Box sx={{ p: 1 }}>
          {renderTabContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default InterestedUser;
