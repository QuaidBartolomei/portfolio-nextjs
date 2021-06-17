import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createStyles,
  makeStyles
} from '@material-ui/core/styles';
import type { AppProps } from 'next/app';
import MyThemeProvider from 'pages/_theme';
import React from 'react';

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
    <MyThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </MyThemeProvider>
  );
}
