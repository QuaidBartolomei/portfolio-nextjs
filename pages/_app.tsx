import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Navbar from 'components/Navbar';
import type { AppProps } from 'next/app';

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

function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Navbar />
      <div className={classes.container}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
