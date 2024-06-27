import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import BrightnessAutoRoundedIcon from '@mui/icons-material/BrightnessAutoRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ColorSchemeToggle from './ColorSchemeToggle';
import { closeSidebar } from '../utils';

function Toggler(props) {
  const { defaultExpanded = true, renderToggle, children } = props;
  const [open, setOpen] = React.useState(defaultExpanded);

  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: '0.2s ease',
          '& > *': {
            overflow: 'hidden',
          },
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {
  return (
    <div
      className="Sidebar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10000,
        height: '100vh',
        width: 'var(--Sidebar-width)',
        padding: '16px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        borderRight: '1px solid',
        borderColor: 'divider',
        backgroundColor: '#fff',
      }}
    >
      <div
        className="Sidebar-overlay"
        style={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
        }}
        onClick={() => closeSidebar()}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <IconButton variant="soft" color="primary" size="small">
          <BrightnessAutoRoundedIcon />
        </IconButton>
        <Typography variant="h6">Acme Co.</Typography>
        <ColorSchemeToggle style={{ marginLeft: 'auto' }} />
      </div>
      <Input size="small" startAdornment={<SearchRoundedIcon />} placeholder="Search" />
      <div style={{ minHeight: 0, overflow: 'auto', flexGrow: 1 }}>
        <List
          size="small"
          style={{
            gap: '8px',
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1">Home</Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DashboardRoundedIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1">Dashboard</Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton component="a" href="/joy-ui/getting-started/templates/order-dashboard/">
            <ListItemIcon>
              <ShoppingCartRoundedIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1">Orders</Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <>
                  <ListItemIcon>
                    <AssignmentRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="subtitle1">Tasks</Typography>
                  </ListItemText>
                  <KeyboardArrowDownIcon style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
                </>
              )}
            >
              <List style={{ gap: '8px' }}>
                <ListItemButton>
                  <ListItemText>All tasks</ListItemText>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>Backlog</ListItemText>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>In progress</ListItemText>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>Done</ListItemText>
                </ListItemButton>
              </List>
            </Toggler>
          </ListItemButton>
          <ListItemButton selected>
            <ListItemIcon>
              <QuestionAnswerRoundedIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1">Messages</Typography>
            </ListItemText>
            <Chip size="small" color="primary" label="4" />
          </ListItemButton>
          <ListItemButton>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <>
                  <ListItemIcon>
                    <GroupRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="subtitle1">Users</Typography>
                  </ListItemText>
                  <KeyboardArrowDownIcon style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
                </>
              )}
            >
              <List style={{ gap: '8px' }}>
                <ListItemButton component="a" href="/joy-ui/getting-started/templates/profile-dashboard/">
                  <ListItemText>My profile</ListItemText>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>Create a new user</ListItemText>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>Roles & permission</ListItemText>
                </ListItemButton>
              </List>
            </Toggler>
          </ListItemButton>
        </List>
        <List
          size="small"
          style={{
            marginTop: 'auto',
            marginBottom: '16px',
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <SupportRoundedIcon />
            </ListItemIcon>
            <ListItemText>Support</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsRoundedIcon />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItemButton>
        </List>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Avatar
            variant="outlined"
            size="small"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          />
          <div style={{ minWidth: 0, flex: 1 }}>
            <Typography variant="subtitle1">Siriwat K.</Typography>
            <Typography variant="body2">siriwatk@test.com</Typography>
          </div>
          <IconButton size="small" variant="plain" color="neutral">
            <LogoutRoundedIcon />
          </IconButton>
        </div>
      </div>
      <Divider />
    </div>
  );
}
