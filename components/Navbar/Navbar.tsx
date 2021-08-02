import { useScrollTrigger } from '@material-ui/core';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useSpring } from '@react-spring/core';
import React from 'react';
import { animateScroll } from 'react-scroll';
import { animated } from 'react-spring';
import ContactButtons from './ContactButtons';

const brandLinkCircleSize = 58;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    brandLinkButton: {
      textTransform: 'none',
      height: brandLinkCircleSize,
      width: brandLinkCircleSize,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
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
    brandLinkButtonContainer: {
      height: brandLinkCircleSize,
      width: brandLinkCircleSize,
      borderRadius: brandLinkCircleSize,
      border: 'thin solid black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
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
        Quaid
      </Typography>
    </Button>
  );

  return (
    <AppBar position='sticky' elevation={0} {...props}>
      <Container maxWidth='lg' disableGutters>
        <Toolbar>
          <div className={classes.title}>
            <BrandLink />
          </div>
          <ContactButtons />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
