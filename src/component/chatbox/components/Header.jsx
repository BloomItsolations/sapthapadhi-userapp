import React from 'react';
import { GlobalStyles } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { toggleSidebar } from '../utils';

export default function Header() {
  return (
    <Paper
      sx={{
        display: { xs: 'flex', sm: 'none' },
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: 'var(--Header-height)',
        zIndex: 9995,
        p: 2,
        gap: 1,
        borderBottom: '1px solid',
        borderColor: 'background.level1',
        boxShadow: 'sm',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Header-height': '52px',
            [theme.breakpoints.up('lg')]: {
              '--Header-height': '0px',
            },
          },
        })}
      />
      <IconButton
        onClick={() => toggleSidebar()}
        variant="outlined"
        color="default"
        size="small"
      >
        <MenuRoundedIcon />
      </IconButton>
    </Paper>
  );
}
