import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Toolbar, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { Hidden } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const MyProfileSideBar = ({ userData }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
     const navigate=useNavigate();
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('userdata');
        navigate('/')
    };

    return (
        <>
            <Hidden mdDown>
                <Toolbar />
                <List sx={{ width: '300px', boxShadow: 3, borderRadius: '10px', padding: '10px',marginTop:'20px', height: '85vh', position: 'sticky', top: '0' }}>
                    <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #ccc' }}>
                        {userData?.userDetails?.profilePhoto ? (
                            <Avatar alt="User Avatar" sx={{ width: 56, height: 56 }}  src={`https://sapthapadhi.bloomitsolutions.co.in/${userData?.userDetails?.profilePhoto[0]?.path}`} />
                        ) : (
                            <Avatar alt="User Avatar"  sx={{ width: 56, height: 56 }}  src="https://www.example.com/default-avatar.jpg" />
                        )}
                        <Typography variant="body1" sx={{ marginTop: 1, fontFamily:'Lato',fontWeight:'700',fontSize:'20px' }}>
                            {userData?.user?.firstName} {userData?.user?.lastName}
                        </Typography>
                        <div className="flex items-baseline text-black">
                        <Typography variant="body2" sx={{ color: 'black', fontFamily:'Lato',fontWeight:'700',fontSize:'15px' }}>Membership :</Typography>
                        <p className='text-black font-Lato font-semibold text-[13px]'>Free</p>    
                        </div>
                        <p className='text-[14px] font-sans font-normal'>Become a paid member now</p>
                        <button className='w-[120px] h-[35px] mt-[2px] border-yellow-600 rounded-[20px] text-yellow-500 border-[1px] hover:bg-yellow-500 hover:text-white'>Upgrade</button>
                    </ListItem>
                    <ListItem button sx={{fontSize:'16px',fontWeight:'normal'}} component={Link} to="/myprofile/dashboard">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} sx={{fontSize:'16px',fontWeight:'normal'}} to="/myprofile">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Profile " />
                    </ListItem>
                    <ListItem button component={Link} sx={{fontSize:'16px',fontWeight:'normal'}} to="/editprofile">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Edit Profile" />
                    </ListItem>
                    <ListItem button component={Link} sx={{fontSize:'16px',fontWeight:'normal'}}  to="/editpreferences">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Edit Preferences" />
                    </ListItem>
                    <ListItem button component={Link} sx={{fontSize:'16px',fontWeight:'normal'}} to="plan">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Plan" />
                    </ListItem>
                    <ListItem button component={Link} sx={{fontSize:'16px',fontWeight:'normal'}} to="setting">
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem button onClick={handleLogout} sx={{fontSize:'16px',fontWeight:'normal'}}>
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
                <List sx={{ width: 240, display: sidebarOpen ? 'block' : 'none', boxShadow: 2, border: '1px solid gray', height: '85vh', position: 'sticky', top: '0' }}>
                    <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #ccc' }}>
                        <Avatar alt="User Avatar" src="https://www.example.com/default-avatar.jpg" />
                        <Typography variant="body1" sx={{ marginTop: 1 }}>Shivam Anand</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>shivamanand8969@gmail.com</Typography>
                    </ListItem>
                    <ListItem button sx={{fontSize:'16px',fontWeight:'normal'}} component={Link} to="/dashboard">
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
                    <ListItem button component={Link} to="settings">
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

export default MyProfileSideBar;
