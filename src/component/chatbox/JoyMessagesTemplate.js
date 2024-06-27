import React from 'react';
// import { CssVarsProvider } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MyMessages from './components/MyMessages';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function JoyMessagesTemplate() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });
  return (
    // <CssVarsProvider disableTransitionOnChange>
      // <CssBaseline />
      <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Box component="main" className="MainContent" >
          <MyMessages />
        </Box>
      </Box>
      </ThemeProvider>
    // </CssVarsProvider>
  );
}
