import React from 'react';
import { Box, Avatar, Typography, Badge, List, ListItem, ListItemAvatar, ListItemText, Link, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import ArrowBackIcon
import { useNavigate } from 'react-router-dom';

const ChatListContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1100',
  height: '80vh',
  overflowY: 'scroll',
  backgroundColor: '#EDEDED',
  margin: '0 auto',
  boxShadow: theme.shadows[2],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '1200',
    padding: theme.spacing(1),
    height: '80vh'
  },
}));

const ChatLink = styled(Link)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  backgroundColor: '#FFFFFF',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
  marginBottom: '5px',
  boxShadow: theme.shadows[1],
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0),
  },
}));

const ChatListPage = () => {
  const chatData = [
    {
      id: 1,
      name: 'ANGELINA',
      message: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/Ellipse 51 (2).png',
      link: 'chatlist/1',
    },

    {
      id: 1,
      name: 'ANGELINA',
      message: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/Ellipse 51 (2).png',
      link: 'chatlist/1',
    },

    {
      id: 1,
      name: 'ANGELINA',
      message: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/Ellipse 51 (2).png',
      link: 'chatlist/1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      message: 'Let\'s catch up tomorrow!',
      unreadCount: 1,
      avatar: '/images/Ellipse 42.png',
      link: 'chatlist/2',
    },
    {
      id: 3,
      name: 'Mark Johnson',
      message: 'What\'s the update on the project?',
      unreadCount: 0,
      avatar: '/images/Ellipse 42.png',
      link: 'chatlist/3',
    },
    {
      id: 1,
      name: 'ANGELINA',
      message: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/Ellipse 51 (2).png',
      link: 'chatlist/1',
    },
    {
      id: 1,
      name: 'ANGELINA',
      message: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/Ellipse 51 (2).png',
      link: 'chatlist/1',
    },
    {
      id: 1,
      name: 'ANGELINA',
      message: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/Ellipse 51 (2).png',
      link: 'chatlist/1',
    },
    {
      id: 1,
      name: 'ANGELINA',
      message: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/Ellipse 51 (2).png',
      link: 'chatlist/1',
    },
    {
      id: 1,
      name: 'ANGELINA',
      message: 'Hi, How are you',
      unreadCount: 3,
      avatar: '/images/Ellipse 51 (2).png',
      link: 'chatlist/1',
    },
    
  ];

  return (
    <ChatListContainer>
      <List>
        {chatData.map((chat) => (
          <ChatLink key={chat.id} href={chat.link}>
            <ListItem alignItems="flex-start" component="div">
              <ListItemAvatar>
                <Avatar
                  alt={chat.name}
                  src={chat.avatar}
                  sx={{
                    width: { xs: '50px', sm: '60px', md: '80px' }, border:'4px solid #0fe40f',
                    height: { xs: '50px', sm: '60px', md: '80px' }
                  }}
                />              </ListItemAvatar>
              <ListItemText
                primary={chat.name}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                    sx={{ fontSize: {xs:'12px',sm:'12px',md:'12px'}, marginLeft: {xs:'15px',sm:'15px',md:'20px'} }}
                  >
                    {chat.message}
                  </Typography>
                }
                primaryTypographyProps={{
                  sx: { fontSize: {sm:'18px',md:'28px'}, marginLeft: {xs:'20px', sm:'20px',md:'20px'}, fontWeight: '500' },
                }}
              />
              {chat.unreadCount > 0 && (
                <Badge
                  badgeContent={chat.unreadCount}
                  sx={{
                    marginTop: '38px',
                    '& .MuiBadge-badge': {
                      backgroundColor: '#76C35A',
                    },
                  }}
                />
              )}
            </ListItem>
          </ChatLink>
        ))}
      </List>
    </ChatListContainer>
  );
};

export default ChatListPage;
