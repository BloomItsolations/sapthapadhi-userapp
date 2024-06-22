import React, { useState, useEffect, useRef } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, TextField, List, ListItem, ListItemText, Avatar, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ChatBox = () => {
    const navigate=useNavigate();
  const [user] = useState({
    name: 'ANGELINA',
    avatar: '/images/Ellipse 52 (1).png',
    status: 'online', // Can be 'online' or 'offline'
  });

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi! How are you?', sender: 'me' },
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi! How are you?', sender: 'me' },
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi! How are you?', sender: 'me' },
  ]);
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: message, sender: 'me' }]);
      setMessage('');
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBack = () => {
    navigate('/myprofile/chatlist')
  };

  return (
    <Box sx={{ width: '100%',  height: {xs: 'calc(100vh - 56px)', sm: '85vh',}, display: 'flex', flexDirection: 'column',overflowY:'scroll' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleBack} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Avatar alt={user.name} src={user.avatar} sx={{ ml: 2 }} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6">
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user.status === 'online' ? 'Online' : 'Offline'}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
        <List>
          {messages.map((msg) => (
            <ListItem key={msg.id} sx={{ justifyContent: msg.sender === 'me' ? 'flex-end' : 'flex-start' }}>
              <ListItemText
                primary={msg.text}
                sx={{
                  textAlign: msg.sender === 'me' ? 'right' : 'left',
                  backgroundColor: msg.sender === 'me' ? '#DCF8C6' : '#FFF',
                  borderRadius: 2,
                  padding: 1,
                  maxWidth: '75%',
                }}
              />
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          sx={{ mr: 2 }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBox;
