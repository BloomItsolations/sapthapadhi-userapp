import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import StrikethroughSRoundedIcon from '@mui/icons-material/StrikethroughSRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export default function MessageInput(props) {
  const { textAreaValue, setTextAreaValue, onSubmit } = props;
  const textAreaRef = React.useRef(null);

  const handleClick = () => {
    if (textAreaValue.trim() !== '') {
      onSubmit();
      setTextAreaValue('');
    }
  };

  return (
    <Box sx={{ px: 1, pb: 3 }}>
      <FormControl>
        <TextareaAutosize
          placeholder="Type something here…"
          aria-label="Message"
          ref={textAreaRef}
          onChange={(e) => {
            setTextAreaValue(e.target.value);
          }}
          value={textAreaValue}
          minRows={3}
          maxRows={10}
          style={{
            width: '100%',
            resize: 'none',
            padding: '12px',
            boxSizing: 'border-box',
          }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexGrow={1}
          sx={{
            py: 1,
            pr: 1,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <div>
            <IconButton size="small" variant="outlined" color="default">
              <FormatBoldRoundedIcon />
            </IconButton>
            <IconButton size="small" variant="outlined" color="default">
              <FormatItalicRoundedIcon />
            </IconButton>
            <IconButton size="small" variant="outlined" color="default">
              <StrikethroughSRoundedIcon />
            </IconButton>
            <IconButton size="small" variant="outlined" color="default">
              <FormatListBulletedRoundedIcon />
            </IconButton>
          </div>
          <Button
            size="small"
            color="primary"
            sx={{ alignSelf: 'center', borderRadius: 1 }}
            endIcon={<SendRoundedIcon />}
            onClick={handleClick}
          >
            Send
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
}
