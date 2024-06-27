import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { toggleMessagesPane } from '../utils';

export default function MessagesPaneHeader(props) {
  const { sender } = props;
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.body',
      }}
      py={{ xs: 2, md: 2 }}
      px={{ xs: 1, md: 2 }}
    >
      <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center">
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          sx={{
            display: { xs: 'inline-flex', sm: 'none' },
          }}
          onClick={() => toggleMessagesPane()}
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        <Avatar sx={{ width: 48, height: 48 }} src={sender.avatar} />
        <div>
          <Typography
            fontWeight="bold"
            fontSize="large"
            component="h2"
            noWrap
            endAdornment={
              sender.online ? (
                <Chip
                  variant="outlined"
                  size="small"
                  color="neutral"
                  sx={{
                    borderRadius: 'sm',
                  }}
                  avatar={
                    <CircleIcon sx={{ width: 12, height: 12 }} color="success" />
                  }
                  label="Online"
                />
              ) : null
            }
          >
            {sender.name}
          </Typography>
          <Typography variant="body2">{sender.username}</Typography>
        </div>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <button
          // startIcon={<PhoneInTalkRoundedIcon />}
          // variant="outlined"
          // size="small"
          // sx={{
          //   display: { xs: 'none', md: 'inline-flex' },
          // }}
        >
          Call
        </button>
        <Button
          color="primary"
          // variant="outlined"
          // size="small"
          // sx={{
          //   display: { xs: 'none', md: 'inline-flex' },
          // }}
        >
          View profile
        </Button>
        <IconButton size="small" variant="plain" color="neutral">
          <MoreVertRoundedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
