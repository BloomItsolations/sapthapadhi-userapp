// AdminDashboardLayout.js
import React from 'react';
import { Grid, Drawer, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavigationLinks from './NavigationsLink';

const AdminDashboardLayout = () => {
  return (
    <Grid container style={{ minHeight: '100vh' }}>
      <CssBaseline />
      <Grid item xs={2}>
        <Drawer variant="permanent" anchor="left">
          <NavigationLinks />
        </Drawer>
      </Grid>
      <Grid item xs={10}>
        <main><Outlet/></main>
      </Grid>
    </Grid>
  );
};

export default AdminDashboardLayout;
