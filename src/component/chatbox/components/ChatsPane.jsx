import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import List from '@mui/material/List';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ChatListItem from './ChatListItem';
import { toggleMessagesPane } from '../utils';

function ChatsPane(props) {
  const { chats, setSelectedChat, selectedChatId } = props;

  return (
    <Paper
      sx={{
        borderRight: '1px solid',
        borderColor: 'divider',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
        p={2}
        pb={1.5}
      >
        <Typography
          fontSize={{ xs: '1rem', md: '1.25rem' }}
          component="h1"
          fontWeight="bold"
          sx={{ mr: 'auto' }}
        >
          Messages
          <Chip
            label="4"
            color="primary"
            size="medium"
            sx={{ ml: 1 }}
          />
        </Typography>
        <IconButton
          variant="plain"
          aria-label="edit"
          color="default"
          size="small"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          <EditNoteRoundedIcon />
        </IconButton>
        <IconButton
          variant="plain"
          aria-label="edit"
          color="default"
          size="small"
          onClick={() => {
            toggleMessagesPane();
          }}
          sx={{ display: { sm: 'none' } }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Stack>
      <Box sx={{ px: 2, pb: 1.5 }}>
        <InputBase
          size="small"
          startAdornment={<SearchRoundedIcon />}
          placeholder="Search"
          aria-label="Search"
          fullWidth
        />
      </Box>
      <List
        sx={{
          py: 0,
          '& .MuiListItem-root': {
            py: '0.75rem',
            px: '1rem',
          },
        }}
      >
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            {...chat}
            setSelectedChat={setSelectedChat}
            selectedChatId={selectedChatId}
          />
        ))}
      </List>
    </Paper>
  );
}

export default ChatsPane;
