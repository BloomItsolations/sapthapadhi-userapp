import React from 'react';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ColorSchemeToggle(props) {
  const { onClick, sx, ...other } = props;
  const theme = useTheme();
  const [mode, setMode] = React.useState(theme.palette.mode);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMode = (event) => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    if (theme.palette.mode !== newMode) {
      theme.palette.mode = newMode;
    }
    onClick?.(event);
  };

  if (!mounted) {
    return (
      <IconButton
        size="small"
        variant="outlined"
        color="default"
        {...other}
        sx={sx}
        disabled
      />
    );
  }

  return (
    <IconButton
      id="toggle-mode"
      size="small"
      variant="outlined"
      color="default"
      {...other}
      onClick={toggleMode}
      sx={[
        {
          '& > *:first-of-type': {
            display: mode === 'dark' ? 'none' : 'initial',
          },
          '& > *:last-of-type': {
            display: mode === 'light' ? 'none' : 'initial',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <DarkModeRoundedIcon />
      <LightModeIcon />
    </IconButton>
  );
}
