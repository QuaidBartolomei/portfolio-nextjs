import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { PropsWithChildren } from 'react';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    background: {},
    primary: {
      main: '#457b9d',
      light: '#a8dadc',
      dark: '#1d3557',
    },
    secondary: {
      main: '#e63946',
    },
  },
});
