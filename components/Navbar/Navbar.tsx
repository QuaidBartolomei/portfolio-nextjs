import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { animateScroll } from 'react-scroll';
import ContactButtons from './ContactButtons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.dark,
    },
    brandLinkButton: {
      textTransform: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      color: theme.palette.common.white,
    },
    buttons: {
      color: theme.palette.primary.light,
    },
    title: {
      flexGrow: 1,
    },
    background: {
      height: '100%',
      width: '100%',
      position: 'absolute',
    },
  })
);

export enum PageAnchors {
  contact = 'contact',
  projects = 'projects',
}

export type NavbarProps = {} & AppBarProps;

export function Navbar(props: NavbarProps) {
  const classes = useStyles();

  const BrandLink = () => (
    <Button
      onClick={animateScroll.scrollToTop}
      className={classes.brandLinkButton}
    >
      <Typography
        color='inherit'
        variant='h6'
        style={{ width: '100%', height: '100%' }}
      >
        Quaid Bartolomei
      </Typography>
    </Button>
  );

  return (
    <AppBar
      className={classes.container}
      position='sticky'
      elevation={0}
      {...props}
    >
      <Container maxWidth='lg' disableGutters>
        <Toolbar>
          <div className={classes.title}>
            <BrandLink />
          </div>
          <div className={classes.buttons}>
            <ContactButtons />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
