import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';

function ChatBubble(props) {
  const { content, variant, timestamp, attachment = undefined, sender } = props;
  const isSent = variant === 'sent';
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isCelebrated, setIsCelebrated] = useState(false);

  return (
    <Box sx={{ maxWidth: '60%', minWidth: 'auto' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 0.25 }}
      >
        <Typography variant="body2">
          {sender === 'You' ? sender : sender.name}
        </Typography>
        <Typography variant="body2">{timestamp}</Typography>
      </Stack>
      {attachment ? (
        <Paper
          variant="outlined"
          sx={{
            px: 1.75,
            py: 1.25,
            borderRadius: '16px',
            borderTopRightRadius: isSent ? 0 : '16px',
            borderTopLeftRadius: isSent ? '16px' : 0,
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar color="primary" sx={{ width: 56, height: 56 }}>
              <InsertDriveFileRoundedIcon />
            </Avatar>
            <div>
              <Typography variant="body2">{attachment.fileName}</Typography>
              <Typography variant="body2">{attachment.size}</Typography>
            </div>
          </Stack>
        </Paper>
      ) : (
        <Box
          sx={{ position: 'relative' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Paper
            sx={{
              p: 1.25,
              borderRadius: '16px',
              borderTopRightRadius: isSent ? 0 : '16px',
              borderTopLeftRadius: isSent ? '16px' : 0,
              backgroundColor: isSent ? '#1976d2' : 'background.paper',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: isSent ? '#fff' : 'text.primary',
              }}
            >
              {content}
            </Typography>
          </Paper>
          {(isHovered || isLiked || isCelebrated) && (
            <Stack
              direction="row"
              justifyContent={isSent ? 'flex-end' : 'flex-start'}
              spacing={0.5}
              sx={{
                position: 'absolute',
                top: '50%',
                p: 1.5,
                ...(isSent
                  ? {
                      left: 0,
                      transform: 'translate(-100%, -50%)',
                    }
                  : {
                      right: 0,
                      transform: 'translate(100%, -50%)',
                    }),
              }}
            >
              <IconButton
                variant={isLiked ? 'contained' : 'outlined'}
                color={isLiked ? 'error' : 'default'}
                size="small"
                onClick={() => setIsLiked((prevState) => !prevState)}
              >
                {isLiked ? '❤️' : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton
                variant={isCelebrated ? 'contained' : 'outlined'}
                color={isCelebrated ? 'warning' : 'default'}
                size="small"
                onClick={() => setIsCelebrated((prevState) => !prevState)}
              >
                {isCelebrated ? '🎉' : <CelebrationOutlinedIcon />}
              </IconButton>
            </Stack>
          )}
        </Box>
      )}
    </Box>
  );
}

export default ChatBubble;
