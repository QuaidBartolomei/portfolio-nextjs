import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createStyles,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import Navbar from 'components/Navbar';
import type { AppProps } from 'next/app';
import theme from 'pages/_theme';
import React from 'react';
import '@fontsource/roboto';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

export default function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
