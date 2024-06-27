import React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

function AvatarWithStatus(props) {
  const { online = false, ...other } = props;
  return (
    <div>
      <Badge
        color={online ? 'success' : 'default'}
        variant={online ? 'dot' : 'standard'}
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Avatar {...other} />
      </Badge>
    </div>
  );
}

export default AvatarWithStatus;
