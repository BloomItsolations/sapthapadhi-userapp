import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Toolbar, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Hidden } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const NavigationLinks = ({ userDetails }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    return (
        <>
            <Hidden mdDown>
                <Toolbar />
                <List sx={{ width: 240 }}>
                    <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #ccc' }}>
                        <Avatar alt="User Avatar" src="https://www.example.com/default-avatar.jpg" />
                        <Typography variant="body1" sx={{ marginTop: 1 }}>Shivam Anand</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>shivamanand8969@gmail.com</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} to="userslist">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItem>
                    <ListItem button component={Link} to="usersplandetails">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Plan And Payment" />
                    </ListItem>
                    <ListItem button component={Link} to="uploadcouplepage">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Upload Couple" />
                    </ListItem>
                    <ListItem button component={Link} to="uploadbanner">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Upload Banner" />
                    </ListItem>
                    <ListItem button component={Link} to="/settings">
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem button onClick={handleLogout}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Hidden>

            <Hidden lgUp>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleSidebar}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <List sx={{ width: 240, display: sidebarOpen ? 'block' : 'none' }}>
                    <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #ccc' }}>
                        <Avatar alt="User Avatar" src="https://www.example.com/default-avatar.jpg" />
                        <Typography variant="body1" sx={{ marginTop: 1 }}>Shivam Anand</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>shivamanand8969@gmail.com</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} to="/users">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItem>
                    <ListItem button component={Link} to="/settings">
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem button onClick={handleLogout}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Hidden>
        </>
    );
};

export default NavigationLinks;
